
import ContactForm from "@/app/components/contact-form";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Pratham Kadam for SEO-friendly website development, custom web apps, e-commerce stores, redesigns, and technical SEO projects.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Pratham Kadam",
        description:
            "Send a project enquiry to Pratham Kadam, freelance full stack developer in Ahmedabad.",
        url: "/contact",
    },
};

const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Pratham Kadam",
    url: `${siteConfig.url}/contact`,
    description:
        "Contact page for freelance full stack development and SEO-ready website enquiries.",
};

export default function Page() {
    return (
        <>
            <main>
                <ContactForm/>
            </main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
        </>
    );
};
