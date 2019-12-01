import React from 'react';
import './ProjectBox.css';

const ProjectBox = props => {
    const {title, description, links} = props.project;
    return(
        <div className="project-box">
            <div className="project-description">
                <h3>
                    {title}
                </h3>
                <p>{description}</p>
            </div>
            <div className="project-links">
                <a href={links.demo} className="small-link small-link-green">Show Project</a>
                <a href={links.source} className="small-link small-link-grey">Show Source Code</a>
            </div>
        </div>
    )
};

export default ProjectBox;