import React from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import img1 from '../components/our works/img1.png';
import img8 from '../components/our works/img8.png';
import img9 from '../components/our works/img9.png';
import img3 from '../components/our works/img3.png';


 export const Gallery = ()=>(

    <Container style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
    <Row>
        <Col>
        <Card style ={{width:'18rem'}}>
            <Card.Img variant ="top" src ={img1}/>
            <Card.Body>
                <Card.Title>Web sity</Card.Title>
                    <Card.Text>
                    Our team will fulfill any of your tasks
                    </Card.Text>
                   
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
                   
                  </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style ={{width:'18rem'}}>
            <Card.Img variant ="top" src ={img9}/>
            <Card.Body>
                <Card.Title>Web sity</Card.Title>
                    <Card.Text>
                    Our team will fulfill any of your tasks
                    </Card.Text>
                   
                  </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style ={{width:'18rem'}}>
            <Card.Img variant ="top" src ={img8}/>
            <Card.Body>
                <Card.Title>Web sity</Card.Title>
                    <Card.Text>
                    Our team will fulfill any of your tasks
                    </Card.Text>
                   
                  </Card.Body>
        </Card>
        </Col>
        
        </Row>
        </Container>
 )