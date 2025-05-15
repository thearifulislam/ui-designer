import { useState, useEffect, useRef } from "react";
import { Download, Figma, Framer, Code, Monitor, Palette, Boxes, Eye } from "lucide-react";
import EmotionalButton from "./EmotionalButton";
import aboutpic from "../assets/profile/aboutsection.png";
import cv from "../assets/resume/Ariful islam.pdf";

// Decorative background component
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient mesh background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-secondary-rgb),0.1)_0%,rgba(255,255,255,0)_50%)]" />

    {/* Dot pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(var(--color-secondary) 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      opacity: 0.05
    }} />

    {/* Animated gradient lines */}
    <div className="absolute -top-[400px] left-1/2 w-[800px] h-[800px] -translate-x-1/2">
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite] opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-[var(--color-secondary)]"
            style={{
              transform: `rotate(${i * 30}deg)`,
              borderRadius: '40%'
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

// Skill card component
const SkillCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group p-5 rounded-2xl bg-white border border-gray-100 hover:border-[var(--color-secondary)] transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

// Animated counter component
const Counter = ({
  target,
  duration = 2000,
  label,
  icon: Icon,
}: {
  target: number;
  duration?: number;
  label: string;
  icon: React.ElementType;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(target * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={countRef} className="relative group">
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-[var(--color-secondary)] transition-all duration-300">
        <div className="p-2 rounded-xl bg-gray-50 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-800">
            {count}
            <span className="text-[var(--color-secondary)]">+</span>
          </div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const skills = [
    {
      icon: Monitor,
      title: "UI Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Boxes,
      title: "Design Systems",
      description: "Building scalable and consistent design systems for seamless product development."
    },
    {
      icon: Code,
      title: "Prototyping",
      description: "Crafting interactive prototypes to validate design decisions early."
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Developing stunning visuals that align with brand identity and user expectations."
    }
  ];

  const stats = [
    { number: 100, label: "Projects Completed", icon: Monitor },
    { number: 50, label: "Design Systems", icon: Boxes },
    { number: 4, label: "Years Experience", icon: Palette }
  ];

  const tools = [
    { name: "Figma", icon: Figma },
    { name: "Framer", icon: Framer },
    { name: "Adobe XD", icon: Monitor },
    { name: "Sketch", icon: Palette }
  ];

  return (
    <section id="about" className="py-24 relative">
      <BackgroundDecoration />

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Simple border with shadow */}
              <div className="p-4 bg-white rounded-2xl shadow-lg">
                <img
                  src={aboutpic}
                  alt="UI Designer Profile"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-secondary)]">
                Crafting Digital
                <br />
                Experiences
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a UI Designer with a passion for creating exceptional digital experiences,
                I combine aesthetic excellence with user-centered design principles. My approach
                focuses on transforming complex challenges into elegant, intuitive solutions
                that delight users and drive business success.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Counter
                  key={index}
                  target={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-3 rounded-full font-medium border-2 border-[var(--color-secondary)] bg-[var(--color-secondary)] text-white hover:bg-white hover:text-[var(--color-secondary)] transition-all duration-300"
              >
                View Portfolio
                <Eye className="ml-2 h-5 w-5" />
              </a>

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-[var(--color-secondary)] text-gray-600 hover:text-[var(--color-secondary)] transition-all duration-300"
                download
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Design Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
