import { Link } from "react-router-dom";
import EmotionalButton from "./EmotionalButton";
import { ArrowRight, Eye } from "lucide-react";
import { useEffect } from "react";



// for landing page design

import websiteui1 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI Design.jpg"

// logo design portfolio

import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";

// for business card

import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";

// for letterhead

import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";

// for banner

import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";

// for background remove

import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";

// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";

const PortfolioSection = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-portfolio-item");
        }
      });
    }, observerOptions);

    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      id: "template-tricore-creative-onepage-v1",
      title: "Tricore Creative One Page Website Template",
      category: "Website UI",
      tags: ["UI", "Website UI"],
      image: websiteui1,
    },
   
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <style>
        {`
          .portfolio-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);
          }

          .show-portfolio-item {
            opacity: 1;
            transform: translateY(0);
          }

          .portfolio-item:nth-child(1) { transition-delay: 0.1s; }
          .portfolio-item:nth-child(2) { transition-delay: 0.2s; }
          .portfolio-item:nth-child(3) { transition-delay: 0.3s; }
          .portfolio-item:nth-child(4) { transition-delay: 0.4s; }
          .portfolio-item:nth-child(5) { transition-delay: 0.5s; }
          .portfolio-item:nth-child(6) { transition-delay: 0.6s; }
          .portfolio-item:nth-child(7) { transition-delay: 0.7s; }
          .portfolio-item:nth-child(8) { transition-delay: 0.8s; }
          .portfolio-item:nth-child(9) { transition-delay: 0.9s; }
          .portfolio-item:nth-child(10) { transition-delay: 1s; }
          .portfolio-item:nth-child(11) { transition-delay: 1.1s; }
          .portfolio-item:nth-child(12) { transition-delay: 1.2s; }
        `}
      </style>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-green rounded-full"></span>
              <span className="text-green font-medium">Creative Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Latest <span className="text-green">Projects</span>
            </h2>
          </div>
          <EmotionalButton
            href="/projects"
            className="mt-4 md:mt-0 bg-green hover:bg-green/90 text-white px-6 py-3.5 rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-green/20 transition-all duration-300"
            emotionType="heart"
            numEmotions={3}
          >
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </EmotionalButton>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group relative bg-white rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image Container with Overlay */}
              <Link to={`/projects/${item.id}`} className="block">
                <div className="relative h-[320px] overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-8">
                <Link 
                  to={`/projects/${item.id}`}
                  className="block mb-4 group-hover:text-green transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </Link>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <Link
                    to={`/projects/${item.id}`}
                    className="flex items-center justify-center gap-2 flex-1 bg-green text-white hover:bg-gray-50 hover:text-gray-600 px-4 py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Project</span>
                  </Link>
                  <Link
                    to={`/projects/${item.id}`}
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-green text-white hover:bg-gray-50 hover:text-gray-600 transition-all duration-300"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-green transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-16 h-[2px] bg-green/20 rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-green"></div>
            <div className="w-16 h-[2px] bg-green/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
