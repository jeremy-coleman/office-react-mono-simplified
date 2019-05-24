import { mergeStyles } from "@uifabric/merge-styles";
export const pickerText = mergeStyles({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  boxSizing: "border-box",
  border: "1px   solid",
  minWidth: "180px",
  padding: "1px",
  minHeight: "32px",
  selectors: {
    "&:hover": { borderColor: "'[theme:themeLight, default: #c7e0f4]'" }
  }
});
export const pickerInput = mergeStyles({
  height: "34px",
  border: "none",
  flexGrow: "1",
  outline: "none",
  padding: "0   6px",
  margin: "1px",
  selectors: { "&::-ms-clear": { display: "none" } }
});
