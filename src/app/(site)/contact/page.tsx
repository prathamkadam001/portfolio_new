
import ContactForm from "@/app/components/contact-form";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Pratham Kadam",
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
            {/* <Faq/> */}
        </main>
    );
};
