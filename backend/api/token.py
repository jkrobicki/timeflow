from fastapi import APIRouter, Depends
from sqlalchemy.exc import NoResultFound
from sqlmodel import Session, select
from pydantic import BaseModel
import requests
import json
import requests
from datetime import datetime

from ..utils import engine, get_session
from ..models.user import AppUser
from .user import post_user

router = APIRouter(prefix="/api/token", tags=["token"])


class Token(BaseModel):
    value: str


@router.post("/")
async def test(token: Token, session: Session = Depends(get_session)):
    headers = {"Authorization": f"bearer {token.value}"}
    response = requests.get(
        "http://172.28.1.11:8080/realms/master/protocol/openid-connect/userinfo",
        headers=headers,
    ).json()
    # need to try except this
    name = response["given_name"]
    last_name = response["family_name"]
    username = response["preferred_username"]
    email = response["email"]

    user = AppUser(
        username=username,
        first_name=name,
        last_name=last_name,
        email=email,
        created_at=datetime.now(),
        updated_at=datetime.now(),
        is_active=True,
    )

    statement = select(AppUser).where(AppUser.username == user.username)
    try:
        result = session.exec(statement).one()
        return False
    except NoResultFound:
        session.add(user)
        session.commit()
        session.refresh(user)
        return user

    return {"res": response.json(), "headers": headers, "result": result}
