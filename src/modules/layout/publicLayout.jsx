import Metas from "./components/metas";
import MainHeader from "./components/mainHeader";
import Footer from "./components/footer";
import { useEffect } from 'react';
function PublicLayout({ children }) {
  useEffect(() => {
    console.log('public layout')
  })
  return (
    <>
      <Metas />
      <MainHeader />
      <section className="section">{children}</section>
      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .section {
          margin-top: 100px;
        }
      `}</style>
    </>
  );
}

export default PublicLayout;
