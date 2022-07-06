import { Carousel } from 'react-bootstrap';
import React from 'react';
import work from '../components/img/work.png';


 function Slider() {
    return (
     <Carousel>
        <Carousel.Item style= {{'height':'700px'}}>
            <img
            className="d-block w-100"
            src = {work}
            alt=" Light Effects"

            />
            <Carousel.Caption>
                <h3>Web sity</h3>
                <p>do do nostrud est aligua</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style= {{'height':'700px'}}>
            <img
            className="d-block w-100"
            src = {work}
            alt=" Light Effects"

            />
            <Carousel.Caption>
                <h3>Web sity</h3>
                <p>do do nostrud est aligua</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style= {{'height':'700px'}}>
            <img
            className="d-block w-100"
            src = {work}
            alt=" Light Effects"

            />
            <Carousel.Caption>
                <h3>Web sity</h3>
                <p>do do nostrud est aligua</p>
            </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
        
    );
    }
    export default Slider;