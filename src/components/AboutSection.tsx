import { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";
import EmotionalButton from "./EmotionalButton";

const FloatingHeart = ({
  size,
  delay,
  duration,
  left,
  top,
}: {
  size: number;
  delay: number;
  duration: number;
  left: number;
  top: number;
}) => {
  return (
    <div
      className="absolute opacity-40"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        animation: `floating ${duration}s ease-in-out infinite ${delay}s`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="var(--color-secondary)"
        className="w-full h-full"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
};

const Counter = ({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
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
    <div
      ref={countRef}
      className="text-3xl md:text-4xl font-bold theme-color-primary"
    >
      {count}+
    </div>
  );
};

const AboutSection = () => {
  const stats = [
    { number: 100, label: "Projects" },
    { number: 50, label: "Industries Covered" },
    { number: 4, label: "Years of Experience" },
  ];

  const rotatingElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rotatingElementRef.current) {
      rotatingElementRef.current.style.animation = "orbit 8s linear infinite";
    }
  }, []);

  // Generate random floating hearts
  const floatingHearts = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 20) + 10, // 10-30px
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5, // 5-10s
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image with animated background */}
          <div className="md:w-1/2 relative">
            <div className="absolute top-1/4 -left-5 w-full h-full theme-bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* CSS Animations */}
            <style>
              {`
                @keyframes floating {
                  0% { transform: translateY(0) rotate(0deg); }
                  50% { transform: translateY(-20px) rotate(10deg); }
                  100% { transform: translateY(0) rotate(0deg); }
                }
                
                @keyframes orbit {
                  from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
                  to { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
                }
              `}
            </style>

            <div className="relative">
              {/* Ellipse with rotating elements */}
              <div className="absolute -left-8 -top-8 w-48 h-48 border-2 border-[var(--color-secondary)] rounded-full opacity-30"></div>

              <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden">
                {/* Floating Hearts animation */}
                {floatingHearts.map((heart) => (
                  <FloatingHeart
                    key={heart.id}
                    size={heart.size}
                    delay={heart.delay}
                    duration={heart.duration}
                    left={heart.left}
                    top={heart.top}
                  />
                ))}

                {/* Orbiting element */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "20px",
                    height: "20px",
                    marginTop: "-10px",
                    marginLeft: "-10px",
                  }}
                >
                  <div
                    ref={rotatingElementRef}
                    className="absolute theme-bg-secondary rounded-full h-5 w-5"
                  ></div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Ariful Islam - About Me"
                  className="w-full object-cover rounded-3xl relative z-10"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 theme-bg-secondary blob-shape animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="theme-color-primary">Me</span>
            </h2>

            <p className="text-black-soft/80">
            Hi, I'm Ariful — a passionate Graphic Designer with 4+ years of experience in brand identity design. I specialize in building powerful visual identities that not only capture attention but also align perfectly with a brand's purpose and values.
            </p>

            <p className="text-black-soft/80">
            My mission is to help brands grow and thrive in the digital space by designing visuals that speak their language and resonate with their audience. Over the years, I’ve honed my skills in blending creativity with strategy to deliver impactful design solutions that drive real business results.
            </p>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <Counter target={stat.number} />
                  <div className="text-black-soft/70 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <EmotionalButton
              href="#"
              className="inline-flex items-center theme-bg-primary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              emotionType="heart"
              numEmotions={3}
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </EmotionalButton>

            <div className="flex items-end justify-end mt-6">
  <div
    className="text-3xl md:text-4xl theme-color-primary"
    style={{
      fontFamily: `'Dancing Script', 'Pacifico', 'Great Vibes', 'Allura', cursive, sans-serif`,
      fontWeight: 600,
      letterSpacing: '2px',
    }}
  >
    — Ariful Islam
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
