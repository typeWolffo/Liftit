import { z } from "zod";

export const setSchema = z.object({
  name: z.string(),
  day: z.number(),
});
