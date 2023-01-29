import { api } from "../utils/api";
import { Button } from "../ui/Button";

function Dashboard() {
  const { mutate } = api.exercise.create.useMutation();

  const handleMutate = () => {
    mutate({
      name: "test",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });
  };

  return (
    <div>
      <span>dashboard</span>
      <Button onClick={handleMutate}>Rickroll</Button>
    </div>
  );
}

export default Dashboard;
