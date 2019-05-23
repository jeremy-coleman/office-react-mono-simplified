import { mergeStyles } from "@uifabric/merge-styles";
export const resultContent = mergeStyles({ display: "table-row" });
export const resultContentResultItem = mergeStyles({
  display: "table-cell",
  verticalAlign: "bottom"
});
export const peoplePickerPersona = mergeStyles({
  width: "180px",
  selectors: { ":global(.ms-Persona-details)": { width: "" } }
});
export const peoplePicker = mergeStyles({
  selectors: { ":global(.ms-BasePicker-text)": { minHeight: "40px" } }
});
export const peoplePickerPersonaContent = mergeStyles({
  display: "flex",
  width: "",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "7px   12px"
});
