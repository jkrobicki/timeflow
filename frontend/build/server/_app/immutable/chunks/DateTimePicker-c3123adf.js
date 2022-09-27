import { c as create_ssr_component } from "./index-9bb86b63.js";
const DateTimePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "test" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<input type="${"datetime-local"}" class="${"month-picker"}">`;
});
export {
  DateTimePicker as D
};
