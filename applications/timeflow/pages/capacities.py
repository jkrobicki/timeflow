from idom import html, use_state, component, event

from .utils import switch_state

from uiflow.components.heading import H3, H4
from uiflow.components.input import Input, Selector, display_value, InputMonth
from uiflow.components.layout import Row, Column, Container

from uiflow.components.table import SimpleTable, DisplayTable
from uiflow.components.controls import Button


from ..data.common import year_month_dict_list
from ..data.calendar import business_days_by_year_month
from ..data.capacities import (
    capacity_days,
    to_capacity,
    capacity_deletion,
    capacities_all,
    capacities_by_user,
)
from ..data.users import users_names, get_user_id_by_username


@component
def page(app_role: str, github_username: str, key_attr: str):
    """Creates a page for capacities"""
    user_id, set_user_id = use_state("")
    year_month, set_year_month = use_state("")
    days, set_days = use_state("")
    is_event, set_is_event = use_state(False)
    admin = True if app_role == "admin" or app_role == None else False
    return html.div(
        {"class": "w-full", "key": key_attr},
        Container(business_days_table(year_month)),
        Row(
            create_capacity_form(
                user_id,
                set_user_id,
                year_month,
                set_year_month,
                days,
                set_days,
                is_event,
                set_is_event,
                admin,
                github_username,
            ),
            bg="bg-filter-block-bg",
        ),
        Container(
            Column(
                Row(capacities_table(user_id, admin, github_username)),
            ),
            Row(delete_capacity(is_event, set_is_event)),
        ),
    )


@component
def business_days_table(year_month):
    month = year_month[5:7]
    year = year_month[:4]
    displayed = H4("Select a month to see a table")
    if year_month != "":
        rows = business_days_by_year_month(month, year)
        if rows == []:
            rows = []
            d = {
                "year": year,
                "month": month,
                "business days": "null",
            }
            rows.append(d)
        displayed = html.div({"class": "flex w-full"}, DisplayTable(rows=rows))
    return Column(
        H3("Business days available per month"),
        displayed,
    )


@component
def create_capacity_form(
    user_id,
    set_user_id,
    year_month,
    set_year_month,
    days,
    set_days,
    is_event,
    set_is_event,
    admin,
    github_username,
):
    """Generates capacity form to submit capacities and filter capacity by month user."""

    @event(prevent_default=True)
    async def handle_submit(event):
        """
        schema:
        {
            "user_id": 0,
            "year": 0,
            "month": 0,
            "days": 0,
            "created_at": "2022-03-15T15:25:44.266Z",
            "updated_at": "2022-03-15T15:25:44.266Z",
            "is_locked": false
        }"""
        to_capacity(
            user_id=user_id,
            year_month=year_month,
            days=days,
        )
        switch_state(is_event, set_is_event)

    if admin == True:
        selector_user_id = Selector(
            set_value=set_user_id, data=users_names(), width="24%", md_width="24%"
        )
    elif admin == False:
        user_id = get_user_id_by_username(github_username)
        selector_user_id = display_value(user_id, github_username)

    input_year_month = InputMonth(
        set_value=set_year_month,
    )

    selector_days = Selector(
        set_value=set_days, data=capacity_days(), width="24%", md_width="24%"
    )

    is_disabled = True
    if user_id != "" and year_month != "" and days != "":
        is_disabled = False

    btn = Button(is_disabled, handle_submit, label="Submit")

    return Container(
        Column(
            Row(
                selector_user_id,
                input_year_month,
                selector_days,
                justify="justify-between",
            ),
            Row(btn),
        )
    )


@component
def capacities_table(user_id, admin, github_username):
    """Generates a table component with capacity days by year month user."""
    if admin == False:
        user_id = get_user_id_by_username(github_username)
    if user_id != "":
        rows = capacities_by_user(user_id)
    else:
        rows = capacities_all()
    return html.div({"class": "flex w-full"}, SimpleTable(rows=rows))


@component
def delete_capacity(is_event, set_is_event):
    """Generates an input for capacity id to delete"""
    capacity_to_del, set_capacity_to_del = use_state("")

    def handle_delete(event):
        capacity_deletion(capacity_to_del)
        switch_state(is_event, set_is_event)

    inp_capacity = Input(
        set_value=set_capacity_to_del,
        label="capacity id to delete",
        width="full",
        md_width="full",
    )
    return Column(Row(inp_capacity), Row(Button(False, handle_delete, label="Delete")))
