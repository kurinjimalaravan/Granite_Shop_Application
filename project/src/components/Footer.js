import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logof.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'



const Footer = () => {
  return (
    <footer >
        <div className='container footer_container'>
            <article>
                <Link to='/'>
                    <img className='logof' src={Logo} alt='Footer Logo'/>
                </Link>
                <p>
                    Welcome to the shop of granite and tiles
                </p>
                <div className='footer_socials'>
                    <a href='https://linkedin.com/' ><FaLinkedin/></a>
                    <a href='https://facebook.com/' ><FaFacebookF/></a>
                    <a href='https://twitter.com/' ><AiOutlineTwitter/></a>
                    <a href='https://instagram.com/' ><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>SVG</h4>
                <Link to='/about'>About</Link>
                <Link to='/service'>Service</Link>
                <Link to='/contact'>Contact</Link>
                
            </article>
            <article>
                <h4>Granite</h4>
                <Link to='/granite'>Slab Granite</Link>
                <Link to='/granite'>Tiled Granite</Link>
                <Link to='/granite'>Modular Granite</Link>
                <Link to='/granite'>Black Pearl Granite</Link>
            </article>
            <article>
                <h4>Tiles</h4>
                <Link to='/tiles'>Cerammic Tiles</Link>
                <Link to='/tiles'>Glass Tiles</Link>
                <Link to='/tiles'>Porcelain Tiles</Link>
                <Link to='/tiles'>Marble Tiles</Link>
            </article>

        </div>
        <div className='footer_copyright'>
            <small>2022 SVG &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
