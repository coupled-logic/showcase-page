import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './x-ProjectCard';
import projectsData from './projectsData.json';



function ProjectGallery() {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            
            <h2 className="text-center my-5">Projects</h2>
            <div className="row">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
export default ProjectGallery;
