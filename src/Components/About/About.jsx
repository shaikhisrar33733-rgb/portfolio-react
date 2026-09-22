import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'
const About = () => {
    return (
        <div id='about' className='about'> 
    <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
    </div>
<div className="about-sections">
    <div className="about-left">
    <img src={profile_img} alt="Profile" className="about-profile-img" />
</div>
<div className="about-right">
    <div className="about-para">
        <p>   I’m Shaikh Israr Ahmad, a passionate Frontend Developer from India
    with a strong interest in designing and developing modern web
    applications.</p>
        <p>I enjoy turning ideas into clean, responsive, and
    interactive websites. I’m continuously learning new technologies
    and improving my development skills by working on real-world projects.</p>
    </div>
    <div className="about-skills">
<div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
<div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
<div className="about-skill"><p>Bootstrap & Git & GitHub</p><hr style={{width:"60%"}}/></div>
<div className="about-skill"><p>React.js</p><hr style={{width:"50%"}}/></div>
    </div>
    <hr />
</div>
</div>
<div className="about-achievements">
<div className="about-achievement">
    <h1>Fresher</h1>
    <p>Years of Experence </p>
</div>
<hr />

<div className="about-achievement">
    <h1>6+</h1>
    <p>Project Completed </p>
</div>
<hr />

<div className="about-achievement">
    <h1>6+</h1>
    <p>Happy Clients </p>
</div>
</div>

</div>

    )
}

export default About