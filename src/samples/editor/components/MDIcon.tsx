import * as React from 'react'
import {mergeStyleSets} from '@uifabric/merge-styles'

export var MDIconStylesheet = mergeStyleSets({
  link: {
      fontFamily: 'Material Icons',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 24,
      //lineHeight: 1,
      textTransform: 'none',
      letterSpacing: 'normal',
      wordWrap: 'normal',
      whiteSpace: 'nowrap',
      direction: 'ltr',
      textRendering: 'auto',
      color: "inherit",
      textDecoration: "none",
      userSelect: "none",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      overflow: "hidden",
      outline: "none",
      selectors:{
      ":hover": { 
        cursor: "pointer",
        outline: "none"
    } }
    }
})

export var MDIcon = (props) => {
    return (
        <span>
        <i className={MDIconStylesheet.link}>
            {props.iconName || props.icon || 'bug_report'}
        </i>
        </span>
        )
}
