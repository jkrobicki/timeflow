import { c as create_ssr_component, v as validate_component, g as add_attribute } from "../../_app/immutable/chunks/index-9bb86b63.js";
import { getEpics } from "../endpoints/data.js";
import { E as EditableDatatable } from "../../_app/immutable/chunks/EditableDatatable-ba6f9651.js";
import { G as Grid, R as Row, C as Column, A as Autocomplete, B as Button } from "../../_app/immutable/chunks/autocomplete-8962fbb6.js";
import { T as TextInput } from "../../_app/immutable/chunks/TextInput-ef123c66.js";
import "../../_app/immutable/chunks/Close-2fd03d48.js";
import "../../_app/immutable/chunks/ChevronDown-070f82d5.js";
import "../../_app/immutable/chunks/EditOff-ca7baf5a.js";
const Epics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let epics = [{}];
  let teams = [{}];
  let sponsors = [{}];
  let selectedRowIds = [];
  let newEpicsFullName;
  let newEpicsShortName;
  let columnsToEdit = {
    epic_name: "input",
    short_name: "input",
    is_active: "toggle",
    team_name: {
      input: "autocomplete",
      selectDisplay: "team_name",
      options: teams,
      placeholder: "team's name"
    },
    sponsor_name: {
      input: "autocomplete",
      selectDisplay: "sponsor_name",
      options: sponsors,
      placeholder: "sponsor's name"
    }
  };
  let selectedTeam = {};
  let selectedSponsor = {};
  let startDate = "";
  let upData = [];
  async function onUpdate() {
    await fetch("http://localhost:8002/api/epics/bulk_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upData)
    });
    epics = await getEpics();
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
                return `${validate_component(TextInput, "TextInput").$$render(
                  $$result,
                  {
                    placeholder: "new epic's full name",
                    value: newEpicsFullName
                  },
                  {
                    value: ($$value) => {
                      newEpicsFullName = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TextInput, "TextInput").$$render(
                  $$result,
                  {
                    placeholder: "new epic's short name",
                    value: newEpicsShortName
                  },
                  {
                    value: ($$value) => {
                      newEpicsShortName = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `<input class="${"month-picker"}" type="${"date"}"${add_attribute("value", startDate, 0)}>`;
              }
            })}
		${validate_component(Autocomplete, "Autocomplete").$$render(
              $$result,
              {
                options: teams,
                selectDisplay: "team_name",
                placeholder: "select team",
                selectedOption: selectedTeam
              },
              {
                selectedOption: ($$value) => {
                  selectedTeam = $$value;
                  $$settled = false;
                }
              },
              {}
            )}
		${validate_component(Autocomplete, "Autocomplete").$$render(
              $$result,
              {
                options: sponsors,
                selectDisplay: "sponsor_name",
                placeholder: "search sponsor",
                selectedOption: selectedSponsor
              },
              {
                selectedOption: ($$value) => {
                  selectedSponsor = $$value;
                  $$settled = false;
                }
              },
              {}
            )}

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
                        key: "epic_name",
                        value: "FULL EPIC'S NAME"
                      },
                      {
                        key: "short_name",
                        value: "SHORT EPIC'S NAME"
                      },
                      { key: "team_name", value: "TEAM'S NAME" },
                      {
                        key: "sponsor_name",
                        value: "SPONSORS'S NAME"
                      },
                      { key: "start_date", value: "START DATE" },
                      { key: "is_active", value: "IS ACTIVE" }
                    ],
                    rows: epics,
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
  Epics as default
};
