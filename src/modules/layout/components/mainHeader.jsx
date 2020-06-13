import Link from "next/link";
import { useContext } from 'react';
import { BrandColorContext } from '../../../services/brandColorService';

export default function MainHeader() {
  const brandColor = useContext(BrandColorContext)

  return (
    <>
      <section className="head">
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>

          <li>
            <Link href="/tarifas">
              <a>TARIFAS</a>
            </Link>
          </li>

          <li>
            <Link href="/cobertura">
              <a>COBERTURA</a>
            </Link>
          </li>
        </ul>
      </section>

      <style jsx>{`
        .head {
          position: fixed;
          top: 0;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${brandColor || 'blue'};
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
          width: 100%;
          color: white;
        }
        a {
          color: white;
        }
        a:visited {
          color: inherit
        }
      `}</style>
    </>
  );
}
