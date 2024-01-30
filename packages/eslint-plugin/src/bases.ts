import type { TSESLint } from "@typescript-eslint/utils";

import base from "./bases/base.js";
import legacy from "./bases/legacy.js";
import modern from "./bases/modern.js";

export default {
	"(base)": base,
	"(modern)": modern,
	"(legacy)": legacy,
} satisfies Record<string, TSESLint.Linter.ConfigType>;
