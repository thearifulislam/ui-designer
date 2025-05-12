import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Globe,
  Smartphone,
  Users,
  Star,
  Briefcase,
  Rocket,
  Figma,
  Sparkle,
  BookOpen,
  Eye,
} from "lucide-react";
// logo design portfolio
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";
import meloplay from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import player from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import arborsphere from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/1.jpg";
import wind from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/1.jpg";
import zxon from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/1.jpg";
import zepeq from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import ecogrow from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/1.jpg";
import playerlogo from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import cycle from "../assets/portfolios/logo-design/lettermark-logo/cycle/1.png";

// for business card
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";
import minimalistcard from "../assets/portfolios/business-card/minimalist/3/mnvb-24.jpg";
import professionalcard from "../assets/portfolios/business-card/professional/2/1.jpg";
import customcard from "../assets/portfolios/business-card/custom/1/1.jpg";
import moderncard from "../assets/portfolios/business-card/modern/1/1.jpg";

// for letterhead
import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";
import corporate from "../assets/portfolios/letterhead/minimalist-corporate/1/3.jpg";

import modern from "../assets/portfolios/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg";

// for banner
import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";

// for background remove
import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";

// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";
import nexus from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/1.jpg";

// Import the portfolio styles for the animated button
import "../styles/portfolio.css";

