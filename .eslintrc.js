module.exports = {
  "env": {
      "es6": true,
      "node": true,
  },
  "extends": [
      "eslint:recommended",
      "plugin:jest/recommended",
  ],
  "plugins": [
      "import",
      "jest",
  ],
  "parserOptions": {
      "ecmaVersion": 2017
  },
  "rules": {
      "array-bracket-spacing": [2, "never"],
      "block-scoped-var": 2,
      "brace-style": [2, "1tbs"],
      "camelcase": 1,
      "computed-property-spacing": [2, "never"],
      "curly": 2,
      "eqeqeq": [2, "smart"],
      "max-depth": [1, 3],
      "max-len": [1, 120],
      "max-statements": [1, 100],
      "new-cap": 1,
      "no-extend-native": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-trailing-spaces": 2,
      "no-unused-vars": 1,
      "no-use-before-define": [2, "nofunc"],
      "object-curly-spacing": [2, "always"],
      "quotes": [2, "double", "avoid-escape"],
      "semi": [2, "always"],
      "keyword-spacing": [2, {"before": true, "after": true}],
      "space-unary-ops": 2,
      "no-console": [1],
      "no-extend-native": [1],
      "no-await-in-loop": [1]
  }
};