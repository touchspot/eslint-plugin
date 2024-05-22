import type { TSESLint } from "@typescript-eslint/utils";

export default {
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/folder-naming-convention": ["error", { "**": "KEBAB_CASE" }],
				"check-file/filename-naming-convention": "off",
				// eslint-plugin-unicorn
				"unicorn/filename-case": ["error", { case: "kebabCase" }],
			},
		},
	],
} satisfies TSESLint.Linter.ConfigType;
