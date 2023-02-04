import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "../ui/Button";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <main className="flex flex-col items-center justify-center bg-gradient-to-br from-background to-dark-700">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="font-primary text-9xl font-bold text-primary">
            LiftIT
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
