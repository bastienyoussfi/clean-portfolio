import { useParams } from "react-router-dom";
import { articles } from "../data/articles";
import ArticleContent from "../components/sections/ArticleContent";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-gray-800 dark:text-neutral-200 mb-4">
            Article not found
          </h1>
          <a
            href="/articles"
            className="text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
          >
            Back to articles
          </a>
        </div>
      </div>
    );
  }

  return <ArticleContent article={article} />;
};

export default Article;
