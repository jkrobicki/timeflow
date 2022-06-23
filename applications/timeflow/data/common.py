import requests

from ..config import base_url
from typing import List, Dict, TypedDict
from ..pages.utils import (
    year_month_list,
    hours_list,
    month_start_list,
    days_in_month_list,
)


class Select(TypedDict):
    value: str
    dispay_value: str


def user_full_name() -> List[Select]:
    api = f"{base_url}/api/users"
    params = {"is_active": True}
    response = requests.get(api, params=params)
    rows = [Select(value="", display_value="select user")]
    for item in response.json():
        d = Select(
            value=item["id"],
            display_value=(item["last_name"] + " " + item["first_name"]),
        )
        rows.append(d)
    return rows


def year_month_dict_list(label: str = "select month") -> List[Select]:
    ym_dict_list = [Select(value="", display_value=label)]
    for item in year_month_list:
        d = Select(value=item, display_value=item)
        ym_dict_list.append(d)
    return ym_dict_list


def hours() -> List[Dict]:
    hours = [Select(value="", display_value="select hour")]
    for item in hours_list:
        d = Select(value=item, display_value=item)
        hours.append(d)
    return hours


def months_start() -> List[Dict]:
    months = [Select(value="", display_value="select start date")]
    for item in month_start_list:
        d = Select(value=item, display_value=item)
        months.append(d)
    return months


def days_in_month(label: str = "select days") -> List[Dict]:
    days = [Select(value="", display_value=label)]
    for item in days_in_month_list:
        d = Select(value=item, display_value=item)
        days.append(d)
    return days
