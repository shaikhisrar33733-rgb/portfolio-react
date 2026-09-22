import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home")
    const [mobileMenu, setMobileMenu] = useState(false)
const menuRef = useRef();

const openMenu = () => {
    menuRef.current.style.right="0"
}
const closeMenu = () => {
    menuRef.current.style.right="-350px"
}



    return (
        <div className='navbar'>

            <img src={logo} alt="" />

            <img
                src={menu_open} 
                alt=""
                className='nav-mob-open'
                onClick={() => setMobileMenu(true)}
            />

            <ul ref={menuRef} className={`nav-menu ${mobileMenu ? 'nav-menu-visible' : ''}`}>

                <img
                    src={menu_close}
                    alt=""
                    className="nav-mob-close"
                    onClick={() => setMobileMenu(false)}
                />

                <li>
                    <a
                        className='anchor-link'
                        href='#home'
                        onClick={() => {
                            setMenu("home")
                            setMobileMenu(false)
                        }}
                    >
                        Home
                    </a>
                    {menu === "home" && <img src={underline} alt="" />}
                </li>

                <li>
                    <a
                        className='anchor-link'
                        href='#about'
                        onClick={() => {
                            setMenu("about")
                            setMobileMenu(false)
                        }}
                    >
                        About Me
                    </a>
                    {menu === "about" && <img src={underline} alt="" />}
                </li>

                <li>
                    <a
                        className='anchor-link'
                        href='#services'
                        onClick={() => {
                            setMenu("services")
                            setMobileMenu(false)
                        }}
                    >
                        Services
                    </a>
                    {menu === "services" && <img src={underline} alt="" />}
                </li>

                <li>
                    <a
                        className='anchor-link'
                        href='#work'
                        onClick={() => {
                            setMenu("work")
                            setMobileMenu(false)
                        }}
                    >
                    My Work
                    </a>
                    {menu === "work" && <img src={underline} alt="" />}
                </li>

                <li>
                    <a
                        className='anchor-link'
                        href='#contact'
                        onClick={() => {
                            setMenu("contact")
                            setMobileMenu(false)
                        }}
                    >
                        Contact
                    </a>
                    {menu === "contact" && <img src={underline} alt="" />}
                </li>

            </ul>

            <div className="nav-connect">
                <a className="anchor-link" href="#contact">
                    Connect With Me
                </a>
            </div>

        </div>
    )
}

export default Navbar