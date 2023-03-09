import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/logo.png'

export default function Navbar () {
  return (
    <nav className={styles.Navbar}>
      <a href="/" className={styles['nav--logo-link']}>
        <img src={logo} alt='To logo' className={styles['nav--logo']} />
      </a>
      <ul className={styles['nav--list']}>
        <li className={styles['nav--item']}>
          <a href="/login" className={styles['nav--link']}>Login</a>
        </li>
        <li className={styles['nav--item']}>
          <a href="/about" className={styles['nav--link']}>About</a>
        </li>
      </ul>
    </nav>
  )
}
