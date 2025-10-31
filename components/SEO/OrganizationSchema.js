export default function OrganizationSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Zebrius Technologies",
        url: "https://zebriustechnologies.com",
        logo: "https://zebriustechnologies.com/icon.png",
        description: "Zebrius Technologies is a modern software development company helping startups and businesses build scalable, elegant, and high-performance digital products.",
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "contact@zebriustechnologies.com"
        },
        sameAs: [
            "https://instagram.com/zebriustechnologiespvtltd",
            "https://linkedin.com/company/zebrius-technologies-pvt-ltd"
        ]
    }

    return (
        <script type="application/ld-json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>
    )
}