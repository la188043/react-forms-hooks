module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: `./tsconfig.json`
  },
  extends: [
    'airbnb-typescript',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
