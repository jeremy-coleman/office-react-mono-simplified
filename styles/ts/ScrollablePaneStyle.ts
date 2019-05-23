import { mergeStyles } from "@uifabric/merge-styles";
export const root = mergeStyles({
  overflowY: "auto",
  maxHeight: "inherit",
  height: "inherit",
  webkitOverflowScrolling: "touch"
});
export const stickyAbove = mergeStyles({
  position: "absolute",
  pointerEvents: "auto",
  width: "",
  zIndex: "1",
  top: "0",
  borderBottom: "1px   solid   WindowText"
});
export const stickyBelow = mergeStyles({
  bottom: "0",
  borderTop: "1px   solid   WindowText"
});
