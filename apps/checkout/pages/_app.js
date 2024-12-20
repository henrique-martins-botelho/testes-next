import App from "next/app";
import React, { useState, useEffect, Suspense, lazy } from "react";

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only once on mount, indicating that we are now client-side.
    setIsClient(true);
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps };
};

export default MyApp;
