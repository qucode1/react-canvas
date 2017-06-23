
module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
  "sourceType": "module"
  },
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "extends": "standard",
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "no-unused-expressions": "warn",
    "no-unused-vars": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error"
  }
};
