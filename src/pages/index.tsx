import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { Button } from "../ui/Button";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-dark-700">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="relative h-[100px] w-[90%]">
            <Image src="/images/h100.svg" alt={"Payin logo"} fill priority />
          </div>
          <Button
            variant="primary-outlined"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Let's go"}
          </Button>
        </div>
        <p className="font-secondary text-primary">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </p>
      </main>
    </>
  );
};

export default Home;
