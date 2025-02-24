import profilePlaceholder from "../../assets/images/bastien.jpeg";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <img
            src={profilePlaceholder}
            alt="Eliana Garcia"
            className="shrink-0 size-16 rounded-full"
          />
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Bastien Youssfi
          </h1>
          <h2 className="text-sm text-gray-600 dark:text-neutral-400">
            Web designer/developer, ML Engineer, AI Enthusiast
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          I am a junior developer with experience in Software and Web
          Development. Curious and ambitious, I like to learn new things and
          dive into new topics. AI is my new passion and I'm always looking for
          new ways to use it to improve my work and life.
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          Currently, I work as a Fullstack Developer for Steamulo, a French Web
          and Data factory, creating websites integrating AI for clients. I am
          passionate about creating useful and elegant solutions to real-world
          problems.
        </p>
      </div>
    </section>
  );
};

export default Hero;
