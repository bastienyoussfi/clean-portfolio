const skillCategories = [
  {
    title: "Design Tools",
    skills: ["Figma", "Sketch"],
  },
  {
    title: "Development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Vue"],
  },
  {
    title: "Collaboration",
    skills: ["Notion", "Mailchimp", "Slack"],
  },
  {
    title: "Design Expertise",
    skills: [
      "UI/UX Design",
      "Design Systems",
      "Custom Illustrations",
      "Responsive Design",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Strong communication",
      "Problem-solving",
      "Attention to detail",
      "Time management",
    ],
  },
];

const Skills = () => {
  return (
    <section className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Skills
      </h2>
      <div className="space-y-3">
        {skillCategories.map((category) => (
          <dl key={category.title} className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                {category.title}:
              </span>
            </dt>
            <dd>
              <ul>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        ))}
      </div>
    </section>
  );
};

export default Skills;
