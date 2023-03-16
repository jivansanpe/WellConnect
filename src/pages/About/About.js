import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'
import knowUs from '../../images/knowUs.jpg'
import Footer from '../../components/Footer/Footer'

export default function About () {
  return (
    <div>
      <Navbar />
      <h2 className='about-heading'>About Us</h2>
      <div className='about-content'>
        <img className='about-img' src={knowUs} alt='Know-us' />
        <p className='about-text'>
          Our application connects you with events in your community that aim to create a positive impact on society. Whether you want to participate as a volunteer or attend as a participant, our platform provides an easy way to discover non-profit events in various areas of society. From charity events to environmental initiatives, our app offers an exciting way to get involved in your community and make a real difference in the world. Join us on our mission to create positive change and make a meaningful contribution to your community.
        </p>
        <button className='about-button'><a href='https://sdgs.un.org/es/goals' className='about-link' target='_blank' rel='noopener noreferrer'>Learn More</a></button>
      </div>
      <Footer />
    </div>
  )
}
