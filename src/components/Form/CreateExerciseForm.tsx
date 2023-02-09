import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { exerciseSchema } from "../../schema/exercise.schema";
import type { z } from "zod";
import { api } from "../../utils/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Button, Input } from "@nextui-org/react";

type ExerciseSchemaType = z.infer<typeof exerciseSchema>;
function CreateExerciseForm() {
  const { mutate, status, data } = api.exercise.create.useMutation();

  const { handleSubmit, register } = useForm<ExerciseSchemaType>({
    resolver: zodResolver(exerciseSchema),
  });

  useEffect(() => {
    console.log(data);
    if (status === "success") {
      toast.success(`Created ${data.name}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [data, status]);

  const handleFormSubmit: SubmitHandler<ExerciseSchemaType> = ({
    name,
    videoUrl,
  }) => {
    mutate({
      name,
      videoUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input label="Exercise name" {...register("name")} />
      <Input label="Video url" {...register("videoUrl")} />
      <Button type="submit">Create</Button>
    </form>
  );
}
export default CreateExerciseForm;
