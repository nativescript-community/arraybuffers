const packageJSON = require('../package.json')
module.exports = {
    mode: 'modules',
    out: '../docs',
    exclude: ['**/node_modules/**', '**/*.spec.ts', '*typings*'],
    name: packageJSON.description,
    excludePrivate: true,
    ignoreCompilerErrors: true,
    excludeNotExported: true,
    includeDeclarations: true,
    excludePrivate: true,
    preserveConstEnums: 'true',
    excludeExternals: true,
    tsconfig: 'tsconfig.doc.json',
    'external-modulemap': 'src/([\\w\\-_]+)/',
    readme: '../README.md'
};
