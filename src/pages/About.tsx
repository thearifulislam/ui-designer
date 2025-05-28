import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Calendar,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Star,
  Award,
  Users,
} from "lucide-react";

import me from "../assets/profile/aboutsection.png"
import cv from "../assets/resume/Ariful islam.pdf"

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

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="inline-block px-4 py-2 bg-[var(--color-secondary)]/10 rounded-full mb-6">
                <span className="text-[var(--color-secondary)] font-medium">Creative Designer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Crafting Digital <br />
                <span className="theme-color-secondary">Experiences</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hi, I'm Ariful, a passionate Graphic Designer with over 4 years of
                experience in brand design. I specialize in creating unique brand
                identities and delivering exceptional design solutions that help
                businesses thrive in today's competitive market.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold theme-color-secondary mb-2">
                    {years}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold theme-color-secondary mb-2">
                    {projects}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold theme-color-secondary mb-2">
                    {industries}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Industries
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={cv}
                  download="Ariful_Islam_Resume.pdf"
                  className="inline-flex items-center theme-bg-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300"
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={me}
                  alt="Ariful Islam - About Me"
                  className="w-full h-auto object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-secondary)]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My experience spans across various design disciplines, helping businesses
              achieve their goals through creative solutions.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="flex items-center bg-[var(--color-secondary)]/10 px-4 py-2 rounded-full">
                      <Calendar className="text-[var(--color-secondary)] mr-2" size={18} />
                      <span className="text-[var(--color-secondary)] font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-[var(--color-secondary)] font-medium mb-4">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of skills that enable me to deliver exceptional design solutions
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skills.map((skillSet, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-3xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 theme-color-secondary">
                  {skillSet.category}
                </h3>
                <ul className="space-y-4">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="flex items-start group">
                      <CheckCircle className="h-6 w-6 theme-color-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-lg">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey that has shaped my professional growth
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="flex items-center bg-[var(--color-secondary)]/10 px-4 py-2 rounded-full">
                      <Calendar className="text-[var(--color-secondary)] mr-2" size={18} />
                      <span className="text-[var(--color-secondary)] font-medium">{edu.period}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-[var(--color-secondary)] font-medium mb-4">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your vision to life
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="bg-[var(--color-secondary)]/10 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:acs.arifulislam@gmail.com"
                className="text-muted-foreground hover:text-[var(--color-secondary)] transition-colors text-lg"
              >
                acs.arifulislam@gmail.com
              </a>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="bg-[var(--color-secondary)]/10 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+8801938434733"
                className="text-muted-foreground hover:text-[var(--color-secondary)] transition-colors text-lg"
              >
                +88 01938-434733
              </a>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
              <div className="bg-[var(--color-secondary)]/10 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-lg">Khulna, Bangladesh</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-[var(--color-secondary)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div 
          variants={fadeInUp}
          className="container mx-auto px-4 md:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-white/90 text-lg">
            Let's collaborate to create an amazing digital experience that
            achieves your business goals and delights your users.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;
