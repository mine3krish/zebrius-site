export default function WebPageSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy | Zebrius Technologies",
        url: "https://zebriustechnologies.com/privacy-policy"
    }

    return (
        <script type="application/ld-json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
    )
}