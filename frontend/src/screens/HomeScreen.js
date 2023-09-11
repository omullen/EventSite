import React from 'react'
import {Col, Row} from 'react-bootstrap'
import events from '../events'
import Event from '../components/Event'

const HomeScreen = () => {
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