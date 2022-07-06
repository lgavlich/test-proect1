import React from 'react';
import Slider from './Slider';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import box from '../components/img/box.jpg';
import nout from '../components/img/nout.jpg';
import img3 from '../components/our works/img3.png';
import Infocard from './infocard';


export const Home = ()=>(
    <>
    <Slider/>
    <Container style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
        <Row>
            <Col>
            <Card style ={{width:'18rem'}}>
                <Card.Img variant ="top" src ={box}/>
                <Card.Body>
                    <Card.Title>Web sity</Card.Title>
                        <Card.Text>
                        Our team will fulfill any of your tasks
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                      </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style ={{width:'18rem'}}>
                <Card.Img variant ="top" src ={nout}/>
                <Card.Body>
                    <Card.Title>Web sity</Card.Title>
                        <Card.Text>
                        Our team will fulfill any of your tasks
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                      </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style ={{width:'18rem'}}>
                <Card.Img variant ="top" src ={img3}/>
                <Card.Body>
                    <Card.Title>Web sity</Card.Title>
                        <Card.Text>
                        Our team will fulfill any of your tasks
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                      </Card.Body>
            </Card>
            </Col>
        </Row>
        <Infocard/>
    </Container>
    </>
)