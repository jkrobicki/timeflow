import { c as create_ssr_component, f as escape, v as validate_component } from "../../_app/immutable/chunks/index-9bb86b63.js";
import { getSponsors } from "../endpoints/data.js";
import { E as EditableDatatable } from "../../_app/immutable/chunks/EditableDatatable-ba6f9651.js";
import { G as Grid, R as Row, C as Column, A as Autocomplete, B as Button } from "../../_app/immutable/chunks/autocomplete-8962fbb6.js";
import { T as TextInput } from "../../_app/immutable/chunks/TextInput-ef123c66.js";
import "../../_app/immutable/chunks/Close-2fd03d48.js";
import "../../_app/immutable/chunks/ChevronDown-070f82d5.js";
import "../../_app/immutable/chunks/EditOff-ca7baf5a.js";
const Sponsors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sponsors = [{}];
  let clients = [];
  let selectedRowIds = [];
  let newSponsorsFullName;
  let newSponsorsShortName;
  let selectedClient = {};
  let upData = [];
  let columnsToEdit = {
    sponsor_name: "input",
    sponsor_short_name: "input",
    client_name: {
      input: "autocomplete",
      selectDisplay: "client_name",
      options: clients,
      placeholder: "client's name"
    },
    is_active: "toggle"
  };
  if (selectedRowIds === []) {
    upData = [];
  }
  async function onUpdate() {
    await fetch("http://localhost:8002/api/sponsors/bulk_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upData)
    });
    sponsors = await getSponsors();
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
                    value: newSponsorsFullName
                  },
                  {
                    value: ($$value) => {
                      newSponsorsFullName = $$value;
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
                    placeholder: "new sponsor's short name",
                    value: newSponsorsShortName
                  },
                  {
                    value: ($$value) => {
                      newSponsorsShortName = $$value;
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
                options: clients,
                selectDisplay: "name",
                placeholder: "search client",
                selectedOption: selectedClient
              },
              {
                selectedOption: ($$value) => {
                  selectedClient = $$value;
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
                        key: "sponsor_name",
                        value: "FULL SPONSOR'S NAME"
                      },
                      {
                        key: "sponsor_short_name",
                        value: "SHORT SPONSOR'S NAME"
                      },
                      {
                        key: "client_name",
                        value: "CLIENT'S NAME"
                      },
                      { key: "is_active", value: "IS ACTIVE" }
                    ],
                    rows: sponsors,
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
  Sponsors as default
};
