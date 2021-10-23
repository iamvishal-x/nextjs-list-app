import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)  <-- to go backward, +1 to forward
      router.push("/"); //to redirect to a specific page
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>List | 404 </title>
      </Head>
      <div className="not-found">
        <h1>Oooops......</h1>
        <h2>The page you&apos;re looking for doesn&apos;t exist</h2>
        <p>
          Redirecting to{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>{" "}
          in 3 seconds...
        </p>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
