import ArticlesSection from "../components/sections/Articles";

const Articles = () => {
  return (
    <div className="min-h-screen">
      <a className="dark:text-neutral-200" href="/">
        Back to main page
      </a>
      <ArticlesSection />
    </div>
  );
};

export default Articles;
