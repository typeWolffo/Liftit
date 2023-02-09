import { api } from "../utils/api";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { LinkButton } from "../components/LinkButton";

function Dashboard() {
  const { data: sessionData } = useSession();
  const { mutate } = api.exercise.create.useMutation();

  // const handleMutate = () => {
  //   mutate({
  //     name: "test",
  //     videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   });
  // };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center font-primary text-primary">
        <p>Logged as {sessionData?.user?.name}</p>
        <Image
          className="my-5 rounded-full"
          src={sessionData?.user?.image as string}
          alt=""
          width={96}
          height={96}
        />
        <LinkButton href="/set/create">Create Set</LinkButton>
        <LinkButton href="/exercise/create">Create exercise</LinkButton>
        <LinkButton href="/plan/create">Create plan</LinkButton>
      </div>
    </div>
  );
}

export default Dashboard;
