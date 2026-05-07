"use client";

import React, { useMemo, useState } from 'react';
import HomeAds from '../components/HomeAds';
import SearchBar from '../components/SearchBar';
import photo from '../public/photos/photo'

export default function Home() {
  const [query, setQuery] = useState('');

  const filteredPhotos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return photo;
    }

    return photo.filter((item) => item.title.toLowerCase().includes(normalizedQuery));
  }, [query]);

  return (
    <>
      <HomeAds />
      <SearchBar value={query} onChange={setQuery} />
      <div className="goodbar">
        <div className="product-list">
          {filteredPhotos.map((photo, index) => (
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
          {filteredPhotos.length === 0 && <p className="search-empty">No products found.</p>}
        </div>
      </div>
    </>
  );
}
