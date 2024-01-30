import type { TSESLint } from "@typescript-eslint/utils";

import next from "./overrides/next.js";
import react from "./overrides/react.js";
import tailwindcss from "./overrides/tailwindcss.js";

export default {
	"+next": next,
	"+react": react,
	"+tailwindcss": tailwindcss,
} satisfies Record<string, TSESLint.Linter.ConfigType>;
