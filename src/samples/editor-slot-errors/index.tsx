import React from 'react';
import ReactDOM from 'react-dom';
import { mergeStyles } from '@uifabric/styling';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer } from 'office-ui-fabric-react';

import {registerIcons} from 'office-ui-fabric-react'
import { MDIcon } from './components/MDIcon';
import { App } from './components/App';

registerIcons({
  icons: {
    'Home': <MDIcon icon={'home'} />,
    'chevrondown': <MDIcon icon={'expand_more'} />,
    'copy': <MDIcon icon={'file_copy'} />,
    'checkmark': <MDIcon icon={'check'} />,
    'globalnavbutton': <MDIcon icon={'menu'} />,
    'contextmenu': <MDIcon icon={'file_copy'} />,
  }
});

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

ReactDOM.render(
  <Customizer {...FluentCustomizations}>
    <App />
  </Customizer>,
  document.getElementById('app')
);
