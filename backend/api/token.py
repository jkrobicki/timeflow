from fastapi import APIRouter, Depends
from sqlalchemy.exc import NoResultFound
from sqlmodel import Session, select
from pydantic import BaseModel
import requests
import json
import requests
from datetime import datetime, date

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ..utils import engine, get_session
from ..models.user import AppUser
from .user import post_user

from jose import JWTError, jwt
import json

router = APIRouter(prefix="/api/token", tags=["token"])

SECRET_KEY = "5556ed7886a0f5a1e0aa2aeb30b40191"
ALGORITHM = "HS256"


class Token(BaseModel):
    value: str


class User(BaseModel):
    username: str
    name: str
    lastname: str
    email: str


@router.post("/")
async def test(user: User, session: Session = Depends(get_session)):
    payload = {
        "name": user.name,
        "lastname": user.lastname,
        "email": user.email,
        "username": user.username,
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    # headers = {"Authorization": f"bearer {token.value}"}
    # response = requests.get(
    #     "http://172.28.1.11:8080/realms/master/protocol/openid-connect/userinfo",
    #     headers=headers,
    # ).json()
    # # need to try except this
    # name = response["given_name"]
    # last_name = response["family_name"]
    # username = response["preferred_username"]
    # email = response["email"]

    post_user = AppUser(
        username=user.username,
        first_name=user.name,
        last_name=user.lastname,
        email=user.email,
        role_id=0,
        start_date=date.today(),
        created_at=datetime.now(),
        updated_at=datetime.now(),
        is_active=True,
    )

    statement = select(AppUser).where(AppUser.username == user.username)
    try:
        result = session.exec(statement).one()
    except NoResultFound:
        session.add(post_user)
        session.commit()
        session.refresh(post_user)
    return {"access_token": token, "user": payload}
