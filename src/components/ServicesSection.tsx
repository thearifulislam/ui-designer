import { useState } from "react";
import { ArrowRight, Layers, Palette, Layout, Smartphone, Monitor, Box, Figma, Framer } from "lucide-react";
import EmotionalButton from "./EmotionalButton";
import { Link } from "react-router-dom";

const services = [
  {
    id: "ui-design",
    iconBg: "bg-violet-100 text-violet-600",
    icon: <Layout className="w-6 h-6" />,
    title: "UI Design",
    description:
      "Creating beautiful, intuitive interfaces that elevate user experience and drive engagement.",
    features: [
      "User Interface Design",
      "Design Systems",
      "Interactive Prototypes",
      "Visual Design",
    ],
    tools: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    id: "responsive-design",
    iconBg: "bg-blue-100 text-blue-600",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    description:
      "Crafting seamless experiences across all devices with pixel-perfect precision and attention to detail.",
    features: [
      "Mobile-First Design",
      "Cross-Platform UI",
      "Adaptive Layouts",
      "Touch Interactions",
    ],
    tools: ["Figma", "Principle", "Framer"],
  },
  {
    id: "design-systems",
    iconBg: "bg-amber-100 text-amber-600",
    icon: <Box className="w-6 h-6" />,
    title: "Design Systems",
    description:
      "Building scalable design systems that ensure consistency and accelerate product development.",
    features: [
      "Component Libraries",
      "Style Guides",
      "Documentation",
      "Design Tokens",
    ],
    tools: ["Figma", "Storybook", "Zeroheight"],
  },
  {
    id: "interaction-design",
    iconBg: "bg-emerald-100 text-emerald-600",
    icon: <Framer className="w-6 h-6" />,
    title: "Interaction Design",
    description:
      "Designing meaningful interactions and micro-animations that delight users and enhance usability.",
    features: [
      "Motion Design",
      "Micro-interactions",
      "State Transitions",
      "Animated Prototypes",
    ],
    tools: ["Framer", "Principle", "After Effects"],
  },
  {
    id: "web-app-design",
    iconBg: "bg-rose-100 text-rose-600",
    icon: <Monitor className="w-6 h-6" />,
    title: "Web App Design",
    description:
      "Designing complex web applications with focus on functionality, usability, and visual appeal.",
    features: [
      "Dashboard Design",
      "Data Visualization",
      "Complex Workflows",
      "Information Architecture",
    ],
    tools: ["Figma", "Maze", "Miro"],
  },
  {
    id: "design-consultation",
    iconBg: "bg-cyan-100 text-cyan-600",
    icon: <Palette className="w-6 h-6" />,
    title: "Design Consultation",
    description:
      "Providing expert guidance on design strategy, UX improvements, and visual design direction.",
    features: [
      "UX Audits",
      "Design Reviews",
      "Brand Guidelines",
      "Design Workshops",
    ],
    tools: ["Figma", "Miro", "FigJam"],
  },
];

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Specialized UI design services tailored to elevate your digital products. 
              From concept to implementation, I create intuitive and visually stunning 
              interfaces that users love.
            </p>
          </div>
          <div className="shrink-0">
            <Link to="/services">
              <EmotionalButton
                className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                emotionType="heart"
                numEmotions={3}
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </EmotionalButton>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                hoveredCard === service.id
                  ? "ring-2 ring-[var(--color-secondary)]"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.iconBg} transition-transform group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[80px]">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-[var(--color-secondary)] font-medium group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link to="/services">
            <EmotionalButton
              className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              emotionType="heart"
              numEmotions={2}
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </EmotionalButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
