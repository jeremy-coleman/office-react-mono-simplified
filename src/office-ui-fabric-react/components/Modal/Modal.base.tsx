import * as React from 'react';
import { BaseComponent, classNamesFunction, getId, allowScrollOnElement, KeyCodes } from '@uifabric/utilities';
import { FocusTrapZone, IFocusTrapZone } from '../FocusTrapZone';
import { animationDuration } from './Modal.styles';
import { IModalProps, IModalStyleProps, IModalStyles, IModal } from './Modal.types';
import { Overlay } from '../Overlay';
import { ILayerProps, Layer } from '../Layer';
import { Popup } from '../Popup';
import { withResponsiveMode, ResponsiveMode } from '@uifabric/utilities/decorators/withResponsiveMode';
import { DirectionalHint } from '@uifabric/utilities';
import { Icon } from '../Icon';
import { DraggableZone, IDragData } from '../DraggableZone';

// @TODO - need to change this to a panel whenever the breakpoint is under medium (verify the spec)

const DefaultLayerProps: ILayerProps = {
  eventBubblingEnabled: false
};

export interface IDialogState {
  isOpen?: boolean;
  isVisible?: boolean;
  isVisibleClose?: boolean;
  id?: string;
  hasBeenOpened?: boolean;
  modalRectangleTop?: number;
  isModalMenuOpen?: boolean;
  isInKeyboardMoveMode?: boolean;
  x: number;
  y: number;
}

const getClassNames = classNamesFunction<IModalStyleProps, IModalStyles>();

@withResponsiveMode
export class ModalBase extends BaseComponent<IModalProps, IDialogState> implements IModal {
  public static defaultProps: IModalProps = {
    isOpen: false,
    isDarkOverlay: true,
    isBlocking: false,
    className: '',
    containerClassName: ''
  };

  private _onModalCloseTimer: number;
  private _focusTrapZone = React.createRef<IFocusTrapZone>();
  private _scrollableContent: HTMLDivElement | null;
  private _lastSetX: number;
  private _lastSetY: number;

  constructor(props: IModalProps) {
    super(props);
    this.state = {
      id: getId('Modal'),
      isOpen: props.isOpen,
      isVisible: props.isOpen,
      hasBeenOpened: props.isOpen,
      x: 0,
      y: 0
    };

    this._lastSetX = 0;
    this._lastSetY = 0;

    this._warnDeprecations({
      onLayerDidMount: 'layerProps.onLayerDidMount'
    });
  }

  public componentWillReceiveProps(newProps: IModalProps): void {
    clearTimeout(this._onModalCloseTimer);

    // Opening the dialog
    if (newProps.isOpen) {
      if (!this.state.isOpen) {
        // First Open
        this.setState({
          isOpen: true
        });
      } else {
        // Modal has been opened
        // Reopen during closing
        this.setState({
          hasBeenOpened: true,
          isVisible: true
        });

        if (newProps.topOffsetFixed) {
          const dialogMain = document.getElementsByClassName('ms-Dialog-main');
          let modalRectangle;
          if (dialogMain.length > 0) {
            modalRectangle = dialogMain[0].getBoundingClientRect();
            this.setState({
              modalRectangleTop: modalRectangle.top
            });
          }
        }
      }
    }

    // Closing the dialog
    if (!newProps.isOpen && this.state.isOpen) {
      this._onModalCloseTimer = this._async.setTimeout(this._onModalClose, parseFloat(animationDuration) * 1000);
      this.setState({
        isVisible: false
      });
    }
  }

  public componentDidUpdate(prevProps: IModalProps, prevState: IDialogState) {
    if (!prevProps.isOpen && !prevState.isVisible) {
      this.setState({
        isVisible: true
      });
    }
  }

