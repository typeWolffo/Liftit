import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { exerciseSchema } from "../../schema/exercise.schema";
import type { z } from "zod";
import { api } from "../../utils/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Button, Container, Input, Spacer, Text } from "@nextui-org/react";
import isEmpty from "lodash.isempty";

type ExerciseSchemaType = z.infer<typeof exerciseSchema>;
function CreateExerciseForm() {
  const { mutate, status, data } = api.exercise.create.useMutation();

  const { handleSubmit, register, getValues } = useForm<ExerciseSchemaType>({
    resolver: zodResolver(exerciseSchema),
  });

  const { name, videoUrl } = getValues();

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

  const isAbleToSubmit = !isEmpty(name);

  return (
    <Container xs className="mt-10">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
        <Input
          labelPlaceholder="Exercise name"
          {...register("name")}
          bordered
          fullWidth
          autoFocus
        />
        <Spacer y={2} />
        <Input
          labelPlaceholder="Video url"
          {...register("videoUrl")}
          // className="my-10"
          clearable
          bordered
          fullWidth
        />
        <Spacer y={2} />
        <Button color="primary" shadow type="submit" disabled={!isAbleToSubmit}>
          Create
        </Button>
      </form>
      <Spacer y={1} />
      <Text color="primary" blockquote size="$xs" css={{ textAlign: "center" }}>
        Pro tip: Remember to add a link to the video! Exercise without video
        might be disliked and deleted in future.
      </Text>
    </Container>
  );
}

export default CreateExerciseForm;
