import React, { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/router";
const Home =
  typeof window !== "undefined" ? React.lazy(() => import("home/home")) : null;
const Page = (props) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
    if (props.needsPush) {
      router.push(router.route);
    }
  }, [props.needsPush, router]);
  if (!isClient || props.needsPush) {
    return null;
  }
  return (
    <div>
      <h1>Página do Checkout</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Home {...props} />
      </Suspense>
    </div>
  );
};
Page.getInitialProps = async (ctx) => {
  if (typeof window !== "undefined") {
    const page = (await import("home/home")).default;
    console.log("Running getInitialProps client side");
    if (page.getInitialProps) {
      return page.getInitialProps(ctx);
    }
  }
  return {
    needsPush: true,
  };
};
export default Page;
