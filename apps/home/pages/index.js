import React, { Suspense } from "react";

const Checkout =
  typeof window !== "undefined"
    ? React.lazy(() => import("checkout/checkout"))
    : null;

const Home = ({ loaded }) => {
  return (
    <div>
      Página da Home
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Checkout />
        </Suspense>
      </div>
    </div>
  );
};
Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
