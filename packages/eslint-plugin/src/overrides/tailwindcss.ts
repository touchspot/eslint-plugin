import type { TSESLint } from "@typescript-eslint/utils";

export default {
	settings: {
		tailwindcss: {
			callees: ["classnames", "clsx", "cn", "ctl", "cva", "twJoin", "twMerge", "tv"],
		},
	},
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			plugins: ["tailwindcss"],
			rules: {
				"tailwindcss/enforces-negative-arbitrary-values": "error",
				"tailwindcss/enforces-shorthand": "error",
				"tailwindcss/migration-from-tailwind-2": "error",
				"tailwindcss/no-custom-classname": "error",
				"tailwindcss/no-contradicting-classname": "error",
			},
		},
	],
} satisfies TSESLint.Linter.ConfigType;
