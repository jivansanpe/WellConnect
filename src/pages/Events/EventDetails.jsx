/* eslint-disable */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import data from '../../data/data'
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
      <div>
        <Hero title="Events Details" body="Description of Events A." />
        <section>
        </section>
      </div>
    )
  }


