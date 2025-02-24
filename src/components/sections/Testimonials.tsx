const testimonials = [
  {
    id: 1,
    text: "Bastien has been learning fast since his first days at Steamulo, he understands the concepts and improved really fast. He truly is smart and a quick learner.",
    author: "Steamulo Manager",
    avatar: "src/assets/steamulo_logo.png",
  },
  {
    id: 2,
    text: "Bastien is a great developer, he is always willing to help and to learn new things. He is a great team player and a quick learner. Would definitely recommend.",
    author: "Digital Surf CEO",
    avatar: "src/assets/digital_surf_logo.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-10 sm:mt-14">
      <div>
        <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="sm:-ms-4 py-6 sm:px-4">
              <blockquote>
                <span className="text-sm text-gray-800 dark:text-neutral-200">
                  {testimonial.text}
                </span>
                <footer className="mt-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="shrink-0 size-5 rounded-full"
                    />
                    <div className="grow">
                      <div className="text-xs text-gray-500 dark:text-neutral-500">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
