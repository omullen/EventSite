import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap'
import products from '../products'

const ProductScreen = () => {
const params = useParams();
const product = products.find(p => p._id === params.id)

return (
    <>
    <Link className='btn btn-light my-3' to='/'>Go back</Link>
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    {product.date}
                </ListGroup.Item>
                <ListGroup.Item>
                <i class="fa-solid fa-people-group"></i> {product.attending} attending
                </ListGroup.Item>
                <ListGroup.Item>
                    {product.description}
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
                            ${product.price}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>{product.countInStock > 0 ? 'Spots Left!' : 'Sold Out'}</Col>
                        </Row>
                    <ListGroup.Item>
                        <Button
                        className='btn-block'
                        bg="info"
                        variant="info"
                        type='btn'
                        disabled={product.countInStock === 0}
                        >RSVP</Button>
                    </ListGroup.Item>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen