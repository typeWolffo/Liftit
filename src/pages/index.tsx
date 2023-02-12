import { Text, Container, Spacer, Button } from "@nextui-org/react";
import { type NextPage } from "next";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <>
      <Container
        fluid
        className="flex h-screen flex-col items-center justify-center"
      >
        <Text
          h1
          size={90}
          css={{
            textGradient: "45deg, $primaryLight 30%, $info-light",
            fontFamily: "$primary",
          }}
          weight="black"
        >
          LiftIT
        </Text>
        <Spacer y={1} />
        <Button color="primary" shadow ghost onClick={() => signIn()}>
          Log In
        </Button>
      </Container>
    </>
  );
};

export default Home;
