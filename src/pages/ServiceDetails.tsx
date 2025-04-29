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

// Import the portfolio styles for the animated button
import "../styles/portfolio.css";

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

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
      ],
    },

    "image-editing": {
      icon: (
        <Briefcase className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
      ),
      coverText: "Business Card Design",
      title: "Professional Business Card Design",
      tagline: "Make a lasting impression with every handshake.",
      description:
        "Elevate your brand with custom business card designs that reflect your professionalism and style. I create unique, memorable, and print-ready cards tailored to your business identity.",
      process: [
        {
          icon: <Rocket className="h-7 w-7 text-yellow-500" />,
          title: "Brief & Brand Study",
          desc: "Understand your business, brand, and card requirements.",
        },
        {
          icon: <BookOpen className="h-7 w-7 text-purple-500" />,
          title: "Concept & Layout",
          desc: "Sketch and plan card layouts and visual hierarchy.",
        },
        {
          icon: <Figma className="h-7 w-7 text-pink-500" />,
          title: "Design & Review",
          desc: "Create digital designs and refine based on your feedback.",
        },
        {
          icon: <Sparkle className="h-7 w-7 text-blue-400" />,
          title: "Finalization",
          desc: "Polish the design and prepare for print.",
        },
        {
          icon: <Briefcase className="h-7 w-7 text-green-500" />,
          title: "Delivery",
          desc: "Provide print-ready files and digital previews.",
        },
      ],
      features: [
        {
          icon: <Star className="h-6 w-6 text-yellow-400" />,
          label: "Custom Layouts",
        },
        {
          icon: <Users className="h-6 w-6 text-blue-500" />,
          label: "Double-sided Design",
        },
        {
          icon: <Figma className="h-6 w-6 text-pink-500" />,
          label: "Editable Source Files",
        },
        {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
          label: "Print-Ready Exports",
        },
        {
          icon: <Sparkle className="h-6 w-6 text-purple-500" />,
          label: "Unique Brand Touch",
        },
        {
          icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
          label: "Multiple Concepts",
        },
      ],
      subServices: [
        "Minimalist Business Cards",
        "Corporate Business Cards",
        "Personal/Creative Cards",
        "Double-sided Cards",
        "QR Code Integration",
        "Spot UV & Special Finish Cards",
      ],
      deliverables: [
        "Print-ready PDF (CMYK)",
        "High-res PNG/JPG",
        "Editable Source File (AI/PSD)",
        "Mockup Previews",
        "Bleed & Trim Marks",
        "QR Code (if needed)",
      ],
      timeframe: "2-4 days",
      portfolios: [
        {
          id: "image-background-remove-clipping-path",
          title: "Image Clipping Path",
          tags: ["Background Remove", "Clipping Path"],
          image: imageclippingpath,
        },
      ],
    },

    "business-card-design": {
      icon: (
        <Briefcase className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
      ),
      coverText: "Business Card Design",
      title: "Professional Business Card Design",
      tagline: "Make a lasting impression with every handshake.",
      description:
        "Elevate your brand with custom business card designs that reflect your professionalism and style. I create unique, memorable, and print-ready cards tailored to your business identity.",
      process: [
        {
          icon: <Rocket className="h-7 w-7 text-yellow-500" />,
          title: "Brief & Brand Study",
          desc: "Understand your business, brand, and card requirements.",
        },
        {
          icon: <BookOpen className="h-7 w-7 text-purple-500" />,
          title: "Concept & Layout",
          desc: "Sketch and plan card layouts and visual hierarchy.",
        },
        {
          icon: <Figma className="h-7 w-7 text-pink-500" />,
          title: "Design & Review",
          desc: "Create digital designs and refine based on your feedback.",
        },
        {
          icon: <Sparkle className="h-7 w-7 text-blue-400" />,
          title: "Finalization",
          desc: "Polish the design and prepare for print.",
        },
        {
          icon: <Briefcase className="h-7 w-7 text-green-500" />,
          title: "Delivery",
          desc: "Provide print-ready files and digital previews.",
        },
      ],
      features: [
        {
          icon: <Star className="h-6 w-6 text-yellow-400" />,
          label: "Custom Layouts",
        },
        {
          icon: <Users className="h-6 w-6 text-blue-500" />,
          label: "Double-sided Design",
        },
        {
          icon: <Figma className="h-6 w-6 text-pink-500" />,
          label: "Editable Source Files",
        },
        {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
          label: "Print-Ready Exports",
        },
        {
          icon: <Sparkle className="h-6 w-6 text-purple-500" />,
          label: "Unique Brand Touch",
        },
        {
          icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
          label: "Multiple Concepts",
        },
      ],
      subServices: [
        "Minimalist Business Cards",
        "Corporate Business Cards",
        "Personal/Creative Cards",
        "Double-sided Cards",
        "QR Code Integration",
        "Spot UV & Special Finish Cards",
      ],
      deliverables: [
        "Print-ready PDF (CMYK)",
        "High-res PNG/JPG",
        "Editable Source File (AI/PSD)",
        "Mockup Previews",
        "Bleed & Trim Marks",
        "QR Code (if needed)",
      ],
      timeframe: "2-4 days",
      portfolios: [
        {
          id: "modern-minimalist-camera-business-card",
          title: "Modern Minimalist Camera Business Card",
          tags: ["Minimalist", "Photography"],
          image: modernminimalistcamerabusinesscard,
        },
        {
          id: "modern-business-card",
          title: "Modern Business Card",
          tags: ["Corporate", "Modern"],
          image: modernbusinesscard,
        },
      ],
    },

    "letterhead-design": {
      icon: (
        <Briefcase className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
      ),
      coverText: "Business Card Design",
      title: "Professional Business Card Design",
      tagline: "Make a lasting impression with every handshake.",
      description:
        "Elevate your brand with custom business card designs that reflect your professionalism and style. I create unique, memorable, and print-ready cards tailored to your business identity.",
      process: [
        {
          icon: <Rocket className="h-7 w-7 text-yellow-500" />,
          title: "Brief & Brand Study",
          desc: "Understand your business, brand, and card requirements.",
        },
        {
          icon: <BookOpen className="h-7 w-7 text-purple-500" />,
          title: "Concept & Layout",
          desc: "Sketch and plan card layouts and visual hierarchy.",
        },
        {
          icon: <Figma className="h-7 w-7 text-pink-500" />,
          title: "Design & Review",
          desc: "Create digital designs and refine based on your feedback.",
        },
        {
          icon: <Sparkle className="h-7 w-7 text-blue-400" />,
          title: "Finalization",
          desc: "Polish the design and prepare for print.",
        },
        {
          icon: <Briefcase className="h-7 w-7 text-green-500" />,
          title: "Delivery",
          desc: "Provide print-ready files and digital previews.",
        },
      ],
      features: [
        {
          icon: <Star className="h-6 w-6 text-yellow-400" />,
          label: "Custom Layouts",
        },
        {
          icon: <Users className="h-6 w-6 text-blue-500" />,
          label: "Double-sided Design",
        },
        {
          icon: <Figma className="h-6 w-6 text-pink-500" />,
          label: "Editable Source Files",
        },
        {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
          label: "Print-Ready Exports",
        },
        {
          icon: <Sparkle className="h-6 w-6 text-purple-500" />,
          label: "Unique Brand Touch",
        },
        {
          icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
          label: "Multiple Concepts",
        },
      ],
      subServices: [
        "Minimalist Business Cards",
        "Corporate Business Cards",
        "Personal/Creative Cards",
        "Double-sided Cards",
        "QR Code Integration",
        "Spot UV & Special Finish Cards",
      ],
      deliverables: [
        "Print-ready PDF (CMYK)",
        "High-res PNG/JPG",
        "Editable Source File (AI/PSD)",
        "Mockup Previews",
        "Bleed & Trim Marks",
        "QR Code (if needed)",
      ],
      timeframe: "2-4 days",
      portfolios: [
        {
          id: "elegant-gold-accented-corporate-letterhead",
          title: "Elegant Gold-Accented Corporate Letterhead",
          tags: ["Letterhead", "Minimalist"],
          image: elegantgoldaccentedcorporateletterhead,
        },
        {
          id: "modern-minimalist-letterhead-design",
          title: "Modern Minimalist Letterhead Design",
          tags: ["Letterhead"],
          image: modernminimalist,
        },
      ],
    },

    "brand-guidelines-design": {
      icon: (
        <Globe className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
      ),
      coverText: "Next-Gen Web Design",
      title: "Website Design Impact",
      tagline: "Fast. Functional. Future-proof.",
      description:
        "Memorable websites made for people, performance and results. From landing pages to portals, I bring ideas to life — pixel by pixel.",
      process: [
        {
          icon: <Rocket className="h-7 w-7 text-yellow-500" />,
          title: "Strategy",
          desc: "Understand goals, audience, & success metrics.",
        },
        {
          icon: <BookOpen className="h-7 w-7 text-purple-500" />,
          title: "Structure",
          desc: "Map content & intuitive navigation.",
        },
        {
          icon: <Globe className="h-7 w-7 text-blue-400" />,
          title: "UI Design",
          desc: "Modern layouts & color story.",
        },
        {
          icon: <Sparkle className="h-7 w-7 text-green-500" />,
          title: "Prototype",
          desc: "Clickable demos for feedback.",
        },
        {
          icon: <Briefcase className="h-7 w-7 text-orange-500" />,
          title: "Launch",
          desc: "Optimized files & guides for devs.",
        },
      ],
      features: [
        {
          icon: <Star className="h-6 w-6 text-yellow-400" />,
          label: "Performance Optimized",
        },
        {
          icon: <Users className="h-6 w-6 text-indigo-500" />,
          label: "Collaborative Process",
        },
        {
          icon: <Figma className="h-6 w-6 text-pink-500" />,
          label: "Source Files Included",
        },
        {
          icon: <Rocket className="h-6 w-6 text-green-400" />,
          label: "SEO Ready",
        },
        {
          icon: <Sparkle className="h-6 w-6 text-lime-500" />,
          label: "Distinctive Visuals",
        },
        {
          icon: <BookOpen className="h-6 w-6 text-sky-500" />,
          label: "Friendly Docs",
        },
      ],
      subServices: ["E-commerce", "Brand Landing Pages", "Explorer Blogs"],
      deliverables: [
        "Mobile-First UI Kit",
        "Live Styleguide",
        "SEO Audit Report",
        "Component Gallery",
        "Feedback Prototype",
        "Source Files",
      ],
      timeframe: "2.5-5 weeks",
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
      ],
    },
  };

  const service = serviceId
    ? serviceData[serviceId as keyof typeof serviceData]
    : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f7f8fa] flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="py-24 px-8 text-center bg-white/60 rounded-xl border shadow max-w-md mx-auto">
            <h1 className="text-3xl font-extrabold text-red-500 mb-2">
              Service Not Found
            </h1>
            <p className="mb-8 text-gray-600">
              The service you requested doesn't exist or was moved.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-secondary)] transition"
            >
              Back to Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaff] flex flex-col">
      <Navbar />

      {/* Main content in same container as PortfolioSection */}
      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          {/* Info Card */}
          <div className="bg-white shadow-lg rounded-2xl mb-12 px-6 py-12 mx-auto">
            {/* Minimal Green Back to Portfolio Button INSIDE CARD, before coverText */}
            <div className="mb-4">
              <Link
                to="/services"
                className="inline-flex items-center font-semibold text-green-600 hover:text-green-700 transition-colors duration-200"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </Link>
            </div>
            <div className="flex items-center gap-4 mb-6">
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
                    <span>
                      <span className="font-medium">{step.title}:</span>{" "}
                      <span>{step.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            {/* Deliverables */}
            <div>
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
            <section className="pt-0 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center theme-color-primary">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.portfolios.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
                  >
                    {/* Image is now a link to the project details page by id */}
                    <Link to={`/projects/${item.id}`}>
                      <div className="h-80 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"></div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-[5px] font-medium mr-2 mb-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link to={`/projects/${item.id}`}>
                        <h3 className="text-xl font-bold text-black-soft group-hover:text-[var(--color-primary)] transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <Link
                        to={`/projects/${item.id}`}
                        className="view-portfolio-animate px-4 py-2 rounded-full font-medium flex items-center justify-center w-full mx-auto mt-4"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View Portfolio</span>
                      </Link>
                    </div>
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
