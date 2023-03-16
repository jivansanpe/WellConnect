/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaHeart } from 'react-icons/fa'
import './Card.module.css'
import { supabase } from '../../backend/client'

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [images, setImages] = useState([])
  const length = images.length

  useEffect(() => {
    async function fetchData() {
      const result = await supabase.from('event').select()
      setImages(result.data)
    }
    fetchData();

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

  // const nextSlide = () => {
  //   setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  // }

  // const prevSlide = () => {
  //   setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  // }

  if (images.length === 0) {
    return null
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {images.map((image, index) => {
        return (
          <div className={index === currentImage ? 'slide active' : 'slide'} key={image.id}>
            <img src={image.image} alt={image.alt} className="image" />
            <div className="overlay">
              {/* <button className="wishlist" onClick={() => handleWishlistClick(image.id)}>
                <FaHeart />
              </button>
              <button className="more-info" onClick={() => handleMoreInfoClick(image.id)}>
                More Info
              </button> */}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Slider
