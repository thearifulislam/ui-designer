import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Calendar,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";

import me from "../assets/profile/aboutsection.png"

function useCountUp(to: number, duration = 1200, start = 0) {
  // Custom hook for animated counting up
  const [count, setCount] = useState(start);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.round(progress * (to - start) + start));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [to, duration, start]);
  return count;
}

const About = () => {
  // --- Data ---
  const experiences = [
    {
      period: "2020 - 2021",
      title: "Graphic Designer",
      company: "Learning & Earning Development Project - LEDP",
      description:
        "Worked on various design projects including branding, marketing materials, and digital content. Collaborated with cross-functional teams to deliver high-quality designs.",
    },
  ];
  const skills = [
    {
      category: "Design",
      items: [
        "UI/UX Design",
        "Graphic Deisgn",
        "Brand Identity Design",
        "Social Media Kit",
        "Packaging Design",
        "Image Editing",
      ],
    },
    {
      category: "Tools",
      items: [
        "Figma",
        "Adobe XD",
        "Photopea",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Indesign",
      ],
    },
    {
      category: "Knowledge",
      items: [
        "User Research",
        "Problem Solving",
        "Information Architecture",
        "Creative Thinking",
        "Project Management",
      ],
    },
  ];
  const education = [
    {
      period: "2024 - Running",
      degree: "BSC In CSE",
      institution: "Northarn University Of Business And Technology",
      location: "Khulna, Bangladesh",
    },
    {
      period: "2019 - 2023",
      degree: "Diploma In Computer Engineering",
      institution: "BCMC College of Engineering & Technology",
      location: "Jashore, Khulna, Bangladesh",
    },
    {
      period: "2019",
      degree: "Secondary School Certificate (SSC)",
      institution: "Kazir Pagla A.T. Institution",
      location: "Kazir Pagla, Munshiganj, Dhaka, Bangladesh",
    },
  ];

  // --- Animated counters for the hero ---
  const years = useCountUp(4, 950, 0); // 0 -> 4+
  const projects = useCountUp(100, 1300, 0); // 0 -> 100+
  const industries = useCountUp(50, 1250, 0); // 0 -> 50+

  return (
    <div className="min-h-screen bg-[#f9f9f9] overflow-hidden">
      {/* ---------- STYLES FOR ALL ANIMATIONS ---------- */}
      <style>
        {`
          /* Floating/Oribtal Elements */
          .about-floating-element {
            position: absolute;
            pointer-events: none;
            z-index: 7;
            opacity: 0.76;
            mix-blend-mode: lighten;
          }
          .float1 {
            width: 40px; height: 40px;
            left: -55px; top: 14px;
            background: radial-gradient(ellipse at 41% 43%, #19cfc9 60%, #ffffff10 100%);
            border-radius: 50%;
            animation: float1-anim 5.2s cubic-bezier(.74,-0.02,.31,1.41) infinite alternate;
          }
          @keyframes float1-anim {
            0%   { transform: translate(0, 0) scale(1);}
            36%  { transform: translate(-10px, 29px) scale(1.17);}
            51%  { transform: translate(-21px, 13px) scale(1.10);}
            82%  { transform: translate(6px, 24px) scale(1.07);}
            100% { transform: translate(-2px, 0) scale(1);}
          }
          .float2 {
            width: 28px; height: 28px;
            right: -30px; top: 72px;
            background: radial-gradient(ellipse at 50% 50%, #fbe06e 80%, #fdedb450 100%);
            border-radius: 50%;
            animation: float2-anim 6.8s ease-in-out infinite alternate;
          }
          @keyframes float2-anim {
            0%   { transform: translate(0,0) scale(1);}
            14%  { transform: translate(18px,-20px) scale(0.89);}
            44%  { transform: translate(21px,10px) scale(1.08);}
            63%  { transform: translate(-8px,17px) scale(0.97);}
            83%  { transform: translate(-25px,0px) scale(1.18);}
            100% { transform: translate(0,0) scale(1);}
          }
          .float3 {
            width: 52px; height: 24px;
            left: 56px; top: -30px;
            background: linear-gradient(108deg,#31daf6 1%, #16adc5 79%);
            border-radius: 60% 40% / 80% 20%;
            animation: float3-anim 7.6s cubic-bezier(.61,-0.35,.34,1.56) infinite alternate;
          }
          @keyframes float3-anim {
            0%   { transform: translate(0,0) rotate(-9deg);}
            33%  { transform: translate(14px,12px) rotate(17deg);}
            57%  { transform: translate(7px,21px) rotate(-11deg);}
            88%  { transform: translate(-18px,7px) rotate(27deg);}
            100% { transform: translate(0,0) rotate(-9deg);}
          }
          .float4 {
            width: 34px; height: 38px;
            right: -42px; bottom: 21px;
            background: linear-gradient(136deg,#babbfc 7%, #baeffc 88%);
            border-radius: 52% 48% / 44% 56%;
            animation: float4-anim 6.2s cubic-bezier(.74,-0.02,.31,1.41) infinite alternate;
          }
          @keyframes float4-anim {
            0%   { transform: translate(0,0) rotate(11deg);}
            23%  { transform: translate(-18px,6px) rotate(-17deg);}
            65%  { transform: translate(15px,12px) rotate(11deg);}
            100% { transform: translate(0,0) rotate(11deg);}
          }
          .float5 {
            width: 27px; height: 27px;
            left: -32px; bottom: 53px;
            background: radial-gradient(circle, #ff68a8 60%, #fbe8e5 100%);
            border-radius: 50%;
            opacity: .61;
            animation: float5-anim 4.9s cubic-bezier(.67,0,.33,1) infinite alternate;
          }
          @keyframes float5-anim {
            0%   { transform: translate(0,0) scale(1) rotate(0deg);}
            39%  { transform: translate(15px,10px) scale(1.16) rotate(-7deg);}
            59%  { transform: translate(-10px,-12px) scale(1.04) rotate(8deg);}
            100% { transform: translate(0,0) scale(1) rotate(0deg);}
          }

          /* Rotating animated border arc (SVG) */
          .about-anim-border-arc {
            position: absolute;
            left: -32px;
            top: -32px;
            width: 192px;
            height: 192px;
            opacity: 0.33;
            z-index: 8;
            pointer-events: none;
          }
          .about-anim-border-arc-circle {
            stroke: var(--color-secondary, #19cfc9);
            stroke-width: 6;
            fill: none;
            stroke-dasharray: 180 160;
            stroke-linecap: round;
            animation: border-arc-spin 2.4s linear infinite;
            transform-origin: 50% 50%;
            filter: drop-shadow(0 0 12px #19cfc955);
          }
          @keyframes border-arc-spin {
            100% { transform: rotate(360deg);}
          }
        `}
      </style>

      <Navbar />

      {/* Hero Section with animated counters and floating visual elements */}
      <section className="pt-32 pb-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="theme-color-secondary">Me</span>
              </h1>

              <p className="text-muted-foreground mb-6">
                Hi, I'm Ariful, a Graphic Designer with over 4 years of
                experience in the brand design. I specialize in crafting unique
                brand identities and delivering top-tier design solutions that
                help businesses stand out in today's competitive market.
              </p>

              <p className="text-muted-foreground mb-8">
                I help brands thrive in the digital world by creating impactful
                designs that communicate their unique vision and connect with
                their audience. With over 4 years of experience, I've developed
                a deep understanding of design principles and how they intersect
                with business goals.
              </p>

              {/* == Animated Counters == */}
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold theme-color-secondary">
                    {years}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold theme-color-secondary">
                    {projects}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold theme-color-secondary">
                    {industries}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Industries Covered
                  </div>
                </div>
              </div>

              <Link
                to="#"
                className="inline-flex items-center theme-bg-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* --- Animated/floating elements and SVG border around image --- */}
            <div className="relative flex flex-col items-center">
              {/* SVG Rotating border arc */}
              <svg className="about-anim-border-arc">
                <circle
                  className="about-anim-border-arc-circle"
                  cx="96"
                  cy="96"
                  r="88"
                />
              </svg>
              {/* Floating animated elements "orbiting" the image */}
              <div className="about-floating-element float1"></div>
              <div className="about-floating-element float2"></div>
              <div className="about-floating-element float3"></div>
              <div className="about-floating-element float4"></div>
              <div className="about-floating-element float5"></div>
              {/* The profile image */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg relative z-10">
                <img
                  src={me}
                  alt="Ariful Islam - About Me"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <div className="md:w-1/4">
                  <div className="flex items-center">
                    <Calendar
                      className="text-[var(--color-secondary)] mr-2"
                      size={18}
                    />
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-[var(--color-secondary)] font-medium mb-4">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-[#f9f9f9] p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6 theme-color-secondary">
                  {skillSet.category}
                </h3>
                <ul className="space-y-3">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 theme-color-primary mr-3 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

          <div className="space-y-10">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <div className="md:w-1/4">
                  <div className="flex items-center">
                    <Calendar
                      className="text-[var(--color-secondary)] mr-2"
                      size={18}
                    />
                    <span className="text-muted-foreground">{edu.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-[var(--color-secondary)] font-medium mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-2xl text-center">
              <div className="bg-[var(--color-secondary)]/10 p-4 rounded-full inline-block mb-4">
                <Mail className="h-6 w-6 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:acs.arifulislam@gmail.com"
                className="text-muted-foreground hover:text-[var(--color-secondary)] transition-colors"
              >
                acs.arifulislam@gmail.com
              </a>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-2xl text-center">
              <div className="bg-[var(--color-secondary)]/10 p-4 rounded-full inline-block mb-4">
                <Phone className="h-6 w-6 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a
                href="tel:+8801938434733"
                className="text-muted-foreground hover:text-[var(--color-secondary)] transition-colors"
              >
                +88 01938-434733
              </a>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-2xl text-center">
              <div className="bg-[var(--color-secondary)]/10 p-4 rounded-full inline-block mb-4">
                <MapPin className="h-6 w-6 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Khulna, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-secondary)] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Let's collaborate to create an amazing digital experience that
            achieves your business goals and delights your users.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-[var(--color-primary)] px-6 py-3 rounded-full font-medium hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
