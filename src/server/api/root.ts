import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { exerciseRouter } from "./routers/exercise";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  exercise: exerciseRouter,
});

export type AppRouter = typeof appRouter;
