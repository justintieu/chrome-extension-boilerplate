import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import nodePlugin from "eslint-plugin-n";

export default [
    // Prettier compatibility
    prettierConfig,

    // Base ESLint recommended config
    js.configs.recommended,

    // Node recommended config
    nodePlugin.configs["flat/recommended-module"],

    // Ignore patterns
    {
        ignores: [
            "public/",
            "node_modules/",
            "dist/",
            "*.config.js",
            "*.config.mjs",
        ],
    },

    // Custom rules and settings
    {
        files: ["src/**/*.js"],
        languageOptions: {
            globals: {
                chrome: "readonly",
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        rules: {
            "no-console": "off",
            "import/prefer-default-export": "off",
            "arrow-body-style": "off",
            "no-param-reassign": ["error", { props: false }],
            "no-underscore-dangle": "off",
        },
    },
];
