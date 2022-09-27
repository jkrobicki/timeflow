import { c as create_ssr_component, f as escape, v as validate_component } from "../../_app/immutable/chunks/index-9bb86b63.js";
import { getEpicAreas } from "../endpoints/data.js";
import { E as EditableDatatable } from "../../_app/immutable/chunks/EditableDatatable-ba6f9651.js";
import { G as Grid, R as Row, C as Column, A as Autocomplete, B as Button } from "../../_app/immutable/chunks/autocomplete-8962fbb6.js";
import { D as DateTimePicker } from "../../_app/immutable/chunks/DateTimePicker-c3123adf.js";
import { T as TextInput } from "../../_app/immutable/chunks/TextInput-ef123c66.js";
import "../../_app/immutable/chunks/Close-2fd03d48.js";
import "../../_app/immutable/chunks/ChevronDown-070f82d5.js";
import "../../_app/immutable/chunks/EditOff-ca7baf5a.js";
const Epic_areas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let epics = [];
  let epicAreas = [];
  let selectedRowIds = [];
  let newEpicAreaName;
  let startDate = "";
  let selectedEpic = {};
  let upData = [];
  let columnsToEdit = {
    epic_area_name: "input",
    epic_name: {
      type: "autocomplete",
      selectDisplay: "epic_name",
      options: epics,
      placeholder: "epic's name"
    },
    is_active: "toggle"
  };
  async function onUpdate() {
    await fetch("http://localhost:8002/api/epic_areas/bulk_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upData)
    });
    epicAreas = await getEpicAreas();
    upData = [];
    selectedRowIds = [];
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `upData ${escape(JSON.stringify(upData))}
${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TextInput, "TextInput").$$render(
                  $$result,
                  {
                    placeholder: "new sponsor's full name",
                    value: newEpicAreaName
                  },
                  {
                    value: ($$value) => {
                      newEpicAreaName = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Autocomplete, "Autocomplete").$$render(
              $$result,
              {
                options: epics,
                selectDisplay: "epic_name",
                placeholder: "search epics",
                selectedOption: selectedEpic
              },
              {
                selectedOption: ($$value) => {
                  selectedEpic = $$value;
                  $$settled = false;
                }
              },
              {}
            )}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DateTimePicker, "DateTimePicker").$$render(
                  $$result,
                  { value: startDate },
                  {
                    value: ($$value) => {
                      startDate = $$value;
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
                      {
                        key: "epic_area_name",
                        value: "EPIC AREA'S NAME"
                      },
                      { key: "epic_name", value: "EPIC'S NAME" },
                      { key: "is_active", value: "IS ACTIVE" }
                    ],
                    rows: epicAreas,
                    onUpdate,
                    selectedRowIds,
                    upData,
                    columnsToEdit
                  },
                  {
                    selectedRowIds: ($$value) => {
                      selectedRowIds = $$value;
                      $$settled = false;
                    },
                    upData: ($$value) => {
                      upData = $$value;
                      $$settled = false;
                    },
                    columnsToEdit: ($$value) => {
                      columnsToEdit = $$value;
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
  Epic_areas as default
};
