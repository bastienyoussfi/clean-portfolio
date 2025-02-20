import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Design Tools',
    skills: ['Figma', 'Sketch'],
  },
  {
    title: 'Development',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Vue'],
  },
  {
    title: 'Collaboration',
    skills: ['Notion', 'Mailchimp', 'Slack'],
  },
  {
    title: 'Design Expertise',
    skills: ['UI/UX Design', 'Design Systems', 'Custom Illustrations', 'Responsive Design'],
  },
  {
    title: 'Soft Skills',
    skills: ['Strong communication', 'Problem-solving', 'Attention to detail', 'Time management'],
  },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <h3 className="text-secondary dark:text-gray-400">{category.title}</h3>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-primary dark:text-white"
                      >
                        {skill}
                        {category.skills.indexOf(skill) !== category.skills.length - 1 && ','}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 