import Image from "next/image"
import Link from "next/link"
import { footerData, siteConfig } from "@/lib/site"

const Footer = () => {
  return (
    <footer className="border-t border-slate-900/10 bg-slate-50/80 py-12 dark:border-white/10 dark:bg-[#07111f]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="max-w-lg">
            <Link
              href="/"
              aria-label="Pratham Kadam home"
              className="inline-flex items-center text-3xl font-semibold tracking-normal text-slate-950 dark:text-white"
            >
              Pratham Kadam
            </Link>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              {footerData.brand.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              {siteConfig.availability} for clients in Ahmedabad, across India,
              and remote teams.
            </p>

            <div className="mt-6 flex gap-3">
              {footerData.brand.socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid size-11 place-items-center rounded-lg border border-slate-900/10 bg-white transition hover:-translate-y-0.5 hover:border-slate-900/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
                >
                  <Image
                    src={item.icon}
                    className="dark:hidden"
                    alt=""
                    height={20}
                    width={20}
                  />
                  <Image
                    src={item.dark_icon}
                    className="hidden dark:block"
                    alt=""
                    height={20}
                    width={20}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <nav aria-label="Footer sitemap">
              <p className="font-semibold text-slate-950 dark:text-white">
                {footerData.sitemap.name}
              </p>
              <ul className="mt-4 space-y-3">
                {footerData.sitemap.links.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className="text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal pages">
              <p className="font-semibold text-slate-950 dark:text-white">
                {footerData.otherPages.name}
              </p>
              <ul className="mt-4 space-y-3">
                {footerData.otherPages.links.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className="text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="not-italic">
              <p className="font-semibold text-slate-950 dark:text-white">
                {footerData.contactDetails.name}
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                {footerData.contactDetails.address}
              </p>
              <Link
                className="mt-3 block text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                href={`mailto:${footerData.contactDetails.email}`}
              >
                {footerData.contactDetails.email}
              </Link>
              <Link
                className="mt-3 block text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                href={`tel:${footerData.contactDetails.phone.replace(/\s/g, "")}`}
              >
                {footerData.contactDetails.phone}
              </Link>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-900/10 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerData.copyright}</p>
          <p>Built with Next.js, React, technical SEO, and a lot of care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
