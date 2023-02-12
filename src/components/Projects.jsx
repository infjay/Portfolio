import React from "react";
import ProjectCard from "./ProjectCard";
import {Container, Col, Row,Tab,Nav} from "react-bootstrap"
import colorSharp from "../assets/img/color-sharp.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import mytube from "../assets/img/mytube.png"
import ajdrinks from "../assets/img/ajdrinks.png"
import nfsImg from "../assets/img/NFS.png"
import hospify from "../assets/img/hospify.png"
import TrackVisibility from "react-on-screen";

import "animate.css"
const Projects = () => {
  const projects = [
    {
      title: "Gericht Restaurant",
      description: "Fine dining restaurant's Landing page",
      imgUrl: projImg2,
      link:"https://infjay.github.io/gericht-restaurant/"
    },
    {
      title: "Landing Page for Chat-GPT",
      description: "Appointment Management for Hospitals",
      imgUrl: projImg1,
      link:"https://infjay.github.io/gp3-AI/"
    },
    {
      title: "Hospify",
      description: "Appointment managment app for hospitals",
      imgUrl: hospify,
      link:"https://github.com/infjay/hospify-project-client"
    },
    {
      title: "MyTube",
      description: "Video streaming platform inspired by YouTube",
      imgUrl: mytube,
      link:"https://github.com/infjay/mytube"
    },
    {
      title: "AJ Drinks",
      description: "Alcoholic drinks directory with CRUD functionallity",
      imgUrl: ajdrinks,
      link:"https://github.com/abg1995/AJDrinks"
    },
    {
      title: "NFS Game",
      description: "A game made wit Vanilla JS",
      imgUrl: nfsImg,
      link:"https://infjay.github.io/NFS-v0.1/"

    }
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
           {({ isVisible })=> 
          <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>
            <h2>Projects</h2>
            {/* <p>Meow Meow Projects</p> */}
            </div> }
          </TrackVisibility>
            {/* <Tab.Container id="projects-tab" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
              <Nav.Item>
                <Nav.Link eventKey="first">Tab one</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" >
                  Tab three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first"> */}
                    <Row>
                        {
                            projects.map((project,index)=> {
                                return (
                                   <ProjectCard
                                   key={index}
                                   {...project}
                                   />
                                )
                            })
                        }
                    </Row>
                {/* </Tab.Pane> */}
                {/* <Tab.Pane eventKey="second">Number 2 </Tab.Pane>
                <Tab.Pane eventKey="third">Number 3 </Tab.Pane>
            </Tab.Content>
            </Tab.Container> */}
          </Col>
        </Row>
      </Container>
      <img src="" alt="" />
    </section>
  );
};

export default Projects;
