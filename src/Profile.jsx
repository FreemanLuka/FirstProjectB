import React from "react";
import logo1 from "./Images/logo1.png";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import  { MdAlternateEmail } from "react-icons/md"; // email icon
import profileimage from "./Images/profileimage.png"


const Profile = () => {
  return (
    <section className="profile">
      <div className="leftside">
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>

        <h3>Hi, I am</h3>
        <h1>Tomasz Gajda</h1>
        <h4>Front-end Developer / UI designer</h4>

        <div className="socialicons">
          <a href="mailto:example@email.com">
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
            <li>
              <button className="contact-btn">Contact Me</button>
            </li>
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
