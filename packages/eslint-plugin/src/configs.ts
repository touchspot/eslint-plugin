import type { TSESLint } from "@typescript-eslint/utils";

import bases from "./bases.js";
import overrides from "./overrides.js";
import presets from "./presets.js";

export default {
	...bases,
	...presets,
	...overrides,
} satisfies Record<string, TSESLint.Linter.ConfigType>;
