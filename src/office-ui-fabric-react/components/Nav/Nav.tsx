import { AnimationClassNames, concatStyleSets, DefaultFontStyles, FontSizes, FontWeights, getFocusStyle, getGlobalClassNames, ZIndexes } from '@uifabric/styling';
import { classNamesFunction, divProperties, getNativeProps, getWindow, styled } from '@uifabric/utilities';
import * as React from 'react';
import { ActionButton, IButtonStyles } from '../Button';
import { FocusZone, FocusZoneDirection } from '../FocusZone';
import { Icon } from '../Icon';
import { INav, INavLink, INavLinkGroup, INavProps, INavStyleProps } from './Nav.types';

const GlobalClassNames = {
  root: 'ms-Nav',
  linkText: 'ms-Nav-linkText',
  compositeLink: 'ms-Nav-compositeLink',
  link: 'ms-Nav-link',
  chevronButton: 'ms-Nav-chevronButton',
  chevronIcon: 'ms-Nav-chevron',
  navItem: 'ms-Nav-navItem',
  navItems: 'ms-Nav-navItems',
  group: 'ms-Nav-group',
  groupContent: 'ms-Nav-groupContent'
};


const buttonStyles: IButtonStyles = {
  textContainer: {
    overflow: 'hidden'
  },
  label: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    lineHeight: '36px'
  }
};

export const getNavStyles = (props: INavStyleProps) => {
  const {
    className,
    theme,
    isOnTop,
    isExpanded,
    isGroup,
    isLink,
    isSelected,
    isDisabled,
    isButtonEntry,
    navHeight = 36,
    position,
    leftPadding = 20,
    leftPaddingExpanded = 28,
    rightPadding = 20
  } = props;

  const { palette, semanticColors } = theme;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return concatStyleSets({
    root: [
      classNames.root,
      className,
      theme.fonts.medium,
      {
        overflowY: 'auto',
        userSelect: 'none',
        WebkitOverflowScrolling: 'touch'
      },
      isOnTop && [
        {
          position: 'absolute'
        },
        AnimationClassNames.slideRightIn40
      ]
    ],
    linkText: [
      classNames.linkText,
      {
        margin: '0 4px',
        overflow: 'hidden',
        verticalAlign: 'middle',
        textAlign: 'left',
        textOverflow: 'ellipsis'
      }
    ],
    compositeLink: [
      classNames.compositeLink,
      {
        display: 'block',
        position: 'relative',
        color: semanticColors.bodyText,
        backgroundColor: semanticColors.bodyBackground
      },
      isExpanded && 'is-expanded',
      isSelected && 'is-selected',
      isDisabled && 'is-disabled',
      isDisabled && {
        color: semanticColors.disabledText
      }
    ],
    link: [
      classNames.link,
      getFocusStyle(theme),
      {
        display: 'block',
        position: 'relative',
        height: `${navHeight}px`,
        width: '100%',
        lineHeight: `${navHeight}px`,
        textDecoration: 'none',
        cursor: 'pointer',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        paddingLeft: leftPadding,
        paddingRight: rightPadding,
        color: semanticColors.bodyText,
        selectors: !isDisabled
          ? {
              '.ms-Nav-compositeLink:hover &': {
                backgroundColor: palette.neutralLighterAlt,
                color: semanticColors.bodyText
              }
            }
          : {}
      },
      isSelected && {
        color: palette.themePrimary,
        backgroundColor: palette.neutralLighter,
        selectors: {
          '&:after': {
            borderLeft: `2px solid ${palette.themePrimary}`,
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            pointerEvents: 'none'
          }
        }
      },
      isDisabled && {
        color: semanticColors.disabledText
      },
      isButtonEntry && {
        color: palette.themePrimary
      }
    ],
    chevronButton: [
      classNames.chevronButton,
      getFocusStyle(theme),
      {
        display: 'block',
        fontWeight: FontWeights.regular,
        fontSize: FontSizes.small,
        textAlign: 'left',
        lineHeight: `${navHeight}px`,
        margin: '5px 0',
        padding: `0px, ${rightPadding}px, 0px, ${leftPaddingExpanded}px`,
        border: 'none',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        cursor: 'pointer',
        color: semanticColors.bodyText,
        backgroundColor: 'transparent',
        selectors: {
          '&:visited': {
            color: 'inherit'
          },
          '&:hover': {
            color: semanticColors.bodyText,
            backgroundColor: palette.neutralLighterAlt
          },
          '$compositeLink:hover &': {
            color: semanticColors.bodyText,
            backgroundColor: palette.neutralLighterAlt
          }
        }
      },
      isGroup && [
        {
          width: '100%',
          height: `${navHeight}px`,
          borderBottom: `1px solid ${semanticColors.bodyDivider}`
        },
        DefaultFontStyles.large
      ],
      isLink && [
        {
          display: 'block',
          width: `${leftPaddingExpanded - 2}px`,
          height: `${navHeight - 2}px`,
          position: 'absolute',
          top: '1px',
          left: `${position}px`,
          zIndex: ZIndexes.Nav,
          padding: 0,
          margin: 0
        }
      ],
      isSelected && {
        color: palette.themePrimary,
        backgroundColor: palette.neutralLighterAlt,
        selectors: {
          '&:after': {
            borderLeft: `2px solid ${palette.themePrimary}`,
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            pointerEvents: 'none'
          }
        }
      }
    ],
    chevronIcon: [
      classNames.chevronIcon,
      {
        position: 'absolute',
        left: '8px',
        height: `${navHeight}px`,
        lineHeight: `${navHeight}px`,
        fontSize: '12px',
        transition: 'transform .1s linear'
      },
      isExpanded && {
        transform: 'rotate(-180deg)'
      },
      isLink && {
        top: 0
      }
    ],
    navItem: [
      classNames.navItem,
      {
        padding: 0
      }
    ],
    navItems: [
      classNames.navItems,
      {
        listStyleType: 'none',
        padding: 0
      }
    ],
    group: [classNames.group, isExpanded && 'is-expanded'],
    groupContent: [
      classNames.groupContent,
      {
        display: 'none',
        marginBottom: '40px'
      },
      AnimationClassNames.slideDownIn20,
      isExpanded && {
        display: 'block'
      }
    ]
  })
};



