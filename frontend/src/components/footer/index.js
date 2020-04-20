import React from 'react';
import './footer.scss';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <a href="mailto:info@ethereumba.com">info@ethereumba.com</a>
      <p>Ethereum Buenos Aires {date}</p>
    </div>
  );
};

export default Footer;
