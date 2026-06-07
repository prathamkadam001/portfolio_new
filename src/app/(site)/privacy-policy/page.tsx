import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy | Pratham Kadam",
  description:
    "Privacy policy for Pratham Kadam's portfolio website and project enquiry form.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
      <section className="container">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
            This portfolio website is operated by {siteConfig.name}. The site
            collects only the information needed to respond to project enquiries
            and maintain a professional client communication flow.
          </p>

          <div className="mt-10 grid gap-6">
            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Information collected
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                When you submit the contact form, you may provide your name,
                email address, phone number, project type, and project details.
                This information is used only to understand your request and
                reply to your enquiry.
              </p>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                How information is used
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                Enquiry details are used to contact you about website
                development, custom web app, e-commerce, redesign, maintenance,
                or SEO-related work. Your details are not sold or rented.
              </p>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Third-party form handling
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                The contact form uses FormSubmit to deliver enquiry messages by
                email. Direct email, phone, and WhatsApp links may open your
                chosen email, phone, or messaging app.
              </p>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Contact
              </h2>
              <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                For privacy questions, contact{" "}
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
