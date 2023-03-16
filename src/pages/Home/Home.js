/* eslint-disable */
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Collage from '../../components/Collage/Collage'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Collage />
      <Hero title="Events" body="Check all the events!" />
      <Card />
      <Footer />
    </div>
  )
}
