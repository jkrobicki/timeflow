import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, o as getContext, v as validate_component, g as add_attribute, i as add_classes, m as missing_component, k as compute_slots, h as subscribe, j as createEventDispatcher, s as setContext, p as set_store_value, q as each } from "./index-9bb86b63.js";
import { w as writable, C as ChevronDown } from "./ChevronDown-070f82d5.js";
const ButtonSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "size"]);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { role: "button" },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
    }
  )}>${escape("")}</a>` : `<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const ButtonSkeleton$1 = ButtonSkeleton;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasIconOnly;
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef(ref);
    }
  }
  hasIconOnly = icon && !$$slots.default;
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  return `
${skeleton ? `${validate_component(ButtonSkeleton$1, "ButtonSkeleton").$$render($$result, Object.assign({ href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `
  <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}</button>`}`}`}`;
});
const Button$1 = Button;
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"}"></path></svg>`;
});
const ChevronRight$1 = ChevronRight;
const InlineCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["checked", "indeterminate", "title", "id", "ref"]);
  let { checked = false } = $$props;
  let { indeterminate = false } = $$props;
  let { title = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<div${add_classes("bx--checkbox--inline".trim())}><input${spread(
    [
      { type: "checkbox" },
      {
        checked: (indeterminate ? false : checked) || null
      },
      {
        indeterminate: escape_attribute_value(indeterminate)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        "aria-checked": escape_attribute_value(indeterminate ? "mixed" : checked)
      }
    ],
    { classes: "bx--checkbox" }
  )}${add_attribute("this", ref, 0)}>
  <label${add_attribute("for", id, 0)}${add_attribute("title", title, 0)}${add_attribute("aria-label", $$props["aria-label"], 0)}${add_classes("bx--checkbox-label".trim())}></label></div>`;
});
const InlineCheckbox$1 = InlineCheckbox;
const RadioButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "checked",
    "disabled",
    "required",
    "labelPosition",
    "labelText",
    "hideLabel",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $selectedValue, $$unsubscribe_selectedValue;
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { labelPosition = "right" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("RadioButtonGroup");
  const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : void 0);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value2) => $selectedValue = value2);
  if (ctx) {
    ctx.add({ id, checked, disabled, value });
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  checked = $selectedValue === value;
  $$unsubscribe_selectedValue();
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--radio-button-wrapper " + (labelPosition === "left" ? "bx--radio-button-wrapper--label-left" : "")
  })}><input type="${"radio"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("value", value, 0)}${add_classes("bx--radio-button".trim())}${add_attribute("this", ref, 0)}>
  <label${add_attribute("for", id, 0)}${add_classes("bx--radio-button__label".trim())}><span${add_classes("bx--radio-button__appearance".trim())}></span>
    ${labelText || $$slots.labelText ? `<span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</span>` : ``}</label></div>`;
});
const RadioButton$1 = RadioButton;
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "zebra", "useStaticWidth", "sortable", "stickyHeader", "tableStyle"]);
  let { size = void 0 } = $$props;
  let { zebra = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { sortable = false } = $$props;
  let { stickyHeader = false } = $$props;
  let { tableStyle = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.tableStyle === void 0 && $$bindings.tableStyle && tableStyle !== void 0)
    $$bindings.tableStyle(tableStyle);
  return `${stickyHeader ? `<section${spread([escape_object($$restProps)], {
    classes: "bx--data-table_inner-container"
  })}><table${add_attribute("style", tableStyle, 0)}${add_classes(("bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")).trim())}>${slots.default ? slots.default({}) : ``}</table></section>` : `<table${spread(
    [
      escape_object($$restProps),
      {
        style: escape_attribute_value(tableStyle)
      }
    ],
    {
      classes: "bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</table>`}`;
});
const Table$1 = Table;
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<tbody${spread([{ "aria-live": "polite" }, escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableBody$1 = TableBody;
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<td${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</td>`;
});
const TableCell$1 = TableCell;
const TableContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "description", "stickyHeader", "useStaticWidth"]);
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--data-table-container " + (useStaticWidth ? "bx--data-table-container--static" : "") + " " + (stickyHeader ? "bx--data-table--max-width" : "")
  })}>${title ? `<div${add_classes("bx--data-table-header".trim())}><h4${add_classes("bx--data-table-header__title".trim())}>${escape(title)}</h4>
      <p${add_classes("bx--data-table-header__description".trim())}>${escape(description)}</p></div>` : ``}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const TableContainer$1 = TableContainer;
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<thead${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableHead$1 = TableHead;
const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"}"></path></svg>`;
});
const ArrowUp$1 = ArrowUp;
const ArrowsVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z"}"></path></svg>`;
});
const ArrowsVertical$1 = ArrowsVertical;
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, ["sortable", "sortDirection", "active", "scope", "translateWithId", "id"]);
  let { sortable = false } = $$props;
  let { sortDirection = "none" } = $$props;
  let { active = false } = $$props;
  let { scope = "col" } = $$props;
  let { translateWithId = () => "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.scope === void 0 && $$bindings.scope && scope !== void 0)
    $$bindings.scope(scope);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  ariaLabel = translateWithId();
  return `
${sortable ? `<th${spread(
    [
      {
        "aria-sort": escape_attribute_value(active ? sortDirection : "none")
      },
      { scope: escape_attribute_value(scope) },
      {
        "data-header": escape_attribute_value(id)
      },
      escape_object($$restProps)
    ],
    {}
  )}><button${add_classes(("bx--table-sort " + (active ? "bx--table-sort--active" : "") + " " + (active && sortDirection === "descending" ? "bx--table-sort--ascending" : "")).trim())}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div>
      ${validate_component(ArrowUp$1, "ArrowUp").$$render(
    $$result,
    {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon"
    },
    {},
    {}
  )}
      ${validate_component(ArrowsVertical$1, "ArrowsVertical").$$render(
    $$result,
    {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon-unsorted"
    },
    {},
    {}
  )}</button></th>` : `<th${spread(
    [
      { scope: escape_attribute_value(scope) },
      {
        "data-header": escape_attribute_value(id)
      },
      escape_object($$restProps)
    ],
    {}
  )}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div></th>`}`;
});
const TableHeader$1 = TableHeader;
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<tr${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableRow$1 = TableRow;
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expandedRows;
  let rowIds;
  let expandableRowIds;
  let selectableRowIds;
  let selectAll;
  let indeterminate;
  let headerKeys;
  let tableCellsByRowId;
  let sortedRows;
  let ascending;
  let sorting;
  let sortingHeader;
  let displayedRows;
  let displayedSortedRows;
  let hasCustomHeaderWidth;
  let $$restProps = compute_rest_props($$props, [
    "headers",
    "rows",
    "size",
    "title",
    "description",
    "zebra",
    "sortable",
    "sortKey",
    "sortDirection",
    "expandable",
    "batchExpansion",
    "expandedRowIds",
    "nonExpandableRowIds",
    "radio",
    "selectable",
    "batchSelection",
    "selectedRowIds",
    "nonSelectableRowIds",
    "stickyHeader",
    "useStaticWidth",
    "pageSize",
    "page"
  ]);
  let $$slots = compute_slots(slots);
  let $tableRows, $$unsubscribe_tableRows;
  let { headers = [] } = $$props;
  let { rows = [] } = $$props;
  let { size = void 0 } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { zebra = false } = $$props;
  let { sortable = false } = $$props;
  let { sortKey = null } = $$props;
  let { sortDirection = "none" } = $$props;
  let { expandable = false } = $$props;
  let { batchExpansion = false } = $$props;
  let { expandedRowIds = [] } = $$props;
  let { nonExpandableRowIds = [] } = $$props;
  let { radio = false } = $$props;
  let { selectable = false } = $$props;
  let { batchSelection = false } = $$props;
  let { selectedRowIds = [] } = $$props;
  let { nonSelectableRowIds = [] } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { pageSize = 0 } = $$props;
  let { page = 0 } = $$props;
  createEventDispatcher();
  const batchSelectedIds = writable(false);
  const tableRows = writable(rows);
  $$unsubscribe_tableRows = subscribe(tableRows, (value) => $tableRows = value);
  const resolvePath = (object, path) => {
    if (path in object)
      return object[path];
    return path.split(/[\.\[\]\'\"]/).filter((p) => p).reduce((o, p) => o && typeof o === "object" ? o[p] : o, object);
  };
  setContext("DataTable", {
    batchSelectedIds,
    tableRows,
    resetSelectedRowIds: () => {
      selectAll = false;
      selectedRowIds = [];
      if (refSelectAll)
        refSelectAll.checked = false;
    }
  });
  let expanded = false;
  let parentRowId = null;
  let refSelectAll = null;
  const getDisplayedRows = (rows2, page2, pageSize2) => page2 && pageSize2 ? rows2.slice((page2 - 1) * pageSize2, page2 * pageSize2) : rows2;
  const formatHeaderWidth = (header) => {
    const styles = [
      header.width && `width: ${header.width}`,
      header.minWidth && `min-width: ${header.minWidth}`
    ].filter(Boolean);
    if (styles.length === 0)
      return void 0;
    return styles.join(";");
  };
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sortKey === void 0 && $$bindings.sortKey && sortKey !== void 0)
    $$bindings.sortKey(sortKey);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.batchExpansion === void 0 && $$bindings.batchExpansion && batchExpansion !== void 0)
    $$bindings.batchExpansion(batchExpansion);
  if ($$props.expandedRowIds === void 0 && $$bindings.expandedRowIds && expandedRowIds !== void 0)
    $$bindings.expandedRowIds(expandedRowIds);
  if ($$props.nonExpandableRowIds === void 0 && $$bindings.nonExpandableRowIds && nonExpandableRowIds !== void 0)
    $$bindings.nonExpandableRowIds(nonExpandableRowIds);
  if ($$props.radio === void 0 && $$bindings.radio && radio !== void 0)
    $$bindings.radio(radio);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0)
    $$bindings.selectable(selectable);
  if ($$props.batchSelection === void 0 && $$bindings.batchSelection && batchSelection !== void 0)
    $$bindings.batchSelection(batchSelection);
  if ($$props.selectedRowIds === void 0 && $$bindings.selectedRowIds && selectedRowIds !== void 0)
    $$bindings.selectedRowIds(selectedRowIds);
  if ($$props.nonSelectableRowIds === void 0 && $$bindings.nonSelectableRowIds && nonSelectableRowIds !== void 0)
    $$bindings.nonSelectableRowIds(nonSelectableRowIds);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    headers.reduce((a, c) => ({ ...a, [c.key]: c.key }), {});
    expandedRows = expandedRowIds.reduce((a, id) => ({ ...a, [id]: true }), {});
    {
      batchSelectedIds.set(selectedRowIds);
    }
    headerKeys = headers.map(({ key }) => key);
    tableCellsByRowId = rows.reduce(
      (rows2, row) => {
        rows2[row.id] = headerKeys.map((key, index) => ({
          key,
          value: resolvePath(row, key),
          display: headers[index].display
        }));
        return rows2;
      },
      {}
    );
    set_store_value(tableRows, $tableRows = rows, $tableRows);
    rowIds = $tableRows.map((row) => row.id);
    expandableRowIds = rowIds.filter((id) => !nonExpandableRowIds.includes(id));
    selectableRowIds = rowIds.filter((id) => !nonSelectableRowIds.includes(id));
    selectAll = selectableRowIds.length > 0 && selectedRowIds.length === selectableRowIds.length;
    indeterminate = selectedRowIds.length > 0 && selectedRowIds.length < selectableRowIds.length;
    {
      if (batchExpansion) {
        expandable = true;
        expanded = expandedRowIds.length === expandableRowIds.length;
      }
    }
    {
      if (radio || batchSelection)
        selectable = true;
    }
    sortedRows = [...$tableRows];
    ascending = sortDirection === "ascending";
    sorting = sortable && sortKey != null;
    sortingHeader = headers.find((header) => header.key === sortKey);
    {
      if (sorting) {
        if (sortDirection === "none") {
          sortedRows = $tableRows;
        } else {
          sortedRows = [...$tableRows].sort((a, b) => {
            const itemA = ascending ? resolvePath(a, sortKey) : resolvePath(b, sortKey);
            const itemB = ascending ? resolvePath(b, sortKey) : resolvePath(a, sortKey);
            if (sortingHeader == null ? void 0 : sortingHeader.sort)
              return sortingHeader.sort(itemA, itemB);
            if (typeof itemA === "number" && typeof itemB === "number")
              return itemA - itemB;
            if ([itemA, itemB].every((item) => !item && item !== 0))
              return 0;
            if (!itemA && itemA !== 0)
              return ascending ? 1 : -1;
            if (!itemB && itemB !== 0)
              return ascending ? -1 : 1;
            return itemA.toString().localeCompare(itemB.toString(), "en", { numeric: true });
          });
        }
      }
    }
    displayedRows = getDisplayedRows($tableRows, page, pageSize);
    displayedSortedRows = getDisplayedRows(sortedRows, page, pageSize);
    hasCustomHeaderWidth = headers.some((header) => header.width || header.minWidth);
    $$rendered = `${validate_component(TableContainer$1, "TableContainer").$$render($$result, Object.assign({ useStaticWidth }, $$restProps), {}, {
      default: () => {
        return `${title || $$slots.title || description || $$slots.description ? `<div${add_classes("bx--data-table-header".trim())}>${title || $$slots.title ? `<h4${add_classes("bx--data-table-header__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</h4>` : ``}
      ${description || $$slots.description ? `<p${add_classes("bx--data-table-header__description".trim())}>${slots.description ? slots.description({}) : `${escape(description)}`}</p>` : ``}</div>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Table$1, "Table").$$render(
          $$result,
          {
            zebra,
            size,
            stickyHeader,
            sortable,
            useStaticWidth,
            tableStyle: hasCustomHeaderWidth && "table-layout: fixed"
          },
          {},
          {
            default: () => {
              return `${validate_component(TableHead$1, "TableHead").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableRow$1, "TableRow").$$render($$result, {}, {}, {
                    default: () => {
                      return `${expandable ? `<th scope="${"col"}"${add_attribute("data-previous-value", expanded ? "collapsed" : void 0, 0)}${add_classes("bx--table-expand".trim())}>${batchExpansion ? `<button type="${"button"}"${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight$1, "ChevronRight").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})}</button>` : ``}</th>` : ``}
        ${selectable && !batchSelection ? `<th scope="${"col"}"></th>` : ``}
        ${batchSelection && !radio ? `<th scope="${"col"}"${add_classes("bx--table-column-checkbox".trim())}>${validate_component(InlineCheckbox$1, "InlineCheckbox").$$render(
                        $$result,
                        {
                          "aria-label": "Select all rows",
                          checked: selectAll,
                          indeterminate,
                          ref: refSelectAll
                        },
                        {
                          ref: ($$value) => {
                            refSelectAll = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</th>` : ``}
        ${each(headers, (header) => {
                        return `${header.empty ? `<th scope="${"col"}"${add_attribute("style", formatHeaderWidth(header), 0)}></th>` : `${validate_component(TableHeader$1, "TableHeader").$$render(
                          $$result,
                          {
                            id: header.key,
                            style: formatHeaderWidth(header),
                            sortable: sortable && header.sort !== false,
                            sortDirection: sortKey === header.key ? sortDirection : "none",
                            active: sortKey === header.key
                          },
                          {},
                          {
                            default: () => {
                              return `${slots["cell-header"] ? slots["cell-header"]({ header }) : `${escape(header.value)}`}
            `;
                            }
                          }
                        )}`}`;
                      })}`;
                    }
                  })}`;
                }
              })}
    ${validate_component(TableBody$1, "TableBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(sorting ? displayedSortedRows : displayedRows, (row, i) => {
                    return `${validate_component(TableRow$1, "TableRow").$$render(
                      $$result,
                      {
                        "data-row": row.id,
                        "data-parent-row": expandable ? true : void 0,
                        class: (selectedRowIds.includes(row.id) ? "bx--data-table--selected" : "") + " " + (expandedRows[row.id] ? "bx--expandable-row" : "") + " " + (expandable ? "bx--parent-row" : "") + " " + (expandable && parentRowId === row.id ? "bx--expandable-row--hover" : "")
                      },
                      {},
                      {
                        default: () => {
                          return `${expandable ? `${validate_component(TableCell$1, "TableCell").$$render(
                            $$result,
                            {
                              class: "bx--table-expand",
                              headers: "expand",
                              "data-previous-value": !nonExpandableRowIds.includes(row.id) && expandedRows[row.id] ? "collapsed" : void 0
                            },
                            {},
                            {
                              default: () => {
                                return `${!nonExpandableRowIds.includes(row.id) ? `<button type="${"button"}"${add_attribute(
                                  "aria-label",
                                  expandedRows[row.id] ? "Collapse current row" : "Expand current row",
                                  0
                                )}${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight$1, "ChevronRight").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})}
                </button>` : ``}
            `;
                              }
                            }
                          )}` : ``}
          ${selectable ? `<td${add_classes(("bx--table-column-checkbox " + (radio ? "bx--table-column-radio" : "")).trim())}>${!nonSelectableRowIds.includes(row.id) ? `${radio ? `${validate_component(RadioButton$1, "RadioButton").$$render(
                            $$result,
                            {
                              name: "select-row-" + row.id,
                              checked: selectedRowIds.includes(row.id)
                            },
                            {},
                            {}
                          )}` : `${validate_component(InlineCheckbox$1, "InlineCheckbox").$$render(
                            $$result,
                            {
                              name: "select-row-" + row.id,
                              checked: selectedRowIds.includes(row.id)
                            },
                            {},
                            {}
                          )}`}` : ``}
            </td>` : ``}
          ${each(tableCellsByRowId[row.id], (cell, j) => {
                            return `${headers[j].empty ? `<td${add_classes((headers[j].columnMenu ? "bx--table-column-menu" : "").trim())}>${slots.cell ? slots.cell({ row, cell, rowIndex: i, cellIndex: j }) : `
                  ${escape(cell.display ? cell.display(cell.value) : cell.value)}
                `}
              </td>` : `${validate_component(TableCell$1, "TableCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${slots.cell ? slots.cell({ row, cell, rowIndex: i, cellIndex: j }) : `
                  ${escape(cell.display ? cell.display(cell.value) : cell.value)}
                `}
              `;
                              }
                            })}`}`;
                          })}
        `;
                        }
                      }
                    )}

        ${expandable ? `<tr data-child-row${add_classes("bx--expandable-row".trim())}>${expandedRows[row.id] && !nonExpandableRowIds.includes(row.id) ? `${validate_component(TableCell$1, "TableCell").$$render(
                      $$result,
                      {
                        colspan: selectable ? headers.length + 2 : headers.length + 1
                      },
                      {},
                      {
                        default: () => {
                          return `<div${add_classes("bx--child-row-inner-container".trim())}>${slots["expanded-row"] ? slots["expanded-row"]({ row }) : ``}</div>
              `;
                        }
                      }
                    )}` : ``}
          </tr>` : ``}`;
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_tableRows();
  return $$rendered;
});
const DataTable$1 = DataTable;
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "default" } = $$props;
  let ref = null;
  const overflowVisible = writable(false);
  setContext("Toolbar", {
    overflowVisible,
    setOverflowVisible: (visible) => {
      overflowVisible.set(visible);
    }
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<section${spread(
    [
      { "aria-label": "data table toolbar" },
      escape_object($$restProps),
      {
        style: "z-index: 1; " + escape($$restProps.style, true)
      }
    ],
    {
      classes: "bx--table-toolbar " + (size === "sm" ? "bx--table-toolbar--small" : "") + " " + (size === "default" ? "bx--table-toolbar--normal" : "")
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Toolbar$1 = Toolbar;
const ToolbarBatchActions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showActions;
  let $$restProps = compute_rest_props($$props, ["formatTotalSelected"]);
  let { formatTotalSelected = (totalSelected) => `${totalSelected} item${totalSelected === 1 ? "" : "s"} selected` } = $$props;
  let batchSelectedIds = [];
  const ctx = getContext("DataTable");
  ctx.batchSelectedIds.subscribe((value) => {
    batchSelectedIds = value;
  });
  let overflowVisible = false;
  const ctxToolbar = getContext("Toolbar");
  ctxToolbar.overflowVisible.subscribe((value) => {
    overflowVisible = value;
  });
  if ($$props.formatTotalSelected === void 0 && $$bindings.formatTotalSelected && formatTotalSelected !== void 0)
    $$bindings.formatTotalSelected(formatTotalSelected);
  showActions = batchSelectedIds.length > 0;
  return `${!overflowVisible ? `<div${spread([escape_object($$restProps)], {
    classes: "bx--batch-actions " + (showActions ? "bx--batch-actions--active" : "")
  })}><div${add_classes("bx--batch-summary".trim())}><p${add_classes("bx--batch-summary__para".trim())}><span>${escape(formatTotalSelected(batchSelectedIds.length))}</span></p></div>
    <div${add_classes("bx--action-list".trim())}>${slots.default ? slots.default({}) : ``}
      ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      class: "bx--batch-summary__cancel",
      tabindex: showActions ? "0" : "-1"
    },
    {},
    {
      default: () => {
        return `${slots.cancel ? slots.cancel({}) : `Cancel`}`;
      }
    }
  )}</div></div>` : ``}`;
});
const ToolbarBatchActions$1 = ToolbarBatchActions;
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "condensed",
    "narrow",
    "fullWidth",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding"
  ]);
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { fullWidth = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.narrow === void 0 && $$bindings.narrow && narrow !== void 0)
    $$bindings.narrow(narrow);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  props = {
    ...$$restProps,
    class: [
      $$restProps.class,
      "bx--grid",
      condensed && "bx--grid--condensed",
      narrow && "bx--grid--narrow",
      fullWidth && "bx--grid--full-width",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      padding && "bx--row-padding"
    ].filter(Boolean).join(" ")
  };
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${spread([escape_object(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const Grid$1 = Grid;
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = compute_rest_props($$props, ["as", "condensed", "narrow", "noGutter", "noGutterLeft", "noGutterRight", "padding"]);
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.narrow === void 0 && $$bindings.narrow && narrow !== void 0)
    $$bindings.narrow(narrow);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  props = {
    ...$$restProps,
    class: [
      $$restProps.class,
      "bx--row",
      condensed && "bx--row--condensed",
      narrow && "bx--row--narrow",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      padding && "bx--row-padding"
    ].filter(Boolean).join(" ")
  };
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${spread([escape_object(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const Row$1 = Row;
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnClass;
  let props;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding",
    "aspectRatio",
    "sm",
    "md",
    "lg",
    "xlg",
    "max"
  ]);
  let { as = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  let { aspectRatio = void 0 } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xlg = void 0 } = $$props;
  let { max = void 0 } = $$props;
  const breakpoints = ["sm", "md", "lg", "xlg", "max"];
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xlg === void 0 && $$bindings.xlg && xlg !== void 0)
    $$bindings.xlg(xlg);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  columnClass = [sm, md, lg, xlg, max].map((breakpoint, i) => {
    const name = breakpoints[i];
    if (breakpoint === true) {
      return `bx--col-${name}`;
    } else if (typeof breakpoint === "number") {
      return `bx--col-${name}-${breakpoint}`;
    } else if (typeof breakpoint === "object") {
      let bp = [];
      if (typeof breakpoint.span === "number") {
        bp = [...bp, `bx--col-${name}-${breakpoint.span}`];
      } else if (breakpoint.span === true) {
        bp = [...bp, `bx--col-${name}`];
      }
      if (typeof breakpoint.offset === "number") {
        bp = [...bp, `bx--offset-${name}-${breakpoint.offset}`];
      }
      return bp.join(" ");
    }
  }).filter(Boolean).join(" ");
  props = {
    ...$$restProps,
    class: [
      $$restProps.class,
      columnClass,
      !columnClass && "bx--col",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      aspectRatio && `bx--aspect-ratio bx--aspect-ratio--${aspectRatio}`,
      padding && "bx--col-padding"
    ].filter(Boolean).join(" ")
  };
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${spread([escape_object(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const Column$1 = Column;
const CaretLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M20 24L10 16 20 8z"}"></path></svg>`;
});
const CaretLeft$1 = CaretLeft;
const CaretRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M12 8L22 16 12 24z"}"></path></svg>`;
});
const CaretRight$1 = CaretRight;
const WarningFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"}"></path><path fill="${"none"}" d="${"M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z"}" data-icon-path="${"inner-path"}" opacity="${"0"}"></path></svg>`;
});
const WarningFilled$1 = WarningFilled;
const WarningAltFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="${"none"}" d="${"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"}" data-icon-path="${"inner-path"}"></path><path d="${"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"}"></path><path d="${"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"}"></path></svg>`;
});
const WarningAltFilled$1 = WarningAltFilled;
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "selected",
    "size",
    "inline",
    "light",
    "disabled",
    "id",
    "name",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "noLabel",
    "labelText",
    "hideLabel",
    "ref",
    "required"
  ]);
  let $defaultValue, $$unsubscribe_defaultValue;
  let $$unsubscribe_selectedValue;
  let $$unsubscribe_itemTypesByValue;
  let $defaultSelectId, $$unsubscribe_defaultSelectId;
  let { selected = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { inline = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { noLabel = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  createEventDispatcher();
  const selectedValue = writable(selected);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value) => value);
  const defaultSelectId = writable(null);
  $$unsubscribe_defaultSelectId = subscribe(defaultSelectId, (value) => $defaultSelectId = value);
  const defaultValue = writable(null);
  $$unsubscribe_defaultValue = subscribe(defaultValue, (value) => $defaultValue = value);
  const itemTypesByValue = writable({});
  $$unsubscribe_itemTypesByValue = subscribe(itemTypesByValue, (value) => value);
  setContext("Select", {
    selectedValue,
    setDefaultValue: (id2, value) => {
      if ($defaultValue === null) {
        defaultSelectId.set(id2);
        defaultValue.set(value);
      } else {
        if ($defaultSelectId === id2) {
          selectedValue.set(value);
        }
      }
      itemTypesByValue.update((types) => ({ ...types, [value]: typeof value }));
    }
  });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  errorId = `error-${id}`;
  {
    selectedValue.set(selected ?? $defaultValue);
  }
  $$unsubscribe_defaultValue();
  $$unsubscribe_selectedValue();
  $$unsubscribe_itemTypesByValue();
  $$unsubscribe_defaultSelectId();
  return `<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><div${add_classes(("bx--select " + (inline ? "bx--select--inline" : "") + " " + (light ? "bx--select--light" : "") + " " + (invalid ? "bx--select--invalid" : "") + " " + (disabled ? "bx--select--disabled" : "") + " " + (warn ? "bx--select--warning" : "")).trim())}>${!noLabel ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</label>` : ``}
    ${inline ? `<div${add_classes("bx--select-input--inline__wrapper".trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)}${add_attribute("aria-invalid", invalid || void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select>
          ${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})}
          ${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}</div>
        ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div>
      ${helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}` : ``}
    ${!inline ? `<div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("aria-invalid", invalid || void 0, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select>
        ${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})}
        ${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}
        ${!invalid && warn ? `${validate_component(WarningAltFilled$1, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--select__invalid-icon bx--select__invalid-icon--warning"
    },
    {},
    {}
  )}` : ``}</div>
      ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}
      ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
      ${!invalid && warn ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}` : ``}</div></div>`;
});
const Select$1 = Select;
const SelectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $$restProps = compute_rest_props($$props, ["value", "text", "hidden", "disabled"]);
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { hidden = false } = $$props;
  let { disabled = false } = $$props;
  const id = "ccs-" + Math.random().toString(36);
  const ctx = getContext("Select") || getContext("TimePickerSelect");
  let selected = false;
  ctx.selectedValue.subscribe((currentValue) => {
    selected = currentValue === value;
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  {
    (_a = ctx == null ? void 0 : ctx.setDefaultValue) == null ? void 0 : _a.call(ctx, id, value);
  }
  return `<option${add_attribute("value", value, 0)} ${disabled ? "disabled" : ""} ${hidden ? "hidden" : ""} ${selected ? "selected" : ""} class="${[escape($$restProps.class, true), "bx--select-option"].join(" ").trim()}"${add_attribute("style", $$restProps.style, 0)}>${escape(text || value)}</option>`;
});
const SelectItem$1 = SelectItem;
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let selectItems;
  let backButtonDisabled;
  let forwardButtonDisabled;
  let $$restProps = compute_rest_props($$props, [
    "page",
    "totalItems",
    "disabled",
    "forwardText",
    "backwardText",
    "itemsPerPageText",
    "itemText",
    "itemRangeText",
    "pageInputDisabled",
    "pageSizeInputDisabled",
    "pageSize",
    "pageSizes",
    "pagesUnknown",
    "pageText",
    "pageRangeText",
    "id"
  ]);
  let { page = 1 } = $$props;
  let { totalItems = 0 } = $$props;
  let { disabled = false } = $$props;
  let { forwardText = "Next page" } = $$props;
  let { backwardText = "Previous page" } = $$props;
  let { itemsPerPageText = "Items per page:" } = $$props;
  let { itemText = (min, max) => `${min}\u2013${max} item${max === 1 ? "" : "s"}` } = $$props;
  let { itemRangeText = (min, max, total) => `${min}\u2013${max} of ${total} item${max === 1 ? "" : "s"}` } = $$props;
  let { pageInputDisabled = false } = $$props;
  let { pageSizeInputDisabled = false } = $$props;
  let { pageSize = 10 } = $$props;
  let { pageSizes = [10] } = $$props;
  let { pagesUnknown = false } = $$props;
  let { pageText = (page2) => `page ${page2}` } = $$props;
  let { pageRangeText = (current, total) => `of ${total} page${total === 1 ? "" : "s"}` } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.forwardText === void 0 && $$bindings.forwardText && forwardText !== void 0)
    $$bindings.forwardText(forwardText);
  if ($$props.backwardText === void 0 && $$bindings.backwardText && backwardText !== void 0)
    $$bindings.backwardText(backwardText);
  if ($$props.itemsPerPageText === void 0 && $$bindings.itemsPerPageText && itemsPerPageText !== void 0)
    $$bindings.itemsPerPageText(itemsPerPageText);
  if ($$props.itemText === void 0 && $$bindings.itemText && itemText !== void 0)
    $$bindings.itemText(itemText);
  if ($$props.itemRangeText === void 0 && $$bindings.itemRangeText && itemRangeText !== void 0)
    $$bindings.itemRangeText(itemRangeText);
  if ($$props.pageInputDisabled === void 0 && $$bindings.pageInputDisabled && pageInputDisabled !== void 0)
    $$bindings.pageInputDisabled(pageInputDisabled);
  if ($$props.pageSizeInputDisabled === void 0 && $$bindings.pageSizeInputDisabled && pageSizeInputDisabled !== void 0)
    $$bindings.pageSizeInputDisabled(pageSizeInputDisabled);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.pageSizes === void 0 && $$bindings.pageSizes && pageSizes !== void 0)
    $$bindings.pageSizes(pageSizes);
  if ($$props.pagesUnknown === void 0 && $$bindings.pagesUnknown && pagesUnknown !== void 0)
    $$bindings.pagesUnknown(pagesUnknown);
  if ($$props.pageText === void 0 && $$bindings.pageText && pageText !== void 0)
    $$bindings.pageText(pageText);
  if ($$props.pageRangeText === void 0 && $$bindings.pageRangeText && pageRangeText !== void 0)
    $$bindings.pageRangeText(pageRangeText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      dispatch("update", { pageSize, page });
    }
    totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
    selectItems = Array.from({ length: totalPages }, (_, i) => i);
    backButtonDisabled = disabled || page === 1;
    forwardButtonDisabled = disabled || page === totalPages;
    $$rendered = `<div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], { classes: "bx--pagination" })}><div${add_classes("bx--pagination__left".trim())}>${!pageSizeInputDisabled ? `<label id="${"bx--pagination-select-" + escape(id, true) + "-count-label"}" for="${"bx--pagination-select-" + escape(id, true)}"${add_classes("bx--pagination__text".trim())}>${escape(itemsPerPageText)}</label>
      ${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + id,
        class: "bx--select__item-count",
        hideLabel: true,
        noLabel: true,
        inline: true,
        selected: pageSize
      },
      {
        selected: ($$value) => {
          pageSize = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(pageSizes, (size, i) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: size, text: size.toString() }, {}, {})}`;
          })}`;
        }
      }
    )}` : ``}
    <span${add_classes((!pageSizeInputDisabled ? "bx--pagination__text" : "").trim())}>${pagesUnknown ? `${escape(itemText(pageSize * (page - 1) + 1, page * pageSize))}` : `${escape(itemRangeText(Math.min(pageSize * (page - 1) + 1, totalItems), Math.min(page * pageSize, totalItems), totalItems))}`}</span></div>
  <div${add_classes("bx--pagination__right".trim())}>${!pageInputDisabled ? `${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + (id + 2),
        class: "bx--select__page-number",
        labelText: "Page number, of " + totalPages + " pages",
        inline: true,
        hideLabel: true,
        selected: page
      },
      {
        selected: ($$value) => {
          page = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(selectItems, (size, i) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render(
              $$result,
              {
                value: size + 1,
                text: (size + 1).toString()
              },
              {},
              {}
            )}`;
          })}`;
        }
      }
    )}
      <span${add_classes("bx--pagination__text".trim())}>${pagesUnknown ? `${escape(pageText(page))}` : `${escape(pageRangeText(page, totalPages))}`}</span>` : ``}
    ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "center",
        tooltipPosition: "top",
        icon: CaretLeft$1,
        iconDescription: backwardText,
        disabled: backButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--backward " + (backButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )}
    ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "end",
        tooltipPosition: "top",
        icon: CaretRight$1,
        iconDescription: forwardText,
        disabled: forwardButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--forward " + (forwardButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Pagination$1 = Pagination;
