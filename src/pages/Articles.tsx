import { motion } from 'framer-motion';
import ArticlesSection from '../components/sections/Articles';

const Articles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ArticlesSection />
    </motion.div>
  );
};

export default Articles; 