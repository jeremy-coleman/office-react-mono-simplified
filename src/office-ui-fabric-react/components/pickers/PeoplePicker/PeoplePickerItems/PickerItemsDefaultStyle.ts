import { mergeStyles } from "@uifabric/merge-styles";
export const personaContainer = mergeStyles({
  borderRadius: "15px",
  display: "inline-flex",
  alignItems: "center",
  background: "'[theme:neutralLighter, default: #f3f2f1]'",
  margin: "1px   2px",
  cursor: "default",
  userSelect: "none",
  maxWidth: "300px",
  verticalAlign: "middle",
  selectors: {
    "&::-moz-focus-inner": { border: "0" },
    ":global(.ms-Fabric--isFocusVisible)": {
      content: "''",
      position: "absolute",
      top: "-2px",
      right: "-2px",
      bottom: "-2px",
      left: "-2px",
      pointerEvents: "none",
      border: "1px   solid"
    },
    "&:hover": { background: "'[theme:neutralLight, default: #edebe9]'" }
  },
  outline: "transparent",
  position: "relative",
  border: "1px   solid   WindowText"
});
export const personaContainerRemoveButton = mergeStyles({
  selectors: {
    "&:hover": {
      background: "'[theme:neutralTertiaryAlt, default: #c8c6c4]'",
      color: "'[theme:neutralDark, default: #201f1e]'"
    }
  },
  borderRadius: "15px",
  flex: "0   0   auto",
  width: "28px",
  height: "28px",
  flexBasis: "28px"
});
export const personaContainerIsSelected = mergeStyles({
  background: "Highlight",
  selectors: { ":global(.ms-Persona-primaryText)": { color: "HighlightText" } },
  borderColor: "Highlight",
  MsHighContrastAdjust: "none"
});
export const personaContainerIsSelectedRemoveButton = mergeStyles(
  {
    selectors: {
      ":global(.ms-Button-icon)": { color: "HighlightText" },
      "&:hover": {
        color: "'[theme:white, default: #ffffff]'",
        background: "'[theme:themeDark, default: #005a9e]'"
      }
    }
  }
);
export const personaContainerValidationError = mergeStyles({
  selectors: {
    ":global(.ms-Persona-primaryText)": {
      color: "'[theme:redDark, default: #a4262c]'",
      borderBottom: "2px   dotted"
    },
    ":global(.ms-Persona-initials)": { fontSize: "20px" }
  }
});
export const personaContainerValidationErrorPersonaContainerIsSelected = mergeStyles(
  {
    background: "'[theme:redDark, default: #a4262c]'",
    selectors: {
      ":global(.ms-Persona-primaryText)": {
        color: "'[theme:white, default: #ffffff]'",
        borderBottom: "2px   dotted"
      }
    }
  }
);
export const personaContainerValidationErrorPersonaContainerIsSelectedRemoveButton = mergeStyles(
  {
    selectors: { "&:hover": { background: "'[theme:red, default: #e81123]'" } }
  }
);
export const personaContainerItemContent = mergeStyles({
  flex: "0   1   auto",
  minWidth: "0",
  maxWidth: "",
  overflow: "hidden"
});
export const personaContainerPersonaDetails = mergeStyles({
  flex: "0   1   auto"
});
export const itemContainer = mergeStyles({
  display: "inline-block",
  verticalAlign: "top"
});
