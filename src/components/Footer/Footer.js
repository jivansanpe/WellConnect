import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialIcons}>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>
        © 2023 The beach boys. All rights reserved.
      </p>
    </footer>
  )
}
