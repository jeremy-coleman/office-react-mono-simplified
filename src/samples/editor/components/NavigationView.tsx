import { concatStyleSets, getTheme, mergeStyleSets } from "@uifabric/styling";
import { css, memoizeFunction } from "@uifabric/utilities";
import { ContextualMenu, DirectionalHint, Icon, IContextualMenuItem } from "office-ui-fabric-react";
import * as React from "react";

const createNavigationViewStyles = (additionalClassNames = '') => {
  //memoizeFunction((theme = getTheme(), customStyles?, className?)
  let memoStyles = memoizeFunction((theme) => concatStyleSets({
    root: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    menu: {
      zIndex: 2,
      width: 40,
      left: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      transition: "width 0.2s",
      backgroundColor: theme.palette.neutralDark,
      selectors: {
        "&.open": {
          width: 200,
          backgroundColor: theme.palette.neutralDark,
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.4)"
        },
        "&.inline": {
          boxShadow: "none"
        }
      }
    },
    menuGlass: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      background: "transparent"
    },
    menuContent: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 2,
      background: "transparent"
    },
    menuContentNear: {
      position: "absolute",
      top: 40,
      left: 0,
      right: 0
    },
    menuContentFar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    menuItemContainer: {},
    menuItem: {
      outline: "none",
      border: "none",
      padding: 0,
      margin: 0,
      background: "transparent",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      minHeight: 40,
      width: "100%",
      overflow: "hidden",
      color: theme.palette.white,
      cursor: "pointer",
      selectors: {
        ":hover": {
          backgroundColor: theme.palette.neutralPrimary
        },
        "&.active": {
          backgroundColor: theme.palette.neutralPrimary
        }
      }
    },
    menuItemTitleContainer: {
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    menuItemIconContainer: {
      width: 40,
      minWidth: 40,
      height: 40,
      minHeight: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    menuItemIconAlt: {
      fontSize: "xx-small"
    },
    main: {
      zIndex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "auto",
      transition: "left 0.2s",
      selectors: {
        "&.hasMenu": {
          left: 40
        },
        "&.menuInlineOffset": {
          left: 200
        }
      }
    },
    title: {}
  }))

  let styles = memoStyles(getTheme())

  return mergeStyleSets({
    root: ["navigation-view", additionalClassNames, styles.root],
    menu: ["navigation-view-menu", styles.menu],
    menuGlass: ["navigation-view-menu-glass", styles.menuGlass],
    menuContent: ["navigation-view-menu-content", styles.menuContent],
    title: ["navigation-view-title", styles.title],
    menuContentNear: ["navigation-view-menu-content-near", styles.menuContentNear],
    menuContentFar: ["navigation-view-menu-far", styles.menuContentFar],
    menuItemContainer: ["navigation-view-menu-item-container", styles.menuItemContainer],
    menuItem: ["navigation-view-menu-item", styles.menuItem],
    menuItemTitleContainer: ["navigation-view-menu-item-title-container", styles.menuItemTitleContainer],
    menuItemIconContainer: ["navigation-view-menu-item-icon-container", styles.menuItemIconContainer],
    menuItemIconAlt: ["navigation-view-menu-item-icon-alt", styles.menuItemIconAlt],
    main: ["navigation-view-main", styles.main]
  })

  //return mergeStyleSets(styles)
}

const NavigationViewStylesheet = createNavigationViewStyles()
type INavigationViewStylesheet = ReturnType<typeof createNavigationViewStyles>

interface INavigationViewProps {
  title?: any
  className?: string
  menuOpen?: boolean
  menuInline?: boolean
  items?: IContextualMenuItem[]
  farItems?: IContextualMenuItem[]
  onMenuOpenChange?: (open: boolean) => void
  root?: boolean
}

interface INavigationViewMenuItemProps {
  item: IContextualMenuItem
  open: boolean
  onClickItem?: (e: React.MouseEvent<HTMLElement>, item: IContextualMenuItem) => void
}

interface INavigationViewMenuItemState {
  menuOpen: boolean
}


const NavigationViewMenuItem = (props: INavigationViewMenuItemProps) => {
  var ref = React.useRef<HTMLDivElement>()
  const [menuOpen, setMenuOpen] = React.useState(false)

  var toggleMenu = () => setMenuOpen(!menuOpen)
  
  var _onClick = (e) => {
    if (props.item.onClick) {
      props.item.onClick(e, props.item)
      if (props.onClickItem) {
        props.onClickItem(e, props.item)
      }
    } else if (props.item.subMenuProps) {
      toggleMenu()
    }
  }

  var _onDismiss = () => {
    setMenuOpen(false)
  }

    const item = props.item
    return (
      <div role="menuitem" className={NavigationViewStylesheet.menuItemContainer} ref={ref}>
        <button
          key={item.key}
          type="button"
          disabled={item.disabled}
          className={css(NavigationViewStylesheet.menuItem, { active: item.checked })}
          title={props.open ? undefined : item.name}
          onClick={_onClick}
        >
          <div className={NavigationViewStylesheet.menuItemIconContainer}>
            {item.iconProps ? (
              <Icon {...item.iconProps} />
            ) : !props.open ? (
              <div className={NavigationViewStylesheet.menuItemIconAlt}>{item.name}</div>
            ) : (
              undefined
            )}
          </div>
          {props.open && <div className={NavigationViewStylesheet.menuItemTitleContainer}>{item.name}</div>}
        </button>
        {menuOpen && (
          <ContextualMenu
            {...props.item.subMenuProps}
            isBeakVisible={true}
            directionalHint={DirectionalHint.rightCenter}
            target={ref.current}
            onDismiss={_onDismiss}
          />
        )}
      </div>
    )
}

