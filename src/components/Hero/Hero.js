import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'

export default function Hero ({ title, body }) {
  return (
    <section className={styles.Hero}>
      <h1 className={styles['hero--header']}>{title}</h1>
      <p className={styles['hero--text']}>{body}</p>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
