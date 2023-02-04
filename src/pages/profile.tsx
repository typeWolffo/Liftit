import { useSession } from "next-auth/react";

function Profile() {
  const { data: sessionData } = useSession();
  return (
    <div>
      <span>profile</span>
    </div>
  );
}

export default Profile;
