import { c as create_ssr_component, i as add_classes, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, j as createEventDispatcher, v as validate_component, g as add_attribute, m as missing_component, o as getContext, h as subscribe, r as globals, q as each } from "./index-9bb86b63.js";
import { D as DataTable, P as Pagination, A as Autocomplete, T as Toolbar, b as ToolbarBatchActions, B as Button } from "./autocomplete-8962fbb6.js";
import { C as Close } from "./Close-2fd03d48.js";
const ToolbarContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--toolbar-content".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ToolbarContent$1 = ToolbarContent;
const IconSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"}"></path></svg>`;
});
const IconSearch$1 = IconSearch;
const SearchSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "xl" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton " + (size === "sm" ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "")
  })}><span${add_classes("bx--label".trim())}></span>
  <div${add_classes("bx--search-input".trim())}></div></div>`;
});
const SearchSkeleton$1 = SearchSkeleton;
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "size",
    "searchClass",
    "skeleton",
    "light",
    "disabled",
    "expandable",
    "expanded",
    "placeholder",
    "autocomplete",
    "autofocus",
    "closeButtonLabelText",
    "labelText",
    "icon",
    "id",
    "ref"
  ]);
  let { value = "" } = $$props;
  let { size = "xl" } = $$props;
  let { searchClass = "" } = $$props;
  let { skeleton = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { expandable = false } = $$props;
  let { expanded = false } = $$props;
  let { placeholder = "Search..." } = $$props;
  let { autocomplete = "off" } = $$props;
  let { autofocus = false } = $$props;
  let { closeButtonLabelText = "Clear search input" } = $$props;
  let { labelText = "" } = $$props;
  let { icon = IconSearch$1 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let searchRef = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0)
    $$bindings.searchClass(searchClass);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.closeButtonLabelText === void 0 && $$bindings.closeButtonLabelText && closeButtonLabelText !== void 0)
    $$bindings.closeButtonLabelText(closeButtonLabelText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (expanded && ref)
      ref.focus();
  }
  {
    dispatch(expanded ? "expand" : "collapse");
  }
  return `${skeleton ? `${validate_component(SearchSkeleton$1, "SearchSkeleton").$$render($$result, Object.assign({ size }, $$restProps), {}, {})}` : `<div role="${"search"}" aria-labelledby="${escape(id, true) + "-search"}" class="${[
    escape(searchClass, true),
    "bx--search " + (light ? "bx--search--light" : "") + " " + (disabled ? "bx--search--disabled" : "") + " " + (size === "sm" ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "") + " " + (expandable ? "bx--search--expandable" : "") + " " + (expanded ? "bx--search--expanded" : "")
  ].join(" ").trim()}"><div${add_classes("bx--search-magnifier".trim())}${add_attribute("this", searchRef, 0)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, { class: "bx--search-magnifier-icon" }, {}, {})}</div>
    <label id="${escape(id, true) + "-search"}"${add_attribute("for", id, 0)}${add_classes("bx--label".trim())}>${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</label>
    
    <input${spread(
    [
      { type: "text" },
      { role: "searchbox" },
      {
        autofocus: (autofocus === true ? true : void 0) || null
      },
      {
        autocomplete: escape_attribute_value(autocomplete)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      escape_object($$restProps)
    ],
    { classes: "bx--search-input" }
  )}${add_attribute("this", ref, 0)}${add_attribute("value", value, 0)}>
    <button type="${"button"}"${add_attribute("aria-label", closeButtonLabelText, 0)} ${disabled ? "disabled" : ""}${add_classes(("bx--search-close " + (value === "" ? "bx--search-close--hidden" : "")).trim())}>${validate_component(Close || missing_component, "svelte:component").$$render($$result, { size: size === "xl" ? 20 : 16 }, {}, {})}</button></div>`}`;
});
const Search$1 = Search;
const { Object: Object_1 } = globals;
const ToolbarSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let originalRows;
  let classes;
  let $$restProps = compute_rest_props($$props, ["value", "expanded", "persistent", "disabled", "shouldFilterRows", "tabindex", "ref"]);
  let $tableRows, $$unsubscribe_tableRows;
  let { value = "" } = $$props;
  let { expanded = false } = $$props;
  let { persistent = false } = $$props;
  let { disabled = false } = $$props;
  let { shouldFilterRows = false } = $$props;
  let { tabindex = "0" } = $$props;
  let { ref = null } = $$props;
  const { tableRows } = getContext("DataTable") ?? {};
  $$unsubscribe_tableRows = subscribe(tableRows, (value2) => $tableRows = value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0)
    $$bindings.persistent(persistent);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.shouldFilterRows === void 0 && $$bindings.shouldFilterRows && shouldFilterRows !== void 0)
    $$bindings.shouldFilterRows(shouldFilterRows);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    originalRows = tableRows ? [...$tableRows] : [];
    {
      if (shouldFilterRows) {
        let rows = originalRows;
        if (value.trim().length > 0) {
          if (shouldFilterRows === true) {
            rows = rows.filter((row) => {
              return Object.entries(row).filter(([key]) => key !== "id").some(([key, _value]) => {
                var _a;
                if (typeof _value === "string" || typeof _value === "number") {
                  return (_a = _value + "") == null ? void 0 : _a.toLowerCase().includes(value.trim().toLowerCase());
                }
              });
            });
          } else if (typeof shouldFilterRows === "function") {
            rows = rows.filter((row) => shouldFilterRows(row, value) ?? false);
          }
        }
        tableRows.set(rows);
      }
    }
    expanded = !!value.length;
    classes = [
      expanded && "bx--toolbar-search-container-active",
      persistent ? "bx--toolbar-search-container-persistent" : "bx--toolbar-search-container-expandable",
      disabled && "bx--toolbar-search-container-disabled"
    ].filter(Boolean).join(" ");
    $$rendered = `${validate_component(Search$1, "Search").$$render(
      $$result,
      Object_1.assign(
        { tabindex },
        { disabled },
        $$restProps,
        {
          searchClass: classes + " " + $$restProps.class
        },
        { ref },
        { value }
      ),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_tableRows();
  return $$rendered;
});
const ToolbarSearch$1 = ToolbarSearch;
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "toggled",
    "disabled",
    "labelA",
    "labelB",
    "labelText",
    "hideLabel",
    "id",
    "name"
  ]);
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelA === void 0 && $$bindings.labelA && labelA !== void 0)
    $$bindings.labelA(labelA);
  if ($$props.labelB === void 0 && $$bindings.labelB && labelB !== void 0)
    $$bindings.labelB(labelB);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  {
    dispatch("toggle", { toggled });
  }
  return `
