import * as React from 'react';
import { DetailsRowBase } from './DetailsRow.base';
import { IStyle, ITheme } from '@uifabric/styling';
import { IColumn, CheckboxVisibility, IDetailsListProps } from './DetailsList.types';
import { ISelection, SelectionMode } from '@uifabric/utilities/selection/interfaces';
import { IDragDropHelper, IDragDropEvents } from '@uifabric/utilities/dragdrop/interfaces';
import { IViewport } from '@uifabric/utilities/decorators/withViewport';
import { CollapseAllVisibility } from '../GroupedList/GroupedList.types';
import { IBaseProps, IRefObject, IRenderFunction } from '@uifabric/utilities';
import { IDetailsRowCheckProps, IDetailsCheckboxProps } from './DetailsRowCheck.types';
import { IDetailsRowFieldsProps } from './DetailsRowFields.types';
import { IStyleFunctionOrObject } from '@uifabric/merge-styles';

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsRow {}

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsItemProps {
  /**
   * Column metadata
   */
  columns?: IColumn[];

  /**
   * Nesting depth of a grouping
   */
  groupNestingDepth?: number;

  /**
   * How much to indent
   */
  indentWidth?: number | undefined;

  /**
   * Selection from utilities
   */
  selection?: ISelection | undefined;

  /**
   * Selection mode
   */
  selectionMode?: SelectionMode | undefined;

  /**
   * View port of the virtualized list
   */
  viewport?: IViewport | undefined;

  /**
   * Checkbox visibility
   */
  checkboxVisibility?: CheckboxVisibility | undefined;

  /**
   * Rules for rendering column cells.
   */
  cellStyleProps?: ICellStyleProps;
}

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsRowBaseProps extends Pick<IDetailsListProps, 'onRenderItemColumn'>, IBaseProps<IDetailsRow>, IDetailsItemProps {
  /**
   * Theme provided by styled() function
   */
  theme?: ITheme;

  /**
   * Overriding styles to this row
   */
  styles?: IStyleFunctionOrObject<IDetailsRowStyleProps, IDetailsRowStyles>;

  /**
   * Ref of the component
   */
  componentRef?: IRefObject<IDetailsRow>;

  /**
   * Data source for this component
   */
  item: any;

  /**
   * Index of the collection of items of the DetailsList
   */
  itemIndex: number;

  /**
   * Whether to render in compact mode
   */
  compact?: boolean;

  /**
   * A list of events to register
   */
  eventsToRegister?: { eventName: string; callback: (item?: any, index?: number, event?: any) => void }[];

  /**
   * Callback for did mount for parent
   */
  onDidMount?: (row?: DetailsRowBase) => void;

  /**
   * Callback for will mount for parent
   */
  onWillUnmount?: (row?: DetailsRowBase) => void;

  /**
   * Callback for rendering a checkbox
   */
  onRenderCheck?: (props: IDetailsRowCheckProps) => JSX.Element;

  /**
   * If provided, can be used to render a custom checkbox
   */
  onRenderDetailsCheckbox?: IRenderFunction<IDetailsCheckboxProps>;

  /**
   * Handling drag and drop events
   */
  dragDropEvents?: IDragDropEvents;

  /**
   * Helper for the drag and drop
   */
  dragDropHelper?: IDragDropHelper;

  /**
   * Collapse all visibility
   */
  collapseAllVisibility?: CollapseAllVisibility;

  /**
   * Callback for getting the row aria label
   */
  getRowAriaLabel?: (item: any) => string;

  /**
   * Callback for getting the row aria-describedby
   */
  getRowAriaDescribedBy?: (item: any) => string;

  /**
   * Check button's aria label
   */
  checkButtonAriaLabel?: string;

  /**
   * Class name for the checkbox cell
   */
  checkboxCellClassName?: string;

  /**
   * DOM element into which to render row field
   */
  rowFieldsAs?: React.FunctionComponent<IDetailsRowFieldsProps> | React.ComponentClass<IDetailsRowFieldsProps>;

  /**
   * Overriding class name
   */
  className?: string;

  /**
   * Rerender DetailsRow only when props changed. Might cause regression when depending on external updates.
   * @defaultvalue false
   */
  useReducedRowRenderer?: boolean;
  /**
   * Optional pre-rendered content per column. Preferred over onRender or onRenderItemColumn if provided.
   */
  cellsByColumn?: {
    [columnKey: string]: React.ReactNode;
  };
}

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsRowProps extends IDetailsRowBaseProps {
  /**
   * Column metadata
   */
  columns: IColumn[];

  /**
   * Selection from utilities
   */
  selection: ISelection;

  /**
   * Selection mode
   */
  selectionMode: SelectionMode;
}

/**
 * {@docCategory DetailsList}
 */
export type IDetailsRowStyleProps = Required<Pick<IDetailsRowProps, 'theme'>> & {
  /** Whether the row is selected  */
  isSelected?: boolean;

  /** Whether there are any rows in the list selected */
  anySelected?: boolean;

  /** Whether this row can be selected */
  canSelect?: boolean;

  /** Class name of when this becomes a drop target. */
  droppingClassName?: string;

  /** Is the checkbox visible */
  isCheckVisible?: boolean;

  /** Is this a row header */
  isRowHeader?: boolean;

  /** A class name from the checkbox cell, so proper styling can be targeted */
  checkboxCellClassName?: string;

  /** CSS class name for the component */
  className?: string;

  /** Is list in compact mode */
  compact?: boolean;

  cellStyleProps?: ICellStyleProps;
};

/**
 * {@docCategory DetailsList}
 */
export interface ICellStyleProps {
  cellLeftPadding: number;
  cellRightPadding: number;
  cellExtraRightPadding: number;
}

/**
 * {@docCategory DetailsList}
 */
export interface IDetailsRowStyles {
  root: IStyle;
  cell: IStyle;
  cellUnpadded: IStyle;
  cellPadded: IStyle;
  checkCell: IStyle;
  isRowHeader: IStyle;
  isMultiline: IStyle;
  fields: IStyle;
  cellMeasurer: IStyle;
  checkCover: IStyle;
  check: IStyle;
}
