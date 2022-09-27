import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-9bb86b63.js";
import { getClients } from "../endpoints/data.js";
import { E as EditableDatatable } from "../../_app/immutable/chunks/EditableDatatable-ba6f9651.js";
import { G as Grid, R as Row, C as Column, B as Button } from "../../_app/immutable/chunks/autocomplete-8962fbb6.js";
import { T as TextInput } from "../../_app/immutable/chunks/TextInput-ef123c66.js";
import "../../_app/immutable/chunks/Close-2fd03d48.js";
import "../../_app/immutable/chunks/ChevronDown-070f82d5.js";
import "../../_app/immutable/chunks/EditOff-ca7baf5a.js";
const Clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newClientsName;
  let clients = [{}];
  let selectedRowIds = [];
  let columnsToEdit = {
    is_active: "toggle",
    client_name: "input"
  };
  let upData = [];
  async function onUpdate() {
    await fetch("http://localhost:8002/api/clients/bulk_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upData)
    });
    clients = await getClients();
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
                    placeholder: "new client's name",
                    value: newClientsName
                  },
                  {
                    value: ($$value) => {
                      newClientsName = $$value;
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
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {})}`;
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
                      { key: "client_name", value: "NAME" },
                      { key: "is_active", value: "IS ACTIVE" }
                    ],
                    rows: clients,
                    columnsToEdit,
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
  Clients as default
};
