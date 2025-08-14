import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["build/**", "node_modules/**"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "commonjs",
    },
    rules: {
      indent: ["error", 2],
      eqeqeq: "error",
      "no-trailing-spaces": "error", // ❌ impede espaços no final da linha
      "object-curly-spacing": ["error", "always"], // ❌ {chave} → ✅ { chave }
      "arrow-spacing": ["error", { before: true, after: true }], // ❌ ()=>{} → ✅ () => {}
      'no-console': 0  // ← console.log() está liberado
    },
  },
]);
