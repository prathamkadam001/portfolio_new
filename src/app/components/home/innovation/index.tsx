import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { serviceCards } from "@/lib/site"

function Innovation() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-[#07111f]">
      <div className="container">
        <div className="reveal-on-scroll flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              Web development services made for search, speed, and sales.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            <MessageCircle className="size-5" />
            Discuss your project
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceCards.map((service, index) => (
            <article
              key={service.slug}
              className="reveal-child group rounded-lg border border-slate-900/10 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-white dark:bg-slate-950/40">
                <Image
                  src={service.icon}
                  alt=""
                  height={30}
                  width={30}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {service.summary}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white"
              >
                Details
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Innovation
