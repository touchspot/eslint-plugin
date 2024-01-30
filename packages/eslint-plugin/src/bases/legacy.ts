import type { TSESLint } from "@typescript-eslint/utils";

export default {
	rules: {
		// eslint-plugin-import
		"import/no-useless-path-segments": ["error", { noUselessIndex: true }],
	},
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": ["error", { "**": "+([_$0-9a-z])?(.+([0-9a-z]))" }],
				"check-file/folder-naming-convention": ["error", { "**": "SNAKE_CASE" }],
				// eslint-plugin-import-access
				"import-access/jsdoc": "error",
				// eslint-plugin-unicorn
				"unicorn/filename-case": "off",
			},
		},
		{
			files: ["*.config.?(c|m)ts", "vitest.*.?(c|m)ts"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": "off",
			},
		},
	],
} satisfies TSESLint.Linter.ConfigType;
