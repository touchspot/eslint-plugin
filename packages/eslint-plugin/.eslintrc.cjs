const { configs } = require(".");

const config = configs.esm;

/** @type {import("@typescript-eslint/utils/dist").TSESLint.Linter.ConfigType} */
module.exports = {
	...config,
	root: true,
	overrides: [
		...config.overrides,
		{
			files: ["*.ts"],
			rules: {
				"import-x/no-default-export": "off",
			},
		},
	],
};
