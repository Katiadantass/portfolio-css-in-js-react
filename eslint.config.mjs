import js from "@eslint/js"
import globals from "globals"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["dist"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      prettier: prettierPlugin
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      prettierConfig // equivalente ao "plugin:prettier/recommended"
    ],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prettier/prettier": "error" // Prettier funcionando dentro do ESLint
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
])