// The number pixels per indentation level for Nav links.
const _indentationSize = 14;

// The number of pixels of left margin
const _baseIndent = 3;

// global var used in _isLinkSelectedKey
let _urlResolver: HTMLAnchorElement | undefined;

export function isRelativeUrl(url: string): boolean {
  // A URL is relative if it has no protocol.
  return !!url && !/^[a-z0-9+-.]:\/\//i.test(url);
}

const getClassNames = classNamesFunction<INavStyleProps, INavStyles>();

export interface INavState {
  isGroupCollapsed: { [key: string]: boolean };
  isLinkExpandStateChanged?: boolean;
  selectedKey?: string;
}

export class NavBase extends React.Component<INavProps, INavState> implements INav {
  public static defaultProps: INavProps = {
    groups: null
  };

  constructor(props: INavProps) {
    super(props);

    this.state = {
      isGroupCollapsed: {},
      isLinkExpandStateChanged: false,
      selectedKey: props.initialSelectedKey || props.selectedKey
    };
  }

  public render(): JSX.Element | null {
    const { styles, groups, className, isOnTop, theme } = this.props;

    if (!groups) {
      return null;
    }

    const groupElements: React.ReactElement<{}>[] = groups.map(this._renderGroup);

    const classNames = getClassNames(styles!, { theme: theme!, className, isOnTop, groups });

    return (
      <FocusZone direction={FocusZoneDirection.vertical}>
        <nav role="navigation" className={classNames.root} aria-label={this.props.ariaLabel}>
          {groupElements}
        </nav>
      </FocusZone>
    );
  }

  public get selectedKey(): string | undefined {
    return this.state.selectedKey;
  }

  private _onRenderLink = (link: INavLink): JSX.Element => {
    const { styles, groups, theme } = this.props;
    const classNames = getClassNames(styles!, { theme: theme!, groups });
    return <div className={classNames.linkText}>{link.name}</div>;
  };

