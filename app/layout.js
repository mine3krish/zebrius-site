import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


export const metadata = {
  title: "Zebrius Tech | Smart Digital Solutions",
  description:
    "Zebrius Tech is a modern software development agency helping startups and businesses build scalable, elegant, and high-performance digital products.",
  keywords: [
    "Zebrius Tech",
    "software development agency",
    "web development",
    "app development",
    "startup solutions",
    "digital transformation",
  ],
  authors: [{ name: "Zebrius Technologies" }],
  creator: "KTSHACX",
  publisher: "KTSHACX",
  metadataBase: new URL("https://zebriustechnologies.com"),
  openGraph: {
    title: "Zebrius Tech | Smart Digital Solutions",
    description:
      "Empowering startups and businesses with innovative web and app solutions.",
    url: "https://zebriustechnologies.com",
    siteName: "Zebrius Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zebrius Tech | Smart Digital Solutions",
    description:
      "We craft digital experiences that help your business grow faster."
  },
  alternates: {
    canonical: "https://zebriustechnologies.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
