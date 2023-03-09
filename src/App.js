import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import katie from './images/katie.png'

export default function App () {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life lessons with Katie Zaferes'
        price={136}
      />
    </div>
  )
}
