import React from 'react';
import './ProjectBox.css';

const ProjectBox = props => {
    const {image, alt} = props.project.image;
    const {title, description, links} = props.project;
    return(
        <div className="project-box">
            <div className="img-header">
                <img src={image} alt={alt}/>
            </div>
            <div className="project-description">
                <h3>
                    <a href={links.demo}>{title}</a>
                </h3>
                <p>{description}</p>
            </div>
            <div className="project-links">
                <a href={links.demo} className="small-link">Show Project</a>
                <a href={links.source} className="small-link">Show Source Code</a>
            </div>
        </div>
    )
};

export default ProjectBox;