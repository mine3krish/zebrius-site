import Script from "next/script"

export default function WebPageSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy | Zebrius Technologies",
        url: "https://zebriustechnologies.com/privacy-policy"
    }

    return (
        <Script id="webpage-schema" strategy="beforeInteractive" type="application/ld-json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
    )
}