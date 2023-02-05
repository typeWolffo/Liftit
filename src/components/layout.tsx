import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useEffect } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import { ToastContainer } from "react-toastify";

function Layout({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" && router.pathname !== "/")
      void router.push("/");
    if (status === "authenticated" && router.pathname === "/")
      void router.push("/dashboard");
  }, [router, status]);

  return (
    <>
      <Head>
        <title>LiftIT</title>
        <meta name="description" content="LiftIT" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#191919" />
        <meta name="msapplication-TileColor" content="#191919" />
        <meta name="theme-color" content="#191919" />
      </Head>
      <Container>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          {children}
        </motion.div>
      </Container>
    </>
  );
}

export default Layout;
