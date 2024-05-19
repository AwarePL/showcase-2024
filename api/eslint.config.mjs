import globals from "globals";
import pluginJs from "@eslint/js";
import mochaPlugin from "eslint-plugin-mocha";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginStandard, { rules } from "eslint-plugin-standard";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: [globals.mocha, globals.browser, globals.commonjs] } },
  {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        parser: "flow",
      },
      { usePrettierrc: false },
    ],
  },
  {rules: {
    "mocha/no-skipped-tests": "error",
    "mocha/no-exclusive-tests": "error"
  }},
  pluginJs.configs.recommended,
  mochaPlugin.configs.flat.recommended,
  eslintConfigPrettier,
  eslintPluginStandard,
  eslintPluginPrettierRecommended,
];
