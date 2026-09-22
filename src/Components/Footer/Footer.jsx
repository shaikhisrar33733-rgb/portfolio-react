import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
<div className="footer-top">
<div className="footer-top-left">
    <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
    <p>I’m Shaikh Israr Ahmad, a passionate Frontend Developer focused on creating modern, responsive, and user-friendly web experiences.</p>
</div>
<div className="footer-top-right">
    <div className="footer-email-input">
        <img src={user_icon} alt="" />
        <input type="email" placeholder='Enter Your Email' />
    </div>
    <div className="footer-subscribe">Subscribe</div>
</div>
</div>     
<hr />
<div className="footer-bottom">
    <p className="footer-bottom-left">© 2026 Shaikh Israr Ahmad. All Rights Reserved.</p>
    <div className='footer-bottom-right'> 

    <p>Terms Of Services</p>
    <p>Privacy policy</p>
    <p>Connect with me</p>
    </div>   
    </div>    
</div>
    )
}

export default Footer