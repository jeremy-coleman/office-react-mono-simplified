import { mergeStyles } from "@uifabric/merge-styles";
export const root = mergeStyles({ minWidth: "260px" });
export const actionButton = mergeStyles({
  background: "none",
  backgroundColor: "transparent",
  border: "0",
  cursor: "pointer",
  margin: "0",
  padding: "0",
  position: "relative",
  width: "",
  fontSize: "12px",
  selectors: {
    "&:hover": {
      backgroundColor: "'[theme:neutralLighter, default: #f3f2f1]'",
      cursor: "pointer"
    },
    "&:active": { backgroundColor: "'[theme:themeLight, default: #c7e0f4]'" },
    ":global(.ms-Button-icon)": { fontSize: "16px", width: "25px" },
    ":global(.ms-Button-label)": { margin: "0   4px   0   9px" }
  }
});
export const htmlActionButton = mergeStyles({
  textAlign: "right",
  selectors: { ":global(.ms-Button-label)": { margin: "0   9px   0   4px" } }
});
export const buttonSelected = mergeStyles({
  backgroundColor: "'[theme:themeLighter, default: #deecf9]'",
  selectors: {
    "&:hover": {
      backgroundColor: "'[theme:themeLight, default: #c7e0f4]'",
      cursor: "pointer"
    }
  }
});
export const suggestionsTitle = mergeStyles({ fontSize: "12px" });
export const suggestionsSpinner = mergeStyles({
  margin: "5px   0",
  whiteSpace: "nowrap",
  lineHeight: "20px",
  fontSize: "12px",
  selectors: {
    ":global(.ms-Spinner-circle)": {
      display: "inline-block",
      verticalAlign: "middle"
    },
    ":global(.ms-Spinner-label)": {
      display: "inline-block",
      margin: "0   10px   0   16px",
      verticalAlign: "middle"
    }
  }
});
export const htmlSuggestionsSpinner = mergeStyles({
  paddingLeft: "14px",
  paddingRight: "14px",
  textAlign: "right",
  selectors: { ":global(.ms-Spinner-label)": { margin: "0   16px   0   10px" } }
});
export const itemButton = mergeStyles({
  height: "",
  width: "",
  padding: "7px   12px",
  color: "WindowText"
});
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