  public render(): JSX.Element | null {
    const {
      className,
      containerClassName,
      scrollableContentClassName,
      elementToFocusOnDismiss,
      firstFocusableSelector,
      forceFocusInsideTrap,
      ignoreExternalFocusing,
      isBlocking,
      isClickableOutsideFocusTrap,
      isDarkOverlay,
      onDismiss,
      layerProps,
      responsiveMode,
      titleAriaId,
      styles,
      subtitleAriaId,
      theme,
      topOffsetFixed,
      onLayerDidMount,
      isModeless,
      dragOptions
    } = this.props;
    const { isOpen, isVisible, hasBeenOpened, modalRectangleTop, x, y, isInKeyboardMoveMode } = this.state;

    if (!isOpen) {
      return null;
    }

    const layerClassName = layerProps === undefined ? '' : layerProps.className;

    const classNames = getClassNames(styles, {
      theme: theme!,
      className,
      containerClassName,
      scrollableContentClassName,
      isOpen,
      isVisible,
      hasBeenOpened,
      modalRectangleTop,
      topOffsetFixed,
      isModeless,
      layerClassName,
      isDefaultDragHandle: dragOptions && !dragOptions.dragHandleSelector
    });

    const mergedLayerProps = {
      ...DefaultLayerProps,
      ...this.props.layerProps,
      onLayerDidMount: layerProps && layerProps.onLayerDidMount ? layerProps.onLayerDidMount : onLayerDidMount,
      insertFirst: isModeless,
      className: classNames.layer
    };
    const modalContent = (
      <FocusTrapZone
        componentRef={this._focusTrapZone}
        className={classNames.main}
        elementToFocusOnDismiss={elementToFocusOnDismiss}
        isClickableOutsideFocusTrap={isModeless || isClickableOutsideFocusTrap || !isBlocking}
        ignoreExternalFocusing={ignoreExternalFocusing}
        forceFocusInsideTrap={isModeless ? !isModeless : forceFocusInsideTrap}
        firstFocusableSelector={firstFocusableSelector}
        focusPreviouslyFocusedInnerElement={true}
        onKeyDown={dragOptions ? this._onDialogKeyDown : undefined}
        onKeyUp={dragOptions ? this._onDialogKeyUp : undefined}
        onBlur={isInKeyboardMoveMode ? this._onExitKeyboardMoveMode : undefined}
      >
        {dragOptions && isInKeyboardMoveMode && (
          <div className={classNames.keyboardMoveIconContainer}>
            {dragOptions.keyboardMoveIconProps ? (
              <Icon {...dragOptions.keyboardMoveIconProps} />
            ) : (
              <Icon iconName="move" className={classNames.keyboardMoveIcon} />
            )}
          </div>
        )}
        <div ref={this._allowScrollOnModal} className={classNames.scrollableContent} data-is-scrollable={true}>
          {dragOptions && this.state.isModalMenuOpen && (
            <dragOptions.menu
              items={[
                { key: 'move', text: dragOptions.moveMenuItemText, onClick: this._onEnterKeyboardMoveMode },
                { key: 'close', text: dragOptions.closeMenuItemText, onClick: this._onModalClose }
              ]}
              onDismiss={this._onModalContextMenuClose}
              alignTargetEdge={true}
              coverTarget={true}
              directionalHint={DirectionalHint.topLeftEdge}
              directionalHintFixed={true}
              shouldFocusOnMount={true}
              target={this._scrollableContent}
            />
          )}
          {this.props.children}
        </div>
      </FocusTrapZone>
    );

    // @temp tuatology - Will adjust this to be a panel at certain breakpoints
    if (responsiveMode! >= ResponsiveMode.small) {
      return (
        <Layer {...mergedLayerProps}>
          <Popup
            role={isModeless || !isBlocking ? 'dialog' : 'alertdialog'}
            aria-modal={!isModeless}
            ariaLabelledBy={titleAriaId}
            ariaDescribedBy={subtitleAriaId}
            onDismiss={onDismiss}
          >
            <div className={classNames.root}>
              {!isModeless && <Overlay isDarkThemed={isDarkOverlay} onClick={isBlocking ? undefined : (onDismiss as any)} />}
              {dragOptions ? (
                <DraggableZone
                  handleSelector={dragOptions.dragHandleSelector || `.${classNames.main.split(' ')[0]}`}
                  preventDragSelector="button"
                  onStart={this._onDragStart}
                  onDragChange={this._onDrag}
                  onStop={this._onDragStop}
                  position={{ x: x, y: y }}
                >
                  {modalContent}
                </DraggableZone>
              ) : (
                modalContent
              )}
            </div>
          </Popup>
        </Layer>
      );
    }
    return null;
  }

