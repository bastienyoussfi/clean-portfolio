import { motion } from 'framer-motion';
import WorkSection from '../components/sections/Work';

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <WorkSection />
    </motion.div>
  );
};

export default Work; 