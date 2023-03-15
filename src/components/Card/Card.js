import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import star from '../../images/star.png'
import { Link } from 'react-router-dom'

export default function Card (props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className={styles.Card}>
      {badgeText && <div className={styles['card--badge']}>{badgeText}</div>}
      <img src={props.img} alt='Katie Zaferes' className={styles['card--image']} />
      <div className={styles['card--stats']}>
        <img src={star} className={styles['card--star']} />
        <span>{props.item.stats.rating}</span>
        <span className={styles.gray}>({props.item.stats.reviewCount}) • </span>
        <span className={styles.gray}>{props.item.location}</span>
      </div>
      <p><Link to={`/event/${props.item.id}`}>{props.item.title}</Link></p>
      <p><span className={styles.bold}>From ${props.item.price}</span> / person</p>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    stats: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired
    }).isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    openSpots: PropTypes.number.isRequired
  }).isRequired,
  img: PropTypes.string.isRequired
}
