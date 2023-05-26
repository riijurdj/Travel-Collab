import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "../styles/globals.css";
// import "../  ../../. ./node_modules/bootstrap/dist/css/bootstrap.min.css"
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
