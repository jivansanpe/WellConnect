import React from 'react'
import styles from './Collage.module.css'
import grid from '../../images/photo-grid.png'

export default function Collage () {
  return (
    <section className={styles.Collage}>
      <img src={grid} alt='Grid' className={styles['hero--photo']} />
    </section>
  )
}
