
// When adding or removing a color, make sure you keep this consistent with IColorClassNames by adding the color variants.
const DefaultPalette = {
  themeDarker: '#004578',
  themeDark: '#005a9e',
  themeDarkAlt: '#106ebe',
  themePrimary: '#0078d4',
  themeSecondary: '#2b88d8',
  themeTertiary: '#71afe5',
  themeLight: '#c7e0f4',
  themeLighter: '#deecf9',
  themeLighterAlt: '#eff6fc',
  black: '#000000',
  blackTranslucent40: 'rgba(0,0,0,.4)',
  neutralDark: '#212121',
  neutralPrimary: '#333333',
  neutralPrimaryAlt: '#3c3c3c',
  neutralSecondary: '#666666',
  neutralSecondaryAlt: '#767676',
  neutralTertiary: '#a6a6a6',
  neutralTertiaryAlt: '#c8c8c8',
  neutralQuaternary: '#d0d0d0',
  neutralQuaternaryAlt: '#dadada',
  neutralLight: '#eaeaea',
  neutralLighter: '#f4f4f4',
  neutralLighterAlt: '#f8f8f8',
  accent: '#0078d4',
  white: '#ffffff',
  whiteTranslucent40: 'rgba(255,255,255,.4)',
  yellow: '#ffb900',
  yellowLight: '#fff100',
  orange: '#d83b01',
  orangeLight: '#ea4300',
  orangeLighter: '#ff8c00',
  redDark: '#a80000',
  red: '#e81123',
  magentaDark: '#5c005c',
  magenta: '#b4009e',
  magentaLight: '#e3008c',
  purpleDark: '#32145a',
  purple: '#5c2d91',
  purpleLight: '#b4a0ff',
  blueDark: '#002050',
  blueMid: '#00188f',
  blue: '#0078d4',
  blueLight: '#00bcf2',
  tealDark: '#004b50',
  teal: '#008272',
  tealLight: '#00b294',
  greenDark: '#004b1c',
  green: '#107c10',
  greenLight: '#bad80a'
};

  function _createStyleElement() {
    const styleElement = document.createElement('style');

    styleElement.setAttribute('data-merge-styles', 'true');
    styleElement.type = 'text/css';

    if (this._lastStyleElement && this._lastStyleElement.nextElementSibling) {
      document.head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
    } else {
      document.head.appendChild(styleElement);
    }
    this._lastStyleElement = styleElement;

    return styleElement;
  }




 function nodeTheme(themeObject) {
  Object.entries(themeObject).forEach(_ => console.log(`"--${_[0]}", ${_[1]}`));
}

function update(current, updater) {
  if (
    Object.prototype.toString.call(current) === "[object Object]" ||
    Array.isArray(current)
  ) {
    var draft = JSON.parse(JSON.stringify(current));
    updater(draft);
    return draft;
  }
}

function convertObjectToCssVariables(themeObject){
  Object.entries(themeObject).forEach(_ => console.log(`${_[0]}`))
}

function convertObjectToCssVariables2(themeObject){
  update(DefaultPalette, draft => Object.keys(draft), )
}

function convertObjectToCssVariables3(themeObject){
  let a = []
  let b = {}
  
  let x = Array.from(Object.keys(themeObject))
  let y = x.map(_ => `--${_}`)
  
  for (k in themeObject){
    a.push([k, `var(--${k})`])
    //console.log()
  }
  let c = new Map(a)
  console.log(c)
}


function convertObjectToCssVariables(themeObject){
  let a = Object.assign({}, themeObject)
  let x = Object.keys(themeObject).map(_ => a[_] = `var(--${_})`)
  console.log(a)
}


function convertObjectToCssVariables4(themeObject){
  let _keys = Object.entries(themeObject).map(_ => `${_[0]}`)
  let cssVars = _keys.map(_ => `var(--${_})`)
  let x = cssVars
  console.log(_keys, cssVars)
}


function applyTheme(themeObject) {
  Object.entries(themeObject).forEach(_ => document.body.style.setProperty(`"--${_[0]}", ${_[1]}`));
}


convertObjectToCssVariables(DefaultPalette)
nodeTheme(DefaultPalette)

//@ts-ignore
//console.log(Object.entries(DefaultPalette)[0])