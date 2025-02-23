import { articles } from "../../data/articles";

const Articles = () => {
  return (
    <section id="articles" className="my-10 sm:my-14">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
          Articles
        </h2>
        <ul className="space-y-10">
          {articles.map((article) => (
            <li key={article.id}>
              <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
                {article.date}
              </p>
              <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                {article.title}
              </h5>
              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                {article.description}
              </p>
              <p className="mt-1">
                <a
                  href={article.link}
                  className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                >
                  Continue reading
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Articles;
