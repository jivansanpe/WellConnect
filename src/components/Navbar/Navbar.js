/* eslint-disable */
import React, { useState, useLayoutEffect } from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faUser, faUserCircle, faUserPlus, faInfoCircle, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { supabase } from '../../backend/client'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [, setSearchResults] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    performSearch()
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const logOut = async () => {
    window.sessionStorage.removeItem('token')
    const result = await supabase.auth.signOut()
    console.log(result)
  }

  const performSearch = async () => {
    try {
      const response = await fetch(`https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&_limit=10&_offset=0&location=${searchQuery}`)
      const data = await response.json()
      setSearchResults(data.search_results)
    } catch (error) {
      console.error(error)
    } finally {
      <div></div>
    }
  }

  useLayoutEffect(() => {
    if (searchQuery) {
      performSearch()
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  return (
    <nav className={styles.Navbar}>
      <NavLink to="/" className={styles['nav--logo-link']}>
        <img src={logo} alt="To logo" className={styles['nav--logo']} />
      </NavLink>
      <form className={styles['nav--search-form']} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search events"
          className={styles['nav--search-input']}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles['nav--search-button']}><FontAwesomeIcon icon={faSearch} /></button>
      </form>
      <div className={styles['nav--dropdown']}>
        <div className={styles['nav--icons-container']}>
          <a href="#" className={styles['nav--dropdown-icons']}>
            <FontAwesomeIcon icon={faBars} />
            <span className={styles['nav--icon-space']}></span>
            <FontAwesomeIcon icon={faUserCircle} />
          </a>
        </div>
        <div className={styles['nav--dropdown-content']}>
          <NavLink to="/login"><FontAwesomeIcon icon={faUser} /> Login</NavLink>
          <NavLink to="/signup"><FontAwesomeIcon icon={faUserPlus} /> Sign up</NavLink>
          <NavLink onClick={logOut}><FontAwesomeIcon icon={faUserMinus} /> Sign out</NavLink>
          <NavLink to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</NavLink>
        </div>
      </div>
    </nav>
  )
}
