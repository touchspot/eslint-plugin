import type { TSESLint } from "@typescript-eslint/utils";

export default {
	extends: ["eslint:recommended", "plugin:import-x/recommended", "plugin:unicorn/recommended", "prettier"],
	plugins: ["perfectionist", "unused-imports"],
	rules: {
		// eslint
		"arrow-body-style": ["error"],
		eqeqeq: ["error", "always", { null: "never" }],
		"max-params": "error",
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-param-reassign": "error",
		"no-restricted-imports": [
			"error",
			{ patterns: [{ group: ["**/_*", "!./_*"], message: "Do not import directory-private module." }] },
		],
		"no-useless-rename": "error",
		"object-shorthand": "error",
		"prefer-destructuring": "error",
		// eslint-plugin-import
		"import-x/export": "off",
		"import-x/first": "error",
		"import-x/namespace": "off",
		"import-x/newline-after-import": "error",
		"import-x/no-anonymous-default-export": ["error", { allowArray: true, allowObject: true }],
		"import-x/no-duplicates": "error",
		"import-x/no-unresolved": "off",
		"import-x/no-useless-path-segments": "error",
		// eslint-plugin-perfectionist
		"perfectionist/sort-exports": ["error", { type: "natural" }],
		"perfectionist/sort-imports": [
			"error",
			{
				type: "natural",
				"internal-pattern": ["#*/**", "~/**"],
				groups: ["side-effect", "builtin", "external", "internal", ["parent", "sibling", "index"], "object", "unknown"],
			},
		],
		"perfectionist/sort-named-exports": ["error", { type: "natural" }],
		"perfectionist/sort-named-imports": ["error", { type: "natural" }],
		// eslint-plugin-unicorn
		"unicorn/filename-case": "off",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-null": "off",
		"unicorn/prefer-object-from-entries": "off",
		"unicorn/prevent-abbreviations": "off",
		// eslint-plugin-unused-imports
		"no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"error",
			{ args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" },
		],
	},
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			extends: [
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/stylistic-type-checked",
				"plugin:import-x/typescript",
				"prettier",
			],
			parserOptions: {
				ecmaVersion: "latest",
				project: true,
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ["check-file", "functional", "no-relative-import-paths"],
			settings: {
				"import-x/internal-regex": "^(#[^/]+|~)/",
			},
			rules: {
				// @typescript-eslint/eslint-plugin
				"@typescript-eslint/consistent-type-definitions": ["error", "type"],
				"@typescript-eslint/consistent-type-exports": "error",
				"@typescript-eslint/consistent-type-imports": "error",
				"@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
				"@typescript-eslint/naming-convention": [
					"error",
					{
						selector: "default",
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: ["parameter", "variable"],
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allow",
						trailingUnderscore: "forbid",
					},
					{
						selector: "typeLike",
						format: ["PascalCase", "UPPER_CASE"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: "default",
						modifiers: ["requiresQuotes"],
						format: null,
					},
					{
						selector: "property",
						filter: {
							regex: "^(_tag|__typename)$",
							match: true,
						},
						format: null,
					},
				],
				"@typescript-eslint/no-import-type-side-effects": "error",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": ["error", { allow: ["_"] }],
				"@typescript-eslint/no-unnecessary-condition": ["error", { allowConstantLoopConditions: true }],
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-useless-empty-export": "error",
				"@typescript-eslint/parameter-properties": "error",
				"@typescript-eslint/prefer-readonly": "error",
				"@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
				"@typescript-eslint/return-await": ["error", "always"],
				"@typescript-eslint/strict-boolean-expressions": [
					"error",
					{ allowString: false, allowNumber: false, allowNullableObject: false },
				],
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				// eslint-plugin-functional
				"functional/immutable-data": [
					"error",
					{
						ignoreImmediateMutation: true,
						ignoreNonConstDeclarations: { treatParametersAsConst: true },
					},
				],
				"functional/prefer-property-signatures": "error",
				"functional/prefer-readonly-type": "error",
				// eslint-plugin-import
				"import-x/consistent-type-specifier-style": "error",
				"import-x/no-default-export": "error",
				// eslint-plugin-no-relative-import-paths
				"no-relative-import-paths/no-relative-import-paths": ["error", { allowSameFolder: true }],
			},
		},
		{
			files: ["*.config.?(c|m)ts?(x)", "vitest.*.?(c|m)ts?(x)"],
			rules: {
				// eslint-plugin-import
				"import-x/no-default-export": "off",
			},
		},
	],
	ignorePatterns: ["*.d.*"],
	reportUnusedDisableDirectives: true,
} satisfies TSESLint.Linter.ConfigType;
