
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  ArrowLeft,
  User,
  Tag,
  CheckCircle,
  Circle,
} from "lucide-react";

// logo design images (add more as needed)
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import momentum1 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/2.jpg";
import momentum2 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/3.jpg";
import momentum3 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/4.jpg";
import momentum4 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/5.jpg";
import momentum5 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/6.jpg";
import momentum6 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/7.jpg";
import momentum7 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/8.jpg";
import momentum8 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/9.jpg";
import momentum9 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/10.jpg";
import momentum10 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/11.jpg";
import momentum11 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/12.jpg";
import momentum12 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/13.jpg";
import momentum13 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/14.jpg";
import momentum14 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/15.jpg";
import momentum15 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/16.jpg";
import momentum16 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/17.jpg";
import momentum17 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/18.jpg";
import momentum18 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/19.jpg";
import momentum19 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/20.jpg";
import momentum20 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/21.jpg";
import momentum21 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/22.jpg";

const allImgs = [
  momentum,
  momentum1,
  momentum2,
  momentum3,
  momentum4,
  momentum5,
  momentum6,
  momentum7,
  momentum8,
  momentum9,
  momentum10,
  momentum11,
  momentum12,
  momentum13,
  momentum14,
  momentum15,
  momentum16,
  momentum17,
  momentum18,
  momentum19,
  momentum20,
  momentum21,
];

type ProjectType = {
  title: string;
  category: string;
  client: string;
  date: string;
  tags: string[];
  coverImage: string;
  description: string;
  challenge: string;
  solution: string;
  process: string[];
  results: string;
  galleryImages: string[];
  relatedProjects: string[];
  tools?: string[];
};

const projectsData: Record<string, ProjectType> = {
  "momentum-clothing-brand-for-men": {
    title: "Momentum Menswear",
    category: "Logo Design",
    client: "Freelance",
    date: "April 2025",
    tags: ["Logo Design", "Branding", "Abastrack Logo"],
    coverImage: momentum,
    description:
      "Momentum Menswear's logo is a bold, geometric representation of modern masculinity and motion. The stylized 'M' is strong, angular, and minimal; premium black and silver create a luxury style, enhancing brand confidence and recognition.",
    challenge:
      "How can a logo express confidence and style without being aggressive? The main challenge was creating a brand symbol that communicates premium masculinity, bold yet restrained.",
    solution:
      "A symmetric, reflective, ‘moving’ M with geometrics and metallic effects. The result balances luxury appeal and bold modernism, and feels premium everywhere.",
    process: [
      "Brand Discovery",
      "Research & Strategy",
      "Concept Ideation",
      "Digital Creation",
      "Finalization & Guide",
    ],
    results:
      "User engagement grew by 45%, support tickets dropped by 60%, and clients reported higher NPS and stickier brand value.",
    galleryImages: allImgs,
    relatedProjects: ["mobile-app"],
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
  },
  "mobile-app": {
    title: "Mobile App Design",
    category: "App Design",
    client: "TechStart Inc.",
    date: "August 2023",
    tags: ["Mobile", "UI/UX", "iOS"],
    coverImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2400",
    description:
      "A mobile app for TechStart – simplifying complex workflows for every user, not just techies. Intuitive, elegant, and accessible.",
    challenge:
      "How to turn a complex process into a delightful, fast-flowing user experience?",
    solution:
      "Minimalist UI, clear flows, animation cues, accessibility built in.",
    process: [
      "Personas & Flows",
      "Wireframes",
      "UI/UX Design",
      "Testing",
      "Delivery",
    ],
    results:
      "Daily active users up by 35%. App support calls down 28%. Store ranking now 4.8 stars.",
    galleryImages: [
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2400",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2400",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2400",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2400",
    ],
    relatedProjects: [],
    tools: ["Figma", "Sketch", "Zeplin"],
  },
  // ...more projects if needed
};

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const projectId = params.projectId;

  const [isLoading, setIsLoading] = useState(true);

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
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-fuchsia-50">
          <span className="text-lg text-black/60 tracking-widest font-mono animate-pulse">
            Loading...
          </span>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center bg-neutral-100">
          <h1 className="text-4xl font-black text-red-600 mb-3">
            404: Project Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, this project doesn't exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-100/80 via-pink-50 to-fuchsia-50">
      <Navbar />
      {/* Hero section */}
      <section
        className="relative pt-10 sm:pt-14 pb-2 md:pb-10"
        style={{
          background:
            "linear-gradient(120deg, var(--color-primary, #6c47ff) 0%, var(--color-secondary, #ffe03a) 100%)",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row gap-8 items-center md:items-end">
          {/* Details */}
          <div className="flex-1 min-w-0 text-white py-8 px-0 md:py-16 md:pr-12">
            <Link
              to="/projects"
              className="text-xs font-bold uppercase tracking-widest mb-5 inline-flex items-center gap-2 hover:text-yellow-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-2 drop-shadow-[0_4px_16px_rgba(20,0,40,0.2)]">
              {project.title}
            </h1>
            <div className="flex gap-2 flex-wrap mb-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/20 border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow mr-1"
                >
                  <Tag className="h-3 w-3 inline mb-1 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6 text-yellow-100 font-semibold mt-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{project.client}</span>
              </div>
            </div>
            <p className="mt-7 mb-3 text-white/90 font-normal text-lg max-w-xl">
              {project.description}
            </p>
          </div>
          {/* Cover image */}
          <div className="flex justify-center">
            <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[520px] xl:w-[650px] 2xl:w-[850px] rounded-3xl shadow-2xl border-4 border-white/40 overflow-hidden mb-6 md:mb-0 mx-auto">
              <img
                src={project.coverImage}
                alt="Project Cover"
                className="w-full object-cover h-[400px] md:h-[350px] xl:h-[400px] brightness-95"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content/Challenge/Solution/Process */}
      <main className="flex-1 w-full">
        <section className="container mx-auto px-2 md:px-6 pt-12 pb-16">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
            {/* Left card for summary/challenge/solution/process/results */}
            <div className="xl:col-span-5">
              {/* Big card with sticky behavior */}
              <div
                className="bg-white/95 rounded-3xl shadow-2xl px-8 py-9 border border-indigo-100 mb-8 relative z-10"
                style={{
                  position: "sticky",
                  top: "100px",
                  alignSelf: "flex-start",
                }}
              >
                <h2 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">
                  Project Summary
                </h2>
                <div className="mb-6 text-gray-700">{project.description}</div>
                {/* Tools List */}
                {project.tools && project.tools.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-indigo-700 mb-2 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Design Tools Used
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.tools.map((tool: string, idx: number) => (
                        <li
                          key={idx}
                          className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Right: gallery images */}
            <div className="xl:col-span-7 flex flex-col gap-8 justify-center px-0 md:px-2 mt-6 xl:mt-0">
              <h2 className="text-2xl font-bold mb-2 text-indigo-700">
                Visual Gallery
              </h2>
              {project.galleryImages && project.galleryImages.length > 0 ? (
                project.galleryImages.map((img: string, idx: number) => (
                  <figure
                    key={idx}
                    className="w-full bg-white rounded-2xl border border-indigo-100 overflow-hidden hover:shadow-2xl transition duration-200"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: 520, margin: "0 auto" }}
                      loading="lazy"
                    />
                  </figure>
                ))
              ) : (
                <div className="text-center text-gray-400 py-16">
                  No gallery images available.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
