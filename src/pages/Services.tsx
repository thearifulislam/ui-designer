import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const location = useLocation();

  // Animation variants with increased duration and delay
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

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
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-[#f9f9f9]" key={location.pathname}>
        <Navbar />
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ margin: "-100px", once: true }}
          variants={fadeInUp}
          className="pt-32 pb-16 bg-white"
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="container mx-auto px-4 md:px-8 text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              My <span className="theme-color-secondary">Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              With over 18 years of experience in design, I offer a comprehensive
              range of services to help brands create meaningful digital
              experiences.
            </motion.p>
          </motion.div>
        </motion.section>

        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ margin: "-100px", once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px", once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardAnimation}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-250 border border-gray-100 card-hover service-card flex flex-col items-start hover:-translate-y-2"
                >
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (0.1 * index) }}
                    className="mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <Link to={`/services/${service.id}`} className="block mb-2">
                    <h3 className="text-xl font-bold mb-1 hover:theme-color-secondary transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-black-soft/70 mb-4">{service.description}</p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ delay: 0.5 + (0.1 * index), duration: 0.8 }}
                    className="mb-5 w-full"
                  >
                    <h4 className="text-xs font-semibold mb-1 text-black-soft/50">
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ margin: "-100px", once: true }}
                          transition={{ delay: 0.7 + (0.15 * idx), duration: 0.6 }}
                          className="flex items-center text-gray-700 text-[13px] sm:text-xs font-medium"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ delay: 0.9 + (0.1 * index), duration: 0.8 }}
                    className="flex flex-wrap gap-2 mb-5 w-full"
                  >
                    {service.subServices.map((subService, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "-100px", once: true }}
                        transition={{ delay: 1.1 + (0.15 * idx), duration: 0.6 }}
                        className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-[5px] text-xs m-1"
                      >
                        {subService}
                      </motion.span>
                    ))}
                  </motion.div>
                  <Link to={`/services/${service.id}`} className="mt-auto block">
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="theme-color-primary hover:text-[var(--color-secondary)] flex items-center font-medium transition-transform duration-200 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ margin: "-100px", once: true }}
          variants={fadeInUp}
          className="py-16 bg-white"
        >
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="container mx-auto px-4 md:px-8 text-center"
          >
            <motion.h2 
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Start Your{" "}
              <span className="theme-color-secondary">Project</span>?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Let's collaborate to create something amazing together. Contact me
              today to discuss your next design project.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center theme-bg-primary text-white px-6 py-3 rounded-full font-medium hover:theme-bg-secondary transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Services;
