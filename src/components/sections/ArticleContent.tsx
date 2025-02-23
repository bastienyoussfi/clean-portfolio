import { Link } from 'react-router-dom';
import { Article } from '../../types/article';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-neutral-500 mb-4">
          <time dateTime={article.date}>{article.date}</time>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-neutral-200 mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-neutral-400">
          {article.description}
        </p>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none dark:text-neutral-200">
        {/* This is a placeholder for the actual article content */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        <h2>Section Title</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <blockquote>
          This is an important quote from the article that deserves emphasis and
          stands out visually.
        </blockquote>

        <h3>Subsection</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>

      {/* Article Footer */}
      <footer className="mt-10 pt-8 border-t border-gray-200 dark:border-neutral-800">
        <div className="flex justify-between items-center">
          <Link
            to="/articles"
            className="text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
          >
            Back to articles
          </Link>
          <div className="flex gap-4">
            <button
              className="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400"
              aria-label="Share on Twitter"
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button
              className="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400"
              aria-label="Share on LinkedIn"
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default ArticleContent; 