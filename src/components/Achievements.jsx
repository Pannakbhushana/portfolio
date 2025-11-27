import { FaCheckCircle } from "react-icons/fa";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import SectionHeading from "./layouts/SectionHeading";

const achievements = [
  "Published the PujaPadhati mobile app on the Google Play Store with real users.",
  "Built and deployed a production-ready spiritual platform with a custom domain (pujapadhati.com).",
  "Fully optimized the PujaPadhati v2 platform for SEO, improving performance, indexing, and overall search visibility.",
  "Integrated Razorpay payment gateway in a real-world meal subscription app (MessGo).",
  "Completed 100+ hours of MERN stack development and multiple full-stack projects.",
  "Implemented a full subscription lifecycle system including auto-expiry, pause, resume, and renewal logic (messgo)",
  "Built automated email workflows to notify users of subscription activation, expiry warnings, and final expiration using background jobs. (messgo)",
  "Developed scheduler-based jobs in JavaScript to handle time-bound subscription logic and notification systems (messgo)",
  "Engineered a reliable subscription alert framework improving user engagement and reducing churn. (messgo)",
  "Strong GitHub activity with consistent contributions across personal projects.",
];

export default function Achievements() {
  return (
    <section className="bg-white py-16 px-5" id="achievements">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeInWhenVisible direction="up" animationType="scale">
                <SectionHeading>Achievements</SectionHeading>
            </FadeInWhenVisible>
<br />
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
