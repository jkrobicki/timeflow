FROM python:3.8

RUN pip install fastapi uvicorn 
COPY ./backend/ /backend/
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

ENTRYPOINT ["uvicorn", "backend.main:app", "--reload", "--port", "8002", "--host", "0.0.0.0", "--access-log"]