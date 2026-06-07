import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects, siteConfig } from "@/lib/site"

function OnlinePresence() {
  const projects = featuredProjects.slice(0, 4)

  return (
    <section id="work" className="bg-[#f7fbff] py-20 dark:bg-[#06101f]">
      <div className="container">
        <div className="reveal-on-scroll flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Work proof
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              Selected projects that show real business use cases.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.businessWebsitePath}
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Start similar website
              <ArrowUpRight className="size-5" />
            </Link>
            <Link
              href="/my-work"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
            >
              View all projects
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="reveal-child group overflow-hidden rounded-lg border border-slate-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
            >
              <Link
                href={project.link}
                aria-label={`Open ${project.title}`}
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} website project by Pratham Kadam`}
                    width={900}
                    height={560}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-lg bg-white text-slate-950 opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  <Link href={project.link}>{project.title}</Link>
                </h3>
                <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-white/10 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
                >
                  Read case study
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
