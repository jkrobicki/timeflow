from fastapi import APIRouter, Depends
from ..utils import engine, get_session
from ..models.calendar import Calendar
from sqlmodel import Session, select, and_, func
from sqlalchemy.exc import NoResultFound
from ..models.user import AppUser
from datetime import datetime

router = APIRouter(prefix="/api/calendar", tags=["calendar"])


@router.get("/business_days/{month}/{year}")
async def get_business_days_for_month(
    session: Session = Depends(get_session),
    month: int = None,
    year: int = None,
):
    """
    Get number of business days in a month.

    Parameters
    ----------
    session : Session
        SQL session that is to be used to get the value.
        Defaults to creating a dependency on the running SQL model session.
    month : int
        Month to be queried.
    year : int
        Year to be queried.
    """
    statement = select(func.count(Calendar.business_day)).where(
        and_(
            Calendar.business_day == True,
            Calendar.month_number == month,
            Calendar.year_number == year,
        )
    )

    result = session.exec(statement).all()
    return result
