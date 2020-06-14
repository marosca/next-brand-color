import App from "next/app";
import React, { useEffect } from "react";
import BrandColorService, {
  BrandColorContext
} from "../src/services/brandColorService";

function MyApp({ Component, pageProps }) {
  const brandColorService = new BrandColorService();
  useEffect(() => {
    return () => {
      clearInterval(brandColorService.interval);
    };
  }, []);


  return (
    <>
      <BrandColorContext.Provider
        value={brandColorService.brandColorObservable$}
      >
        <Component {...pageProps}/>
      </BrandColorContext.Provider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
