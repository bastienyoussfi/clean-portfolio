import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "I'm absolutely floored by the level of care and attention to detail Eliana has put into this project and for one can guarantee that we will be a return customer.",
    author: 'Josh Grazioso',
    avatar: '/avatars/josh.jpg',
  },
  {
    id: 2,
    text: 'To say that hiring Eliana has been life-changing is an understatement. My business has tripled and I got my life back.',
    author: 'Nicole Grazioso',
    avatar: '/avatars/nicole.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg"
              >
                <p className="text-secondary dark:text-gray-400 mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 