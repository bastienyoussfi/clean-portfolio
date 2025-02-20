import { motion } from 'framer-motion';

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
    title: 'Brand Identity Design',
    description: 'Modern branding and identity design for tech startups',
    image: '/projects/brand-identity.jpg',
    tags: ['Branding', 'Design', 'Identity'],
  },
  {
    id: 2,
    title: 'Custom Illustrations',
    description: 'Hand-drawn digital illustrations for various clients',
    image: '/projects/illustrations.jpg',
    tags: ['Illustration', 'Digital Art'],
  },
  {
    id: 3,
    title: 'Web Design System',
    description: 'Comprehensive design system for enterprise applications',
    image: '/projects/design-system.jpg',
    tags: ['UI/UX', 'Design System', 'Web'],
  },
  {
    id: 4,
    title: 'Abstract Art Series',
    description: 'Collection of abstract digital artworks',
    image: '/projects/abstract-art.jpg',
    tags: ['Art', 'Digital', 'Abstract'],
  },
  {
    id: 5,
    title: 'Photography Collection',
    description: 'Curated collection of landscape photography',
    image: '/projects/photography.jpg',
    tags: ['Photography', 'Landscape'],
  },
  {
    id: 6,
    title: 'UI Components',
    description: 'Modern UI component library for web applications',
    image: '/projects/ui-components.jpg',
    tags: ['UI', 'Components', 'Web'],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-secondary dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 