import { motion } from 'framer-motion';

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The complete guide to OKRs',
    description: 'How to make objectives and key results work for your company.',
    date: '2024',
    readTime: '5 min read',
    link: '/articles/complete-guide-to-okrs',
  },
  {
    id: 2,
    title: 'Enhancement in Customer Engagement',
    description: 'With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged Mailchimps powerful tools and expertise to deliver exceptional results.',
    date: '2024',
    readTime: '8 min read',
    link: '/articles/customer-engagement',
  },
  {
    id: 3,
    title: 'How Google Assistant now helps you record stories for kids',
    description: 'Google is constantly updating its consumer AI, Google Assistant, with new features.',
    date: '2023',
    readTime: '4 min read',
    link: '/articles/google-assistant-stories',
  },
];

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4 text-sm text-secondary dark:text-gray-400">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
        <p className="text-secondary dark:text-gray-400 mb-6 flex-grow">{article.description}</p>
        <a
          href={article.link}
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
        >
          Continue reading
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

const Articles = () => {
  return (
    <section id="articles" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Articles</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Articles; 