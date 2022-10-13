import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { pathname } = useRouter();
  return (
    <SessionProvider session={session}>
      {pathname.includes("/auth/") ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
}

export default MyApp;
