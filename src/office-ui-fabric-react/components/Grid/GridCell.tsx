import * as React from 'react';
import { css, getId } from '@uifabric/utilities';
import { IGridCellProps } from './GridCell.types';
import { CommandButton } from '../../components';

export class GridCell<T, P extends IGridCellProps<T>> extends React.Component<P, {}> {
  public static defaultProps = {
    disabled: false,
    id: getId('gridCell')
  };

  public render(): JSX.Element {
    const {
      item,
      id,
      className,
      role,
      selected,
      disabled,
      onRenderItem,
      cellDisabledStyle,
      cellIsSelectedStyle,
      index,
      label,
      getClassNames
    } = this.props;

    return (
      <CommandButton
        id={id}
        data-index={index}
        data-is-focusable={true}
        disabled={disabled}
        className={css(className, {
          ['' + cellIsSelectedStyle]: selected,
          ['' + cellDisabledStyle]: disabled
        })}
        onClick={this._onClick}
        onMouseEnter={this._onMouseEnter}
        onMouseMove={this._onMouseMove}
        onMouseLeave={this._onMouseLeave}
        onFocus={this._onFocus}
        role={role}
        aria-selected={selected}
        ariaLabel={label}
        title={label}
        getClassNames={getClassNames}
      >
        {onRenderItem(item)}
      </CommandButton>
    );
  }

  private _onClick = (): void => {
    const { onClick, disabled, item } = this.props as P;

    if (onClick && !disabled) {
      onClick(item);
    }
  };

  private _onMouseEnter = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    const { onHover, disabled, item, onMouseEnter } = this.props as P;

    const didUpdateOnEnter = onMouseEnter && onMouseEnter(ev);

    if (!didUpdateOnEnter && onHover && !disabled) {
      onHover(item);
    }
  };

  private _onMouseMove = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    const { onHover, disabled, item, onMouseMove } = this.props as P;

    const didUpdateOnMove = onMouseMove && onMouseMove(ev);

    if (!didUpdateOnMove && onHover && !disabled) {
      onHover(item);
    }
  };

  private _onMouseLeave = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    const { onHover, disabled, onMouseLeave } = this.props as P;

    const didUpdateOnLeave = onMouseLeave && onMouseLeave(ev);
    //@ts-ignore
    if (!didUpdateOnLeave && onHover && !disabled) {
      onHover();
    }
  };

  private _onFocus = (): void => {
    const { onFocus, disabled, item } = this.props as P;

    if (onFocus && !disabled) {
      onFocus(item);
    }
  };
}
