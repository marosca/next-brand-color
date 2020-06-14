import Head from "next/head";
import Card from "../layout/components/card";
import { useContext } from "react";

import useObservable from "../../hooks/useObservable";
import { BrandColorContext } from "../../services/brandColorService";

export default function HomeContainer() {
  const brandColor = useObservable(useContext(BrandColorContext));

  return (
    <div className="container">
      <main>
        <h1 className="title">HOME</h1>
        <Card color={brandColor} />
      </main>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
