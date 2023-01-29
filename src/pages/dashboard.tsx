import { api } from "../utils/api";
import { Button } from "../ui/Button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Dashboard() {
  const { data: sessionData } = useSession();
  const { mutate } = api.exercise.create.useMutation();

  const handleMutate = () => {
    mutate({
      name: "test",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-dark-700">
      <div className="flex flex-col items-center justify-center font-primary text-primary">
        <p>Logged as {sessionData?.user?.name}</p>
        <Image
          className="my-5 rounded-full"
          src={sessionData?.user?.image as string}
          alt=""
          width={96}
          height={96}
        />
      </div>
      <Button onClick={handleMutate}>Rickroll</Button>
      <Button
        variant="primary-outlined"
        style={{ marginTop: "5px" }}
        onClick={() => void signOut()}
      >
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
