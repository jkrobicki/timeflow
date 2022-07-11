import requests
import json
from datetime import datetime
from typing import TypedDict

from .common import Select
from ..config import base_url


class Calendar(TypedDict):
    date: datetime
    year_number: int
    year_name: str
    quarter_number: int
    quarter_name: str
    month_number: int
    month_name: str
    week_number: int
    week_name: str
    week_day_number: int
    week_day_name: str
    business_day: bool


def business_days_by_year_month(month, year):
    api = f"{base_url}/api/calendar/business_days/{month}/{year}"
    response = requests.get(api)
    rows = []
    for item in response.json():
        d = {
            "month": month,
            "year": year,
            "business_days": int(response.json()[0]),
        }
        rows.append(d)
    return rows
