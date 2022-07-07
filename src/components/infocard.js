import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import people from '../components/img/people.png';
export const Infocard = ()=>(
    <>
    <Container style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
        <Row>
            <Col md={7}>
                <img src ={people} height={300}/>
            </Col>
            <Col md={5}>
                <h2>Our team</h2>
                <p>In any industry where the people
                     behind a company are as important 
                     as the company itself, you’re likely
                     to find a kind of expanded “about” page
                     that includes information on individual 
                     employees. “Meet the Team” pages are popular
                     among web design and other creative firms,
                     but are also found on sites within various other
                     industries. These pages are a valuable addition 
                     to any site where human contact is an important part
                     of the industry. It adds a personal touch to the company
                     and can lend trust to visitors.</p>
            </Col>
        </Row>
    </Container>
    </>
)
export default Infocard;