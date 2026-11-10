import { arthawks } from "./arthawks";
import { emailpos } from "./emailpos";

export const work = [arthawks, emailpos] as const;
export type WorkItem = (typeof work)[number];
