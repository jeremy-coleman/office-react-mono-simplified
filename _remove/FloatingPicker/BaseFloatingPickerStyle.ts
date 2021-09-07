import { mergeStyles } from "@uifabric/merge-styles";
export const callout = mergeStyles({
  selectors: {
    ":global(.ms-Suggestions-itemButton)": { padding: "0", border: "none" },
    ":global(.ms-Suggestions)": { minWidth: "300px" }
  }
});
