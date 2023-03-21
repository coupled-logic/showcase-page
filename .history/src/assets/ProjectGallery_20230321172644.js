import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './projectsData.json';

function ProjectGallery() {
    return (
        <div className="relative isolate bg-gray-900">
            <div className="mx-auto grid max-w-7xl">
            <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Project Gallery</h2>
                </div>
                <div className="row">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}
export default ProjectGallery;
