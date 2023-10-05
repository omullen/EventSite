import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Event = ({event}) => {
  return (
    
<motion.div whileHover={{ scale: 1.1 }} >
    <Card className='card text-white bg-primary mb-3'>
        <Link to={`/event/${event._id}`} variant="info" data-bs-theme="dark">
        <Card.Img src={event.image} variant='top' />
        </Link>
        <Card.Body>
            <Card.Title as='div'>
                <strong>{event.name}</strong>
            </Card.Title>
            <Card.Text as='div'>
            <i class="fa-solid fa-calendar-days"></i> {event.date}
            </Card.Text>
            <Card.Text as='div'>
                <div className='my-3'>
                <i class="fa-solid fa-people-group"></i> {event.attending} attending
                </div>
            </Card.Text>
            <Card.Text as='h3'>
                ${event.price}
            </Card.Text>
        </Card.Body>
    </Card>
</motion.div>

  )
}

export default Event