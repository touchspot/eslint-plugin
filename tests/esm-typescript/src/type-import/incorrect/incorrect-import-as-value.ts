// @ts-expect-error intentional error for lint rule testing
import { Foo, foo } from "./fixture.js"; // eslint-disable-line @typescript-eslint/consistent-type-imports

export type A = Foo;

foo;