interface INavigationViewMenuControlProps {
  open: boolean
  title?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}


const NavigationViewMenuControl = (props: INavigationViewMenuControlProps) => {
  return (
    <button
      type="button"
      className={NavigationViewStylesheet.menuItem}
      onClick={props.onClick}
      title={props.open ? "Close Menu" : "Open Menu"}
    >
      <div className={NavigationViewStylesheet.menuItemIconContainer}>
        <Icon iconName="GlobalNavButton" />
      </div>
      {props.open && <div className={NavigationViewStylesheet.menuItemTitleContainer}>{props.title}</div>}
    </button>
  )
}

interface INavigationViewState {
  menuOpen?: boolean
  menuTransition?: boolean
  mainTransition?: boolean
}

class NavigationView extends React.Component<INavigationViewProps, INavigationViewState> {
  constructor(props: INavigationViewProps) {
    super(props)
    this.state = {
      menuOpen: this.props.menuOpen !== undefined ? this.props.menuOpen : false,
      menuTransition: false,
      mainTransition: false
    }
  }
  componentWillReceiveProps(nextProps: INavigationViewProps) {
    if (nextProps.menuOpen !== undefined && nextProps.menuOpen !== this.state.menuOpen) {
      this.menuOpen = nextProps.menuOpen
    }
  }
  get menuOpen() {
    return this.state.menuOpen
  }
  set menuOpen(value: boolean) {
    this.setState({ menuOpen: value, menuTransition: true, mainTransition: this.props.menuInline ? true : false })
  }
  private _onMainMouseDown = () => {
    if (this.menuOpen) {
      this.menuOpen = false
    }
  }
  private _onClickControl = () => {
    this.menuOpen = !this.menuOpen
  }
  protected _renderMenuControl(): React.ReactNode {
    return (
      <NavigationViewMenuControl
        open={this.state.menuOpen}
        title={this.props.title}
        onClick={this._onClickControl}
      />
    )
  }
  protected _onMenuItemClicked = (e, item) => {}

  protected _renderMenuItem = (item: IContextualMenuItem, idx?: number): React.ReactNode => {
    return (
      <NavigationViewMenuItem
        item={item}
        key={item.key}
        open={this.state.menuOpen}
        //classNames={NavigationViewStylesheet}
        onClickItem={this._onMenuItemClicked}
      />
    )
  }
  protected _renderMenuContentNear(): React.ReactNode {
    const items = this.props.items
    if (items && items.length > 0) {
      const itemViews = items.map(this._renderMenuItem)
      return <div className={NavigationViewStylesheet.menuContentNear}>{itemViews}</div>
    }
    return null
  }
  protected _renderMenuContentFar(): React.ReactNode {
    const items = this.props.farItems
    if (items && items.length > 0) {
      const itemViews = items.map(this._renderMenuItem)
      return <div className={NavigationViewStylesheet.menuContentFar}>{itemViews}</div>
    }
    return null
  }
  private _notifyMenuOpenChange = () => {
    if (this.props.onMenuOpenChange && !this.state.menuTransition && !this.state.mainTransition) {
      this.props.onMenuOpenChange(this.state.menuOpen)
    }
  }
  private _onMenuTransitionEnd = () => {
    this.setState({ menuTransition: false }, this._notifyMenuOpenChange)
  }
  protected get hasMenu() {
    return (this.props.items && this.props.items.length > 0) || (this.props.farItems && this.props.farItems.length > 0)
  }
  protected _renderMenu(): React.ReactNode {
    if (this.hasMenu) {
      return (
        <nav
          role="menubar"
          className={css(NavigationViewStylesheet.menu, {
            open: this.state.menuOpen,
            inline: this.props.menuInline,
            rootView: this.props.root
          })}
          onTransitionEnd={this._onMenuTransitionEnd}
          aria-expanded={this.state.menuOpen && !this.state.menuTransition}
        >
          <div className={NavigationViewStylesheet.menuGlass} />
          <div className={css(NavigationViewStylesheet.menuContent)}>
            {this._renderMenuControl()}
            {this._renderMenuContentNear()}
            {this._renderMenuContentFar()}
          </div>
        </nav>
      )
    }
    return null
  }
  private _onMainTransitionEnd = () => {
    this.setState({ mainTransition: false }, this._notifyMenuOpenChange)
  }
  protected _renderMain(): React.ReactNode {
    return (
      <div
        role="main"
        className={css(NavigationViewStylesheet.main, {
          menuInlineOffset: this.state.menuOpen && this.props.menuInline,
          hasMenu: this.hasMenu,
          rootView: this.props.root
        })}
        onMouseDown={!this.props.menuInline ? this._onMainMouseDown : undefined}
        onTransitionEnd={this.props.menuInline ? this._onMainTransitionEnd : undefined}
      >
        {this.props.children}
      </div>
    )
  }
  render() {
    return (
      <div className={css(NavigationViewStylesheet.root, { menuOpen: this.state.menuOpen, rootView: this.props.root })}>
        {this._renderMenu()}
        {this._renderMain()}
      </div>
    )
  }
}

