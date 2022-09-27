import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-9bb86b63.js";
/* empty css                                          */import { getTimelogs } from "../endpoints/data.js";
import { G as Grid, R as Row, C as Column, A as Autocomplete, B as Button } from "../../_app/immutable/chunks/autocomplete-8962fbb6.js";
import { E as EditableDatatable } from "../../_app/immutable/chunks/EditableDatatable-ba6f9651.js";
import { D as DateTimePicker } from "../../_app/immutable/chunks/DateTimePicker-c3123adf.js";
import "../../_app/immutable/chunks/ChevronDown-070f82d5.js";
import "../../_app/immutable/chunks/Close-2fd03d48.js";
const Timelogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let users;
  let epics;
  let epicAreas;
  let epicAreasSelect;
  let timelogs = [];
  let selectedEpic = { id: "", epic_name: "" };
  let selectedEpicArea = { id: "", epic_area_name: "" };
  let startTime;
  let endTime;
  let selectedUser = { id: "", username: "" };
  let selectedRowIds = [];
  let upData = [];
  let columnsToEdit = ["start_time", "end_time"];
  async function onRemove() {
    async function DeleteApi(id) {
      await fetch("http://localhost:8002/api/timelogs/" + id, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
      });
      timelogs = await getTimelogs(timelogs);
    }
    selectedRowIds.map(DeleteApi);
  }
  async function epicAreasByEpic(selectedEpic2) {
    const response = await fetch("http://localhost:8002/api/epic_areas/?epic_id=" + selectedEpic2.id, {
      method: "GET",
      headers: { "Content-type": "application/json" }
    });
    epicAreasSelect = await response.json();
    return epicAreas;
  }
  async function onUpdate() {
    await fetch("http://localhost:8002/api/timelogs/bulk_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upData)
    });
    timelogs = await getTimelogs(timelogs);
    upData = [];
    selectedRowIds = [];
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Autocomplete, "Autocomplete").$$render(
                  $$result,
                  {
                    options: users,
                    selectDisplay: "username",
                    placeholder: "search user",
                    selectedOption: selectedUser
                  },
                  {
                    selectedOption: ($$value) => {
                      selectedUser = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Autocomplete, "Autocomplete").$$render(
                  $$result,
                  {
                    options: epics,
                    selectDisplay: "epic_name",
                    placeholder: "search epic",
                    onChange: epicAreasByEpic,
                    selectedOption: selectedEpic
                  },
                  {
                    selectedOption: ($$value) => {
                      selectedEpic = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Autocomplete, "Autocomplete").$$render(
                  $$result,
                  {
                    options: epicAreasSelect,
                    selectDisplay: "epic_area_name",
                    placeholder: "search epic area",
                    selectedOption: selectedEpicArea
                  },
                  {
                    selectedOption: ($$value) => {
                      selectedEpicArea = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}

		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DateTimePicker, "DateTimePicker").$$render(
                  $$result,
                  { value: startTime },
                  {
                    value: ($$value) => {
                      startTime = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DateTimePicker, "DateTimePicker").$$render(
                  $$result,
                  { value: endTime },
                  {
                    value: ($$value) => {
                      endTime = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Button, "Button").$$render($$result, { size: "small", kind: "primary" }, {}, {
                  default: () => {
                    return `Submit`;
                  }
                })}`;
              }
            })}`;
          }
        })}
	${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(EditableDatatable, "EditableDatatable").$$render(
                  $$result,
                  {
                    headers: [
                      { key: "id", value: "ID" },
                      { key: "username", value: "USERAME" },
                      { key: "epic_name", value: "EPIC NAME" },
                      {
                        key: "epic_area_name",
                        value: "EPIC AREA NAME"
                      },
                      { key: "start_time", value: "START TIME" },
                      { key: "end_time", value: "END TIME" },
                      { key: "count_hours", value: "COUNT HOURS" },
                      { key: "count_days", value: "COUNT DAYS" }
                    ],
                    rows: timelogs,
                    columnsToEdit,
                    onRemove,
                    onUpdate,
                    selectedRowIds,
                    upData
                  },
                  {
                    selectedRowIds: ($$value) => {
                      selectedRowIds = $$value;
                      $$settled = false;
                    },
                    upData: ($$value) => {
                      upData = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Timelogs as default
};
