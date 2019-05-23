import { mergeStyles } from "@uifabric/merge-styles";
export const root = mergeStyles({
  boxSizing: "border-box",
  boxShadow: "none",
  margin: "0",
  padding: "0",
  selectors: {
    "&::-moz-focus-inner": { border: "0" },
    ":global(.ms-Fabric--isFocusVisible)": {
      content: "''",
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      pointerEvents: "none",
      border: "1px   solid"
    }
  },
  outline: "transparent",
  position: "relative"
});
export const picker = mergeStyles({
  color: "'[theme:black, default: #000000]'",
  fontSize: "14px",
  position: "relative"
});
export const htmlPicker = mergeStyles({ textAlign: "right" });
export const holder = mergeStyles({
  webkitOverflowScrolling: "touch",
  boxSizing: "border-box",
  display: "inline-block",
  height: "auto",
  overflow: "hidden"
});
export const pickerPickerIsOpenedHolder = mergeStyles({
  boxSizing: "border-box",
  display: "inline-block"
});
export const frame = mergeStyles({ position: "relative" });
export const wrap = mergeStyles({
  minHeight: "212px",
  padding: "12px",
  display: "flex",
  boxSizing: "content-box"
});
export const wrapGoTodaySpacing = mergeStyles({
  minHeight: "228px",
  paddingBottom: "28px"
});
export const dayPicker = mergeStyles({ display: "block", minHeight: "200px" });
export const header = mergeStyles({
  position: "relative",
  display: "inline-flex",
  height: "28px",
  lineHeight: "28px",
  width: ""
});
export const divider = mergeStyles({
  top: "0",
  marginTop: "-12px",
  marginBottom: "-12px"
});
export const htmlDivider = mergeStyles({
  borderRight: "1px   solid",
  borderLeft: "1px   solid"
});
export const decade = mergeStyles({
  display: "inline-flex",
  flexGrow: "1",
  fontSize: "14px",
  fontWeight: "600",
  color: "'[theme:neutralPrimary, default: #323130]'",
  padding: "0   5px"
});
export const currentDecade = mergeStyles({
  selectors: { "&:hover": { cursor: "default" } },
  display: "inline-flex",
  flexGrow: "1",
  padding: "0   5px",
  fontSize: "14px",
  fontWeight: "600",
  color: "'[theme:neutralPrimary, default: #323130]'",
  height: "28px",
  lineHeight: "28px"
});
export const table = mergeStyles({
  textAlign: "center",
  borderCollapse: "collapse",
  borderSpacing: "0",
  tableLayout: "fixed",
  fontSize: "inherit",
  marginTop: "4px",
  width: "197px"
});
export const tableTd = mergeStyles({ margin: "0", padding: "0" });
export const dayWrapper = mergeStyles({
  width: "28px",
  height: "28px",
  padding: "0",
  lineHeight: "28px",
  fontSize: "15px",
  fontWeight: "400",
  color: "'[theme:neutralPrimary, default: #323130]'",
  boxSizing: "border-box",
  justifyContent: "center",
  alignItems: "center",
  cursor: "default",
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
    }
  },
  outline: "transparent",
  position: "relative"
});
export const day = mergeStyles({
  width: "24px",
  height: "24px",
  borderRadius: "2px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  padding: "0",
  backgroundColor: "transparent",
  lineHeight: "",
  fontSize: "inherit",
  color: "inherit",
  fontWeight: "inherit"
});
export const daySelectionDay = mergeStyles({
  selectors: { "&:active": { color: "highlight" } }
});
export const dayIsToday = mergeStyles({
  position: "relative",
  backgroundColor: "highlight",
  borderRadius: "2px",
  selectors: { "&:hover": { borderRadius: "0" } },
  color: "'[theme:white, default: #ffffff]'",
  fontWeight: "600",
  background: "'[theme:themePrimary, default: #0078d4]'"
});
export const dayIsTodaySpan = mergeStyles({
  selectors: { "&:hover": { msHighContrastAdjust: "none", color: "window" } }
});
export const dayIsDisabled = mergeStyles({
  selectors: {
    "&:before": {
      borderTopColor: "'[theme:neutralTertiary, default: #a19f9d]'"
    }
  },
  color: "'[theme:neutralTertiaryAlt, default: #c8c6c4]'",
  pointerEvents: "none"
});
export const dayIsUnfocused = mergeStyles({
  color: "'[theme:neutralSecondary, default: #605e5c]'",
  fontWeight: "400"
});
export const dayIsFocused = mergeStyles({
  selectors: {
    "&:hover": {
      cursor: "pointer",
      background: "'[theme:neutralLight, default: #edebe9]'",
      color: "'[theme:neutralDark, default: #201f1e]'"
    },
    "&:active": {
      background: "'[theme:themeLight, default: #c7e0f4]'",
      color: "'[theme:neutralPrimary, default: #323130]'",
      fontWeight: "600"
    }
  }
});
export const daySelectionDayIsHighlighted = mergeStyles({
  selectors: { "&:hover": { border: "2px   solid   Highlight" } }
});
export const daySelectionDayIsHighlightedSpan = mergeStyles({
  selectors: { "&:hover": { color: "Highlight" } }
});
export const dayIsHighlightedButtonDayIsToday = mergeStyles({
  borderRadius: "0"
});
export const dayIsHighlightedButtonDayIsTodaySpan = mergeStyles({
  color: "Window"
});
export const dayIsFocusedDay = mergeStyles({
  selectors: {
    "&:active": {
      color: "'[theme:neutralPrimary, default: #323130]'",
      fontWeight: "600"
    }
  }
});
export const dayIsHighlightedDayDisabled = mergeStyles({
  background: "'[theme:neutralTertiary, default: #a19f9d]'"
});
export const dayBackground = mergeStyles({ borderRadius: "2px" });
export const dayHover = mergeStyles({
  cursor: "pointer",
  background: "'[theme:neutralLight, default: #edebe9]'",
  color: "'[theme:neutralDark, default: #201f1e]'"
});
export const dayPress = mergeStyles({
  cursor: "pointer",
  fontWeight: "600",
  background: "'[theme:themeLight, default: #c7e0f4]'",
  color: "'[theme:neutralPrimary, default: #323130]'"
});
export const dayPressDayIsToday = mergeStyles({
  background: "'[theme:themePrimary, default: #0078d4]'"
});
export const showWeekNumbersWeekNumbers = mergeStyles({
  borderRight: "1px   solid",
  boxSizing: "border-box",
  width: "28px",
  padding: "0"
});
export const showWeekNumbersWeekNumbersDayWrapper = mergeStyles({
  color: "'[theme:neutralSecondary, default: #605e5c]'"
});
export const showWeekNumbersWeekNumbersDayWrapperWeekIsHighlighted = mergeStyles(
  { color: "'[theme:neutralPrimary, default: #323130]'" }
);
export const showWeekNumbersTable = mergeStyles({ width: "225px" });
export const showWeekNumbersTableDayWrapper = mergeStyles({ width: "28px" });
export const showWeekNumbersRtlWeekNumbers = mergeStyles({
  borderLeft: "1px   solid",
  boxSizing: "border-box"
});
export const showWeekNumbersRtlWeekNumbersDayWrapper = mergeStyles({
  color: "'[theme:neutralSecondary, default: #605e5c]'"
});
export const showWeekNumbersRtlWeekNumbersDayWrapperWeekIsHighlighted = mergeStyles(
  { color: "'[theme:neutralPrimary, default: #323130]'" }
);
export const showWeekNumbersRtlTable = mergeStyles({ width: "225px" });
export const showWeekNumbersRtlTableDayWrapper = mergeStyles({ width: "30px" });
export const decadeComponents = mergeStyles({
  display: "inline-flex",
  alignSelf: "flex-end"
});
export const closeButton = mergeStyles({
  width: "28px",
  height: "28px",
  display: "inline-block",
  lineHeight: "28px",
  textAlign: "center",
  fontSize: "12px",
  color: "'[theme:neutralPrimary, default: #323130]'",
  borderRadius: "2px",
  position: "relative",
  backgroundColor: "transparent",
  border: "none",
  padding: "0",
  selectors: {
    "&:hover": { outline: "1px   solid   highlight" },
    "&:active": { color: "highlight" }
  }
});
export const nextDecadeIsDisabled = mergeStyles({
  color: "'[theme:neutralTertiaryAlt, default: #c8c6c4]'",
  pointerEvents: "none"
});
export const headerToggleView = mergeStyles({
  display: "flex",
  alignItems: "center",
  padding: "4px   8px",
  selectors: { "&:hover": { color: "highlight" } }
});
export const htmlCurrentDecade = mergeStyles({
  marginLeft: "5px",
  marginRight: "5px"
});
export const optionGrid = mergeStyles({
  position: "relative",
  height: "210px",
  width: "196px",
  margin: "4px   0   0"
});
export const monthOption = mergeStyles({
  width: "60px",
  height: "60px",
  lineHeight: "",
  cursor: "pointer",
  margin: "0   10px   10px   0",
  fontSize: "13px",
  fontWeight: "400",
  color: "'[theme:neutralPrimary, default: #323130]'",
  textAlign: "center",
  border: "none",
  padding: "0",
  backgroundColor: "transparent",
  borderRadius: "2px",
  selectors: {
    "&:hover": { outlineColor: "highlight" },
    "&:active": { backgroundColor: "'[theme:themeLight, default: #c7e0f4]'" }
  }
});
export const htmlMonthOption = mergeStyles({
  float: "right",
  margin: "0   0   10px   10px"
});
export const monthOptionIsHighlighted = mergeStyles({
  backgroundColor: "'[theme:neutralPrimary, default: #323130]'",
  color: "'[theme:white, default: #ffffff]'"
});
export const goToday = mergeStyles({
  bottom: "0",
  color: "'[theme:neutralPrimary, default: #323130]'",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "400",
  height: "30px",
  lineHeight: "30px",
  padding: "0   3px",
  backgroundColor: "transparent",
  border: "none",
  position: "absolute",
  boxSizing: "content-box",
  right: "20px",
  left: "20px",
  selectors: {
    "&:hover": { outlineColor: "highlight" },
    "&:active": { color: "highlight" }
  },
  width: "auto"
});
export const goToTodayIsDisabled = mergeStyles({
  color: "'[theme:neutralTertiaryAlt, default: #c8c6c4]'",
  pointerEvents: "none"
});
export const goTodayInlineMonth = mergeStyles({ top: "212px" });
export const rootIsPickingYearsDayPicker = mergeStyles({ display: "none" });
export const rootIsPickingYearsYearPicker = mergeStyles({ display: "block" });
export const yearComponents = mergeStyles({
  marginLeft: "1px",
  marginTop: "2px"
});
export const monthPickerVisibleWrap = mergeStyles({ padding: "12px" });
export const monthPickerVisibleDayPicker = mergeStyles({
  margin: "-10px   0",
  padding: "10px   0",
  boxSizing: "border-box",
  width: "212px",
  minHeight: "200px"
});
export const monthPickerVisibleMonthPicker = mergeStyles({ display: "block" });
export const monthPickerVisibleOptionGrid = mergeStyles({
  height: "150px",
  width: "196px"
});
export const monthPickerVisibleToggleMonthView = mergeStyles({
  display: "none"
});
export const monthPickerVisibleCurrentDecade = mergeStyles({
  fontSize: "14px",
  margin: "0",
  height: "28px",
  lineHeight: "28px",
  display: "inline-block"
});
export const monthPickerVisibleMonthOption = mergeStyles({
  width: "40px",
  height: "40px",
  lineHeight: "",
  fontSize: "12px",
  margin: "0   12px   16px   0",
  selectors: {
    "&:hover": { outline: "1px   solid   transparent" },
    "&:nth-child": { margin: "0   0   16px" }
  }
});
export const htmlMonthPickerVisibleMonthOption = mergeStyles({
  margin: "0   0   16px   12px"
});
export const monthPickerVisibleGoToday = mergeStyles({
  fontSize: "12px",
  height: "28px",
  lineHeight: "28px",
  padding: "0   10px",
  right: "8px",
  left: "8px"
});
export const htmlMonthPickerVisibleGoToday = mergeStyles({ textAlign: "left" });
export const monthPickerVisibleRootIsPickingYearsDayPicker = mergeStyles({
  display: "block"
});
export const monthPickerVisibleRootIsPickingYearsMonthPicker = mergeStyles({
  display: "none"
});
export const monthPickerVisibleRootIsPickingYearsYearPicker = mergeStyles({
  display: "block"
});
export const calendarsInlineWrap = mergeStyles({ padding: "12px" });
export const calendarsInlineHolder = mergeStyles({ height: "auto" });
export const htmlCalendarsInlineTable = mergeStyles({
  marginRight: "12px",
  marginLeft: "12px"
});
export const calendarsInlineDayPicker = mergeStyles({ width: "auto" });
export const htmlCalendarsInlineMonthPicker = mergeStyles({
  marginLeft: "12px",
  marginRight: "12px"
});
export const htmlCalendarsInlineYearPicker = mergeStyles({
  marginLeft: "12px",
  marginRight: "12px"
});
export const calendarsInlineGoToday = mergeStyles({
  padding: "0   10px",
  right: "14px",
  left: "14px"
});
export const htmlCalendarsInlineMonthComponents = mergeStyles({
  marginRight: "12px",
  marginLeft: "12px"
});
export const monthPickerOnlyWrap = mergeStyles({ padding: "12px" });
export const monthPickerAsOverlayWrap = mergeStyles({
  paddingBottom: "28px",
  marginBottom: "6px"
});
export const monthPickerAsOverlayHolder = mergeStyles({
  height: "240px",
  minHeight: "240px"
});
export const monthPickerAsOverlayHolderWithButton = mergeStyles({
  paddingTop: "6px",
  height: "auto"
});
export const calendarsInlineMonthPicker = mergeStyles({ display: "none" });
export const monthIsHighlighted = mergeStyles({
  fontWeight: "600",
  color: "highlight",
  backgroundColor: "'[theme:themeLight, default: #c7e0f4]'",
  border: "2px   solid   highlight",
  borderRadius: "2px",
  selectors: { "&:hover": { outline: "0" } }
});
export const monthIsCurrentMonth = mergeStyles({
  fontWeight: "600",
  color: "'[theme:white, default: #ffffff]'",
  backgroundColor: "'[theme:themePrimary, default: #0078d4]'"
});
export const yearIsHighlighted = mergeStyles({
  fontWeight: "600",
  color: "'[theme:neutralPrimary, default: #323130]'"
});
export const yearIsHighlightedYearOption = mergeStyles({
  selectors: {
    "&:hover": { backgroundColor: "'[theme:themeLight, default: #c7e0f4]'" }
  }
});
export const yearIsCurrentYear = mergeStyles({
  fontWeight: "600",
  color: "'[theme:white, default: #ffffff]'",
  backgroundColor: "'[theme:themePrimary, default: #0078d4]'"
});
export const yearOption = mergeStyles({
  selectors: {
    "&:active": {
      backgroundColor: "'[theme:themeLight, default: #c7e0f4]'",
      color: "'[theme:neutralDark, default: #201f1e]'"
    }
  }
});
export const topLeftCornerDate = mergeStyles({ borderTopLeftRadius: "2px" });
export const topRightCornerDate = mergeStyles({ borderTopRightRadius: "2px" });
export const bottomLeftCornerDate = mergeStyles({
  borderBottomLeftRadius: "2px"
});
export const bottomRightCornerDate = mergeStyles({
  borderBottomRightRadius: "2px"
});
export const weekBackground = mergeStyles({
  borderTop: "1px   solid   highlight",
  borderBottom: "1px   solid   highlight"
});
export const weekBackgroundBottomRightCornerDateTopRightCornerDate = mergeStyles(
  {
    borderRight: "1px   solid   highlight",
    borderLeft: "none",
    paddingLeft: "1px"
  }
);
export const weekBackgroundBottomLeftCornerDateTopLeftCornerDate = mergeStyles({
  borderLeft: "1px   solid   highlight",
  borderRight: "none",
  paddingRight: "1px"
});
export const weekBackgroundSpan = mergeStyles({
  selectors: { "&:not": { color: "highlight" } }
});
export const weekSelectionDayHover = mergeStyles({
  borderTop: "1px   solid   highlight",
  borderBottom: "1px   solid   highlight"
});
export const weekSelectionDayHoverBottomLeftCornerDateTopLeftCornerDate = mergeStyles(
  { borderLeft: "1px   solid   highlight", paddingRight: "1px" }
);
export const weekSelectionDayHoverBottomRightCornerDateTopRightCornerDate = mergeStyles(
  { borderRight: "1px   solid   highlight", paddingLeft: "1px" }
);
export const weekSelectionDayHoverDayPressSpan = mergeStyles({
  selectors: { "&:not": { color: "highlight" } }
});
export const monthSelectionDayHoverBottomLeftCornerDate = mergeStyles({
  borderLeft: "1px   solid   highlight",
  paddingRight: "1px"
});
export const monthSelectionDayHoverBottomRightCornerDate = mergeStyles({
  borderRight: "1px   solid   highlight",
  paddingLeft: "1px"
});
export const monthSelectionDayIsFocusedDayHoverTopDate = mergeStyles({
  borderTop: "1px   solid   highlight",
  paddingBottom: "1px"
});
export const monthSelectionDayIsFocusedDayHoverRightDate = mergeStyles({
  borderRight: "1px   solid   highlight",
  paddingLeft: "1px"
});
export const monthSelectionDayIsFocusedDayHoverBottomDate = mergeStyles({
  borderBottom: "1px   solid   highlight",
  paddingTop: "1px"
});
export const monthSelectionDayIsFocusedDayHoverLeftdate = mergeStyles({
  borderLeft: "1px   solid   highlight",
  paddingRight: "1px"
});
export const monthSelectionDayIsFocusedDayHoverDayPressSpan = mergeStyles({
  selectors: { "&:not": { color: "highlight" } }
});
