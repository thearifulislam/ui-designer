import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ArrowLeft, ArrowRight, User, Eye, Tag } from "lucide-react";

// logo design
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

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [projectId]);

  // Project data (in a real app, this would come from an API)
  const projectsData = {
    "momentum-clothing-brand-for-men": {
      title: "Momentum Menswear – <br />Modern & Stylish Clothing for Men",
      category: "Logo Design",
      client: "Freelance",
      date: "April 2025",
      tags: ["Logo Design", "Branding", "Abastrack Logo"],
      coverImage: momentum,
      description:
        "The Momentum Menswear logo is a bold, geometric representation of modern masculinity and forward movement. Featuring a stylized 'M' constructed with clean, angular lines, the mark symbolizes strength, stability, and confidence—core values of the brand. Its minimal yet powerful design captures the essence of premium men’s fashion, while the dark tones and metallic gradients add a touch of sophistication and luxury. Versatile across digital and physical applications, the logo delivers a timeless, impactful identity that reflects the brand’s mission to lead with style and purpose.",
      challenge:
        "The main challenge was to create a logo that captures the essence of men’s fashion—something strong, confident, and stylish. The client needed a symbol that reflects masculinity without being too aggressive, and modern without losing sophistication. Achieving the right balance between boldness and minimalism was the key design obstacle.",
      solution:
        "To solve this, I designed a stylized 'M' using geometric shapes and clean lines.The vertical bars and angled cuts create a sense of structure and strength, symbolizing momentum and masculinity.The symmetry in the shape brings a premium and balanced look, aligning with the high-end nature of the brand. A sleek, reflective silver finish on a dark background gives the logo a luxurious, modern appeal.This approach allowed the logo to feel professional, impactful, and versatile across different branding materials.",
      process: [
        "Brand Discovery",
        "Strategic Research & Moodboarding",
        "Conceptual Exploration",
        "Digital Construction & Refinement",
        "Final Touches & Presentation",
      ],
      results:
        "The new dashboard increased user engagement by 45% and reduced support tickets related to interface confusion by 60%. The client reported higher customer satisfaction scores and increased usage of advanced financial planning features.",
      galleryImages: [
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
      ],
      relatedProjects: ["mobile-app", "analytics-dashboard", "crm-design"],
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
        "A cutting-edge mobile application designed for TechStart Inc. to streamline their customer service processes and provide a seamless user experience for their growing user base.",
      challenge:
        "TechStart needed an app that would simplify their complex customer service workflow while providing a modern, intuitive interface for users who range from tech-savvy young adults to older individuals with limited technological experience.",
      solution:
        "I created a clean, minimalist design with clear navigation paths and accessibility features. The app incorporates subtle animations to guide users through processes and uses a consistent visual language to create familiarity.",
      process: [
        "User Persona Development",
        "Journey Mapping",
        "Wireframing & Information Architecture",
        "UI Design & Prototyping",
        "Usability Testing & Refinement",
      ],
      results:
        "The redesigned app saw a 35% increase in daily active users and a 28% decrease in customer service calls. App Store ratings improved from 3.6 to 4.8 stars, with users specifically praising the intuitive interface and ease of use.",
      galleryImages: [
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2400",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2400",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2400",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2400",
      ],
      relatedProjects: ["health-app", "food-delivery", "education-app"],
    },
    // Add more projects here
  };

  // Get current project data
  const project = projectId
    ? projectsData[projectId as keyof typeof projectsData]
    : undefined;

  // Related projects data
  const getRelatedProjects = () => {
    if (!project?.relatedProjects) return [];

    return project.relatedProjects.map((id) => {
      const relatedProject = projectsData[id as keyof typeof projectsData];
      return {
        id,
        title: relatedProject?.title || "Project",
        image: relatedProject?.coverImage || "",
        tags: relatedProject?.tags || [],
      };
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8F8F8">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center theme-bg-primary text-white px-6 py-3 rounded-full font-medium"
          >
            <ArrowLeft className="ml-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 pt-40 pb-20 flex justify-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded w-80 mb-10"></div>
            <div className="h-96 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FBF8]]">
      <Navbar />

      {/* Project Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Back to Portfolio Button */}
          <div className="w-full flex mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center font-medium rounded-full px-5 py-2 transition-all duration-200 text-base bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between mb-6">
            <span className="rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium">
              {project.category}
            </span>
            <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{project.date}</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {typeof project.title === "string" &&
            project.title.includes("<br") ? (
              <span dangerouslySetInnerHTML={{ __html: project.title }} />
            ) : (
              project.title
            )}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-muted-foreground mb-8">
            <User className="h-4 w-4 mr-2" />
            <span>Client: {project.client}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={project.coverImage}
              alt={
                typeof project.title === "string"
                  ? project.title.replace(/<br\s*\/?>/gi, " ")
                  : project.title
              }
              className="w-full h-[700px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-6 theme-color-primary">
                The Challenge
              </h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6 theme-color-primary">
                The Solution
              </h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {project.process.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center relative"
              >
                <div className="theme-bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-medium">{step}</h3>
                {/* Connector line (except for last item) */}
                {index < project.process.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-2 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Project Gallery
          </h2>
          <div className="grid grid-row-1 md:grid-row-2 gap-8">
            {project.galleryImages.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`${
                    typeof project.title === "string"
                      ? project.title.replace(/<br\s*\/?>/gi, " ")
                      : project.title
                  } - Image ${index + 1}`}
                  className="w-full h-fit object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Results</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            {project.results}
          </p>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Related Projects
          </h2>
          <div className="related-slider">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getRelatedProjects().map((relatedProject, index) => (
                <Link
                  to={`/projects/${relatedProject.id}`}
                  key={index}
                  className="group"
                >
                  <div className="portfolio-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={relatedProject.image}
                        alt={
                          typeof relatedProject.title === "string"
                            ? relatedProject.title.replace(/<br\s*\/?>/gi, " ")
                            : relatedProject.title
                        }
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="view-button theme-bg-secondary hover:theme-bg-primary text-white px-4 py-2 rounded-full font-medium flex items-center justify-center w-fit mx-auto mb-4">
                          <Eye className="mr-2 h-4 w-4" />
                          View Project
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedProject.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-2 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-black-soft group-hover:text-[var(--color-secondary)] transition-colors">
                        {typeof relatedProject.title === "string" &&
                        relatedProject.title.includes("<br") ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: relatedProject.title,
                            }}
                          />
                        ) : (
                          relatedProject.title
                        )}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have a Similar Project in Mind?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Let's collaborate to create an amazing digital experience that meets
            your business goals and delights your users.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center theme-bg-secondary text-white px-6 py-3 rounded-full font-medium hover:theme-bg-primary transition-colors duration-300"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
