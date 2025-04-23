
import React from "react";

const services = [
  "Graphic Design",
  "Brand Identity",
  "Branding",
  "Logo Design",
  "Business card Design",
  "Letterhead Design",
  "Image Editing",
  "Packaging Design",
  "Social Media Design",
  "Web Design",
  "UI/UX Design",
  "Mobile App Design",
  "Design Systems",
  "Visual Design",
  "Typography",
  "Color Theory",
  "Layout Design",
  "Print Design",
  "Infographic Design",
  "Illustration",
  "Virtual Reality",
  "User Interface Design",
];

const ServiceSlider = () => {
  // Duplicate the services array for seamless looping
  const marqueeItems = [...services, ...services];

  return (
    <section className="relative overflow-hidden h-20 bg-[#344c36] flex items-center">
      {/* Text Slider */}
      <div className="animate-marquee flex space-x-16 whitespace-nowrap">
        {marqueeItems.map((text, index) => (
          <div
            key={index}
            className="flex items-center text-white text-2xl font-medium space-x-6"
          >
            {/* Star-like Icon Before Text */}
            <span className="text-[#faad1b] text-5xl font-bold">*</span>
            <span>{text}</span>
            {/* Star-like Icon After Text */}
            <span className="text-[#faad1b] text-5xl font-bold">*</span>
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
