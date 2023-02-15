import React from 'react'
import { Col} from "react-bootstrap"
const ProjectCard = ({ link,title,description,imgUrl }) => {
  return (
    <Col sm={6} md={4}>
        <a href={link} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}> 
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="url" />
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
        </a>
  
    </Col>
  )
}

export default ProjectCard