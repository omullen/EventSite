import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {Row, Col, Image, Card, Button, ListGroup, Form} from 'react-bootstrap'
import {motion} from 'framer-motion'
import { listEventDetails } from '../actions/eventActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const EventScreen = () => {
const [qty, setQty] = useState(1)
const params = useParams();
const dispatch = useDispatch();
const navigate = useNavigate()

const eventDetails = useSelector((state) => state.eventDetails)
const {loading, error, event} = eventDetails

useEffect(() => {
   dispatch(listEventDetails(params.id))
    }, [dispatch, params])

const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
}

return (
    <>
    <motion.div whileHover={{ scale: 1.03 }} >
        <Link className='btn btn-primary my-3' to='/'><i class="fa-solid fa-arrow-left"></i> Go back</Link></motion.div>
        {
          loading ? (<Loader />) 
            : error ? (<Message variant='danger'>{error}</Message>) :
    
    (<Row>
        <Col md={6}>
            <Image src={event.image} alt={event.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{event.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    {event.date}
                </ListGroup.Item>
                <ListGroup.Item>
                <i class="fa-solid fa-people-group"></i> {event.attending} attending
                </ListGroup.Item>
                <ListGroup.Item>
                    {event.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                            ${event.price}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                            {event.countInStock === 5 ? 'Only 5 Spots Left!'
                            : event.countInStock === 4 ? 'Only 4 Spots Left!'
                            : event.countInStock === 3 ? 'Only 3 Spots Left!'
                            : event.countInStock === 2 ? 'Only 2 Spots Left!'
                            : event.countInStock === 1 ? 'Only 1 Spot Left!'
                            : event.countInStock > 0 ? 'Spots Left!'
                            : "Sold Out"}</Col>
                        </Row>
                    </ListGroup.Item>
                    {event.countInStock > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                            <Form.Control
                                as='select'
                                value={qty}
                                onChange={e => setQty(e.target.value)}>
                                    {
                                        [...Array(event.countInStock.keys())].map(x =>
                                           (
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                           )
                                        )
                                    }
                            </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>)}
                    <ListGroup.Item>
                    <motion.div whileHover={{ scale: 1.1 }} >
                        <Button
                        className='btn-block'
                        bg="success"
                        variant="success"
                        type='btn'
                        disabled={event.countInStock === 0}
                        onClick={addToCartHandler}
                        >RSVP</Button></motion.div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>)
    }
    </>
  )
}

export default EventScreen