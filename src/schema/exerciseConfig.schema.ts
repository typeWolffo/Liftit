import { z } from "zod";

export const exerciseConfigSchema = z.object({
  reps: z.number(),
  series: z.number(),
});
