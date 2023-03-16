/* eslint-disable */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import wedding from '../../images/wedding.png'
import star from '../../images/star.png'
import Style from './EventDetials.module.scss'
import { async } from 'q'

export default function EventDetails () {
    const [event, setEvent] = useState([])
    const params = useParams()
    
    useEffect(() => {
        const getEvent = async () => {
            const result = await fetch(`http://localhost:4000/events/${params.id}`)
            const data = await result.json();

            setEvent(data);

            getEvent();
        }
    }, [])
  
  
    return (
      <div className={Style.DetailContainer}>
          <img src={wedding} alt="Wedding-image" />
          <div>
          <h2>Learn Wedding Photography</h2>
          <p>
           Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that\'ll last a lifetime.
          </p>
          <div className={Style.book}>
          <p><span>From $50</span> / person</p>
          <button>Book now</button>
          </div>
        </div>
      </div>
    )
  }


