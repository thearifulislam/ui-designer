
import { useEffect, useRef } from "react";
import EmotionalButton from "./EmotionalButton";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Play, Heart } from "lucide-react";
import me from "../assets/profile/me.png";

const HeroSection = () => {
  const animRef1 = useRef<HTMLDivElement>(null);
  const animRef2 = useRef<HTMLDivElement>(null);
  const animRef3 = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate blobs: scale up and down loop with slight delays
    const anims = [animRef1, animRef2, animRef3];
    anims.forEach((anim, idx) => {
      if (anim.current) {
        anim.current.style.animation = `heroBlobZoom 3.5s ${
          idx * 0.6
        }s infinite alternate`;
      }
    });
    if (heartRef.current) {
      heartRef.current.style.animation = "pulse 2s ease-in-out infinite";
    }
  }, []);

  return (
    <section
      id="hero"
      className="py-12 md:pt-32 md:pb-20 bg-white border-b border-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div
        ref={animRef1}
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#FFE29F] to-[#FFA99F] blur-xl opacity-25 animate-pulse"
      ></div>
      <div
        ref={animRef2}
        className="absolute bottom-20 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-[#E5FFE0] to-[#87CEEB] blur-xl opacity-25 animate-pulse"
      ></div>
      <div
        ref={animRef3}
        className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#FFF6E3] to-[#F6A300] blur-xl opacity-25 animate-pulse"
      ></div>
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-14">
        {/* Left: Main Content */}
        <div className="md:w-2/3 w-full flex flex-col gap-7 md:pr-14">
          {/* Add mt-6 on mobile, remove on md+ */}
          <div className="flex items-center space-x-2 mb-2 mt-10 md:mt-0">
            <span className="bg-[#FFF6E3] text-[var(--color-secondary)] font-bold py-1 px-4 rounded-full text-xs">
              Brand Identity Designer
            </span>
            <span className="bg-[#E5FFE0] text-[var(--color-primary)] font-bold py-1 px-4 rounded-full text-xs">
              UI/UX Designer
            </span>
          </div>
          <span className="text-xs font-medium bg-[#f9f9f9] px-4 py-1 w-fit rounded mb-1 text-gray-500">
            Hello there!
          </span>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-2 flex flex-col gap-3">
            <span>
              I&apos;m{" "}
              <span className="theme-color-secondary relative inline-block">
                Ariful Islam
                <span className="block w-full h-1 rounded-lg bg-yellow-300 absolute left-0 -bottom-2 md:-bottom-2 md:h-1 opacity-80"></span>
              </span>
            </span>
            <span className="text-[#222]">Graphic Designer</span>
            <span className="theme-color-primary">Based in BD.</span>
          </h1>
          <p className="text-md md:text-lg text-black/85 max-w-2xl mb-4">
            I&apos;m a graphic designer with a passion for creating visually
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <EmotionalButton
              href="#portfolio"
              className="theme-bg-secondary hover:bg-[#f9be5a] text-white px-7 py-3 rounded-full font-semibold flex items-center shadow transition-all duration-300 text-base"
              emotionType="heart"
              numEmotions={5}
            >
              View my portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </EmotionalButton>
            <EmotionalButton
              href="#contact"
              className="bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3 rounded-full font-semibold flex items-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-base"
              emotionType="heart"
              numEmotions={3}
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </EmotionalButton>
          </div>
          <div className="flex gap-5 flex-wrap text-[#222] opacity-85 font-semibold">
            <span className="flex items-center gap-1 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></span>{" "}
              Premium Quality
            </span>
            <span className="flex items-center gap-1 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></span>{" "}
              Client Focused
            </span>
            <span className="flex items-center gap-1 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></span>{" "}
              Modern Design
            </span>
          </div>
        </div>
        {/* Right: Profile Photo and animations; hidden on mobile */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="relative">
            <div className="absolute -top-10 -left-10 bg-[#faad1b] rounded-full h-24 w-24 blob-shape animate-pulse"></div>
            <div>
              <img
                src={me}
                alt="Olivia Smith - Product Designer"
                className="w-3/4 object-cover rounded-3xl mx-auto"
              />
              {/* Animated Heart Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.7, 1, 0.7] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute right-[-28px] top-[65%] -translate-y-1/2 bg-white rounded-full shadow-lg p-2 z-10"
                style={{
                  width: 54,
                  height: 54,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Heart className="text-[#faad1b] fill-[#faad1b]" size={38} />
              </motion.div>
            </div>

            {/* UI/UX Designer Badge */}
            <motion.div
              className="absolute top-12 right-0 bg-[#faad1b] text-[#344c36] font-bold px-4 py-2 rounded-lg"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              UI/UX Designer
            </motion.div>

            {/* Product Designer Badge */}
            <motion.div
              className="absolute bottom-20 left-0 bg-[#344c36] text-white px-4 py-2 rounded-lg"
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              Brand Identity Designer
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
