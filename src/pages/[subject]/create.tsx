import { Container } from "@nextui-org/react";
import type { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";

type Props = {
  params: Record<string, string>;
};

function Create({ params }: Props) {
  const { subject } = params;

  const DynamicCreateExerciseForm = dynamic(() =>
    import("../../components/Form").then((module) => module.CreateExerciseForm)
  );

  const DynamicCreateSetForm = dynamic(() =>
    import("../../components/Form").then((module) => module.CreateSetForm)
  );

  const DynamicCreateTrainingPlanForm = dynamic(() =>
    import("../../components/Form").then(
      (module) => module.CreateTrainingPlanForm
    )
  );

  const formMap: Record<string, React.ComponentType> = {
    exercise: DynamicCreateExerciseForm,
    set: DynamicCreateSetForm,
    plan: DynamicCreateTrainingPlanForm,
  };

  if (typeof subject !== "undefined") {
    const Component = formMap[subject] as React.ComponentType;

    return (
      <Suspense fallback={<Loader />}>
        <Container md className="flex">
          <Component />
        </Container>
      </Suspense>
    );
  }

  return null;
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  return {
    props: { params },
  };
}

export default Create;
