/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/logo.png';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    performSearch();
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&_limit=10&_offset=0&location=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.search_results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      performSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <nav className={styles.Navbar}>
      <a href="/" className={styles['nav--logo-link']}>
        <img src={logo} alt="To logo" className={styles['nav--logo']} />
      </a>
      <form className={styles['nav--search-form']} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Events"
          className={styles['nav--search-input']}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles['nav--search-button']}>
          Search Events
        </button>
      </form>
      {isLoading ? (
        <div className={styles['nav--loading']}></div>
      ) : searchResults.length > 0 ? (
        <ul className={styles['nav--list']}>
          {searchResults.map((result) => (
            <li key={result.listing.id} className={styles['nav--item']}>
              <a href={`/listings/${result.listing.id}`} className={styles['nav--link']}>
                {result.listing.name}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <div className={styles['nav--dropdown']}>
        <a href="#">Dropdown</a>
        <div className={styles['nav--dropdown-content']}>
          <a href="/login">Login</a>
          <a href="/signup">Sign up</a>
          <a href="/about">About</a>
        </div>
      </div>
    </nav>
  );
}






