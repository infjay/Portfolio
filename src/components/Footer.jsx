import React from 'react'
import MailchimpForm from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import { Container, Row , Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png"

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-items-center">
                
                <Col sm={6}>
                    <img src={logo} alt="logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/djawid-nezami/"><img src={navIcon1} alt="linkedin"/></a>
                        <a href="https://www.twitter.com"><img src={navIcon2} alt="twitter"/></a>
                        <a href="https://github.com/infjay"><img src={navIcon3} alt="github"/></a>
                    </div>
                    <p>CopyRight 2023. All Rights Reserved. By Jawid Nezami</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer