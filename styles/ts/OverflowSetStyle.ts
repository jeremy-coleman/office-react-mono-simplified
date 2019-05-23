import { mergeStyles } from "@uifabric/merge-styles";
export const root = mergeStyles({
  position: "relative",
  display: "flex",
  flexWrap: "nowrap"
});
export const rootVertical = mergeStyles({ flexDirection: "column" });
export const item = mergeStyles({ flexShrink: "0", display: "inherit" });
