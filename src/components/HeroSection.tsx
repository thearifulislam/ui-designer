import { useEffect, useRef } from "react";
import EmotionalButton from "./EmotionalButton";
import { motion } from "framer-motion";
import { ArrowRight, Star, Github, Linkedin, Twitter } from "lucide-react";
import me from "../assets/profile/me.png";

const HeroSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at center, var(--color-secondary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-gradient-to-r from-[#FFE29F]/20 to-[#FFA99F]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-[20%] w-72 h-72 rounded-full bg-gradient-to-r from-[#E5FFE0]/20 to-[#87CEEB]/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left: Main Content */}
          <div className="lg:w-[60%] flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#FFF6E3] text-[var(--color-secondary)]">
                Available for Projects
              </span>
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="block text-gray-600">Hello, I'm</span>
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                Ariful Islam
              </span>
              <span className="block mt-2 text-gray-800">
                UI/UX Designer
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl leading-relaxed"
            >
              I craft exceptional digital experiences through thoughtful UI/UX design, 
              helping businesses connect with their users through intuitive and 
              beautiful interfaces.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <EmotionalButton
                href="/projects"
                className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/90 text-white px-12 py-6 rounded-lg font-semibold text-lg flex items-center gap-3 transition-all duration-300 group"
                emotionType="heart"
                numEmotions={5}
              >
                View Portfolio
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </EmotionalButton>

              <EmotionalButton
                href="/contact"
                className="bg-white text-[var(--color-secondary)] border-2 border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/5 px-12 py-6 rounded-lg font-semibold text-lg flex items-center gap-3 transition-all duration-300 group"
                emotionType="star"
                numEmotions={3}
              >
                Let's Connect
                <Star className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
              </EmotionalButton>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 mt-4"
            >
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Icon className="w-6 h-6 text-gray-600 hover:text-[var(--color-secondary)]" />
                </a>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-8 mt-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-800">4+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">100+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">50+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-[40%] relative"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-full blur-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[var(--color-secondary)]/10 to-transparent p-4">
                <img
                  src={me}
                  alt="Ariful Islam - UI/UX Designer"
                  className="w-full rounded-2xl"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/4 bg-white shadow-xl rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="font-medium text-gray-800">UI Designer</span>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -left-4 bottom-1/4 bg-white shadow-xl rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <Star className="w-5 h-5 text-[var(--color-secondary)]" />
                <span className="font-medium text-gray-800">Brand Designer</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
