import React from 'react'
import './ContactMe.css'

import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import ContactMeForm from '../ContactMeForm/ContactMeForm';
import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{ flex: 1 }}>
                <ContactInfoCard icon={<LuMail />} text="sample.sample@gmail.com" />
                <ContactInfoCard icon={<FaGithub />} text="https://github.com/Crispkreme" />
            </div>
            <div style={{ flex: 1 }}>
              <ContactMeForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe