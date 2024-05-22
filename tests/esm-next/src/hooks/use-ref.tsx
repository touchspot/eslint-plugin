import type { FC } from "react";
import { useRef } from "react";

export const Check: FC = () => {
	const textRef = useRef("foo");
	textRef.current = "bar";

	return null;
};
