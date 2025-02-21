interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
  achievements: string[];
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Notion",
    position: "Web Designer & Web Developer",
    period: "2023 - Present",
    description:
      "The company has high expectations and using OKRs there is a mutual understanding of expectations and performance.",
    logo: "/companies/notion.png",
    achievements: [
      "Designed template UIs and design systems in Figma.",
      "Converted UIs into responsive HTML and CSS with a mobile-first approach.",
      "Created custom illustrations and item description banners.",
      "Provided detailed documentation and customer support on GitHub.",
    ],
  },
  {
    id: 2,
    company: "Mailchimp",
    position: "Senior Software Engineer",
    period: "2021 - 2023",
    description:
      "This is an excellent company and they reward their employees. It's becoming a big company but it's still private, so the culture is as good as it gets at 1,000+ employees if you ask me.",
    logo: "/companies/mailchimp.png",
    achievements: [
      "Led the development of Studio by Mailchimp.",
      "Mentored junior developers and conducted code reviews.",
      "Implemented responsive design patterns and accessibility features.",
      "Optimized application performance and user experience.",
    ],
  },
  {
    id: 3,
    company: "Slack",
    position: "Junior Software Engineer",
    period: "2011 - 2021",
    description:
      "Work in Slack is one of the beautiful experience I can do in my entire life. There are a lot of interesting thing to learn and manager respect your time and your personality.",
    logo: "/companies/slack.png",
    achievements: [
      "Developed and maintained core platform features.",
      "Collaborated with cross-functional teams on new features.",
      "Improved application reliability and performance.",
      "Participated in agile development processes.",
    ],
  },
];

const Work = () => {
  return (
    <section id="work" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Work Experience
      </h2>
      <div>
        {workExperiences.map((work) => (
          <div key={work.id} className="group relative flex gap-x-5">
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                <svg className="shrink-0 size-6 text-gray-600 dark:text-neutral-400">
                  <circle
                    cx="3"
                    cy="3"
                    r="3"
                    className="fill-black dark:fill-neutral-200"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  {work.company}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  {work.position}
                </p>
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {work.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
