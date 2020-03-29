module.exports = {
    env: {
      browser: true,
      es6: true,
      'jest/globals': true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'prettier',
      'prettier/react',
      'plugin:jest/recommended'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier',
      'jest'
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        'warn', {
          extensions: ['.jsx', '.js']
        }
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'no-use-before-define': ['error', { 'functions': false } ],
      'react/prop-types': ['off'],
      'react/destructuring-assignment': ['off'],
      'import/prefer-default-export': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'no-unused-expressions': 'off',
      'array-callback-return': 'off',
      'consistent-return': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-boolean-value': 'off',
      'no-plusplus': 'off'
    },
  };
