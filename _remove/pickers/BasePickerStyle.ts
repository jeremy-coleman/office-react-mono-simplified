import { mergeStyles } from "@uifabric/merge-styles";
export const pickerText = mergeStyles({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  boxSizing: "border-box",
  border: "1px   solid",
  minWidth: "180px",
  minHeight: "30px",
  selectors: {
    "&:hover": { borderColor: "'[theme:inputBorderHovered, default: #323130]'" }
  }
});
export const pickerTextInputFocused = mergeStyles({
  borderColor: "'[theme:inputFocusBorderAlt, default: #0078d4]'"
});
export const pickerInput = mergeStyles({
  height: "34px",
  border: "none",
  flexGrow: "1",
  outline: "none",
  padding: "0   6px",
  alignSelf: "flex-end"
});
export const pickerItems = mergeStyles({ display: "flex", flexWrap: "wrap" });
export const screenReaderOnly = mergeStyles({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  //clip: "",
  border: "0"
});