const serviceData = {
  "logo-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Logo Design",
    title: "Logo Design Excellence",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
        icon: <Rocket className="h-7 w-7 text-yellow-500" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <BookOpen className="h-7 w-7 text-purple-500" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Figma className="h-7 w-7 text-pink-500" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Briefcase className="h-7 w-7 text-green-500" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Star className="h-6 w-6 text-yellow-400" />,
        label: "Original Concepts",
      },
      {
        icon: <Users className="h-6 w-6 text-blue-500" />,
        label: "Collaborative Process",
      },
      {
        icon: <Figma className="h-6 w-6 text-pink-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
        icon: <Sparkle className="h-6 w-6 text-purple-500" />,
        label: "Brand Guidelines",
      },
      {
        icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Wordmark Logos",
      "Brandmarks & Symbols",
      "Monogram Logos",
      "Emblem Logos",
      "Mascot Logos",
      "Minimal Logos",
    ],
    deliverables: [
      "Primary & Secondary Logo",
      "Black/White & Color Variations",
      "SVG, PNG, PDF, EPS Files",
      "Brand Guidelines Sheet",
      "Favicon & Social Media Kit",
      "Mockups for Real-World Use",
    ],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "momentum-clothing-brand-for-men",
        title: "Momentum Menswear – Modern & Stylish Clothing for Men",
        tags: ["Logo", "Abstract"],
        image: momentum,
      },
      {
        id: "blood-donation-logo-design",
        title: "Blood Donation Logo Design",
        tags: ["Logo", "Blood Donation"],
        image: blooddonation,
      },
      {
        id: "uniflora-logo-design",
        title: "Uniflora Logo Design",
        tags: ["Logo", "Health Care"],
        image: uniflora,
      },
      {
        id: "ranova-brand-guidelines",
        title: "Ranova Brand Guidelines",
        tags: ["Brand Guidelines"],
        image: ranova,
      },
      {
        id: "boldpath-brand-guidelines",
        title: "The Guidelines for Bold Path",
        tags: ["Brand Guidelines"],
        image: boldpath,
      },
      {
        id: "nexus-brand-guidelines",
        title: "Nexus Brand Guidelines",
        tags: ["Brand Guidelines"],
        image: nexus,
      },
      {
        id: "meloplay-logo-design",
        title: "Meloplay Logo Design",
        tags: ["Logo Design"],
        image: meloplay,
      },
      {
        id: "player-logo-design",
        title: "Player Logo Design",
        tags: ["Logo", "Abstract"],
        image: player,
      },
      {
        id: "arborsphere-logo-design",
        title: "ArborSphere Logo Design",
        tags: ["Logo", "Abstrack"],
        image: arborsphere,
      },
      {
        id: "zxon-logo-design",
        title: "Zxon Logo Design",
        tags: ["Logo", "Abstrack"],
        image: zxon,
      },
      {
        id: "zepeq-logo-design",
        title: "Zepeq Logo Design",
        tags: ["Logo", "Abstrack"],
        image: zepeq,
      },
      {
        id: "ecogrow-logo-design",
        title: "Ecogrow Logo Design",
        tags: ["Logo Deisgn", "Lettermark"],
        image: ecogrow,
      },
      {
        id: "the-player-logo-design",
        title: "Player Logo Design",
        tags: ["Logo", "Abstrack"],
        image: playerlogo,
      },
      {
        id: "cycle-logo-design",
        title: "Cycle Logo Design",
        tags: ["Logo", "Lettermark"],
        image: cycle,
      },
    ],
  },
  // ...other services (not shown for brevity)

  "business-card-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Business Card Design Services",
    title: "Business Card Design",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
        icon: <Rocket className="h-7 w-7 text-yellow-500" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <BookOpen className="h-7 w-7 text-purple-500" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Figma className="h-7 w-7 text-pink-500" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Briefcase className="h-7 w-7 text-green-500" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Star className="h-6 w-6 text-yellow-400" />,
        label: "Original Concepts",
      },
      {
        icon: <Users className="h-6 w-6 text-blue-500" />,
        label: "Collaborative Process",
      },
      {
        icon: <Figma className="h-6 w-6 text-pink-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
        icon: <Sparkle className="h-6 w-6 text-purple-500" />,
        label: "Brand Guidelines",
      },
      {
        icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Wordmark Logos",
      "Brandmarks & Symbols",
      "Monogram Logos",
      "Emblem Logos",
      "Mascot Logos",
      "Minimal Logos",
    ],
    deliverables: ["Modern", "Creative", "Professional"],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "modern-minimalist-camera-business-card",
        title: "Modern Minimalist Camera Science Business Card",
        tags: ["Business card", "Modern"],
        image: modernminimalistcamerabusinesscard,
      },
      {
        id: "modern-business-card-design",
        title: "Modern Business Card Design",
        tags: ["Business Card"],
        image: modernbusinesscard,
      },
      {
        id: "minimalist-card-design",
        title: "Minimalist Card Design",
        tags: ["Business Card"],
        image: minimalistcard,
      },
      {
        id: "professional-card-design",
        title: "Professional Card Design",
        tags: ["Business Card"],
        image: professionalcard,
      },
      {
        id: "custom-card-design",
        title: "Custom Card Design",
        tags: ["Business Card"],
        image: customcard,
      },
      {
        id: "modern-card-design",
        title: "Modern Type Business Card Design",
        tags: ["Business Card", "Modern"],
        image: moderncard,
      },
      {
        id: "wind-logo-design",
        title: "Wind Logo Design",
        tags: ["Logo Deisgn", "Lettermark"],
        image: wind,
      },
    ],
  },

  "letterhead-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Logo Design",
    title: "Logo Design Excellence",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
        icon: <Rocket className="h-7 w-7 text-yellow-500" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <BookOpen className="h-7 w-7 text-purple-500" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Figma className="h-7 w-7 text-pink-500" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Briefcase className="h-7 w-7 text-green-500" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Star className="h-6 w-6 text-yellow-400" />,
        label: "Original Concepts",
      },
      {
        icon: <Users className="h-6 w-6 text-blue-500" />,
        label: "Collaborative Process",
      },
      {
        icon: <Figma className="h-6 w-6 text-pink-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
        icon: <Sparkle className="h-6 w-6 text-purple-500" />,
        label: "Brand Guidelines",
      },
      {
        icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Wordmark Logos",
      "Brandmarks & Symbols",
      "Monogram Logos",
      "Emblem Logos",
      "Mascot Logos",
      "Minimal Logos",
    ],
    deliverables: [
      "Primary & Secondary Logo",
      "Black/White & Color Variations",
      "SVG, PNG, PDF, EPS Files",
      "Brand Guidelines Sheet",
      "Favicon & Social Media Kit",
      "Mockups for Real-World Use",
    ],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "modern-minimalist-letterhead-design",
        title: "Modern Minimalist Letterhead Design",
        tags: ["Letterhead"],
        image: modernminimalist,
      },
      {
        id: "elegant-gold-accented-corporate-letterhead",
        title: "Elegant Gold-Accented Corporate Letterhead",
        tags: ["Letterhead", "Minimalist"],
        image: elegantgoldaccentedcorporateletterhead,
      },
      {
        id: "corporate-letterhead-design",
        title: "Corporate Design",
        tags: ["Letterhead Deisgn", "Corporate"],
        image: corporate,
      },
      {
        id: "modern-letterhead-design",
        title: "modern Design",
        tags: ["Letterhead Deisgn", "Modern"],
        image: modern,
      },
    ],
  },

  "brand-guidelines-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Logo Design",
    title: "Logo Design Excellence",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
        icon: <Rocket className="h-7 w-7 text-yellow-500" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <BookOpen className="h-7 w-7 text-purple-500" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Figma className="h-7 w-7 text-pink-500" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Briefcase className="h-7 w-7 text-green-500" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Star className="h-6 w-6 text-yellow-400" />,
        label: "Original Concepts",
      },
      {
        icon: <Users className="h-6 w-6 text-blue-500" />,
        label: "Collaborative Process",
      },
      {
        icon: <Figma className="h-6 w-6 text-pink-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
        icon: <Sparkle className="h-6 w-6 text-purple-500" />,
        label: "Brand Guidelines",
      },
      {
        icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Wordmark Logos",
      "Brandmarks & Symbols",
      "Monogram Logos",
      "Emblem Logos",
      "Mascot Logos",
      "Minimal Logos",
    ],
    deliverables: [
      "Primary & Secondary Logo",
      "Black/White & Color Variations",
      "SVG, PNG, PDF, EPS Files",
      "Brand Guidelines Sheet",
      "Favicon & Social Media Kit",
      "Mockups for Real-World Use",
    ],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "boldpath-brand-guidelines",
        title: "The Guidelines for Bold Path",
        tags: ["Brand Guidelines"],
        image: boldpath,
      },
      {
        id: "ranova-brand-guidelines",
        title: "Ranova Brand Guidelines",
        tags: ["Brand Guidelines"],
        image: ranova,
      },
      {
        id: "nexus-brand-guidelines",
        title: "Nexus Brand Guidelines",
        tags: ["Brand Guidelines"],
        image: nexus,
      },
    ],
  },

  "image-editing": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Logo Design",
    title: "Logo Design Excellence",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
        icon: <Rocket className="h-7 w-7 text-yellow-500" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <BookOpen className="h-7 w-7 text-purple-500" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Figma className="h-7 w-7 text-pink-500" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Briefcase className="h-7 w-7 text-green-500" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Star className="h-6 w-6 text-yellow-400" />,
        label: "Original Concepts",
      },
      {
        icon: <Users className="h-6 w-6 text-blue-500" />,
        label: "Collaborative Process",
      },
      {
        icon: <Figma className="h-6 w-6 text-pink-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
        icon: <Sparkle className="h-6 w-6 text-purple-500" />,
        label: "Brand Guidelines",
      },
      {
        icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Wordmark Logos",
      "Brandmarks & Symbols",
      "Monogram Logos",
      "Emblem Logos",
      "Mascot Logos",
      "Minimal Logos",
    ],
    deliverables: [
      "Primary & Secondary Logo",
      "Black/White & Color Variations",
      "SVG, PNG, PDF, EPS Files",
      "Brand Guidelines Sheet",
      "Favicon & Social Media Kit",
      "Mockups for Real-World Use",
    ],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "image-background-remove-clipping-path",
        title: "Image Clipping Path",
        tags: ["Background Remove", "Clipping Path"],
        image: imageclippingpath,
      },
    ],
  },

  "background-removal": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Logo Design",
    title: "Logo Design Excellence",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
        icon: <Rocket className="h-7 w-7 text-yellow-500" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <BookOpen className="h-7 w-7 text-purple-500" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Figma className="h-7 w-7 text-pink-500" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Briefcase className="h-7 w-7 text-green-500" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Star className="h-6 w-6 text-yellow-400" />,
        label: "Original Concepts",
      },
      {
        icon: <Users className="h-6 w-6 text-blue-500" />,
        label: "Collaborative Process",
      },
      {
        icon: <Figma className="h-6 w-6 text-pink-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
        icon: <Sparkle className="h-6 w-6 text-purple-500" />,
        label: "Brand Guidelines",
      },
      {
        icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Wordmark Logos",
      "Brandmarks & Symbols",
      "Monogram Logos",
      "Emblem Logos",
      "Mascot Logos",
      "Minimal Logos",
    ],
    deliverables: [
      "Primary & Secondary Logo",
      "Black/White & Color Variations",
      "SVG, PNG, PDF, EPS Files",
      "Brand Guidelines Sheet",
      "Favicon & Social Media Kit",
      "Mockups for Real-World Use",
    ],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "image-background-remove-clipping-path",
        title: "Image Clipping Path",
        tags: ["Background Remove", "Clipping Path"],
        image: imageclippingpath,
      },
    ],
  },
};

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = serviceId
    ? serviceData[serviceId as keyof typeof serviceData]
    : undefined;

  if (!service) {
    // Not Found Section with extra top spacing for all screens
    const primary = "var(--color-primary, #6c47ff)";
    const primarySoft = "#ede9fe"; // Soft/lighter version for hover
    const secondary = "var(--color-secondary, #ffe03a)";

    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-fuchsia-100 flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-start px-2 sm:px-4 text-center">
          {/* Extra space above (much more for large and mobile) */}
          <div className="h-20 sm:h-32 lg:h-44" />
          <div
            className="flex flex-col items-center w-full max-w-lg rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 border transition-all duration-200 mx-2 sm:mx-4"
            style={{
              background: "rgba(255,255,255,0.96)",
              borderColor: primary,
            }}
          >
            {/* Illustration */}
            <div className="mb-6">
              <svg width="90" height="90" viewBox="0 0 120 120" fill="none">
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  fill="#f3f4f6"
                  stroke={primary}
                  strokeWidth="4"
                />
                <text
                  x="50%"
                  y="54%"
                  textAnchor="middle"
                  fill={primary}
                  fontSize="38"
                  fontWeight="bold"
                  dy=".3em"
                  style={{ fontFamily: "inherit" }}
                >
                  404
                </text>
                <ellipse cx="60" cy="90" rx="24" ry="7" fill={secondary} />
              </svg>
            </div>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2"
              style={{ color: primary }}
            >
              Service Not Found
            </h1>
            <p className="mb-8 text-gray-600 text-base sm:text-lg">
              The service you requested doesn't exist or was moved.
              <br />
              Please check the URL or explore other services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mb-2">
              <Link to="/services" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-200"
                  style={{
                    background: primary,
                    border: `2px solid ${primary}`,
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      primarySoft;
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#3b2f7f";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      primarySoft;
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      primary;
                    (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      primary;
                  }}
                >
                  Back to Services
                </button>
              </Link>
              <Link to="/" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto bg-white px-6 py-2 rounded-full font-semibold shadow border-2 transition-all duration-200"
                  style={{
                    color: primary,
                    borderColor: primary,
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      primarySoft;
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#3b2f7f";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      primarySoft;
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "white";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      primary;
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      primary;
                  }}
                >
                  Go to Homepage
                </button>
              </Link>
            </div>
            <div
              className="mt-6 text-sm"
              style={{ color: primary, opacity: 0.6 }}
            >
              If you think this is a server error, please{" "}
              <a
                href="mailto:acs.arifulislam@gmail.com"
                className="underline transition-colors duration-200"
                style={{ color: secondary }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = primary;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    secondary;
                }}
              >
                contact support
              </a>
              .
            </div>
          </div>
          {/* Extra space below */}
          <div className="h-12 sm:h-20 lg:h-32" />
        </main>
        <Footer />
      </div>
    );
  }

  // Main Service Details Page (unchanged)
  return (
    <div className="min-h-screen bg-[#fafaff] flex flex-col">
      <Navbar />
      <section className="py-8 sm:py-14 bg-muted">
        <div className="container mx-auto px-2 sm:px-4 md:px-8">
          {/* Info Card */}
          <div className="bg-white shadow-lg rounded-2xl mb-8 sm:mb-12 px-3 sm:px-6 py-8 sm:py-12 mx-auto">
            {/* Minimal Green Back to Portfolio Button INSIDE CARD, before coverText */}
            <div className="mb-4">
              <Link
                to="/services"
                className="inline-flex items-center font-semibold text-green-600 hover:text-green-700 transition-colors duration-200"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Services
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div>{service.icon}</div>
              <div>
                <div className="text-sm font-bold theme-color-secondary uppercase tracking-widest">
                  {service.coverText}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold theme-color-primary mb-1">
                  {service.title}
                </h1>
                <div className="font-semibold text-gray-700">
                  {service.tagline}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {service.subServices.map((sub, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-[5px] text-xs font-medium"
                >
                  {sub}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Clock className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-700 font-medium">Timeline:</span>
              <span className="font-medium">{service.timeframe}</span>
            </div>
            {/* Features */}
            <div className="mb-7">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-800">
                    <span className="flex-shrink-0">{feature.icon}</span>
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Process */}
            <div className="mb-7">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Process
              </h3>
              <ol className="space-y-2 text-sm">
                {service.process.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="mt-[3px]">{step.icon}</span>
                    <span className="font-medium">{step.title}:</span>{" "}
                    <span>{step.desc}</span>
                  </li>
                ))}
              </ol>
            </div>
            {/* Deliverables */}
            <div className="mb-7">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Deliverables
              </h3>
              <ul className="flex flex-wrap gap-2">
                {service.deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Portfolio Grid */}
          {service.portfolios && (
            <section className="pt-0 pb-6 sm:pb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 sm:mb-10 text-center theme-color-primary">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {service.portfolios.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
                  >
                    {/* Image is now a link to the project details page by id */}
                    <Link to={`/projects/${item.id}`}>
                      <div className="h-56 sm:h-80 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"></div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags &&
                            item.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-blue-600 text-white px-2 py-1 rounded-[5px] font-medium mr-2 mb-2"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-black-soft group-hover:text-[var(--color-primary)] transition-colors">
                          {item.title}
                        </h3>
                        <div className="view-portfolio-animate px-4 py-2 rounded-full font-medium flex items-center justify-center w-full mx-auto mt-4 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] hover:text-black transition-all duration-200 cursor-pointer">
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Portfolio</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