const autocomplete_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-l9teee.svelte-l9teee{box-sizing:border-box}div.autocomplete.svelte-l9teee.svelte-l9teee{position:relative;display:block;background-color:#f1f1f1;padding-bottom:0px;vertical-align:middle;border-bottom:solid 1px}input.autocomplete.svelte-l9teee.svelte-l9teee{border:1px solid transparent;background-color:#f1f1f1;font-size:16px;height:2.5rem;padding-left:0.5rem}.autocomplete-items.svelte-l9teee.svelte-l9teee{position:absolute;border:1px solid #d4d4d4;border-bottom:none;border-top:none;z-index:99;top:100%;left:0;right:0}.autocomplete-items.svelte-l9teee div.svelte-l9teee{padding:10px;cursor:pointer;background-color:#fff;border-bottom:1px solid #d4d4d4}.autocomplete-items.svelte-l9teee div.svelte-l9teee:hover{background-color:#e9e9e9}.acselected.svelte-l9teee.svelte-l9teee{background-color:#e9e9e9 !important;color:#ffffff}",
  map: null
};
const Autocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { selectDisplay } = $$props;
  let { placeholder } = $$props;
  let selectedOptions = [];
  let { text = "" } = $$props;
  let { selectedItem = "" } = $$props;
  let { onChange = function(selectedItem2) {
  } } = $$props;
  let current = 0;
  let { selectedOption = {} } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selectDisplay === void 0 && $$bindings.selectDisplay && selectDisplay !== void 0)
    $$bindings.selectDisplay(selectDisplay);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.selectedItem === void 0 && $$bindings.selectedItem && selectedItem !== void 0)
    $$bindings.selectedItem(selectedItem);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.selectedOption === void 0 && $$bindings.selectedOption && selectedOption !== void 0)
    $$bindings.selectedOption(selectedOption);
  $$result.css.add(css);
  return `<div class="${"autocomplete svelte-l9teee"}"><input class="${"autocomplete svelte-l9teee"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", text, 0)}>
	
	<div class="${"autocomplete-items svelte-l9teee"}" ${"hidden"}>${each(selectedOptions, (option, i) => {
    return `<div${add_attribute("value", option.id, 0)} class="${["svelte-l9teee", current === i + 1 ? "acselected" : ""].join(" ").trim()}">${escape(option[selectDisplay])}
			</div>`;
  })}</div>
</div>`;
});
export {
  Autocomplete as A,
  Button$1 as B,
  Column$1 as C,
  DataTable$1 as D,
  Grid$1 as G,
  Pagination$1 as P,
  Row$1 as R,
  Toolbar$1 as T,
  WarningFilled$1 as W,
  WarningAltFilled$1 as a,
  ToolbarBatchActions$1 as b
};
