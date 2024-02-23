import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "../store/store";
import "../styles/globals.css";

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
