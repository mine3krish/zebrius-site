import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PolicyComponent from "@/components/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | Zebrius Technologies",
  description: "Read the Privacy Policy of Zebrius Technologies to learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <div>
            <Navbar />
            <PolicyComponent />
            <Footer />
        </div>
    )
}