  public focus() {
    if (this._focusTrapZone.current) {
      this._focusTrapZone.current.focus();
    }
  }

  // Allow the user to scroll within the modal but not on the body
  private _allowScrollOnModal = (elt: HTMLDivElement | null): void => {
    if (elt) {
      allowScrollOnElement(elt, this._events);
    } else {
      this._events.off(this._scrollableContent);
    }
    this._scrollableContent = elt;
  };

  private _onModalContextMenuClose = (): void => {
    this.setState({ isModalMenuOpen: false });
  };

  private _onModalClose = (): void => {
    this._lastSetX = 0;
    this._lastSetY = 0;

    this.setState({
      isModalMenuOpen: false,
      isInKeyboardMoveMode: false,
      isOpen: false,
      x: 0,
      y: 0
    });

    // Call the onDismiss callback
    if (this.props.onDismissed) {
      this.props.onDismissed();
    }
  };

  private _onDragStart = (): void => {
    this.setState({ isModalMenuOpen: false, isInKeyboardMoveMode: false });
  };

  private _onDrag = (_: React.MouseEvent<HTMLElement> & React.TouchEvent<HTMLElement>, ui: IDragData): void => {
    const { x, y } = this.state;
    this.setState({ x: x + ui.delta.x, y: y + ui.delta.y });
  };

  private _onDragStop = (): void => {
    this.focus();
  };

  private _onDialogKeyUp = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    // Need to handle the CTRL + ALT + SPACE key during keyup due to FireFox bug:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    // Otherwise it would continue to fire a click even if the event was cancelled
    // during mouseDown.
    if (event.altKey && event.ctrlKey && event.keyCode === KeyCodes.space) {
      this.setState({ isModalMenuOpen: !this.state.isModalMenuOpen });
      event.preventDefault();
      event.stopPropagation();
    }
  };

  private _onDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.altKey && event.ctrlKey && event.keyCode === KeyCodes.space) {
      // CTRL + ALT + SPACE is handled during keyUp
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.state.isModalMenuOpen && (event.altKey || event.keyCode === KeyCodes.escape)) {
      this.setState({ isModalMenuOpen: false });
    }

    if (this.state.isInKeyboardMoveMode && (event.keyCode === KeyCodes.escape || event.keyCode === KeyCodes.enter)) {
      this.setState({ isInKeyboardMoveMode: false });
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.state.isInKeyboardMoveMode) {
      let handledEvent = true;
      const delta = this._getMoveDelta(event);

      switch (event.keyCode) {
        case KeyCodes.escape:
          this.setState({ x: this._lastSetX, y: this._lastSetY });
        case KeyCodes.enter: {
          this._lastSetX = 0;
          this._lastSetY = 0;
          this.setState({ isInKeyboardMoveMode: false });
          break;
        }
        case KeyCodes.up: {
          this.setState({
            y: this.state.y - delta
          });
          break;
        }
        case KeyCodes.down: {
          this.setState({
            y: this.state.y + delta
          });
          break;
        }
        case KeyCodes.left: {
          this.setState({
            x: this.state.x - delta
          });
          break;
        }
        case KeyCodes.right: {
          this.setState({
            x: this.state.x + delta
          });
          break;
        }
        default: {
          handledEvent = false;
        }
      }

      if (handledEvent) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  private _getMoveDelta(event: React.KeyboardEvent<HTMLDivElement>): number {
    let delta = 10;
    if (event.shiftKey) {
      if (!event.ctrlKey) {
        delta = 50;
      }
    } else if (event.ctrlKey) {
      delta = 1;
    }

    return delta;
  }

  private _onEnterKeyboardMoveMode = () => {
    this._lastSetX = this.state.x;
    this._lastSetY = this.state.y;
    this.setState({ isInKeyboardMoveMode: true, isModalMenuOpen: false });
  };

  private _onExitKeyboardMoveMode = () => {
    this._lastSetX = 0;
    this._lastSetY = 0;
    this.setState({ isInKeyboardMoveMode: false });
  };
}
