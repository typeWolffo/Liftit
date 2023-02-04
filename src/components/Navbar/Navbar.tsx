import { Button } from "../../ui/Button";

import { signIn, signOut, useSession } from "next-auth/react";
function Navbar() {
  const { data: sessionData, status } = useSession();
  // const { user } = sessionData;
  console.log(sessionData);
  return (
    <nav className="px-md">
      <Button
        variant="primary-outlined"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Let's go"}
      </Button>
    </nav>
  );
}

export default Navbar;