<div${spread(
    [
      escape_object($$restProps),
      {
        style: escape($$restProps["style"], true) + "; user-select: none"
      }
    ],
    { classes: "bx--form-item" }
  )}><input type="${"checkbox"}" ${toggled ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--toggle-input " + (size === "sm" ? "bx--toggle-input--small" : "")).trim())}>
  <label${add_attribute(
    "aria-label",
    labelText ? void 0 : $$props["aria-label"] || "Toggle",
    0
  )}${add_attribute("for", id, 0)}${add_classes("bx--toggle-input__label".trim())}><span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</span>
    <span${add_attribute("style", hideLabel && "margin-top: 0", 0)}${add_classes("bx--toggle__switch".trim())}><span aria-hidden="${"true"}"${add_classes("bx--toggle__text--off".trim())}>${slots.labelA ? slots.labelA({}) : `
          ${escape(labelA)}
        `}</span>
      <span aria-hidden="${"true"}"${add_classes("bx--toggle__text--on".trim())}>${slots.labelB ? slots.labelB({}) : `
          ${escape(labelB)}
        `}</span></span></label></div>`;
});
const Toggle$1 = Toggle;
const EditableDatatable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headers = [] } = $$props;
  let { rows = [{}] } = $$props;
  let { selectedRowIds = [] } = $$props;
  let { onRemove = () => {
  } } = $$props;
  let { onUpdate = () => {
  } } = $$props;
  let { upData = [] } = $$props;
  let { onCancel = function() {
  } } = $$props;
  let { columnsToEdit = {} } = $$props;
  let { filteredRowIds = [] } = $$props;
  function updateData(event, event_row, event_cell, autocomplete = null) {
    let columnName = event_cell.cell.key;
    event_cell.cell.value;
    let rowId = event_row.row.id;
    let row = event_row.row;
    console.log("event", event);
    if (!(upData.filter((obj) => obj.id === rowId).length > 0)) {
      upData = [...upData, row];
    }
    let objIndex = upData.findIndex((obj) => obj.id === rowId);
    if (columnName === "is_active") {
      upData[objIndex][columnName] = event.srcElement.checked;
    } else if (autocomplete === "autocomplete") {
      upData[objIndex][columnName] = event[columnName];
    } else {
      upData[objIndex][columnName] = event.srcElement.value;
    }
  }
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.selectedRowIds === void 0 && $$bindings.selectedRowIds && selectedRowIds !== void 0)
    $$bindings.selectedRowIds(selectedRowIds);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0)
    $$bindings.onRemove(onRemove);
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0)
    $$bindings.onUpdate(onUpdate);
  if ($$props.upData === void 0 && $$bindings.upData && upData !== void 0)
    $$bindings.upData(upData);
  if ($$props.onCancel === void 0 && $$bindings.onCancel && onCancel !== void 0)
    $$bindings.onCancel(onCancel);
  if ($$props.columnsToEdit === void 0 && $$bindings.columnsToEdit && columnsToEdit !== void 0)
    $$bindings.columnsToEdit(columnsToEdit);
  if ($$props.filteredRowIds === void 0 && $$bindings.filteredRowIds && filteredRowIds !== void 0)
    $$bindings.filteredRowIds(filteredRowIds);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


${validate_component(DataTable, "DataTable").$$render(
      $$result,
      {
        sortable: true,
        selectable: true,
        headers,
        pageSize: Pagination.pageSize,
        page: Pagination.page,
        rows,
        selectedRowIds
      },
      {
        selectedRowIds: ($$value) => {
          selectedRowIds = $$value;
          $$settled = false;
        }
      },
      {
        cell: ({ cell, row, rowIndex, cellIndex }) => {
          return `${selectedRowIds.includes(row.id) ? `${cell.key in columnsToEdit ? `${each(Object.entries(columnsToEdit), ([columnName, value]) => {
            return `${cell.key === columnName ? `${value === "input" ? `<input type="${"text"}" class="${"month-picker"}"${add_attribute("value", cell.value, 0)}>` : `${value === "datetime" ? `<input type="${"datetime-local"}" class="${"month-picker"}"${add_attribute("value", cell.value, 0)}>` : `${value === "toggle" ? `${validate_component(Toggle$1, "Toggle").$$render(
              $$result,
              {
                hideLabel: true,
                size: "sm",
                labelA: "Inactive",
                labelB: "Active",
                toggled: cell.value
              },
              {},
              {}
            )}` : `${value.type === "autocomplete" ? `${validate_component(Autocomplete, "Autocomplete").$$render(
              $$result,
              {
                options: value.options,
                selectDisplay: value.selectDisplay,
                placeholder: value.placeholder,
                text: cell.value,
                onChange: (event) => updateData(event, { row }, { cell }, "autocomplete")
              },
              {},
              {}
            )}` : ``}`}`}`}` : ``}`;
          })}` : `${escape(cell.value)}`}` : `${escape(cell.value)}`}
	`;
        },
        default: () => {
          return `${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(ToolbarContent$1, "ToolbarContent").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(ToolbarSearch$1, "ToolbarSearch").$$render(
                    $$result,
                    {
                      persistent: true,
                      shouldFilterRows: true,
                      filteredRowIds
                    },
                    {
                      filteredRowIds: ($$value) => {
                        filteredRowIds = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}
		${validate_component(ToolbarBatchActions, "ToolbarBatchActions").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                    default: () => {
                      return `Remove`;
                    }
                  })}
			${validate_component(Button, "Button").$$render($$result, {}, {}, {
                    default: () => {
                      return `Update`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}
${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        totalItems: rows.length,
        pageSizeInputDisabled: true,
        pageSize: Pagination.pageSize,
        page: Pagination.page
      },
      {
        pageSize: ($$value) => {
          Pagination.pageSize = $$value;
          $$settled = false;
        },
        page: ($$value) => {
          Pagination.page = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  EditableDatatable as E
};
