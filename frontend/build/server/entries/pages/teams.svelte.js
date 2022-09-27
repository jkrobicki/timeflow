import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-9bb86b63.js";
import { getTeams } from "../endpoints/data.js";
import { E as EditableDatatable } from "../../_app/immutable/chunks/EditableDatatable-ba6f9651.js";
import { G as Grid, R as Row, C as Column, A as Autocomplete, B as Button } from "../../_app/immutable/chunks/autocomplete-8962fbb6.js";
import { T as TextInput } from "../../_app/immutable/chunks/TextInput-ef123c66.js";
import "../../_app/immutable/chunks/Close-2fd03d48.js";
import "../../_app/immutable/chunks/ChevronDown-070f82d5.js";
import "../../_app/immutable/chunks/EditOff-ca7baf5a.js";
const Teams = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teams = [{}];
  let users;
  let selectedRowIds = [];
  let newTeamsFullName;
  let newTeamsShortName;
  let columnsToEdit = ["team_name", "team_short_name", "is_active", "username", "full_lead_name"];
  let selectedUser = {};
  let upData = [];
  if (selectedRowIds === []) {
    upData = [];
  }
  async function onUpdate() {
    await fetch("http://localhost:8002/api/teams/bulk_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upData)
    });
    teams = await getTeams();
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
                    placeholder: "new team's full name",
                    value: newTeamsFullName
                  },
                  {
                    value: ($$value) => {
                      newTeamsFullName = $$value;
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
                    placeholder: "new team's short name",
                    value: newTeamsShortName
                  },
                  {
                    value: ($$value) => {
                      newTeamsShortName = $$value;
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
                options: users,
                selectDisplay: "full_name",
                placeholder: "select user lead",
                selectedOption: selectedUser
              },
              {
                selectedOption: ($$value) => {
                  selectedUser = $$value;
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
                        key: "team_name",
                        value: "FULL TEAM'S NAME"
                      },
                      {
                        key: "team_short_name",
                        value: "SHORT TEAM'S NAME"
                      },
                      {
                        key: "full_lead_name",
                        value: "USER LEAD"
                      },
                      { key: "is_active", value: "IS ACTIVE" }
                    ],
                    rows: teams,
                    columnsToEdit,
                    onUpdate,
                    autocompleteOptions: users,
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
  Teams as default
};
