import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";

import { exerciseSchema } from "../../schema/exercise.schema";
import { Button } from "../../ui/Button";
import type { z } from "zod";

type ExerciseSchemaType = z.infer<typeof exerciseSchema>;
function CreateExerciseForm() {
  const { handleSubmit, register } = useForm<ExerciseSchemaType>({
    resolver: zodResolver(exerciseSchema),
  });

  const handleFormSubmit: SubmitHandler<ExerciseSchemaType> = ({
    name,
    videoUrl,
  }) => {
    console.log({ name, videoUrl });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input label="Exercise name" {...register("name")} />
      <Input label="Video url" {...register("videoUrl")} />
      <Button variant="primary">Create</Button>
    </form>
  );
}
export default CreateExerciseForm;
