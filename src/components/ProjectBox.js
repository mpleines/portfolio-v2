import React from 'react';
import './ProjectBox.css';

const ProjectBox = props => {
    const {title, description, links, color} = props.project;
    return(
        <a href={links.demo} className={color + " project-box project-link"}>
            <h3 className="project-title">
                {title}
            </h3>
            <div className="project-description">
                <p>{description}</p>
            </div>
        </a>
    )
};

export default ProjectBox;