import { Checkbox, IContextualMenuItem, CommandBar } from "office-ui-fabric-react";
import * as React from "react";
import { NavigationView } from "./NavigationView";
import { menuItems } from "./menu";


const NavigationViewSampleApp = (props) => {
  const [menuInline, setMenuInline] = React.useState(false)

  var _onClickHello = () => {}
  var _onClickTooltip = () => {}
  var _onMenuInlineChange = (e: any, checked: boolean) => {
    setMenuInline(checked)
  }

  const items: IContextualMenuItem[] = [
      {
        key: "a-unique-key",
        name: "MyItem",
        onClick: _onClickHello
      },
      {
        key: "subMenu",
        name: "Sub Menu",
        iconProps: { iconName: "ContextMenu" },
        subMenuProps: {
          items: [
            {
              key: "tooltipper",
              name: "tooltip",
              onClick: _onClickTooltip
            }
          ]
        }
      }
    ]
    const farItems: IContextualMenuItem[] = [
      {
        key: "checkboxthing",
        onRender: () =>  {
          return <div style={{alignSelf: 'center', justifySelf: 'center'}}>
           <Checkbox label="Inline" value={menuInline as any} onChange={_onMenuInlineChange} />
            </div>
        }
      }
    ]
    //todo: add padding to left and right whose sum equals the difference of menu collapsed and uncollapsed and change menu handler to operate on padding
    return (
      <React.Fragment>
        <NavigationView title="UI Fabric Samples" items={items} menuInline={menuInline}>
          <CommandBar items={menuItems} farItems={farItems}/>
          <div style={{ padding: 8, display: 'flex', alignItems: 'center' , flexDirection: 'column'}}>
            <h2>UI Fabric</h2>
            <div style={{ padding: 8 }}>
             
            </div>
          </div>
        </NavigationView>
      </React.Fragment>
    )
  }


export { NavigationViewSampleApp };

