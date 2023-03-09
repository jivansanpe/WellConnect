import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import star from '../../images/star.png'

export default function Card (props) {
  return (
    <div className={styles.Card}>
      <img src={props.img} alt='Katie Zaferes' className={styles['card--image']} />
      <div className={styles['card--stats']}>
        <img src={star} className={styles['card--star']} />
        <span>{props.rating}</span>
        <span className={styles.gray}>({props.reviewCount}) • </span>
        <span className={styles.gray}>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className={styles.bold}>From ${props.price}</span> / person</p>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
