import { z } from "zod";

export const exerciseSchema = z.object({
  name: z.string(),
  videoUrl: z.string(),
});
