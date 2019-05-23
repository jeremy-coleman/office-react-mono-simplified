import { mergeStyles } from "@uifabric/merge-styles";
export const personaContainer = mergeStyles({
  borderRadius: "15px",
  display: "inline-flex",
  alignItems: "center",
  background: "'[theme:themeLighterAlt, default: #eff6fc]'",
  margin: "4px",
  cursor: "default",
  userSelect: "none",
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
    ":global(.ms-Persona-primaryText)": { color: "HighlightText" },
    "&:hover": { color: "HighlightText" }
  },
  outline: "transparent",
  position: "relative",
  border: "1px   solid   WindowText"
});
export const personaContainerHover = mergeStyles({
  selectors: {
    ":global(.ms-Persona-primaryText)": {
      color: "'[theme:themeDark, default: #005a9e]'"
    }
  }
});
export const personaContainerActionButton = mergeStyles({
  selectors: {
    "&:hover": { background: "'[theme:themeLight, default: #c7e0f4]'" },
    ":global(.ms-Button-icon)": { color: "HighlightText" }
  }
});
export const personaContainerPersonaContainerIsSelected = mergeStyles({
  background: "Highlight",
  selectors: { ":global(.ms-Persona-primaryText)": { color: "HighlightText" } },
  borderColor: "Highlight",
  msHighContrastAdjust: "none"
});
export const personaContainerPersonaContainerIsSelectedActionButton = mergeStyles(
  {
    color: "'[theme:white, default: #ffffff]'",
    selectors: { ":global(.ms-Button-icon)": { color: "HighlightText" } }
  }
);
export const personaContainerValidationError = mergeStyles({
  selectors: {
    ":global(.ms-Persona-primaryText)": {
      color: "'[theme:red, default: #e81123]'"
    },
    ":global(.ms-Persona-initials)": { fontSize: "20px" }
  }
});
export const personaContainerItemContent = mergeStyles({
  flex: "0   1   auto",
  minWidth: "0",
  maxWidth: ""
});
export const personaContainerRemoveButton = mergeStyles({
  borderRadius: "15px",
  flex: "0   0   auto",
  width: "33px",
  height: "33px",
  flexBasis: "32px"
});
export const personaContainerExpandButton = mergeStyles({
  borderRadius: "15px   0   0   15px",
  height: "33px",
  width: "44px",
  paddingRight: "16px",
  position: "inherit",
  display: "flex",
  marginRight: "-17px"
});
export const personaContainerPersonaWrapper = mergeStyles({
  position: "relative",
  display: "inherit",
  selectors: { ":global(.ms-Persona-details)": { padding: "0   8px" } }
});
export const personaContainerPersonaDetails = mergeStyles({
  flex: "0   1   auto"
});
export const itemContainer = mergeStyles({
  display: "inline-block",
  verticalAlign: "top"
});
