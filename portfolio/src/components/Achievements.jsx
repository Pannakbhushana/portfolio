import { FaCheckCircle } from "react-icons/fa";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import SectionHeading from "./layouts/SectionHeading";

const achievements = [
  "Published and maintained PujaPadhati on the Google Play Store, reaching 5,000+ installs and real daily users.",

  "Built and deployed PujaPadhati as a production web platform at pujapadhati.com, serving real users with a content-focused Next.js application.",

  "Migrated PujaPadhati from a WebView-based implementation to React Native and implemented offline-first content access for the mobile application.",

  "Improved the PujaPadhati web platform's technical SEO, page structure, performance, and search-engine indexing.",

  "Integrated Razorpay payments into MessGo and built subscription lifecycle functionality including pause, resume, renewal, auto-expiry, scheduled jobs, and automated email notifications.",

  "Built and published the Satyanarayan Puja & Katha Android application, reaching 1,000+ installs.",
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
