import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container , Row , Col } from "react-bootstrap"
import JavaScript from "../assets/img/javascript.svg"
import react from "../assets/img/react.svg"
import nodejs from "../assets/img/nodejs.svg"
import bootstrap from "../assets/img/bootstrap.svg"
import figma from "../assets/img/figma.svg"
import typescript from "../assets/img/typescript.svg"
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4
        }
      };
  return (
    <section className='skill' id="skills" >
        <Container>
            <Row>
                <Col>
                    <div className='skills-bx'  >
                        <h2>
                            Tech Stack
                        </h2>
                      
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={JavaScript} alt="Image" />
                            </div>
                            <div className='item'>
                                <img src={react} alt="Image" />
                            </div>
                            <div className='item'>
                                <img src={typescript} alt="Image" />
                            </div>
                            <div className='item node'>
                                <img src={nodejs} alt="Image" />
                            </div>
                            <div className='item bootstrap'>
                                <img src={bootstrap} alt="Image" />
                            </div>
                            <div className='item figma'>
                                <img src={figma} alt="Image" />
                            </div>
                
                          
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} className="background-image-left" alt="bg-image-left" />
    </section>
  )
}

export default Skills