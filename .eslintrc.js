module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json' // add this line
    },
    plugins: ['react'],
    rules: {}
};
