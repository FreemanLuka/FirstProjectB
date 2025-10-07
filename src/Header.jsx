import React from 'react'

const Header = () => {
  return (
      <nav >
        <ul className='header-nav'>
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
          <button className='header-nav-btn'><a href="#contact">CONTACT ME</a></button>
        </ul>
      </nav>
  )
}

export default Header
