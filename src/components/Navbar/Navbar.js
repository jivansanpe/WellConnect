import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/logo.png'

export default function Navbar () {
  return (
    <nav className={styles.Navbar}>
      <img src={logo} alt='To logo' className={styles['nav--logo']} />
    </nav>
  )
}
