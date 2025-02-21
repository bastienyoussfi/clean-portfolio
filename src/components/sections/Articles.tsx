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
    title: "The complete guide to OKRs",
    description:
      "How to make objectives and key results work for your company.",
    date: "2024",
    readTime: "5 min read",
    link: "/articles/complete-guide-to-okrs",
  },
  {
    id: 2,
    title: "Enhancement in Customer Engagement",
    description:
      "With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged Mailchimps powerful tools and expertise to deliver exceptional results.",
    date: "2024",
    readTime: "8 min read",
    link: "/articles/customer-engagement",
  },
  {
    id: 3,
    title: "How Google Assistant now helps you record stories for kids",
    description:
      "Google is constantly updating its consumer AI, Google Assistant, with new features.",
    date: "2023",
    readTime: "4 min read",
    link: "/articles/google-assistant-stories",
  },
];

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
