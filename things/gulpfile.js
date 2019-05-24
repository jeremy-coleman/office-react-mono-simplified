
const csstree = require('css-tree');
const sass = require('node-sass');
const prettier = require('prettier');
const _ = require('lodash');
const path = require('path');
const fs = require('fs');
//var stream = require('stream')

var gulp = require('gulp')
var concat = require('gulp-concat')
var jetpack = require('fs-jetpack')
var gulpSass = require('gulp-sass')
var flatten = require('gulp-flatten')
var cssnano = require('gulp-cssnano')
var gulpPrettier = require('gulp-prettier')
var globby = require('globby')


//run gulp scss, gulp convert and gulp copy:converted to to go through the steps
//idk how to deal with gulp 4, undertaker is dumb af

gulp.task('scss', async () => {
    return gulp.src('src/**/*.scss')
    .pipe(gulpSass())
    .pipe(cssnano())
    .pipe(flatten())
    .pipe(gulpPrettier())
    .pipe(gulp.dest('styles/css'))
})


// const args = process.argv.slice(1);
// let dev = args.some(arg => arg === '--dev');

const createValue = (v) => {
    switch(v.type) {
        case 'Dimension':
            return `${v.value}${v.unit}`;
        case 'Identifier':
            return v.name;
        case 'HexColor':
            return `#${v.value}`;
        case 'Number':
            return Number(v.value);
        case 'Url':
            return `url(${v.vale.value}`;
        case 'String':
            return v.value;
        case 'WhiteSpace':
            return ' ';
    }
};
const getName = (c) => {
    switch (c.type) {
        case 'IdSelector':
        case 'TypeSelector':
        case 'ClassSelector':
            return c.name;
        default:
            return null;
    }
};

const generateTypestyle = (classRegistry, ruleNode) => {
        
    //let json = JSON.stringify(ruleNode)
    jetpack.write('output.json', ruleNode)

    const selectorList = ruleNode.prelude.children;
    const selectorNames = selectorList[0].children.map(getName);
    const pseudoClass = selectorList[0].children.find((c) => c.type === 'PseudoClassSelector')
    const pseudoElement = selectorList[0].children.find((c) => c.type === 'PseudoElementSelector')
    const definedSelectorNames = selectorNames.filter(_.negate(_.isNull));
    const generatedClass = _.camelCase(definedSelectorNames.join('-'));

    const generatedContent = ruleNode.block.children.reduce((styles, c) => {

        switch(c.type) {
            case 'Declaration':
                styles[_.camelCase(c.property)] = c.value.children.map(createValue).join(' ');
        }
        return styles;
    }, {});

    classRegistry[generatedClass] = classRegistry[generatedClass] || {};
    classRegistry[generatedClass].selectors = classRegistry[generatedClass].selectors || {};

if (pseudoClass) {
    if (pseudoClass.name === 'global' && pseudoClass.children) {
        classRegistry[generatedClass].selectors[`:${pseudoClass.name}(${pseudoClass.children[0].value})`] = generatedContent;
    }    
    
    else classRegistry[generatedClass].selectors[`&:${pseudoClass.name}`] = generatedContent;
    
}
    if (pseudoElement) {
        classRegistry[generatedClass].selectors[`&::${pseudoElement.name}`] = generatedContent;
    }

    if (!pseudoClass && !pseudoElement) {
        Object.assign(classRegistry[generatedClass], generatedContent, {
            //extrathings here: generatedClass
        });
    }

    // if (!pseudoClass && !pseudoElement) {
    //     Object.assign(classRegistry[generatedClass], generatedContent, {
    //         $debugName: generatedClass
    //     });
    // }

    if (Object.keys(classRegistry[generatedClass].selectors).length === 0) {
        delete classRegistry[generatedClass].selectors;
    }
}

const convertCss = (code) => {
    return new Promise((resolve) => {
        const cssAst =  csstree.toPlainObject(csstree.parse(code));
        const generatedClasses = {};
        csstree.walk(cssAst, (node) => {
            switch(node.type) {
                case 'Rule':
                    generateTypestyle(generatedClasses, node);
                    break;
            }
        });

        resolve(printTypestyle(generatedClasses));
    });
}

const printTypestyle = (defs) => {
    const code = Object.keys(defs).reduce((code, cls) => {
        code.push(`export const ${cls} = mergeStyles(${JSON.stringify(defs[cls])});`);
        return code;
    }, [`import { mergeStyles } from '@uifabric/merge-styles';`]).join('\n');

    
    return prettier.format(code, { parser: 'babylon' });
}

const convertFile = (file) => {
    const [basename, extension] = path.basename(file).split('.');
    const isSassFile = extension === 'scss' || extension === 'sass';
    const fileContent = { css: String(fs.readFileSync(file)) };
    const { css:regularCSS } = isSassFile ? sass.renderSync({ file }) : fileContent;
    console.log(`Processing file ${file}`);
    return convertCss(regularCSS);
};



// const convert = (argv) => {
//     const getFiles = (f, e) => {
//         const ext = e || 'css,scss';
//         const extensions = ext.split(',').length > 1 ? `{${ext}}` : ext;
//         const dir = f || process.cwd();
//         if (fs.existsSync(dir) && fs.lstatSync(dir).isFile()) {
//             return [path.resolve(dir)];
//         }
//         const normalizedDir = dir.substr(dir.length -1) === '/' ?  dir.substr(0, dir.length -1) : dir;
//         const pathToSearch = `${normalizedDir}/**/*.${extensions}`;
//         return glob.sync(pathToSearch, {})
//     }
    
//     const writeTypestyleFile = (file) => (typestyle) => {
//         const [basename] = path.basename(file).split('.');
//         const dir = path.dirname(file);
//         const typestyleFile = path.join(dir, `${basename}Style.ts`);
//         if (fs.existsSync(typestyleFile) && !argv['overwrite']) {
//             console.log(`Output file ${typestyleFile} exists. Pass --overwrite flag in order to overwrite it!`);
//         } else {
//             fs.writeFileSync(typestyleFile, typestyle);
//         }
//     }

//     getFiles(argv['f'], argv['ext']).forEach((f) => convertFile(f).then(writeTypestyleFile(f)));
// }

    
const writeTypestyleFile = (file) => (typestyle) => {
        const [basename] = path.basename(file).split('.');
        const dir = path.dirname(file);
        const typestyleFile = path.join(dir, `${basename}Style.ts`);
        if (fs.existsSync(typestyleFile) && !process.argv.some(arg => arg === '--overwrite')) {
            console.log(`Output file ${typestyleFile} exists. Pass --overwrite flag in order to overwrite it!`);
        } 
        
        else {
            jetpack.write(typestyleFile, typestyle);
        }
    }



let gulpTypestyle = (f) =>  convertFile(f).then(writeTypestyleFile(f))


gulp.task('convert', async () => {
    globby('./styles/css/**/*.css').then(files => files.forEach(f => gulpTypestyle(f)))
})

gulp.task('copy:converted', async () => {
    gulp.src('./styles/css/**/*.ts')
    .pipe(gulp.dest('styles/ts'))
})


//module.exports = convert;
//module.exports = convertFile