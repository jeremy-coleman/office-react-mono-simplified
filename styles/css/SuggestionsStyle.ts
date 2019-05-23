import { mergeStyles } from "@uifabric/merge-styles";
export const root = mergeStyles({ minWidth: "260px" });
export const suggestionsItem = mergeStyles({
  display: "flex",
  alignItems: "stretch",
  boxSizing: "border-box",
  width: "",
  position: "relative",
  overflow: "hidden",
  selectors: {
    "&:hover": { background: "'[theme:neutralLighter, default: #f3f2f1]'" }
  }
});
export const suggestionsItemCloseButton = mergeStyles({
  selectors: {
    "&:hover": { background: "'[theme:neutralLight, default: #edebe9]'" }
  },
  display: "none",
  color: "'[theme:neutralSecondary, default: #605e5c]'"
});
export const suggestionsItemSuggestionsItemIsSuggested = mergeStyles({
  background: "Highlight",
  selectors: { "&:hover": { background: "Highlight", color: "HighlightText" } },
  color: "HighlightText",
  msHighContrastAdjust: "none"
});
export const suggestionsItemSuggestionsItemIsSuggestedCloseButton = mergeStyles(
  {
    selectors: {
      "&:hover": {
        background: "'[theme:neutralTertiary, default: #a19f9d]'",
        color: "'[theme:neutralPrimary, default: #323130]'"
      }
    }
  }
);
export const suggestionsItemSuggestionsItemIsSuggestedItemButton = mergeStyles({
  color: "HighlightText"
});
export const actionButton = mergeStyles({
  background: "none",
  backgroundColor: "transparent",
  border: "0",
  cursor: "pointer",
  margin: "0",
  position: "relative",
  borderTop: "1px   solid",
  height: "40px",
  width: "",
  fontSize: "12px",
  paddingLeft: "8px",
  paddingRight: "8px",
  selectors: {
    "&:hover": {
      backgroundColor: "'[theme:neutralLight, default: #edebe9]'",
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
  backgroundColor: "'[theme:themeLight, default: #c7e0f4]'"
});
export const suggestionsTitle = mergeStyles({
  padding: "0   12px",
  color: "'[theme:themePrimary, default: #0078d4]'",
  fontSize: "12px",
  lineHeight: "40px",
  borderBottom: "1px   solid"
});
export const suggestionsContainer = mergeStyles({
  overflowY: "auto",
  overflowX: "hidden",
  maxHeight: "300px",
  borderBottom: "1px   solid"
});
export const suggestionsNone = mergeStyles({
  textAlign: "center",
  color: "#767676",
  fontSize: "12px",
  lineHeight: "30px"
});
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
export const itemButtonItemButton = mergeStyles({
  width: "",
  padding: "0",
  minWidth: "0",
  height: "",
  color: "WindowText",
  selectors: { "&:hover": { color: "'[theme:neutralDark, default: #201f1e]'" } }
});
export const closeButtonCloseButton = mergeStyles({
  padding: "0   4px",
  height: "auto",
  width: "32px",
  color: "WindowText",
  selectors: {
    "&:hover": {
      background: "'[theme:neutralTertiaryAlt, default: #c8c6c4]'",
      color: "'[theme:neutralDark, default: #201f1e]'"
    }
  }
});
export const suggestionsAvailable = mergeStyles({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "",
  border: "0"
});
