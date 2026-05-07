import React from 'react';
import Link from 'next/link';
import photo from '../../public/photos/photo';

export const metadata = { title: 'Men | G.K Select' };

export default function Men() {
  return (
    <>
      <div className="route">
        <Link href="/" className="home-link">Home / </Link>
        <div className="page">Men</div>
      </div>
      <div className="goodbar-otherType">
        <div className="product-list-otherType">
          {photo.map((photo, index) => (
            <a
              href={photo.link}
              className="v1_22"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="goodlayer">
                <img src={photo.src} alt={photo.title} className={`v1_7 ${photo.position}`} />
              </div>
              <div className="v1_12">{photo.title}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
