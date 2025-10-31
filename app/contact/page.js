import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactSchema from "@/components/SEO/ContactSchema";

export const metadata = {
    title: "Contact Us | Zebrius Technologies",
    description: "Get in touch with Zebrius Technologies for web development, app solutions, and digital transformation services. Reach out for project inquiries, support, or collaboration — we’re here to help your business grow.",
    alternates: {
        canonical: "https://zebriustechnologies.com/contact",
    },
};


export default function ContactUs() {
    return (
        <section>
            <ContactSchema/>
            <Navbar/>
            <div className="mt-40">
                <div className=" px-10 font-bold text-3xl text-center">Contact Us</div>
                <div className="px-10 mb-20 mt-2 text-center">Have questions or need help? Give us a call, send an email, book a meeting, or fill out the form below.</div>
            <Contact/>
            </div>
            <Footer />
        </section>
    )
}