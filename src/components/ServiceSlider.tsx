import React from "react";

const services = [
  "UI Design",
  "UX Design",
  "Web Design",
  "Mobile App Design",
  "Design Systems",
  "Wireframing",
  "Prototyping",
  "Responsive Design",
  "Interface Design",
  "Visual Design",
  "Interaction Design",
  "User Research",
  "Design Strategy",
  "Component Design",
  "Design Thinking",
  "User Testing",
  "Information Architecture",
  "Design Documentation",
  "Design Handoff",
  "Design QA",
  "Design Collaboration",
  "Design Leadership"
];

const ServiceSlider = () => {
  // Duplicate the services array for seamless looping
  const marqueeItems = [...services, ...services];

  return (
    <section className="relative overflow-hidden h-20 bg-[#344c36] flex items-center justify-center">
      {/* Text Slider */}
      <div className="animate-marquee flex space-x-16 whitespace-nowrap">
        {marqueeItems.map((text, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-white text-2xl font-medium space-x-6"
          >
            {/* Star-like Icon Before Text */}
            <span className="text-[#faad1b] text-5xl font-bold flex items-center justify-center leading-none">*</span>
            <span className="flex items-center">{text}</span>
            {/* Star-like Icon After Text */}
            <span className="text-[#faad1b] text-5xl font-bold flex items-center justify-center leading-none">*</span>
          </div>
        ))}
      </div>

      <style>{`
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceSlider;
