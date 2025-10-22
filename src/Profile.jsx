import React from "react";
import logo1 from "./Images/logo1.png";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import  { MdAlternateEmail } from "react-icons/md"; // email icon
import profileimage from "./Images/profileimage.png"


const Profile = () => {
  return (
    <section className="profile">
      <div className="leftside">
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>

        <h3>Hi, we are</h3>
        <h1>PORA5 SEFE</h1>
        <h4>Front-end Developers</h4>

        <div className="socialicons">
          <a href="https://gmail.com/" target="_blank" rel="noreferrer">
            <MdAlternateEmail />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="rightside">
        <nav className="profilenav">
          <ul>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            
              <button className="contact-btn">
                <a href="#contact">Contact Me</a>
              </button>
            
          </ul>
        </nav>

        <div className="profileimage">
          <img src={profileimage} alt="profilepicture" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
