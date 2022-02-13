module.exports = {
  root: true,
  extends: ['handlebarlabs', 'plugin:prettier/recommended'],
  rules: {
    'react/react-in-jsx-scope':'off',
    'react/jsx-uses-react':'off',
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
  },
  globals: {
    __DEV__: 'readonly',
  },
  plugins: [],
};
