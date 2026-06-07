import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms and Conditions | Pratham Kadam",
  description:
    "Terms and conditions for using Pratham Kadam's portfolio website and submitting project enquiries.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/terms-and-conditions",
  },
}

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
      <section className="container">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
            This website presents the portfolio, services, projects, and contact
            details of {siteConfig.name}. By using this site or submitting an
            enquiry, you agree to use it for lawful and genuine communication.
          </p>

          <div className="mt-10 grid gap-6">
            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Website content
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                Content on this website is provided for general information
                about freelance website development, web applications,
                e-commerce, redesign, maintenance, and technical SEO services.
                Project scope, timelines, pricing, and deliverables are agreed
                separately before work begins.
              </p>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Project enquiries
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                Submitting a form, email, phone call, or WhatsApp message does
                not create a client relationship by itself. A project starts
                only after both sides agree on scope, responsibilities,
                schedule, and payment terms.
              </p>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Search and business results
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                SEO-friendly implementation can improve a website's foundation,
                but search rankings, traffic, and enquiries depend on many
                factors including content quality, indexing, competition,
                backlinks, business reputation, and ongoing promotion. No exact
                ranking or revenue result is guaranteed.
              </p>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Contact
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                For questions about these terms, contact{" "}
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-teal-700 dark:text-teal-300"
                >
                  {siteConfig.email}
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
