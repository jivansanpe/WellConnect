import React from 'react'
import styles from './Hero.module.css'
import grid from '../../images/photo-grid.png'

export default function Hero () {
  return (
    <section className={styles.Hero}>
      <img src={grid} alt='Grid' className={styles['hero--photo']}/>
      <h1 className={styles['hero--header']}>Online Experiences</h1>
      <p className={styles['hero--text']}>Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
