"use client"

import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { useState } from "react"
import { siteConfig, whatsappContactUrl } from "@/lib/site"
import TrackedLink from "@/app/components/tracked-link"
import { analyticsEvents, trackEvent } from "@/lib/analytics"

type FormData = {
  name: string
  email: string
  interest: string
  phone: string
  message: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  interest: "",
  phone: "",
  message: "",
}

const formSubmitUrl = `https://formsubmit.co/${siteConfig.email}`
const formSubmitAjaxUrl = `https://formsubmit.co/ajax/${siteConfig.email}`

function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoader(true)
    setError("")
    trackEvent(analyticsEvents.contactFormSubmit, {
      location: "contact_form",
      project_type: formData.interest,
    })

    try {
      const response = await fetch(formSubmitAjaxUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          ...formData,
          _subject: "New portfolio project enquiry",
          _template: "table",
          _captcha: "false",
        }),
      })

      const data = await response.json()

      if (data.success) {
        trackEvent(analyticsEvents.contactFormSuccess, {
          location: "contact_form",
          project_type: formData.interest,
        })
        setSubmitted(true)
        setFormData(initialFormData)
      } else {
        trackEvent(analyticsEvents.contactFormError, {
          location: "contact_form",
          reason: "formsubmit_unsuccessful",
        })
        setError("Something went wrong. Please email me directly.")
      }
    } catch {
      trackEvent(analyticsEvents.contactFormError, {
        location: "contact_form",
        reason: "request_failed",
      })
      setError("Something went wrong. Please email me directly.")
    } finally {
      setLoader(false)
    }
  }

  return (
    <section className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Hire Pratham
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              Tell me about your website, app, or SEO goal.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
              Share what you need, what is currently blocking you, and how soon
              you want to launch. For business website projects, include your
              current website or business type so I can reply with the best next
              step.
            </p>

            <div className="mt-8 grid gap-3">
              <TrackedLink
                href={`mailto:${siteConfig.email}`}
                eventName={analyticsEvents.emailClick}
                eventParams={{ location: "contact_page" }}
                className="flex items-center gap-3 rounded-lg border border-slate-900/10 bg-white p-4 text-slate-700 transition hover:border-slate-900/25 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <Mail className="size-5 text-teal-700 dark:text-teal-300" />
                {siteConfig.email}
              </TrackedLink>
              <TrackedLink
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                eventName={analyticsEvents.phoneClick}
                eventParams={{ location: "contact_page" }}
                className="flex items-center gap-3 rounded-lg border border-slate-900/10 bg-white p-4 text-slate-700 transition hover:border-slate-900/25 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <Phone className="size-5 text-teal-700 dark:text-teal-300" />
                {siteConfig.phone}
              </TrackedLink>
              <TrackedLink
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName={analyticsEvents.whatsappClick}
                eventParams={{ location: "contact_page" }}
                className="flex items-center gap-3 rounded-lg border border-slate-900/10 bg-white p-4 text-slate-700 transition hover:border-slate-900/25 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <MessageCircle className="size-5 text-teal-700 dark:text-teal-300" />
                WhatsApp for a business website
              </TrackedLink>
              <div className="flex items-center gap-3 rounded-lg border border-slate-900/10 bg-white p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <MapPin className="size-5 text-teal-700 dark:text-teal-300" />
                {siteConfig.location}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-900/10 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-[#0a1728] md:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <MessageCircle className="size-12 text-teal-700 dark:text-teal-300" />
                <h2 className="mt-5 text-3xl font-semibold text-slate-950 dark:text-white">
                  Message sent successfully.
                </h2>
                <p className="mt-3 max-w-md text-slate-700 dark:text-slate-300">
                  Thank you. I will review your project details and get back to
                  you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white dark:bg-white dark:text-slate-950"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                action={formSubmitUrl}
                method="POST"
                onSubmit={handleSubmit}
                className="grid gap-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New portfolio project enquiry"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${siteConfig.url}/contact`}
                />
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-semibold text-slate-800 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border border-slate-900/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-semibold text-slate-800 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border border-slate-900/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="interest"
                      className="font-semibold text-slate-800 dark:text-white"
                    >
                      Project type
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border border-slate-900/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      id="interest"
                      type="text"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      placeholder="Website, app, SEO, e-commerce"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="font-semibold text-slate-800 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border border-slate-900/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10 digit mobile number"
                      inputMode="numeric"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-semibold text-slate-800 dark:text-white"
                  >
                    Project details
                  </label>
                  <textarea
                    className="mt-2 w-full rounded-lg border border-slate-900/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me what you want to build or improve."
                    rows={6}
                    required
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-500/10 dark:text-red-200">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loader}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <Send className="size-5" />
                  {loader ? "Sending..." : "Send project enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
