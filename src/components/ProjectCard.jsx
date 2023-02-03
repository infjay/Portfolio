import React from 'react'
import { Col} from "react-bootstrap"
const ProjectCard = ({ title,description,imgUrl }) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="image url" />
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    </Col>
  )
}

export default ProjectCard