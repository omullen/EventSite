import React from 'react'
import {Col, Row} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
    <h1>Events</h1>
    <Row>
        {products.map(p =>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={p} />
            </Col>
        ))
        }
    </Row>
    </>
  )
}

export default HomeScreen