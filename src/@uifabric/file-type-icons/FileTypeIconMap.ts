/**
 * Enumeration of icon file names, and what extensions they map to.
 * Please keep items alphabetical. Items without extensions may require specific logic in the code to map.
 * Always use getFileTypeIconProps to get the most up-to-date icon at the right pixel density.
 */
export const FileTypeIconMap: { [key: string]: { extensions?: string[] } } = {
  accdb: {
    extensions: ['accdb', 'mdb']
  },
  archive: {
    extensions: ['7z', 'ace', 'arc', 'arj', 'dmg', 'gz', 'iso', 'lzh', 'pkg', 'rar', 'sit', 'tgz', 'tar', 'z']
  },
  audio: {
    extensions: [
      'aif',
      'aiff',
      'aac',
      'amr',
      'au',
      'awb',
      'dct',
      'dss',
      'dvf',
      'flac',
      'gsm',
      'm4a',
      'm4p',
      'mid',
      'mmf',
      'mp3',
      'oga',
      'ra',
      'rm',
      'wav',
      'wma',
      'wv'
    ]
  },
  channelfolder: {},
  code: {
    extensions: [
      'abap',
      'ada',
      'adp',
      'ahk',
      'as',
      'as3',
      'asc',
      'ascx',
      'asm',
      'asp',
      'awk',
      'bash',
      'bash_login',
      'bash_logout',
      'bash_profile',
      'bashrc',
      'bat',
      'bib',
      'bsh',
      'build',
      'builder',
      'c',
      'c++',
      'capfile',
      'cc',
      'cfc',
      'cfm',
      'cfml',
      'cl',
      'clj',
      'cls',
      'cmake',
      'cmd',
      'coffee',
      'config',
      'cpp',
      'cpt',
      'cpy',
      'cs',
      'cshtml',
      'cson',
      'csproj',
      'css',
      'ctp',
      'cxx',
      'd',
      'ddl',
      'di',
      'disco',
      'dml',
      'dtd',
      'dtml',
      'el',
      'emakefile',
      'erb',
      'erl',
      'f',
      'f90',
      'f95',
      'fs',
      'fsi',
      'fsscript',
      'fsx',
      'gemfile',
      'gemspec',
      'gitconfig',
      'go',
      'groovy',
      'gvy',
      'Hcp',
      'h',
      'h++',
      'haml',
      'handlebars',
      'hbs',
      'hh',
      'hpp',
      'hrl',
      'hs',
      'htc',
      'hxx',
      'idl',
      'iim',
      'inc',
      'inf',
      'ini',
      'inl',
      'ipp',
      'irbrc',
      'jade',
      'jav',
      'java',
      'js',
      'json',
      'jsp',
      'jsx',
      'l',
      'less',
      'lhs',
      'lisp',
      'log',
      'lst',
      'ltx',
      'lua',
      'm',
      'mak',
      'make',
      'manifest',
      'master',
      'md',
      'markdn',
      'markdown',
      'mdown',
      'mkdn',
      'ml',
      'mli',
      'mll',
      'mly',
      'mm',
      'mud',
      'nfo',
      'opml',
      'osascript',
      'p',
      'pas',
      'patch',
      'php',
      'php2',
      'php3',
      'php4',
      'php5',
      'phtml',
      'pl',
      'pm',
      'pod',
      'pp',
      'profile',
      'ps1',
      'ps1xml',
      'psd1',
      'psm1',
      'pss',
      'pt',
      'py',
      'pyw',
      'r',
      'rake',
      'rb',
      'rbx',
      'rc',
      'rdf',
      're',
      'reg',
      'rest',
      'resw',
      'resx',
      'rhtml',
      'rjs',
      'rprofile',
      'rpy',
      'rss',
      'rst',
      'ruby',
      'rxml',
      's',
      'sass',
      'scala',
      'scm',
      'sconscript',
      'sconstruct',
      'script',
      'scss',
      'sgml',
      'sh',
      'shtml',
      'sml',
      'svn-base',
      'swift',
      'sql',
      'sty',
      'tcl',
      'tex',
      'textile',
      'tld',
      'tli',
      'tmpl',
      'tpl',
      'vb',
      'vi',
      'vim',
      'vmg',
      'webpart',
      'wsp',
      'wsdl',
      'xhtml',
      'xoml',
      'xsd',
      'xslt',
      'yaml',
      'yaws',
      'yml',
      'zsh'
    ]
  },
  css: {}, // we dont have the icon yet, but i believe we want it, snapping to 'code' for now
  csv: {
    extensions: ['csv']
  },
  docset: {},
  docx: {
    extensions: ['doc', 'docm', 'docx', 'docb']
  },
  dotx: {
    extensions: ['dot', 'dotm', 'dotx']
  },
  email: {
    extensions: ['eml', 'msg', 'ost', 'pst']
  },
  exe: {
    extensions: ['application', 'appref-ms', 'apk', 'app', 'appx', 'exe', 'ipa', 'msi', 'xap']
  },
  folder: {},
  font: {
    extensions: ['ttf', 'otf', 'woff']
  },
  genericfile: {},
  html: {
    extensions: ['htm', 'html', 'mht']
  },
  link: {
    extensions: ['lnk', 'link', 'url', 'website', 'webloc']
  },
  linkedfolder: {},
  splist: {
    extensions: ['listitem']
  },
  model: {
    extensions: [
      '3ds',
      '3mf',
      'blend',
      'cool',
      'dae',
      'df',
      'dwfx',
      'dwg',
      'dxf',
      'fbx',
      'glb',
      'gltf',
      'holo',
      'layout',
      'max',
      'mtl',
      'obj',
      'off',
      'ply',
      'skp',
      'stp',
      'stl',
      't',
      'thl',
      'x'
    ]
  },
  mpp: {
    extensions: ['mpp']
  },
  mpt: {
    extensions: ['mpt']
  },
  one: {
    extensions: ['one'] // this is a format for exported single - file notebook pages
  },
  onetoc: {
    extensions: ['ms-one-stub', 'onetoc', 'onetoc2', 'onepkg'] // this icon represents a complete, logical notebook.
  },
  pdf: {
    extensions: ['pdf']
  },
  photo: {
    extensions: [
      'arw',
      'bmp',
      'cr2',
      'crw',
      'dcr',
      'dds',
      'dib',
      'dng',
      'erf',
      'gif',
      'heic',
      'heif',
      'ico',
      'jfi',
      'jfif',
      'jif',
      'jpe',
      'jpeg',
      'jpg',
      'kdc',
      'mrw',
      'nef',
      'orf',
      'pct',
      'pict',
      'png',
      'pns',
      'psd',
      'raw',
      'tga',
      'tif',
      'tiff',
      'wdp'
    ]
  },
  photo360: {},
  potx: {
    extensions: ['pot', 'potm', 'potx']
  },
  powerbi: {
    extensions: ['pbix']
  },
  ppsx: {
    extensions: ['pps', 'ppsm', 'ppsx']
  },
  pptx: {
    extensions: ['ppt', 'pptm', 'pptx', 'sldx', 'sldm']
  },
  presentation: {
    extensions: ['odp', 'gslides', 'key']
  },
  pub: {
    extensions: ['pub']
  },
  spo: {
    extensions: ['aspx']
  },
  sponews: {},
  spreadsheet: {
    extensions: ['ods', 'gsheet', 'numbers']
  },
  rtf: {
    extensions: ['epub', 'gdoc', 'odt', 'rtf', 'wri', 'pages']
  },
  sharedfolder: {},
  sway: {},
  sysfile: {
    extensions: [
      'bak',
      'bin',
      'cab',
      'cache',
      'cat',
      'cer',
      'class',
      'dat',
      'db',
      'dbg',
      'dl_',
      'dll',
      'ithmb',
      'jar',
      'kb',
      'ldt',
      'lrprev',
      'ppa',
      'ppam',
      'pdb',
      'rom',
      'thm',
      'thmx',
      'vsl',
      'xla',
      'xlam',
      'xll'
    ]
  },
  txt: {
    extensions: ['dif', 'diff', 'readme', 'out', 'plist', 'properties', 'text', 'txt']
  },
  vaultclosed: {},
  vaultopen: {},
  vector: {
    extensions: [
      'ai',
      'dgn',
      'gdraw',
      'pd',
      'emf',
      'eps',
      'fig',
      'indd',
      'indt',
      'indb',
      'ps',
      'svg',
      'svgz',
      'wmf',
      'oxps',
      'xps',
      'xd',
      'sketch'
    ]
  },
  video: {
    extensions: [
      '3g2',
      '3gp',
      '3gp2',
      '3gpp',
      'asf',
      'avi',
      'dvr-ms',
      'flv',
      'm1v',
      'm4v',
      'mkv',
      'mod',
      'mov',
      'mm4p',
      'mp2',
      'mp2v',
      'mp4',
      'mpa',
      'mpe',
      'mpeg',
      'mpg',
      'mpv',
      'mpv2',
      'mts',
      'ogg',
      'qt',
      'swf',
      'ts',
      'vob',
      'webm',
      'wlmp',
      'wm',
      'wmv',
      'wmx'
    ]
  },
  video360: {},
  vsdx: {
    extensions: ['vsd', 'vsdm', 'vsdx', 'vdw']
  },
  vssx: {
    extensions: ['vss', 'vssm', 'vssx']
  },
  vstx: {
    extensions: ['vst', 'vstm', 'vstx']
  },
  xlsx: {
    extensions: ['xls', 'xlsb', 'xlsm', 'xlsx']
  },
  xltx: {
    extensions: ['xlt', 'xltm', 'xltx']
  },
  xml: {
    extensions: ['xaml', 'xml', 'xsl']
  },
  xsn: {
    extensions: ['xsn']
  },
  zip: {
    extensions: ['zip']
  }
};
