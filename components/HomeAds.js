import React from 'react';
import Image from 'next/image';

function HomeAds() {
  return (
    <div className="AdsContainer">
      <div className="HomeAds">
        <Image
          src="/photos/banner.png"
          className="v1_3"
          alt=""
          width={1920}
          height={800}
          style={{ width: '100%', height: 'auto' }}
        />
        <span className="v1_18">Ads Flip Image</span>
      </div>
    </div>
  );
}

export default HomeAds;
