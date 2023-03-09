import React from 'react'
import styles from './Hero.module.css'

export default function Hero () {
  return (
    <section className={styles.Hero}>
      <h1 className={styles['hero--header']}>Online Experiences</h1>
      <p className={styles['hero--text']}>Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
