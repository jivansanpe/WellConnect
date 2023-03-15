import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../App.css'
import Collage from '../../components/Collage/Collage'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import data from '../../data/data.js'
import Footer from '../../components/Footer/Footer'

export default function Home () {
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
      <Hero title="Events A" body="Description of Events A." />
      <section className={styles['cards-list']}>
        {cards}
      </section>
      <Footer />
    </div>
  )
}
