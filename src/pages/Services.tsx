import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layout,
  Smartphone,
  Globe,
  Brush,
  Palette,
  PenTool,
  Type,
  PackageOpen,
  ImagePlus,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "logo-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-2xl">
          🎨
        </span>
      ),
      title: "Logo Design",
      description:
        "Creating unique and memorable logos that stand out in a crowded marketplace.",
      features: [
        "Custom logo design",
        "Brand identity",
        "Versatile formats",
        "Timeless aesthetics",
      ],
      subServices: ["Minimalist Logos", "Vintage Logos", "Modern Logos"],
    },
    {
      id: "business-card-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center text-2xl">
          📇
        </span>
      ),
      title: "Business Card Design",
      description:
        "Designing impactful business cards that leave a lasting impression.",
      features: [
        "Unique layouts",
        "High-quality printing",
        "Brand consistency",
        "Creative finishes",
      ],
      subServices: [
        "Standard Business Cards",
        "Folded Business Cards",
        "Luxury Business Cards",
      ],
    },
    {
      id: "letterhead-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-2xl">
          🖨️
        </span>
      ),
      title: "Letterhead Design",
      description:
        "Creating professional letterheads that enhance your brand's credibility.",
      features: [
        "Custom typography",
        "Brand colors",
        "High-resolution graphics",
        "Print-ready files",
      ],
      subServices: [
        "Corporate Letterheads",
        "Personalized Letterheads",
        "Stationery Sets",
      ],
    },
    {
      id: "brand-guidelines-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center text-2xl">
          ✏️
        </span>
      ),
      title: "Brand Guidelines Design",
      description:
        "Developing comprehensive brand guidelines to ensure consistency across all platforms.",
      features: ["Consistent branding", "Visual identity", "Color schemes"],
      subServices: ["Brand Identity", "Visual Identity", "Typography"],
    },
    {
      id: "social-media-post-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center text-2xl">
          ✔
        </span>
      ),
      title: "Social Media Post Design",
      description:
        "Crafting visually appealing and shareable social media posts.",
      features: ["Engaging visuals", "Clear messaging", "Engaging captions"],
      subServices: ["Instagram Posts", "Facebook Posts", "Twitter Posts"],
    },
    {
      id: "banner-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          ✍
        </span>
      ),
      title: "Banner Design",
      description:
        "Creating eye-catching banners that grab attention and drive traffic.",
      features: ["High-impact visuals", "Dynamic content", "Responsive design"],
      subServices: ["Banner Ads", "Social Media Banners", "Website Banners"],
    },
    {
      id: "web-banner-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          👏
        </span>
      ),
      title: "Web Banner Design",
      description:
        "Designing banners for websites that attract visitors and drive conversions.",
      features: ["Responsive design", "High-quality visuals", "SEO-friendly"],
      subServices: [
        "Website Banners",
        "Email Campaigns",
        "Social Media Banners",
      ],
    },
    {
      id: "email-signature-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          📋
        </span>
      ),
      title: "Email Signature Design",
      description:
        "Creating professional email signatures that enhance your brand's image.",
      features: [
        "Professional appearance",
        "Consistent branding",
        "Responsive design",
      ],
      subServices: ["Email Signatures", "Email Templates", "Email Campaigns"],
    },
    {
      id: "flyer-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          ✍
        </span>
      ),
      title: "Brochures, Posters, and Flyers Design",
      description:
        "Creating visually appealing brochures, posters, and flyers that promote your products or services.",
      features: ["Professional design", "Brand identity", "Visual appeal"],
      subServices: ["Brochures", "Posters", "Flyers"],
    },
    {
      id: "billboards-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          🎨
        </span>
      ),
      title: "Billboards Design",
      description:
        "Creating eye-catching billboards that grab attention and drive traffic.",

      features: ["High-impact visuals", "Dynamic content", "Responsive design"],
      subServices: ["Billboards", "Social Media Banners", "Website Banners"],
    },
    {
      id: "stationery-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          📇
        </span>
      ),
      title: "Stationery Design",
      description:
        "Creating stationery items like envelopes, labels, and business cards that complement your brand.",
      features: ["Professional design", "Brand identity", "Versatile formats"],
      subServices: ["Stationery", "Labels", "Business Cards"],
    },
    {
      id: "image-editing",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          🖨️
        </span>
      ),
      title: "Image Editing",
      description:
        "Editing and enhancing images to create professional and visually appealing designs.",
      features: ["Image editing", "Retouching", "Color correction"],
      subServices: ["Image Editing", "Retouching", "Color Correction"],
    },
    {
      id: "resume-design",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          ✍
        </span>
      ),
      title: "Resume Design",
      description:
        "Designing professional and visually appealing resumes that showcase your skills and experience.",
      features: ["Resume design", "Professional layout", "Visual appeal"],
      subServices: ["Resume Design", "Cover Letter", "Objective Statement"],
    },
    {
      id: "background-removal",
      icon: (
        <span className="inline-block w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl">
          ✏️
        </span>
      ),
      title: "Background Removal",
      description:
        "Removing backgrounds from images to create clean and professional designs.",
      features: ["Background removal", "Image editing", "Color correction"],
      subServices: ["Background Removal", "Image Editing", "Color Correction"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="theme-color-secondary">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            With over 18 years of experience in design, I offer a comprehensive
            range of services to help brands create meaningful digital
            experiences.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-250 border border-gray-100 card-hover service-card flex flex-col items-start hover:-translate-y-2"
              >
                <div className="mb-4">{service.icon}</div>
                <Link to={`/services/${service.id}`} className="block mb-2">
                  <h3 className="text-xl font-bold mb-1 hover:theme-color-secondary transition-colors">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-black-soft/70 mb-4">{service.description}</p>
                <div className="mb-5 w-full">
                  <h4 className="text-xs font-semibold mb-1 text-black-soft/50">
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 text-[13px] sm:text-xs font-medium"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-5 w-full">
                  {service.subServices.map((subService, idx) => (
                    <span
                      key={idx}
                      className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-[5px] text-xs m-1"
                    >
                      {subService}
                    </span>
                  ))}
                </div>
                <Link to={`/services/${service.id}`} className="mt-auto block">
                  <button className="theme-color-primary hover:text-[var(--color-secondary)] flex items-center font-medium transition-transform duration-200 group hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your{" "}
            <span className="theme-color-secondary">Project</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's collaborate to create something amazing together. Contact me
            today to discuss your next design project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center theme-bg-primary text-white px-6 py-3 rounded-full font-medium hover:theme-bg-secondary transition-colors duration-300"
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

export default Services;
