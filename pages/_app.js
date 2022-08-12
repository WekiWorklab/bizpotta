import { wrapper } from "../store/store";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color='#121f4c' />
      <Component {...pageProps} />;
    </>
  );
}

export default wrapper.withRedux(MyApp);
