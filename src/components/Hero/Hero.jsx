import React from 'react'
import './Hero.css'
import { FaReact, FaCss3Alt, FaHtml5  } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
            </p>
        </div>
        <div className="hero-image">
            <div className='profile-container'>
                <div className="tech-icon">
                    <FaReact />
                </div>
                <img className='profile' src="./assets/images/profile.jpg" alt="" />
            </div>
            <div className='social-media-icons'>
                <div className="tech-icon">
                    <FaHtml5 />
                </div>
                <div className="tech-icon">
                    <FaCss3Alt />
                </div>
                <div className="tech-icon">
                    <RiJavascriptFill />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero