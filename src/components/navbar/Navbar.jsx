import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IMAGE_PATH } from '../../constant/Image_path';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whpt3">Whait is GPT ?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setTpggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-link_logo">
          <img src={`${IMAGE_PATH}/logo.svg`} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {
          toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setTpggleMenu(false)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setTpggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;