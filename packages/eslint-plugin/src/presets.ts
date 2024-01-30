import type { TSESLint } from "@typescript-eslint/utils";

import cjs from "./presets/cjs.js";
import cjsLegacy from "./presets/cjs.legacy.js";
import esm from "./presets/esm.js";
import esmLegacy from "./presets/esm.legacy.js";

export default {
	cjs,
	"cjs:legacy": cjsLegacy,
	esm,
	"esm:legacy": esmLegacy,
} satisfies Record<string, TSESLint.Linter.ConfigType>;
