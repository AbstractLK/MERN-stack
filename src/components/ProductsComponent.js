import React from 'react'
import data from "../pages/data";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProductComponents = ({products}) => {
    return (
        <>
            {products.map(item=>(

                <Col xs={12} md={6} lg={4} xl={4}>

                    <Card key={item.id} className='hover:shadow-2xl mb-5  mx-auto hover:opacity-75'>
                        <Link to={`/item/${item.title}`}>
                            <Card.Img  variant="top" src={item.thumbnail}  className='lg:h-52 md:h-52'/>
                        </Link>
                        <Card.Body className=' bg-gray-200 flex justify-between'>
                            <Card.Title><h6>{item.title}</h6></Card.Title>
                            <Card.Text>${item.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default ProductComponents;