  private _renderNavLink(link: INavLink, linkIndex: number, nestingLevel: number): JSX.Element {
    const { styles, groups, theme, onRenderLink = this._onRenderLink, linkAs: LinkAs = ActionButton } = this.props;
    const isLinkWithIcon = link.icon || link.iconProps;
    const classNames = getClassNames(styles!, {
      theme: theme!,
      isSelected: this._isLinkSelected(link),
      isDisabled: link.disabled,
      isButtonEntry: link.onClick && !link.forceAnchor,
      leftPadding: _indentationSize * nestingLevel + _baseIndent + (isLinkWithIcon ? 0 : 24),
      groups
    });

    // Prevent hijacking of the parent window if link.target is defined
    const rel = link.url && link.target && !isRelativeUrl(link.url) ? 'noopener noreferrer' : undefined;

    return (
      <LinkAs
        className={classNames.link}
        styles={buttonStyles}
        href={link.url || (link.forceAnchor ? 'javascript:' : undefined)}
        iconProps={link.iconProps || { iconName: link.icon }}
        onClick={link.onClick ? this._onNavButtonLinkClicked.bind(this, link) : this._onNavAnchorLinkClicked.bind(this, link)}
        title={link.title || link.name}
        target={link.target}
        rel={rel}
        disabled={link.disabled}
        aria-label={link.ariaLabel}
      >
        {onRenderLink(link, this._onRenderLink)}
      </LinkAs>
    );
  }

  private _renderCompositeLink(link: INavLink, linkIndex: number, nestingLevel: number): React.ReactElement<{}> {
    const divProps: React.HTMLProps<HTMLDivElement> = { ...getNativeProps(link, divProperties, ['onClick']) };
    const { styles, groups, theme } = this.props;
    const classNames = getClassNames(styles!, {
      theme: theme!,
      isExpanded: !!link.isExpanded,
      isSelected: this._isLinkSelected(link),
      isLink: true,
      isDisabled: link.disabled,
      position: _indentationSize * nestingLevel + 1,
      groups
    });

    return (
      <div {...divProps} key={link.key || linkIndex} className={classNames.compositeLink}>
        {link.links && link.links.length > 0 ? (
          <button
            className={classNames.chevronButton}
            onClick={this._onLinkExpandClicked.bind(this, link)}
            aria-label={this.props.expandButtonAriaLabel}
            aria-expanded={link.isExpanded ? 'true' : 'false'}
          >
            <Icon className={classNames.chevronIcon} iconName="ChevronDown" />
          </button>
        ) : null}
        {this._renderNavLink(link, linkIndex, nestingLevel)}
      </div>
    );
  }

  private _renderLink(link: INavLink, linkIndex: number, nestingLevel: number): React.ReactElement<{}> {
    const { styles, groups, theme } = this.props;
    const classNames = getClassNames(styles!, { theme: theme!, groups });

    return (
      <li key={link.key || linkIndex} role="listitem" className={classNames.navItem}>
        {this._renderCompositeLink(link, linkIndex, nestingLevel)}
        {link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null}
      </li>
    );
  }

  private _renderLinks(links: INavLink[] | undefined, nestingLevel: number): React.ReactElement<{}> | null {
    if (!links || !links.length) {
      return null;
    }
    const linkElements: React.ReactElement<{}>[] = links.map((link: INavLink, linkIndex: number) =>
      this._renderLink(link, linkIndex, nestingLevel)
    );

    const { styles, groups, theme } = this.props;
    const classNames = getClassNames(styles!, { theme: theme!, groups });

    return (
      <ul role="list" className={classNames.navItems}>
        {linkElements}
      </ul>
    );
  }

  private _renderGroup = (group: INavLinkGroup, groupIndex: number): React.ReactElement<{}> => {
    const { styles, groups, theme, onRenderGroupHeader = this._renderGroupHeader } = this.props;
    const classNames = getClassNames(styles!, {
      theme: theme!,
      isGroup: true,
      isExpanded: this._isGroupExpanded(group),
      groups
    });

    return (
      <div key={groupIndex} className={classNames.group}>
        {group.name ? onRenderGroupHeader(group, this._renderGroupHeader) : null}
        <div className={classNames.groupContent}>{this._renderLinks(group.links, 0 /* nestingLevel */)}</div>
      </div>
    );
  };

