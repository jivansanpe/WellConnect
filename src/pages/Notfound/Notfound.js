import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Notfound.module.css'

const NotFound = () => {
  return (
        <div className={styles.NotFoundContainer}>
            <h1><span>404</span> Page not found</h1>
            <p>The page you are looking for does not exist</p>
            <button><Link to={'/'}>Back to Home page</Link></button>
        </div>
  )
}

export default NotFound
