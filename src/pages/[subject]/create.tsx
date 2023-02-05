import { useRouter } from "next/router";
import {
  CreateExerciseForm,
  CreateSetForm,
  CreateTrainingPlanForm,
} from "../../components/Form";
import Loader from "../../components/Loader/Loader";

function Create() {
  const { query } = useRouter();
  const subject = query.subject;

  const formMap: Record<string, React.ElementType> = {
    exercise: CreateExerciseForm,
    set: CreateSetForm,
    plan: CreateTrainingPlanForm,
    loader: Loader,
  };

  if (typeof subject === "string") {
    const Component = formMap[subject];
    // TODO:👇 make it work without errors
    // @ts-ignore
    return <Component />;
  }

  return null;
}

export default Create;
