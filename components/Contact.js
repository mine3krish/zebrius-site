"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send. Try again later.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 4000); // auto-clear after 4s
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white text-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-2xl mx-auto">
            Ready to transform your business? Let’s discuss your next project.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-10">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-gray-500" />,
                  title: "Email",
                  desc: "contact@zebriustechnologies.com",
                },
                {
                  icon: <Phone className="h-6 w-6 text-gray-500" />,
                  title: "Phone",
                  desc: "+91 7980286979",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-gray-500" />,
                  title: "Address",
                  desc: "Shop no-302(A), Grand Bazaar, Nuhata, Cuttack, Odisha",
                },
                {
                  icon: <Clock className="h-6 w-6 text-gray-500" />,
                  title: "Business Hours",
                  desc: "Mon - Sat: 9:00 AM - 6:00 PM",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4 wrap-break-word"
                >
                  <div className="p-3 bg-gray-100 rounded-xl shrink-0">{icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-gray-600 wrap-break-word break-all">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 space-y-5 relative"
          >
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-3 rounded-xl transition-all duration-200 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status message */}
            {status.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center mt-3 font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
