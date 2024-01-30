import type { TSESLint } from "@typescript-eslint/utils";

export default {
	settings: {
		react: {
			version: "detect",
		},
	},
	overrides: [
		{
			files: ["*.tsx"],
			excludedFiles: ["*.d.?(c|m)ts"],
			extends: [
				"plugin:import/react",
				"plugin:react/recommended",
				"plugin:react/jsx-runtime",
				"plugin:react-perf/recommended",
				"prettier",
			],
			rules: {
				// eslint-plugin-react
				"react/button-has-type": "error",
				"react/iframe-missing-sandbox": "error",
				"react/jsx-boolean-value": "error",
				"react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
				"react/jsx-sort-props": [
					"error",
					{ callbacksLast: true, noSortAlphabetically: true, reservedFirst: ["key", "ref"] },
				],
				"react/self-closing-comp": "error",
			},
		},
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			plugins: ["react-hooks"],
			rules: {
				// eslint-plugin-functional
				"functional/immutable-data": ["error", { ignoreAccessorPattern: ["ref.current", "*Ref.current", "router.**"] }],
				// eslint-plugin-react-hooks
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "error",
			},
		},
	],
} satisfies TSESLint.Linter.ConfigType;
