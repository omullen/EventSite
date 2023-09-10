import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Event = ({event}) => {
  return (
    
    <Card className='my-3 my-p' data-bs-theme="dark">
        <Link to={`/event/${event._id}`} variant="info">
        <Card.Img src={event.image} variant='top' />
        </Link>
        <Card.Body>
            <Card.Title as='div'>
                <strong>{event.name}</strong>
            </Card.Title>
            <Card.Text as='div'>
            <i class="fa-solid fa-calendar-days"></i> {event.cal}
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
  )
}

export default Event