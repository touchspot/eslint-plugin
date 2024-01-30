import { useRouter } from "next/navigation";
import type { FC } from "react";

export const Check: FC = () => {
	const router = useRouter();
	router.push("/");

	return null;
};
