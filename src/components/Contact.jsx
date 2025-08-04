// ContactSection.tsx
import { FaEnvelope, FaThumbsUp, FaInstagram, FaFacebook, FaBehance, FaVimeo, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import SectionHeading from "./layouts/SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const templateParam = {
    from_name: formData.firstName + " " + formData.lastName,
    from_email: formData.email,
    to_name: "Rahul Mishra",
    message: formData.message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setToast({ type: "", message: "" });

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      await emailjs.send(serviceId, templateId, templateParam, publicKey);

      setToast({ type: "success", message: "✅ Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setToast({ type: "error", message: "❌ Failed to send message. Please try again." });
    }

    setIsLoading(false);
  };

  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-16" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left Side */}
        <div>
          <FadeInWhenVisible direction="up" animationType="scale" delay={1 * 0.1}>
            <SectionHeading>Get in Touch</SectionHeading>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="up" animationType="scale" delay={1 * 0.2}>
            <p className="text-lg font-medium text-[#8A3B12] mb-4">I'd like to hear from you!</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="up" animationType="scale">
            <p className="text-gray-600 mb-8">If you have any inquiries or just want to say hi, please use the contact form!</p>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="up" animationType="scale" delay={1 * 0.2}>
            <div className="flex items-center gap-3 mb-6">
              <FaEnvelope className="text-lg text-gray-700" />
              <a href="mailto:youremail@example.com" className="text-gray-800 underline">
                youremail@example.com
              </a>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="up" animationType="scale" delay={1 * 0.2}>
            <div className="flex gap-4 text-xl text-gray-800">
              <FaThumbsUp />
              <FaInstagram />
              <FaFacebook />
              <FaBehance />
              <FaVimeo />
              <FaLinkedin />
            </div>
          </FadeInWhenVisible>
        </div>
        {/* Right Side (Form) */}
        <FadeInWhenVisible direction="up" animationType="scale">
          <form className="space-y-5" onSubmit={sendEmail}>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-600 px-4 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-600 px-4 py-2"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 px-4 py-2"
            />
            <textarea
              placeholder="Message *"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 px-4 py-2"
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#A94E1D] text-white px-6 py-2 hover:bg-[#8a3b12] transition-colors"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {toast.message && (
              <p
                className={`mt-3 text-center text-sm font-medium ${toast.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {toast.message}
              </p>
            )}
          </form>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
