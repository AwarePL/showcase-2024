import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import pluginImport from 'eslint-plugin-import'
import globals from 'globals'
import cypress from 'eslint-plugin-cypress'

export default [
    pluginJs.configs.recommended,
    eslintConfigPrettier,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            import: pluginImport,
            cypress,
            prettier,
        },
        rules: {
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-unnecessary-waiting': 'error',
            'cypress/assertion-before-screenshot': 'warn',
            'cypress/no-force': 'warn',
            'cypress/no-async-tests': 'error',
            'cypress/no-async-before': 'error',
            'cypress/no-pause': 'error',
            'cypress/no-debug': 'error',
            'no-undef': 'off',
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.mjs'],
                    project: ['./package.json'],
                },
            },
        },
    },
]