export { INavigationViewProps, INavigationViewState, NavigationView };




// const NavigationView = (props: NavigationViewProps) => {
//   const [menuOpen, setMenuOpen] = React.useState(false)
//   const [menuTransition, setMenuTransition] = React.useState(false)
//   const [mainTransition, setMainTransition] = React.useState(false)

//   var handleMenuOpen = (value) => {
//     setMenuOpen(value), 
//     setMenuTransition(true), 
//     props.menuInline ? setMainTransition(true) : setMainTransition(false)
//   }
  

//   React.useEffect(() => {
//     setMenuOpen(props.menuOpen)
//   })



//   var _onMainMouseDown = () => {
//     if (menuOpen) {
//       setMenuOpen(false)
//     }
//   }

//   var _onClickControl = () => {
//     setMenuOpen(!menuOpen)
//   }

//   var _renderMenuControl = (): React.ReactNode => {
//     return (
//       <NavigationViewMenuControl
//         open={menuOpen}
//         title={props.title}
//         onClick={_onClickControl}
//       />
//     )
//   }
//   var _onMenuItemClicked = (e, item) => {}

//   var _renderMenuItem = (item: IContextualMenuItem, idx?: number): React.ReactNode => {
//     return (
//       <NavigationViewMenuItem
//         item={item}
//         key={item.key}
//         open={menuOpen}
//         //classNames={NavigationViewStylesheet}
//         onClickItem={_onMenuItemClicked}
//       />
//     )
//   }
//   var _renderMenuContentNear = (): React.ReactNode => {
//     const items = props.items
//     if (items && items.length > 0) {
//       const itemViews = items.map(_renderMenuItem)
//       return <div className={NavigationViewStylesheet.menuContentNear}>{itemViews}</div>
//     }
//     return null
//   }
//   var _renderMenuContentFar = (): React.ReactNode => {
//     const items = props.farItems
//     if (items && items.length > 0) {
//       const itemViews = items.map(_renderMenuItem)
//       return <div className={NavigationViewStylesheet.menuContentFar}>{itemViews}</div>
//     }
//     return null
//   }
//   var _notifyMenuOpenChange = () => {
//     if (props.onMenuOpenChange && !menuTransition && !mainTransition) {
//       props.onMenuOpenChange(menuOpen)
//     }
//   }
//   var _onMenuTransitionEnd = () => {
//     setMenuTransition(false), _notifyMenuOpenChange
//   }

//   var hasMenu = (props.items && props.items.length > 0) || (props.farItems && props.farItems.length > 0)
  
//   var _renderMenu = (): React.ReactNode => {
//     if (hasMenu) {
//       return (
//         <nav
//           role="menubar"
//           className={css(NavigationViewStylesheet.menu, {
//             open: menuOpen,
//             inline: props.menuInline,
//             rootView: props.root
//           })}
//           onTransitionEnd={_onMenuTransitionEnd}
//           aria-expanded={menuOpen && !menuTransition}
//         >
//           <div className={NavigationViewStylesheet.menuGlass} />
//           <div className={css(NavigationViewStylesheet.menuContent)}>
//             {_renderMenuControl()}
//             {_renderMenuContentNear()}
//             {_renderMenuContentFar()}
//           </div>
//         </nav>
//       )
//     }
//     return null
//   }

//   var _onMainTransitionEnd = () => {
//     setMainTransition(false), _notifyMenuOpenChange
//   }

//   var _renderMain = (): React.ReactNode => {
//     return (
//       <div
//         role="main"
//         className={css(NavigationViewStylesheet.main, {
//           menuInlineOffset: menuOpen && props.menuInline,
//           hasMenu: hasMenu,
//           rootView: props.root
//         })}
//         onMouseDown={!props.menuInline ? _onMainMouseDown : undefined}
//         onTransitionEnd={props.menuInline ? _onMainTransitionEnd : undefined}
//       >
//         {props.children}
//       </div>
//     )
//   }

//     return (
//       <div className={css(NavigationViewStylesheet.root, { menuOpen: menuOpen, rootView: props.root })}>
//         {_renderMenu()}
//         {_renderMain()}
//       </div>
//     )
  
// }