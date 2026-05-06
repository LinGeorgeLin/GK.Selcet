import React from 'react';

function Contact() {
  return (
    <div className="Contact-Form">
      <div className="Contact-title">Contact</div>
      <div className="Contact-discription">Ask for collaboration</div>
      <div className="Contact-btn">
        <a href="mailto:glin7583@gmail.com">
          Click Here
        </a>
      </div>
      <div className="Contact-discription insta-link">
        <a
          href="https://www.instagram.com/gk.select"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Contact;
