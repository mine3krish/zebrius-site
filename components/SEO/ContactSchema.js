import Script from "next/script"

export default function ContactSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact | Zebrius Technologies",
        url: "https://zebriustechnologies.com/contact"
    }

    return (
        <Script type="application/ld-json" strategy="beforeInteractive" id="contact-schema" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
    )
}