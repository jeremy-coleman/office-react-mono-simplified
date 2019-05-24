import { styled } from '@uifabric/utilities';
import { SearchBoxBase } from './SearchBox.base';
import { ISearchBoxProps, ISearchBoxStyleProps, ISearchBoxStyles } from './SearchBox.types';
import { getStyles } from './SearchBox.styles';

export const SearchBox: React.FunctionComponent<ISearchBoxProps> = styled<ISearchBoxProps, ISearchBoxStyleProps, ISearchBoxStyles>(
  SearchBoxBase,
  getStyles,
  undefined,
  { scope: 'SearchBox' }
);
