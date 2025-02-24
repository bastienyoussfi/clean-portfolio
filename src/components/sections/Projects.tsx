import { Project } from "../../types/project";
import { projects } from "../../data/projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group block relative overflow-hidden rounded-lg cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
      />

      {/* Project info overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <h3 className="text-white font-medium text-sm">{project.title}</h3>
        <p className="text-white/80 text-xs mt-1">{project.description}</p>

        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="text-[10px] text-white/70">
              +{project.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in animation for the project cards section
      gsap.fromTo(
        ".project-card-container",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {projects.map((project) => (
          <div key={project.id} className="project-card-container">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
