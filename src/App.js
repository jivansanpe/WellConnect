import React from 'react'
import styles from './App.css'
import Navbar from './components/Navbar/Navbar'
import Collage from './components/Collage/Collage'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import data from './data/data.js'
import Footer from './components/Footer/Footer'

export default function App () {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Collage />
      <Hero />
      <section className={styles['cards-list']}>
        {cards}
      </section>
      <Footer />
    </div>
  )
}
