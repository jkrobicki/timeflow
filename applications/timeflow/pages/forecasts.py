from idom import html, use_state, component, event

from uiflow.components.input import Input, Selector, display_value, InputMonth
from uiflow.components.layout import Row, Column, Container
from uiflow.components.table import SimpleTable, DisplayTable
from uiflow.components.controls import Button
from uiflow.components.heading import H3, H4
from ..data.common import (
    user_full_name,
)

from ..data.forecasts import (
    forecasts_all,
    forecasts_by_user,
    forecasts_by_user_year_month,
    forecast_days,
    to_forecast,
    forecast_deletion,
)
from ..data.capacities import capacities_by_user_year_month

from ..data.users import get_user_id_by_username, user_full_name_by_id

from ..data.epics import client_name_by_epic_id, epics_names


@component
def page(key_attr: str):
    year_month, set_year_month = use_state("")
    days, set_days = use_state("")
    user_id, set_user_id = use_state("")
    epic_id, set_epic_id = use_state("")
    is_event, set_is_event = use_state(False)
    return html.div(
        {"class": "w-full", "key": key_attr},
        Row(
            Container(
                create_forecast_form(
                    year_month,
                    set_year_month,
                    days,
                    set_days,
                    user_id,
                    set_user_id,
                    epic_id,
                    set_epic_id,
                    is_event,
                    set_is_event,
                ),
            ),
            bg="bg-filter-block-bg",
        ),
        Container(capacities_table(user_id, year_month)),
        Container(
            Column(
                Row(forecasts_table(user_id, year_month)),
            )
        ),
        Container(
            Row(delete_forecast(is_event, set_is_event)),
        ),
    )


@component
def create_forecast_form(
    year_month,
    set_year_month,
    days,
    set_days,
    user_id,
    set_user_id,
    epic_id,
    set_epic_id,
    is_event,
    set_is_event,
):
    """Generates forecast form to submit forecasts and filter forecast by month user and epic

    Args:
        year_month (str): the year_month combined for which the forecast is for
        set_year_month (_type_): function to update year_month state
        days (int): number of forecasted days
        set_days (_type_): function to update days state
        user_id (int): the user id for which the forecast is for
        set_user_id (_type_): function to update user_id state
        epic_id (str): the epic id for which the forecast is for
        set_epic_id (_type_): function to update epic_id state
        client_id (int): the client id for which the forecast is for
        set_client_id (_type_): function to update client_id state
        on_submit (bool): to be switched on submit, triggering render by state change
        set_on_submit (_type_): function to update on_submit state

    Returns:
        _type_: _description_
    """
    post_response, set_post_response = use_state("")

    @event(prevent_default=True)
    async def handle_submit(event):
        """
        schema:
        {
        "user_id": 0,
        "epic_id": 0,
        "days": 0,
        "month": 0,
        "year": 0
        }
        """

        ym = year_month
        year = ym[:4]
        month = ym[5:7]

        response = to_forecast(
            user_id=user_id,
            epic_id=epic_id,
            days=days,
            month=month,
            year=year,
        )
        set_post_response(response)
        set_is_event(not is_event)

    selector_user_id = Selector(
        set_value=set_user_id,
        set_sel_value2=set_post_response,
        sel_value2="",
        data=user_full_name(),
        width="16%",
    )

    selector_epic_id = Selector(
        set_value=set_epic_id,
        set_sel_value2=set_post_response,
        sel_value2="",
        data=epics_names(is_active=True),
        width="16%",
    )
    display_client = display_value_by_epic(epic_id)

    input_date = InputMonth(
        set_year_month,
        set_post_response,
        "",
    )

    selector_days = Selector(
        set_value=set_days,
        set_sel_value2=set_post_response,
        sel_value2="",
        data=forecast_days(),
        width="16%",
    )

    is_disabled = True
    if user_id != "" and epic_id != "" and year_month != "" and days != "":
        is_disabled = False

    btn = Button(is_disabled, handle_submit, label="Submit")

    return Column(
        H3("Submit forecast"),
        html.div(
            {
                "class": "flex flex-wrap w-full justify-between items-center 2xl:justify-between"
            },
            selector_user_id,
            selector_epic_id,
            display_client,
            input_date,
            selector_days,
            btn,
        ),
        H4(post_response),
    )


@component
def display_value_by_epic(epic_id):
    client = client_name_by_epic_id(epic_id)
    if epic_id == "":
        return html.div(
            {
                "class": "py-3 pl-3 w-full border-[1px] sm:w-[48%] md:w-[121px] bg-nav border-select-border rounded-[3px] xl:w-[16%]"
            },
            html.h3({"value": ""}, "client name"),
        )
    else:
        return html.div(
            {
                "class": "py-3 pl-3 w-full border-[1px] sm:w-[48%] md:w-[121px] bg-nav rounded-[3px] xl:w-[16%]"
            },
            html.h3(
                {"value": client["value"]},
                client["display_value"],
            ),
        )


@component
def capacities_table(user_id, year_month):
    rows = capacities_by_user_year_month(user_id, year_month)
    displayed = H4("Select user and month to see a table")
    if user_id != "" and year_month != "":
        if rows == []:
            full_user_name = user_full_name_by_id(user_id)
            rows = []
            d = {
                "capacity id": "null",
                "user": full_user_name,
                "year": year_month[:4],
                "month": year_month[5:7],
                "capacity days": "null",
            }
            rows.append(d)
        displayed = html.div({"class": "flex w-full"}, DisplayTable(rows=rows))
    return Column(
        H3("Users capacity per month"),
        displayed,
    )


@component
def forecasts_table(user_id, year_month):
    """Generates a table component with forecast days by year and month

    Args:
        user_id (int): the id of the user for which the forecast is for
        epic_id (int): the id of the epic for which the forecast is for
        year_month (str): the year_month combined for which the forecast is for

    Returns:
        list of filtered forecasts
    """

    rows = forecasts_all()
    if user_id != "" and year_month != "":
        rows = forecasts_by_user_year_month(user_id, year_month)
    elif user_id != "":
        rows = forecasts_by_user(user_id)
    return Column(
        H3("Selected forecasts"),
        html.div({"class": "flex w-full"}, SimpleTable(rows=rows)),
    )


@component
def delete_forecast(is_event, set_is_event):
    forecast_to_delete, set_forecast_to_delete = use_state("")

    def handle_delete(event):
        forecast_deletion(forecast_to_delete)
        set_is_event(not is_event)

    inp_forecast = Input(
        set_value=set_forecast_to_delete, label="forecast id to delete", width="full"
    )
    return Column(Row(inp_forecast), Row(Button(False, handle_delete, "Delete")))
