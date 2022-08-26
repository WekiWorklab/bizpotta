import { wrapper } from "../store/store";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <NextNProgress color='#121f4c' />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
