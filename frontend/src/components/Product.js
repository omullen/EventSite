import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Link to={`/product/${product._id}`} variant="info">
    <Card className='my-3 my-p'>
        <Card.Img src={product.image} variant='top' />
        <Card.Body>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as='div'>
            <i class="fa-solid fa-calendar-days"></i> {product.date}
            </Card.Text>
            <Card.Text as='div'>
                <div className='my-3'>
                <i class="fa-solid fa-people-group"></i> {product.attending} attending
                </div>
            </Card.Text>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
        </Card.Body>
    
    </Card>
    </Link>
  )
}

export default Product