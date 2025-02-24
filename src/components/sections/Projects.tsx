import { useRef, useEffect } from 'react';
import { Project } from "../../types/project";
import { projects } from "../../data/projects";
import { animateProjects } from '../../utils/animations';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card group block relative overflow-hidden rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <button className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          <svg
            className="shrink-0 size-3"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <span className="text-xs">View</span>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = animateProjects(sectionRef);
    
    // Clean up animation context on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="mt-10 sm:mt-14" ref={sectionRef}>
      <h2 className="projects-title mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