  private _renderGroupHeader = (group: INavLinkGroup): React.ReactElement<{}> => {
    const { styles, groups, theme, expandButtonAriaLabel } = this.props;
    const classNames = getClassNames(styles!, {
      theme: theme!,
      isGroup: true,
      isExpanded: this._isGroupExpanded(group),
      groups
    });

    return (
      <button
        className={classNames.chevronButton}
        onClick={this._onGroupHeaderClicked.bind(this, group)}
        aria-label={expandButtonAriaLabel}
        aria-expanded={this._isGroupExpanded(group)}
      >
        <Icon className={classNames.chevronIcon} iconName="ChevronDown" />
        {group.name}
      </button>
    );
  };

  private _onGroupHeaderClicked(group: INavLinkGroup, ev: React.MouseEvent<HTMLElement>): void {
    if (group.onHeaderClick) {
      group.onHeaderClick(ev, this._isGroupExpanded(group));
    }

    this._toggleCollapsed(group);

    ev.preventDefault();
    ev.stopPropagation();
  }

  private _onLinkExpandClicked(link: INavLink, ev: React.MouseEvent<HTMLElement>): void {
    const { onLinkExpandClick } = this.props;

    if (onLinkExpandClick) {
      onLinkExpandClick(ev, link);
    }

    if (!ev.defaultPrevented) {
      link.isExpanded = !link.isExpanded;
      this.setState({ isLinkExpandStateChanged: true });
    }

    ev.preventDefault();
    ev.stopPropagation();
  }

  private _onNavAnchorLinkClicked(link: INavLink, ev: React.MouseEvent<HTMLElement>): void {
    if (this.props.onLinkClick) {
      this.props.onLinkClick(ev, link);
    }
    if (!link.url && link.links && link.links.length > 0) {
      this._onLinkExpandClicked(link, ev);
    }

    this.setState({ selectedKey: link.key });
  }

  private _onNavButtonLinkClicked(link: INavLink, ev: React.MouseEvent<HTMLElement>): void {
    if (link.onClick) {
      link.onClick(ev, link);
    }
    if (!link.url && link.links && link.links.length > 0) {
      this._onLinkExpandClicked(link, ev);
    }

    this.setState({ selectedKey: link.key });
  }

  private _isLinkSelected(link: INavLink): boolean {
    // if caller passes in selectedKey, use it as first choice or
    // if current state.selectedKey (from addressbar) is match to the link or
    // check if URL is matching location.href (if link.url exists)
    if (this.props.selectedKey !== undefined) {
      return link.key === this.props.selectedKey;
    } else if (this.state.selectedKey !== undefined) {
      return link.key === this.state.selectedKey;
    } else if (typeof getWindow() === 'undefined' || !link.url) {
      // resolve is not supported for ssr
      return false;
    } else {
      // If selectedKey is undefined in props and state, then check URL
      _urlResolver = _urlResolver || document.createElement('a');

      _urlResolver.href = link.url || '';
      const target: string = _urlResolver.href;

      if (location.href === target) {
        return true;
      }

      // If selectedKey is not defined in state, then check URL to determine link selected status
      if (location.protocol + '//' + location.host + location.pathname === target) {
        return true;
      }

      if (location.hash) {
        // Match the hash to the url.
        if (location.hash === link.url) {
          return true;
        }

        // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
        _urlResolver.href = location.hash.substring(1);

        return _urlResolver.href === target;
      }
    }

    return false;
  }

  private _isGroupExpanded(group: INavLinkGroup): boolean {
    if (group.name && this.state.isGroupCollapsed.hasOwnProperty(group.name)) {
      return !this.state.isGroupCollapsed[group.name];
    }
    if (group.collapseByDefault !== undefined) {
      return !group.collapseByDefault;
    }
    return true;
  }

  private _toggleCollapsed(group: INavLinkGroup): void {
    if (group.name) {
      const newGroupCollapsed = {
        ...this.state.isGroupCollapsed, // Make a copy in order to not modify state
        [group.name]: this._isGroupExpanded(group) // sic - presently open will be collapsed after setState
      };
      this.setState({ isGroupCollapsed: newGroupCollapsed });
    }
  }
}

/**
 * {@docCategory Nav}
 */
export type INavStyles = ReturnType<typeof getNavStyles>

export const Nav: React.FunctionComponent<INavProps> = styled<INavProps, INavStyleProps, INavStyles>(NavBase, getNavStyles, undefined, {
  scope: 'Nav'
});
