interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "Modern branding and identity design for tech startups",
    image: "src/assets/projects/1.jpeg",
    tags: ["Branding", "Design", "Identity"],
  },
  {
    id: 2,
    title: "Custom Illustrations",
    description: "Hand-drawn digital illustrations for various clients",
    image: "src/assets/projects/2.jpeg",
    tags: ["Illustration", "Digital Art"],
  },
  {
    id: 3,
    title: "Web Design System",
    description: "Comprehensive design system for enterprise applications",
    image: "src/assets/projects/3.jpeg",
    tags: ["UI/UX", "Design System", "Web"],
  },
  {
    id: 4,
    title: "Abstract Art Series",
    description: "Collection of abstract digital artworks",
    image: "src/assets/projects/4.jpeg",
    tags: ["Art", "Digital", "Abstract"],
  },
  {
    id: 5,
    title: "Photography Collection",
    description: "Curated collection of landscape photography",
    image: "src/assets/projects/5.jpeg",
    tags: ["Photography", "Landscape"],
  },
  {
    id: 6,
    title: "UI Components",
    description: "Modern UI component library for web applications",
    image: "src/assets/projects/6.jpeg",
    tags: ["UI", "Components", "Web"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group block relative overflow-hidden rounded-lg">
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
  return (
    <section id="projects" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
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
