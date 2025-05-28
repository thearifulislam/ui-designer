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
  RefreshCw,
  Search,
  XCircle,
  AlertCircle,
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
  "website-ui": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Website UI Design",
    title: "Modern Website UI Design",
    tagline: "Creating beautiful, intuitive, and engaging user interfaces that convert.",
    description:
      "I specialize in crafting modern, user-friendly website interfaces that not only look stunning but also drive results. From landing pages to complex web applications, I create intuitive designs that enhance user experience and align with your brand identity. My approach combines aesthetic excellence with functional design principles to deliver interfaces that users love to interact with.",
    process: [
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Discovery & Research",
        desc: "Understanding your brand, target audience, and project goals through detailed consultation.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Wireframing & Planning",
        desc: "Creating detailed wireframes and user flow diagrams to establish the foundation.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "UI Design & Prototyping",
        desc: "Developing high-fidelity designs with interactive prototypes for user testing.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Design Refinement",
        desc: "Iterating on designs based on feedback and ensuring pixel-perfect execution.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Handoff & Documentation",
        desc: "Providing comprehensive design assets and documentation for development.",
      },
    ],
    features: [
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Responsive Design",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "User-Centered Approach",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Modern UI Components",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Interactive Prototypes",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Design System Creation",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Accessibility Focus",
      },
    ],
    subServices: [
      "Landing Page Design",
      "Web Application UI",
      "E-commerce Interfaces",
      "Dashboard Design",
      "Mobile-First Websites",
      "Admin Panel Design",
    ],
    deliverables: [
      "High-Fidelity UI Designs",
      "Interactive Prototypes",
      "Responsive Design Files",
      "Design System Documentation",
      "Component Library",
      "User Flow Diagrams",
    ],
    timeframe: "2-4 weeks",
    portfolios: [
      {
        id: "modern-dashboard-ui",
        title: "Modern Dashboard UI Design",
        tags: ["Dashboard", "UI Design"],
        image: momentum,
      },
      {
        id: "ecommerce-website-ui",
        title: "E-commerce Website Interface",
        tags: ["E-commerce", "UI Design"],
        image: blooddonation,
      },
      {
        id: "landing-page-design",
        title: "Product Landing Page",
        tags: ["Landing Page", "UI Design"],
        image: uniflora,
      },
      {
        id: "admin-panel-ui",
        title: "Admin Panel Interface",
        tags: ["Admin Panel", "UI Design"],
        image: meloplay,
      },
    ],
  },
  // ...other services (not shown for brevity)

  "landing-page-ui": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Landing Page UI Design",
    title: "Business Card Design",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
           icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Discovery",
        desc: "Understanding your brand identity, target audience, and specific requirements for your business card.",
      },
      {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Research & Concept",
        desc: "Analyzing industry standards and creating unique design concepts that align with your brand.",
      },
      {
           icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Design & Refinement",
        desc: "Creating and refining card layouts, typography, and visual elements for maximum impact.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Presenting multiple design options with different styles, colors, and layouts for your selection.",
      },
      {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Delivery",
        desc: "Providing print-ready files and specifications for professional printing of your business cards.",
      },
    ],
    features: [
      {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Original Concepts",
      },
      {
             icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Collaborative Process",
      },
      {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
           icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Brand Guidelines",
      },
      {
             icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Standard & Premium Business Card Designs",
      "Tailored Layouts to Match Logo Types & Brand Identity",
    ],
    deliverables: ["Primary & Secondary Business Card Design (Front & Back)", "Color & Black/White Variations", "SVG/PNG/PDF/EPS Files", "Mini Brand Guidelines Sheet", "Favicon & Social Media Kit", "Mockups for Real-World Use",],
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
    ],
  },

  "dashboard-ui": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Dashboard UI Design",
    title: "Professional Letterhead Design",
    tagline: "Branded. Polished. Print-ready business essentials.",
    description:
      "I design clean, professional, and on-brand letterheads that reinforce your visual identity in every piece of correspondence. Each design is tailored to align with your brand aesthetics, ensuring consistency across all communications.",
    process: [
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Custom Layouts",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Tailored to Brand Identity",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Editable Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Quick Turnaround",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Print & Digital Ready",
      },
      {
          icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Usage Guide Included",
      },
    ],
    subServices: [
      "Corporate Letterheads",
      "Minimal Letterheads",
      "Modern & Creative Styles",
      "Personal Letterheads",
      "Brand Identity-Aligned Designs",
      "Print-Ready Templates",
    ],
    deliverables: [
      "Primary & Alternative Layouts",
      "Black/White & Color Versions",
      "SVG, PNG, PDF, DOCX Files",
      "Editable Source File (AI/PSD)",
      "Usage & Print Instructions",
      "Mockups for Presentation",
    ],
    timeframe: "3-5 days",
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





};

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = serviceId
    ? serviceData[serviceId as keyof typeof serviceData]
    : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 pt-32 pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-block p-4 bg-[var(--color-secondary)]/10 rounded-full mb-6">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 border-4 border-t-[var(--color-secondary)] border-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-4 border-4 border-t-[var(--color-secondary)] border-transparent rounded-full animate-spin-reverse"></div>
                  <div className="absolute inset-8 border-4 border-t-[var(--color-secondary)] border-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
                  Service Not Found
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in-delay">
                  We couldn't find the service you're looking for. Please try refreshing the page or return to our services.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-white rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                <RefreshCw className="h-5 w-5 mr-2 group-hover:animate-spin" />
                Refresh Page
              </button>
              
              <Link
                to="/services"
                className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Services
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full bg-white mt-12 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Available Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {Object.keys(serviceData).map((serviceKey) => (
                <Link
                  key={serviceKey}
                  to={`/services/${serviceKey}`}
                  className="p-4 bg-[#f9f9f9] rounded-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--color-secondary)]"
                >
                  {serviceData[serviceKey].coverText}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Main Service Details Page (unchanged)
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Background Pattern */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          {/* Service Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block p-4 bg-[var(--color-secondary)]/10 rounded-2xl mb-6">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {service.tagline}
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            {/* Description Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features and Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feature.label}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline, Services, and Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Timeline */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[var(--color-secondary)]" />
                  <h3 className="font-semibold text-lg">Timeline</h3>
                </div>
                <p className="text-gray-600">{service.timeframe}</p>
              </div>

              {/* Services */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-4">Services Include</h3>
                <div className="space-y-2">
                  {service.subServices.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-4">Deliverables</h3>
                <div className="space-y-2">
                  {service.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {service.portfolios && service.portfolios.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.portfolios.map((item) => (
                  <Link 
                    key={item.id} 
                    to={`/projects/${item.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                      <div className="h-[400px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-sm bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-3 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[var(--color-secondary)] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetails;

<style>
{`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes spin-reverse {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  
  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translateY(10px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-spin {
    animation: spin 1.5s linear infinite;
  }
  
  .animate-spin-reverse {
    animation: spin-reverse 1s linear infinite;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-fade-in-delay {
    animation: fadeIn 0.5s ease-out 0.3s forwards;
    opacity: 0;
  }
`}
</style>

