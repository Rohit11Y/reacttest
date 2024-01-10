import React from 'react'

const Footer = () => {
  return (
    <div>
    <section className="footer">
    <div className="footer-content">
      <ul className="d-flex navbar-link">
        <li className="logo">
          <span className="circle-border">N</span> <span>WINKLE MEDIA</span>
        </li>
        <li>Services</li>
        <li>Get started</li>
      </ul>
      <div className="footer-icon">
        <span></span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span></span>
      </div>
      <ul className="footer-link">
        <li className="footer-title">located</li>
        <li className="footer-text">NewYork, USA</li>
        <li className="footer-title">Phone no:</li>
        <li className="footer-text">+977 9812345678</li>
        <li className="footer-title">Mail:</li>
        <li className="footer-text">nischalchan@gmail.com</li>
      </ul>
    </div>

    <div className="line-right"></div>

    <div className="copyright">
      Copyrights © 2022 Winkle’Media. All rights reserved.
    </div>
  </section>
    
    </div>
  )
}

export default Footer