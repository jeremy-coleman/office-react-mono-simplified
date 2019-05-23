import { IStyle, ITheme } from '@uifabric/styling';
import { IRefObject } from '@uifabric/utilities';
import { IStyleFunctionOrObject } from '@uifabric/merge-styles';


export interface IFabricProps extends React.HTMLAttributes<HTMLDivElement> {
  componentRef?: IRefObject<{}>;
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IFabricStyleProps, IFabricStyles>;
}

export interface IFabricStyleProps extends IFabricProps {
  theme: ITheme;
  isFocusVisible: boolean;
}

export interface IFabricStyles {
  root: IStyle;
}
