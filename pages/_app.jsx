import App from "next/app";
import React, { useState, useEffect } from "react";
import BrandColorService, {
  BrandColorContext,
} from "../src/services/brandColorService";

function MyApp({ Component, pageProps }) {
  const [currentColor, setCurrentColor] = useState("");
  const brandColorService = new BrandColorService();

  useEffect(() => {
    brandColorService.brandColorObservable$.subscribe((color) => {
      setCurrentColor(color);
    });

    return () => {
      clearInterval(brandColorService.interval);
    };
  }, []);

  return (
    <>
      <BrandColorContext.Provider value={currentColor}>
        <Component {...pageProps} className="kkkkk"/>
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
