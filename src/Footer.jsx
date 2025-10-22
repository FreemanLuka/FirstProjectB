import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import  { MdAlternateEmail } from "react-icons/md"; // email icon




function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <button
        type="button"
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        Back to top
      </button>

      <div className="social-links">
        <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
        <MdAlternateEmail />
        </a>
      </div>
      <p>© {new Date().getFullYear()} PORA5 SEFE. All rights reserved.</p>
    </footer>
  );
  
}

export default Footer;
