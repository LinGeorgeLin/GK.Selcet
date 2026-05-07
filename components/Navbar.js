'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const Type = () => setSidebar(!sidebar);

  useEffect(() => {
    const overflowValue = sidebar ? 'hidden' : '';

    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [sidebar]);

  return (
    <>
      <div className="navbar">
        <Link className="Home" href="/">
          <div className="Logo" />
        </Link>
        <div className="Link">
          <Link className="Link-button Men" href="/men">Men</Link>
          |
          <Link className="Link-button Women" href="/women">Women</Link>
          |
          <Link className="Link-button Kids" href="/kids">Kids</Link>
          |
          <button className="Link-button Type" id="Type" onClick={Type}>Type</button>
        </div>
        <svg className="menu" xmlns="http://www.w3.org/2000/svg" onClick={Type} height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <div className={sidebar ? 'Modal_mask active' : 'Modal_mask'} onClick={Type}></div>
      <div className={sidebar ? 'TypeList active' : 'TypeList'} id="TypeList">
        <div className="TypeList-btn-title">
          <span className="TypeList-btn">Type</span>
          <svg className="TypeList-btn cancel-btn" onClick={Type} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#f8f8f8" opacity={0.8}>
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <div className="Type-Link">
          <Link href="/" className="TypeList-btn">Home</Link>
          <Link href="/men" className="TypeList-btn">Men</Link>
          <Link href="/women" className="TypeList-btn">Women</Link>
          <Link href="/kids" className="TypeList-btn">Kids</Link>
        </div>
        <div className="MoreLink">
          <Link href="/login" className="TypeList-btn">Login</Link>
          <Link href="/signup" className="TypeList-btn">Sign Up</Link>
          <Link href="/contact" className="TypeList-btn">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
