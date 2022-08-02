from typing import Optional
from sqlmodel import Field, SQLModel, Field
from pydantic import validator
from datetime import datetime, date
from fastapi import HTTPException
import re


class AppUser(SQLModel, table=True):
    """Create an SQLModel for users"""

    id: Optional[int] = Field(default=None, primary_key=True, nullable=False)
    username: str
    first_name: str
    last_name: str
    email: str
    role_id: int
    team_id: Optional[int] = None
    start_date: date
    supervisor: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    is_active: bool

    __table_args__ = {"schema": "app_db"}
