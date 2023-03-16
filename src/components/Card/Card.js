/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './Card.module.css'
import { supabase } from '../../backend/client'
import star from '../../images/star.png'

export default function Card() {
  const [images, setImages] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await supabase.from('event').select()
      const result2 = result.data
      const imagesData = result2.map((item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          location: item.location,
          src: item.image
        }
      })
      setImages(imagesData)
      console.log(imagesData)
    }
    fetchData()
  }, [])

  const handleWishlistClick = (imageId) => {
    console.log(`Added image ${imageId} to wishlist`)
    // Implement your wishlist functionality here
  }

  const handleMoreInfoClick = (imageId) => {
    console.log(`Clicked more info button for image ${imageId}`)
    // Implement your more information functionality here
    window.location.href = `/event-details/${imageId}`
  }

  return (
    <div className={styles['Card']}>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image.src} alt={image.alt} className={styles['card--image']} />
            <div>
              <p className={styles.bold}>{image.name}</p>
              <button className={styles.wishlist} onClick={() => handleWishlistClick(image.id)}>
                <FaHeart />
              </button>
              <button className={styles['more-info']} onClick={() => handleMoreInfoClick(image.id)}>
                More Info
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
