
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

const contactJsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${siteConfig.url}/contact#webpage`,
        name: "Contact Pratham Kadam",
        url: `${siteConfig.url}/contact`,
        description:
            "Contact page for freelance full stack development and SEO-ready website enquiries.",
        inLanguage: siteConfig.language,
        isPartOf: {
            "@id": `${siteConfig.url}/#website`,
        },
        about: {
            "@id": `${siteConfig.url}/#person`,
        },
        mainEntity: {
            "@id": `${siteConfig.url}/#person`,
        },
        contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.email,
            telephone: siteConfig.phone,
            contactType: "Project enquiries",
            areaServed: ["Ahmedabad", "Gujarat", "India", "Remote"],
            availableLanguage: ["English", "Hindi", "Gujarati"],
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${siteConfig.url}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: `${siteConfig.url}/contact`,
            },
        ],
    },
];

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
