import os
from fastapi import *
from psycopg2.errors import UndefinedTable
from sqlmodel import Session, select, text
from sqlalchemy.exc import ProgrammingError
from .models.timelog import TimeLog
from .models.calendar import Calendar
from .utils import (
    engine,
    create_db,
    tags_metadata,
    execute_sample_sql,
)
from .api import (
    user,
    timelog,
    forecast,
    epic,
    epic_area,
    client,
    rate,
    team,
    role,
    sponsor,
    capacity,
    demand,
    calendar,
    token,
)
import csv
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="timeflow app API", openapi_tags=tags_metadata)

# origins = [
#     "http://localhost:5173",
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(timelog.router)
app.include_router(forecast.router)
app.include_router(user.router)
app.include_router(epic.router)
app.include_router(epic_area.router)
app.include_router(client.router)
app.include_router(rate.router)
app.include_router(team.router)
app.include_router(role.router)
app.include_router(sponsor.router)
app.include_router(capacity.router)
app.include_router(demand.router)
app.include_router(calendar.router)
app.include_router(token.router)


@app.on_event("startup")
def on_startup():
    with Session(engine) as session:
        if os.getenv("TIMEFLOW_DEV") == "true":
            try:
                statement = select(TimeLog)
                results = session.exec(statement)
            except ProgrammingError:
                create_db()
                execute_sample_sql()
        elif os.getenv("TIMEFLOW_DEV") == "false":
            try:
                statement = select(TimeLog)
                results = session.exec(statement)
            except ProgrammingError:
                create_db()


@app.on_event("startup")
def implement_calendar_table():
    with Session(engine) as session:
        try:
            statement = select(Calendar.year_name).where(Calendar.id == 1)
            result = session.exec(statement).one()
        except Exception as e:
            print(e)
            values_sql = f"""INSERT INTO app_db.calendar (date, year_number, year_name, quarter_number, quarter_name
                        , month_number, month_name, week_number, week_name, week_day_number, week_day_name, business_day)
                        VALUES """
            with open("backend/calendar.csv") as csvfile:
                reader = csv.reader(csvfile, delimiter=",", quotechar="|")
                values_list = []
                for index, row in enumerate(reader):
                    if index > 0 and row[0] != "":
                        _row = [f"'{item}'" for item in row]
                        row_sql = ", ".join(_row)
                        values = f"({row_sql}),"
                        values_sql += values
                values_sql += f"({row_sql});"
                session.execute(text(values_sql))
                session.commit()
