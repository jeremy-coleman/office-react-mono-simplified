import { mergeStyles } from "@uifabric/merge-styles";
export const root = mergeStyles({
  lineHeight: "1",
  width: "18px",
  height: "18px",
  verticalAlign: "top",
  position: "relative",
  webkitTouchCallout: "none",
  webkitUserSelect: "none",
  mozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
  selectors: {
    "&:before": {
      content: "''",
      position: "absolute",
      left: "1px",
      right: "1px",
      bottom: "1px",
      top: "1px",
      borderRadius: "",
      opacity: "1",
      background: "'[theme:bodyBackground, default: #ffffff]'"
    }
  }
});
export const rootRootIsChecked = mergeStyles({
  selectors: { "&:before": { background: "Window" } }
});
export const rootCheck = mergeStyles({ opacity: "0" });
export const checkHostRootCheck = mergeStyles({
  selectors: { "&:focus": { opacity: "1" } }
});
export const check = mergeStyles({
  fontSize: "16px",
  position: "absolute",
  left: "0.5px",
  top: "0",
  width: "18px",
  height: "18px",
  textAlign: "center",
  verticalAlign: "middle",
  color: "'[theme:neutralSecondary, default: #605e5c]'",
  msHighContrastAdjust: "none"
});
export const circle = mergeStyles({ color: "WindowText" });
export const rootIsCheckedCircle = mergeStyles({
  color: "'[theme:white, default: #ffffff]'"
});
export const rootIsCheckedCheck = mergeStyles({
  color: "WindowText",
  fontWeight: "900",
  border: "none"
});
