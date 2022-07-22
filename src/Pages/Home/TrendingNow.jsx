import React from 'react';
import { Carousel } from "react-bootstrap";
import Trending from "./TrendingNow.module.css";

export default function TrendingNow() {
  return (
    <div className={Trending.image}>
        <img alt="prop" src="https://static.thcdn.com/images/medium/webp/widgets/121-us/09/4P-Goop-with-bottle-and-bubbles-600x600-100209.jpg"/>
        <div>
            <Carousel className ={Trending.carousel}>
                <Carousel.Item>
                    <img
                        className={Trending.img}
                        // style={{height : "500px", width : "1000px"}}
                        src="https://static.thcdn.com/images/xsmall/webp//productimg/original/11289134-1244967222706465.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Peter Thomas Roth Instant FirmX Eye</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={Trending.img}
                        // style={{height : "500px", width : "1000px"}}
                        src="https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12538013-4764765050522444.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={Trending.img}
                        // style={{height : "500px", width : "1000px"}}
                        src="https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11428984-1564528377683031.jpg"
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
                        className={Trending.img}
                        // style={{height : "500px", width : "1000px"}}
                        src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11805644-1424900827409197.jpg"
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
                        className={Trending.img}
                        // style={{height : "500px", width : "1000px"}}
                        src="https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12538011-5734765050447840.jpg"
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
        </div>
    </div>
  )
}
