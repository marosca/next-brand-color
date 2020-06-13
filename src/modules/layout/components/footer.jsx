import { useContext } from 'react'
import { BrandColorContext } from '../../../services/brandColorService';

export default function Footer() {
  const brandColor = useContext(BrandColorContext)

  return (
    <>
      <footer className="footer">
        <p>Pie de página</p>
      </footer>

      <style jsx>{`
        .footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${brandColor || 'blue'};
        }
      `}</style>
    </>
  );
}
