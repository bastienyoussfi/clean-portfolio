import { motion } from 'framer-motion';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
  achievements: string[];
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: 'Notion',
    position: 'Web Designer & Web Developer',
    period: '2023 - Present',
    description: 'The company has high expectations and using OKRs there is a mutual understanding of expectations and performance.',
    logo: '/companies/notion.png',
    achievements: [
      'Designed template UIs and design systems in Figma.',
      'Converted UIs into responsive HTML and CSS with a mobile-first approach.',
      'Created custom illustrations and item description banners.',
      'Provided detailed documentation and customer support on GitHub.',
    ],
  },
  {
    id: 2,
    company: 'Mailchimp',
    position: 'Senior Software Engineer',
    period: '2021 - 2023',
    description: "This is an excellent company and they reward their employees. It's becoming a big company but it's still private, so the culture is as good as it gets at 1,000+ employees if you ask me.",
    logo: '/companies/mailchimp.png',
    achievements: [
      'Led the development of Studio by Mailchimp.',
      'Mentored junior developers and conducted code reviews.',
      'Implemented responsive design patterns and accessibility features.',
      'Optimized application performance and user experience.',
    ],
  },
  {
    id: 3,
    company: 'Slack',
    position: 'Junior Software Engineer',
    period: '2011 - 2021',
    description: 'Work in Slack is one of the beautiful experience I can do in my entire life. There are a lot of interesting thing to learn and manager respect your time and your personality.',
    logo: '/companies/slack.png',
    achievements: [
      'Developed and maintained core platform features.',
      'Collaborated with cross-functional teams on new features.',
      'Improved application reliability and performance.',
      'Participated in agile development processes.',
    ],
  },
];

const WorkExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{experience.position}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg text-secondary dark:text-gray-400">{experience.company}</span>
            <span className="text-sm text-secondary dark:text-gray-400">•</span>
            <span className="text-sm text-secondary dark:text-gray-400">{experience.period}</span>
          </div>
          <p className="text-secondary dark:text-gray-400 mb-4">{experience.description}</p>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                <span className="text-secondary dark:text-gray-400">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-6">
          {workExperiences.map((experience) => (
            <WorkExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work; 