import { getIcon } from '@uifabric/styling';
import { classNamesFunction, getNativeProps, htmlElementProperties } from '@uifabric/utilities';
import * as React from 'react';
import { Image, ImageLoadState } from '../Image';
import { IconType, IIconProps, IIconStyleProps, IIconStyles } from './Icon.types';


export interface IIconState {
  imageLoadError: boolean;
}

const getClassNames = classNamesFunction<IIconStyleProps, IIconStyles>();

export class IconBase extends React.Component<IIconProps, IIconState> {
  constructor(props: IIconProps) {
    super(props);
    this.state = {
      imageLoadError: false
    };
  }

  public render() {
    const { ariaLabel, className, styles, iconName, imageErrorAs, theme } = this.props;
    const isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
    const isImage = this.props.iconType === IconType.image || this.props.iconType === IconType.Image;
    const { iconClassName, children } = this._getIconContent(iconName);

    const classNames = getClassNames(styles, {
      theme: theme!,
      className,
      iconClassName,
      isImage,
      isPlaceholder
    });

    const containerProps = ariaLabel
      ? {
          'aria-label': ariaLabel
        }
      : {
          role: 'presentation'
        };

    const RootType = isImage ? 'div' : 'i';
    const nativeProps = getNativeProps(this.props, htmlElementProperties);
    const { imageLoadError } = this.state;
    const imageProps = {
      ...this.props.imageProps,
      onLoadingStateChange: this.onImageLoadingStateChange
    };
    const ImageType = (imageLoadError && imageErrorAs) || Image;

    return (
      <RootType data-icon-name={iconName} {...nativeProps} {...containerProps} className={classNames.root}>
        {isImage ? <ImageType {...imageProps} /> : children}
      </RootType>
    );
  }

  private onImageLoadingStateChange = (state: ImageLoadState): void => {
    if (this.props.imageProps && this.props.imageProps.onLoadingStateChange) {
      this.props.imageProps.onLoadingStateChange(state);
    }
    if (state === ImageLoadState.error) {
      this.setState({ imageLoadError: true });
    }
  };

  private _getIconContent(name?: string) {
    const iconDefinition = getIcon(name) || {
      subset: {
        className: undefined
      },
      code: undefined
    };

    return {
      children: iconDefinition.code,
      iconClassName: iconDefinition.subset.className
    };
  }
}
