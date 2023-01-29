import { createTRPCRouter, protectedProcedure } from "../trpc";
import { exerciseSchema } from "../../../schema/exercise.schema";

export const exerciseRouter = createTRPCRouter({
  create: protectedProcedure
    .input(exerciseSchema)
    .mutation(({ ctx, input }) => {
      const { prisma } = ctx;

      return prisma.exercise.create({
        data: {
          name: input.name,
          videoUrl: input.videoUrl,
        },
      });
    }),
});
