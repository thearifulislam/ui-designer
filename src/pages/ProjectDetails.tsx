import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  User,
  Tag,
  CheckCircle,
  Circle,
  Layers,
  ArrowUpRight,
  Eye,
} from "lucide-react";

// Website UI Design Images
import websiteui1 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI Design.jpg";
import websiteui2 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI-UX Design.jpg";


type ProjectType = {
  title: string;
  category: string;
  client: string;
  date: string;
  tags: string[];
  coverImage: string;
  description: string;
  galleryImages: string[];
  tools?: string[];
  projectUrl: string; // New field for project URL
};

const projectsData: Record<string, ProjectType> = {
  "template-tricore-creative-onepage-v1": {
    title: "Tricore Creative One Page Website Template",
    category: "Website UI",
    client: "Freelance",
    date: "April 2025",
    tags: ["UI", "Website UI"],
    coverImage: websiteui1,
    description:
      "The business card embraces a sleek, minimalist aesthetic with bold typography and balanced spacing. The header 'SCIENCE CAMERA' hints at a niche focus—perhaps blending design with scientific or technical visuals. The empty 'ADDTAGLINEHER' space invites a punchy slogan (e.g., 'Designing Clarity Through Pixels').",
    galleryImages: [websiteui1, websiteui2],
    tools: ["Figma", "Adobe Photoshop"],
    projectUrl: "https://www.behance.net/gallery/187436533/Creating-Intuitive-Website-Experiences"
  },

};

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const projectId = params.projectId;
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [projectId]);

  const project: ProjectType | undefined = projectId
    ? projectsData[projectId]
    : undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-lg text-green-800 tracking-widest font-mono">
              Loading...
            </span>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#264734] to-[#1a2f23]">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at center, #ffffff08 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />
          </div>

          {/* Animated Background Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-gradient-to-r from-green-400/10 to-emerald-400/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-[20%] w-72 h-72 rounded-full bg-gradient-to-r from-green-300/10 to-emerald-300/10 blur-3xl"
          />

          <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl w-full"
            >
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-lg opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="relative w-full h-full rounded-full bg-[#264734] border-2 border-green-400/20 flex items-center justify-center"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 0.9, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Circle className="w-12 h-12 text-green-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Project Not Found
              </h1>

              <p className="text-lg sm:text-xl text-green-100/80 mb-10">
                Sorry, we couldn't find the project you're looking for. It might have been moved or doesn't exist.
              </p>

              <Link to="/projects" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-[#264734] rounded-xl font-semibold shadow-lg shadow-green-500/25 transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>Back to Projects</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Back to Projects Button */}
          <div className="mb-16">
            <Link
              to="/projects"
              className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="text-base font-medium">Back to Projects</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Project Info */}
            <div className="flex flex-col gap-6 sticky top-24">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Project Meta Info */}
              <div className="flex flex-wrap gap-6 text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-300" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-green-300" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-green-300" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-700 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-green-600 transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  Visit Project
                </a>
              </div>
            </div>

            {/* Right: Cover Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                {/* Project Details Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Project Details
                  </h3>

                  {/* Tools */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-green-500" />
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-green-500" />
                        Project Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Gallery */}
            <div className="lg:col-span-9">
              <div className="space-y-12">
                <h2 className="text-2xl font-bold text-gray-900">
                  Project Gallery
                </h2>

                {/* Gallery Grid - Modified for better handling of long images */}
                <div className="space-y-16">
                  {project.galleryImages && project.galleryImages.length > 0 ? (
                    project.galleryImages.map((img, idx) => {
                      // Check if it's a UI design image (you might want to add a flag in your data structure)
                      const isUIDesign = project.category === "Website UI";

                      return (
                        <div
                          key={idx}
                          className={`group relative bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 ${isUIDesign ? 'max-w-[1400px] mx-auto' : ''
                            }`}
                        >
                          {/* Image Wrapper */}
                          <div className={`relative ${isUIDesign ? 'cursor-zoom-in' : ''
                            }`}>
                            <img
                              src={img}
                              alt={`${project.title} design showcase`}
                              className={`w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ${isUIDesign ? 'min-h-[200px]' : ''
                                }`}
                              loading="lazy"
                              onClick={() => {
                                if (isUIDesign) {
                                  // Open image in new tab for full view
                                  window.open(img, '_blank');
                                }
                              }}
                            />
                            {/* Hover Overlay - only gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-gray-50 rounded-xl text-gray-500">
                      No gallery images available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
