module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    // "@babel/core"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    "@typescript-eslint", "react", "prettier", "react-hooks"
  ],
  rules: {
    'semi': [2, 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-reqiures": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};
