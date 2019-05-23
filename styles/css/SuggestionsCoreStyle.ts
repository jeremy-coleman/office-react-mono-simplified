import { mergeStyles } from "@uifabric/merge-styles";
export const suggestionsContainer = mergeStyles({
  overflowY: "auto",
  overflowX: "hidden",
  maxHeight: "300px",
  selectors: {
    ":global(.ms-Suggestion-item)": {
      backgroundColor: "'[theme:neutralLighter, default: #f3f2f1]'",
      cursor: "pointer"
    },
    ":global(.is-suggested)": {
      backgroundColor: "'[theme:themeLight, default: #c7e0f4]'",
      cursor: "pointer"
    }
  }
});
