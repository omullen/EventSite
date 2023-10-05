import React, {useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import axios from 'axios'
import Event from '../components/Event'

const HomeScreen = () => {

  useEffect(() => {
    const fetchEvents = async () => {
      await axios.get('/api/events')
    }
  })

  return (
    <>
    <h1>Events</h1>
    <p>Find the fun!</p>
    <Row>
        {events.map(e =>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Event event={e} />
            </Col>
        ))
        }
    </Row>
    </>
  )
}

export default HomeScreen