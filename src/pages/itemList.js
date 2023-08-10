import React from 'react'
import data from './data'
import {Button, Card, Row, Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <>
            <h1 className='  font-bold my-6 text-gray-900 text-center mb-5'>Product list</h1>
            <Container>
                <Row className=''>
                    {data.map(item=>(

                        <Col xs={12} md={6} lg={4} xl={3}>
                            <Card key={item.id} style={{ width: '16rem'}} className='hover:shadow-2xl mb-5 mx-auto'>
                                <Card.Img style={{ height: '13rem'}} variant="top" src={item.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

        // <div className="bg-white">
        //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        //         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        //
        //         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        //             {data.map((product) => (
        //                 <div key={product.id} className="group relative">
        //                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-full">
        //                         <img
        //                             src={product.thumbnail}
        //                             className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        //                         />
        //                     </div>
        //                     <div className="mt-4 flex justify-between">
        //                         <div>
        //                             <h3 className="text-sm text-gray-700">
        //                                 <a href='#'>
        //                                     <span aria-hidden="true" className="absolute inset-0" />
        //                                     {product.title}
        //                                 </a>
        //                             </h3>
        //                             {/*<p className="mt-1 text-sm text-gray-500">{product.color}</p>*/}
        //                         </div>
        //                         <p className="text-sm font-medium text-gray-900">${product.price}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Product;