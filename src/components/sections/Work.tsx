import { useRef, useEffect } from 'react';
import { workExperiences } from "../../data/work";
import { animateWork } from '../../utils/animations';

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = animateWork(sectionRef);
    
    // Clean up animation context on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="mt-10 sm:mt-14" ref={sectionRef}>
      <h2 className="work-title mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Work Experience
      </h2>
      <div>
        {workExperiences.map((work) => (
          <div key={work.id} className="work-item group relative flex gap-x-5">
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                {work.logo}
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                <p className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  {work.period}
                </p>
                <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  {work.position}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  {work.description}
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
                {work.link && (
                  <div className="mt-4">
                    <a
                      className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700"
                      href={work.link.link}
                      target="_blank"
                    >
                      <div className="relative flex items-center overflow-hidden">
                        <img
                          className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                          src={work.link.image}
                        />

                        <div className="grow p-4 ms-32 sm:ms-48">
                          <div className="min-h-24 flex flex-col justify-center">
                            <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                              {work.link.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                              {work.link.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
