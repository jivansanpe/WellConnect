import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tortor id mi pharetra interdum. Quisque vel augue eget mauris blandit egestas. Mauris ut tellus quis elit iaculis vestibulum eget sed tellus. Nunc efficitur lobortis nisl, in rhoncus leo molestie sed. Vestibulum interdum auctor nulla, at consequat felis lobortis quis. Integer pharetra neque non velit tincidunt maximus. Sed interdum dui sit amet quam suscipit, nec faucibus nulla eleifend. Nam in ultricies sapien. Donec pellentesque felis vitae sapien rutrum, ac mollis leo vehicula. Aliquam finibus enim vitae lorem lacinia, vel tristique mauris tristique. Nam in interdum velit. Ut porttitor dolor ut ipsum vehicula, sit amet scelerisque dolor laoreet.
        </p>
        <button className='about-button'><a href='https://sdgs.un.org/es/goals' className='about-link' target='_blank' rel='noopener noreferrer'>Learn More</a></button>
      </div>
      <Footer />
    </div>
  )
}
