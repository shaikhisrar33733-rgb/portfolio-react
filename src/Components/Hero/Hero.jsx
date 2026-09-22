import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import resume from '../../assets/resume.pdf'

const Hero = () => {
    return (
        <div id='home' className='hero'>  

        <img src={profile_img} alt="Profile" className="profile-img" />

            <h1>
                <span>Hi Shaikh Israr Ahmad</span> Frontend Developer
            </h1>

            <p>
                I’m a passionate Frontend Developer focused on creating responsive,
                modern, and user-friendly web experiences.
            </p>

            <div className="hero-action">  

                <a className="hero-connect" href="#contact">
                    Connect with me
                </a>

                <a
                    className="hero-resume"
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My Resume
                </a>

            </div>

        </div>
    )
}

export default Hero