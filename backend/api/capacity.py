from fastapi import APIRouter, Depends
from ..utils import engine, get_session
from ..models.capacity import Capacity
from sqlmodel import Session, select, and_
from sqlalchemy.exc import NoResultFound
from ..models.user import AppUser

router = APIRouter(prefix="/api/capacities", tags=["capacity"])


@router.post("/")
async def post_capacity(*, capacity: Capacity, session: Session = Depends(get_session)):
    """
    Post new capacity.

    Parameters
    ----------
    capacity : Capacity
        Capacity that is to be added to the database.
    session : Session
        SQL session that is to be used to add the capacity.
        Defaults to creating a dependency on the running SQL model session.
    """
    statement = select(Capacity).where(
        and_(
            Capacity.user_id == capacity.user_id,
            capacity.year == capacity.year,
            Capacity.month == capacity.month,
        )
    )
    try:
        result = session.exec(statement).one()
        return False
    except NoResultFound:
        session.add(capacity)
        session.commit()
        session.refresh(capacity)
        return capacity


@router.get("/")
async def get_capacities(
    session: Session = Depends(get_session),
    is_locked: bool = None,
    user_id: int = None,
    month: int = None,
    year: int = None,
):
    """
    Get list of all capacities.

    Parameters
    ----------
    session : Session
        SQL session that is to be used to get a list of the epic areas.
        Defaults to creating a dependency on the running SQL model session.
    # is_locked : bool
        Whether or not the capacity is locked or not.
    user_id : int
        User id of the user in question.
    month : int
        Month of capacity in question.
    year : int
        Year of capacity in question.
    """
    statement = select(
        Capacity.id.label("capacity_id"),
        AppUser.last_name,
        AppUser.first_name,
        Capacity.year,
        Capacity.month,
        Capacity.days,
    ).join(AppUser, Capacity.user_id == AppUser.id)
    if (user_id and month and year) != None:
        statement_final = (
            statement.where(Capacity.user_id == user_id)
            .where(Capacity.month == month)
            .where(Capacity.year == year)
        )

    else:
        statement_final = statement

    result = session.exec(statement_final).all()
    return result


@router.get("/users/{user_id}/")
async def get_capacities_user(user_id: int, session: Session = Depends(get_session)):
    """
    Get list of capacities by user_id.

    Parameters
    ----------
    session : Session
        SQL session that is to be used to get a list of the epic areas.
        Defaults to creating a dependency on the running SQL model session.
    user_id : int
        User id of the user in question.
    """
    statement = (
        select(
            Capacity.id.label("capacity_id"),
            AppUser.first_name,
            AppUser.last_name,
            Capacity.year,
            Capacity.month,
            Capacity.days,
        )
        .select_from(Capacity)
        .join(AppUser, Capacity.user_id == AppUser.id)
        .where(Capacity.user_id == user_id)
    )

    result = session.exec(statement).all()
    return result


@router.delete("/")
async def delete_capacities(
    capacity_id: str = None,
    session: Session = Depends(get_session),
):
    """
    Delete a capacity

    Parameters
    ----------
    capacity_id : str
        ID of the capacity that is to be removed from the database.
    session : Session
        SQL session that is to be used to delete the capacity.
        Defaults to creating a dependency on the running SQL model session.
    """
    statement = select(Capacity).where(
        Capacity.id == capacity_id,
    )

    capacity_to_delete = session.exec(statement).one()
    session.delete(capacity_to_delete)
    session.commit()
    return True
