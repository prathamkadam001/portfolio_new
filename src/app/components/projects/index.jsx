"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LayoutGrid, List, Search, X } from "lucide-react";
import { featuredProjects } from "@/lib/site";

const categories = [
  "All",
  ...Array.from(new Set(featuredProjects.map((project) => project.category))),
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return featuredProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
            Project work across education, e-commerce, healthcare, management
            systems, and business websites.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            A focused look at websites and applications built to improve trust,
            present information clearly, and support real business enquiries.
          </p>
        </div>

        <div className="sticky top-24 z-20 mt-12 rounded-lg border border-slate-900/10 bg-white/90 p-4 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-[#0a1728]/90">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by project, industry, or technology"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-lg border border-slate-900/10 bg-slate-50 py-3 pl-12 pr-11 text-slate-950 outline-none transition focus:border-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-1 dark:bg-white/5">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                className={`grid size-10 place-items-center rounded-md transition ${
                  viewMode === "grid"
                    ? "bg-white text-slate-950 shadow-sm dark:bg-white dark:text-slate-950"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                <LayoutGrid className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`grid size-10 place-items-center rounded-md transition ${
                  viewMode === "list"
                    ? "bg-white text-slate-950 shadow-sm dark:bg-white dark:text-slate-950"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                <List className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`mt-10 ${
            viewMode === "grid"
              ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              : "grid gap-5"
          }`}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`group overflow-hidden rounded-lg border border-slate-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728] ${
                viewMode === "list" ? "md:grid md:grid-cols-[320px_1fr]" : ""
              }`}
            >
              <Link
                href={project.link}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width={900}
                  height={560}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-lg bg-white text-slate-950 opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>

              <div className="p-6">
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  {project.category}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  <Link href={project.link}>{project.title}</Link>
                </h2>
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
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
                  >
                    Read case study
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-900/15 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900/35 dark:border-white/15 dark:text-slate-300"
                  >
                    Live site
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 rounded-lg border border-slate-900/10 bg-white p-10 text-center dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
              No projects found
            </h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Try another keyword or reset the category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
