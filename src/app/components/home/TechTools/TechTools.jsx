import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techGroups = [
  {
    title: "Frontend",
    tools: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    title: "Backend and workflow",
    tools: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default function TechTools() {
  return (
    <section className="bg-[#eef7f6] py-20 dark:bg-[#081626]">
      <div className="container">
        <div className="reveal-on-scroll mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
            Stack
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
            Tools I use to ship stable, scalable, SEO-ready web products.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {techGroups.map((group) => (
            <article
              key={group.title}
              className="reveal-child rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="reveal-child flex min-h-16 items-center gap-3 rounded-lg border border-slate-900/10 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-[#06101f]"
                    >
                      <Icon className="size-6 text-teal-700 dark:text-teal-300" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
