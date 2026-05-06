import React from 'react';
import HomeAds from '../components/HomeAds';
import SearchBar from '../components/SearchBar';
import photo from '../photos/photo';

export default function Home() {
  return (
    <>
      <HomeAds />
      <SearchBar />
      <div className="goodbar">
        <div className="product-list">
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
