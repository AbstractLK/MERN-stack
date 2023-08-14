import React from 'react'
import {Card, Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import data from "./data";
import NotFound from "./NotFound";

//components
import ProductsComponents from "../components/ProductsComponent";

const Item = () => {
    const {title} = useParams();
    const item = data.find((x) => x.title === title);
    if (!item) return <NotFound/>;
    const otherProducts = data.filter(x => x.title !== title);

    return (
        <>
            <h1 className='mb-5 sm:text-4xl text-2xl font-bold my-6 text-gray-900'>{item.title}</h1>
            <Container>
                    <Card>
                        <Row>
                            <Col >
                                <Card.Img src={item.thumbnail} style={{width:'18rem'}}></Card.Img>
                            </Col>
                            <Col className='mt-4'>
                                <Card.Text>{item.description}</Card.Text>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Card>
            </Container>

            <h1 className='sm:text-2xl text-xl font-bold my-20 text-gray-900'>Other Products</h1>
            <Container>
                <Row className=''>
                    <ProductsComponents products={otherProducts} />
                </Row>
            </Container>
        </>
    )
}

export default Item