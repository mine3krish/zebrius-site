export default function ContactSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact | Zebrius Technologies",
        url: "https://zebriustechnologies.com/contact"
    }

    return (
        <script type="application/ld-json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
    )
}