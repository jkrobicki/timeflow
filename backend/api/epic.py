from fastapi import APIRouter, Depends
from ..utils import engine, get_session
from sqlmodel import Session, select, SQLModel, or_
from ..models.epic import Epic
from ..models.client import Client
from sqlalchemy.exc import NoResultFound

router = APIRouter(prefix="/api/epics")
session = Session(engine)


# Post new epic
@router.post("/")
async def post_epic(
    *,
    epic: Epic,
    session: Session = Depends(get_session),
):
    statement1 = select(Epic).where(or_(Epic.name == epic.name, Epic.id == epic.id))
    statement2 = select(Client.name).where(Client.id == epic.client_id)
    try:
        result = session.exec(statement1).one()
        return False
    except NoResultFound:
        session.add(epic)
        session.commit()
        session.refresh(epic)
        return epic


# Get epic by name


# Get epics list
@router.get("/")
async def get_epic_list(session: Session = Depends(get_session)):
    statement = select(Epic)
    result = session.exec(statement).all()
    return result


@router.get("/{epic_name}")
async def read_epics(epic_name: str = None, session: Session = Depends(get_session)):
    statement = select(Epic).where(Epic.name == epic_name)
    try:
        result = session.exec(statement).one()
        return result
    except NoResultFound:
        msg = f"""There is no epic named {epic_name}"""
        return msg


# Get epics with clients list
@router.get("/clients/lists/{list_name}")
async def get_epic_list(list_name: str = None):
    if list_name == "epics_with_clients":
        statement = select(Epic.name, Client.name).select_from(Epic).join(Client)
        result = session.exec(statement).all()
        return result
    else:
        return f"""This list doesn't exist. Please select existing list"""


# Update epics
@router.put("/")
async def update_epic(
    epic_id: str = None,
    epic_name: str = None,
    work_area: str = None,
    client_new_id: int = None,
):
    statement = select(Epic).where(or_(Epic.name == epic_name, Epic.id == epic_id))
    epic_to_update = session.exec(statement).one()
    epic_to_update.work_area = work_area
    epic_to_update.client_id = client_new_id
    session.add(epic_to_update)
    session.commit()
    session.refresh(epic_to_update)
    return True


# Delete epics
@router.delete("/")
async def delete_epics(epic_name: str = None, session: Session = Depends(get_session)):
    statement = select(Epic).where(Epic.name == epic_name)
    results = session.exec(statement)
    epic_to_delete = results.one()
    session.delete(epic_to_delete)
    session.commit()
    return True
