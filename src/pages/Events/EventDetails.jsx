/* eslint-disable */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import wedding from '../../images/wedding.png'
import Style from './EventDetials.module.scss'
import { supabase } from '../../backend/client'

export default function EventDetails() {
  const [event, setEvent] = useState([])
  const params = useParams()

  useEffect(() => {
    const getEvent = async () => {
      const result = await supabase.from('event').select().eq('id', params.id)
      console.log(result.data)
      setEvent(result.data[0]);
    }
    getEvent();
  }, [])


  return (
    <div className={Style.DetailContainer}>
      <img src={event.image} alt="Wedding-image" />
      <div>
        <h2>{event.name}</h2>
        <p>
          {event.description}
        </p>
        <div className={Style.book}>
          <p><span>{event.location}</span></p>
          <button>Book now</button>
        </div>
      </div>
    </div>
  )
}


