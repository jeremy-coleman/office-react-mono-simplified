import { concatStyleSets, HighContrastSelector, ITheme } from '@uifabric/styling';
import { IRefObject, ISelection, IStyleFunction, styled } from '@uifabric/utilities';
import * as React from 'react';
import { MarqueeSelectionBase } from './MarqueeSelection.base';

/**
 * {@docCategory MarqueeSelection}
 */
export interface IMarqueeSelection {}

/**
 * {@docCategory MarqueeSelection}
 */
export interface IMarqueeSelectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional callback to access the IMarqueeSelection interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<IMarqueeSelection>;

  /**
   * The selection object to interact with when updating selection changes.
   */
  selection: ISelection;

  /**
   * Optional props to mix into the root DIV element.
   */
  rootProps?: React.HTMLAttributes<HTMLDivElement>;

  /**
   * Optional callback that is called, when the mouse down event occurs, in order to determine
   * if we should start a marquee selection. If true is returned, we will cancel the mousedown
   * event to prevent upstream mousedown handlers from executing.
   */
  onShouldStartSelection?: (ev: MouseEvent) => boolean;

  /**
   * Optional flag to control the enabled state of marquee selection. This allows you to render
   * it and have events all ready to go, but conditionally disable it. That way transitioning
   * between enabled/disabled generate no difference in the DOM.
   * @defaultvalue true
   */
  isEnabled?: boolean;

  /**
   * Optional flag to restrict the drag rect to the root element, instead of allowing the drag
   * rect to start outside of the root element boundaries.
   * @defaultvalue false
   */
  isDraggingConstrainedToRoot?: boolean;

  /**
   * Additional CSS class(es) to apply to the MarqueeSelection.
   */
  className?: string;

  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunction<IMarqueeSelectionStyleProps, IMarqueeSelectionStyles>;
}

/**
 * {@docCategory MarqueeSelection}
 */
export interface IMarqueeSelectionStyleProps {
  theme: ITheme;
  className?: string;
}

const getMarqueeSelectionStylesStyles = (props: IMarqueeSelectionStyleProps) => {
  const { theme, className } = props;
  const { palette } = theme;

  return concatStyleSets({
    root: [
      className,
      {
        position: 'relative',
        cursor: 'default'
      }
    ],
    dragMask: [
      {
        position: 'absolute',
        background: 'rgba(255, 0, 0, 0)',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        selectors: {
          [HighContrastSelector]: {
            background: 'none',
            backgroundColor: 'transparent'
          }
        }
      }
    ],
    box: [
      {
        position: 'absolute',
        boxSizing: 'border-box',
        border: `1px solid ${palette.themePrimary}`,
        pointerEvents: 'none',
        zIndex: 10,
        selectors: {
          [HighContrastSelector]: {
            borderColor: 'Highlight'
          }
        }
      }
    ],
    boxFill: [
      {
        position: 'absolute',
        boxSizing: 'border-box',
        backgroundColor: palette.themePrimary,
        opacity: 0.1,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        selectors: {
          [HighContrastSelector]: {
            background: 'none',
            backgroundColor: 'transparent'
          }
        }
      }
    ]
  })
};

export type IMarqueeSelectionStyles = ReturnType<typeof getMarqueeSelectionStylesStyles>


export const MarqueeSelection: React.FunctionComponent<IMarqueeSelectionProps> = styled(MarqueeSelectionBase, getMarqueeSelectionStylesStyles, undefined, {
  scope: 'MarqueeSelection'
});
