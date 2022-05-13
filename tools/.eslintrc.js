const ignoreWarnings = new Set(['a11y-no-onchange', 'a11y-label-has-associated-control']);
module.exports = {
    extends: ['plugin:prettier/recommended', 'plugin:vue/essential', 'plugin:react/recommended'],
    plugins: ['prettier', '@typescript-eslint', 'svelte3', 'react', 'react-hooks'],
    parser: 'vue-eslint-parser',
    ignorePatterns: ['package-lock.json', 'pnpm-lock.yaml', '**/node_modules', '**/patforms', 'bundle.js', 'vendor.js'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2019,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        parser: {
            vue: 'vue-eslint-parser',
            tsx: '@typescript-eslint/parser',
            ts: '@typescript-eslint/parser',
            js: '@typescript-eslint/parser',
            svelte: '@typescript-eslint/parser'
        },
        project: 'tsconfig.eslint.json',
        warnOnUnsupportedTypeScriptVersion: false,
        tsconfigRootDir: __dirname
    },
    overrides: [
        { files: '*.svelte', processor: 'svelte3/svelte3' },
        {
            files: '*.ts',
            rules: {
                'eslint-plugin-svelte3/parse-error': 'off',
                'no-undef': 'off'
            }
        }
    ],
    settings: {
        'svelte3/ignore-warnings': (w) => ignoreWarnings.has(w && w.code),
        'svelte3/typescript': true, // load TypeScript as peer dependency
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            flowVersion: '0.53' // Flow version
        },
        propWrapperFunctions: [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' },
            // for rules that check exact prop wrappers
            { property: 'forbidExtraProps', exact: true }
        ],
        componentWrapperFunctions: [
            // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
            'observer', // `property`
            { property: 'styled' }, // `object` is optional
            { property: 'observer', object: 'Mobx' },
            { property: 'observer', object: '<pragma>' } // sets `object` to whatever value `settings.react.pragma` is set to
        ],
        formComponents: [
            // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
            'CustomForm',
            { name: 'Form', formAttribute: 'endpoint' }
        ],
        linkComponents: [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            'Hyperlink',
            { name: 'Link', linkAttribute: 'to' }
        ]
    },
    rules: {
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'prettier/prettier': 'warn',
        'vue/custom-event-name-casing': 'off',
        'vue/multi-word-component-names': 'off',
        // '@nativescript/no-nativescript-angular-imports': 'warn',
        // '@nativescript/no-tns-core-modules-imports': 'warn',
        // '@nativescript/no-duplicate-ns-imports': 'warn',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'off',
            {
                accessibility: 'explicit'
            }
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                FunctionDeclaration: {
                    parameters: 'first'
                },
                FunctionExpression: {
                    parameters: 'first'
                },
                SwitchCase: 1
            }
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-misused-new': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-use-before-declare': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/space-within-parens': ['off', 'never'],
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': ['off', 'as-needed'],
        camelcase: 'off',
        'capitalized-comments': 'off',
        complexity: 'off',
        'constructor-super': 'error',
        curly: ['error', 'multi-line'],
        'dot-notation': 'off',
        'eol-last': 'error',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'off',
        'id-blacklist': ['error', 'any', 'string', 'boolean', 'Undefined'],
        'id-match': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
            }
        ],
        'linebreak-style': 'off',
        'max-classes-per-file': 'off',
        'max-len': [
            'off',
            {
                ignorePattern: '^import |^export {(.*?)}',
                code: 200
            }
        ],
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-bitwise': 'off',
        'no-caller': 'error',
        'no-cond-assign': 'off',
        'no-console': [
            'off',
            {
                allow: [
                    'log',
                    'warn',
                    'dir',
                    'timeLog',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupEnd',
                    'table',
                    'debug',
                    'dirxml',
                    'error',
                    'groupCollapsed',
                    'Console',
                    'profile',
                    'profileEnd',
                    'timeStamp',
                    'context'
                ]
            }
        ],
        'no-constant-condition': 'error',
        'no-control-regex': 'off',
        'no-debugger': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'off',
        'no-eval': 'off',
        'no-extra-semi': 'off',
        'no-fallthrough': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'off',
        'no-multiple-empty-lines': 'off',
        'no-new-wrappers': 'error',
        'no-redeclare': ['error', { builtinGlobals: false }],
        'no-regex-spaces': 'error',
        'no-return-await': 'error',
        'no-shadow': [
            'off',
            {
                hoist: 'all'
            }
        ],
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'off',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': [
            'error',
            {
                allowTaggedTemplates: true,
                allowShortCircuit: true
            }
        ],
        'no-unused-labels': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var': ['off', 'never'],
        'prefer-arrow/prefer-arrow-functions': 'off',
        'prefer-const': 'error',
        'quote-props': 'off',
        radix: 'error',
        'space-before-function-paren': 'off',
        'use-isnan': 'error',
        'valid-typeof': 'off'
    }
};
