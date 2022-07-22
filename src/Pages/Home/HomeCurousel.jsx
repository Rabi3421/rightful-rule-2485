import React from 'react';
import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";

const HomeCurousel = () => {
  return (
    <>
      <Carousel className ="carousel">
        <Carousel.Item>
          <img
            className="d-block"
            // style={{height : "500px", width : "1000px"}}
            src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/04/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot2-1180x450-021804.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            // style={{height : "500px", width : "1000px"}}
            src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/16/0701-STDCRE-38244-SS-BME-Skinstore-July-4-Assets-Shot_01-1180x450-095516.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            // style={{height : "500px", width : "1000px"}}
            src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/0712_THG0034801_SS_JUL_22_SHOT_03_1180x450-061455.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            // style={{height : "500px", width : "1000px"}}
            src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    
  )
}

export default HomeCurousel