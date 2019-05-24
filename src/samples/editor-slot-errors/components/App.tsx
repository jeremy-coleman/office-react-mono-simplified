import React from 'react';
import { Stack, TextField, ITextProps, Text, mergeStyleSets, css } from 'office-ui-fabric-react';
import { NeutralColors } from '@uifabric/fluent-theme';


const classNames = mergeStyleSets({
  root: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '50px 0'
  },
  header: {
    display: 'block',
    marginBottom: 10,
    color: NeutralColors.gray130,
    fontWeight: 'bold'
  },
  code: {
    maxHeight: 500,
    overflowY: 'auto',
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: '1.5'
  },
  errors: {
    color: 'red'
  },
  output: {
    border: '1px dashed gray',
    padding: 10
  }
});

const Header: React.FunctionComponent<ITextProps> = props => (
  <Text variant="xLarge" as="h2" className={classNames.header} {...props}>
    {props.children}
  </Text>
);



export class App extends React.Component<{}, any> {
  
  public render() {
    return (
      <Stack className={classNames.root} gap={20}>
        <Header as="h1" variant="xxLarge" style={{ textAlign: 'center' }}>
          TypeScript+React Editor
        </Header>
        <div>
          <Header>Code</Header>
          <TextField
            multiline
            autoAdjustHeight
            defaultValue={'type something..'}
            onChange={(e: any) => e.target.value}
            styles={{ field: classNames.code }}
          />
        </div>
      </Stack>
    );
  }
}
