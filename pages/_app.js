import React from "react";
import { wrapper } from "../store/store";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";

// testing

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextNProgress
            color='#121f4c'
            options={{
              showSpinner: false,
              trickleSpeed: 100,
              minimum: 0.3,
            }}
          />
          <Component {...pageProps} />
          <ToastContainer />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
