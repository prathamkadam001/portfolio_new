import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, SearchCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

const strengths = [
  {
    title: "Full stack delivery",
    description:
      "Frontend, backend, APIs, dashboards, forms, database flows, and launch support handled together.",
    icon: Code2,
  },
  {
    title: "SEO-first structure",
    description:
      "Pages are planned around search intent, semantic headings, metadata, schema, and internal links.",
    icon: SearchCheck,
  },
  {
    title: "Modern product UI",
    description:
      "Clean interfaces with motion, responsive layouts, and practical user flows clients can trust.",
    icon: Layers3,
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#eef7f6] py-20 dark:bg-[#081626]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal-on-scroll relative">
            <div className="absolute -inset-4 rounded-lg bg-[linear-gradient(135deg,rgba(20,184,166,0.25),rgba(247,178,103,0.22))] blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white p-3 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/5">
              <Image
                src="/images/owner/pratham_image.png"
                alt="Pratham Kadam, freelance full stack developer in Ahmedabad"
                width={760}
                height={820}
                className="aspect-[4/5] w-full rounded-md object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>

          <div className="reveal-on-scroll">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              About Pratham
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              A developer who thinks about clients, not only components.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
              <p>
                I am {siteConfig.name}, a freelance full stack developer from
                Ahmedabad. I build business websites, custom web apps, and
                e-commerce experiences for founders, agencies, institutes, and
                growing companies.
              </p>
              <p>
                My focus is simple: make the website easy for Google to
                understand, easy for visitors to trust, and easy for clients to
                contact you.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="reveal-child flex gap-4 rounded-lg border border-slate-900/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <item.icon className="mt-1 size-6 shrink-0 text-teal-700 dark:text-teal-300" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Explore services
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
