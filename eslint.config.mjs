import { dirname } from "path";
import { fileURLToPath } from "url";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import nextPlugin from "@next/eslint-plugin-next";
import { configs } from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = tseslint.config(
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  nextPlugin.configs.recommended,
  ...configs.strict,
  ...fixupConfigRules(
    compat.extends(
      "next",
      "next/core-web-vitals",
      "plugin:import/recommended",
      "plugin:import/typescript"
    )
  ),
  {
    plugins: { "unused-imports": unusedImportsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    plugins: { perfectionist: perfectionistPlugin },
    rules: {
      "perfectionist/sort-interfaces": "warn",
      "perfectionist/sort-object-types": "warn",
    },
  }
);

export default config;
