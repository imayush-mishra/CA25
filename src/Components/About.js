import React from 'react'
import "./AboutStyles.css"

const About = () => {
  return (
    <div className='main-about'>
        <div className="about">About Us</div>
        <div className="content">
            <p className='content-para'>E-Cell IIT Guwahati is a non-profit student-run organization where we crave and explore the constantly evolving world of entrepreneurship and start-up cult. Our mission is to provide the aspiring young entrepreneurs who approach us all kinds of guidance and resources needed to hone their ideas.</p>
        </div>
        <div className="about">About the Program</div>
        <div className="content">
            <p className="content-para">The Campus ambassador Program is a thrilling opportunity for students across India to represent IIT Guwahati at your own institution, and propel our initiatives forward with your voice and efforts. Additionally, this is an internship opportunity for students to gain exposure to entrepreneurship and develop related skills.
</p>
        </div>
    </div>
  )
}

export default About