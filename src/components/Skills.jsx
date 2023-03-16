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
import TrackVisibility from "react-on-screen"

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
                    <TrackVisibility>
           {({ isVisible })=> 
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Skills - TechStack</h2>
            </div> }
          </TrackVisibility>
                      
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={JavaScript} alt="js" />
                            </div>
                            <div className='item'>
                                <img src={react} alt="react" />
                            </div>
                            <div className='item'>
                                <img src={typescript} alt="ts" />
                            </div>
                            <div className='item node'>
                                <img src={nodejs} alt="nodejs" />
                            </div>
                            <div className='item bootstrap'>
                                <img src={bootstrap} alt="bootstrap" />
                            </div>
                            <div className='item figma'>
                                <img src={figma} alt="figma" />
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