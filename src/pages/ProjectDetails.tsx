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
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";
import { database } from "../firebase/config";
import { ref, set, get, update, onValue } from "firebase/database";

// Website UI Design Images
import websiteui1 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI Design.jpg";
import websiteui2 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI-UX Design.jpg";

import websiteui3 from "../assets/portfolios/ui/website ui/landing-page/2/1.jpg"
import websiteui4 from "../assets/portfolios/ui/website ui/landing-page/2/2.jpg"
import websiteui5 from "../assets/portfolios/ui/website ui/landing-page/2/3.jpg"

// for dashboard ui

import dashboardui1 from "../assets/portfolios/dashboard/1/1.jpg"
import dashboardui2 from "../assets/portfolios/dashboard/1/2.png"
import dashboardui3 from "../assets/portfolios/dashboard/1/3.jpg"
import dashboardui4 from "../assets/portfolios/dashboard/1/4.jpg"
import dashboardui5 from "../assets/portfolios/dashboard/1/5.jpg"
import dashboardui6 from "../assets/portfolios/dashboard/1/6.jpg"
import dashboardui7 from "../assets/portfolios/dashboard/1/7.jpg"
import dashboardui8 from "../assets/portfolios/dashboard/1/8.jpg"




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

  "music-discovery-hub-v1": {
    title: "Music Discovery Hub: A Sleek UI for Seamless Browsing and Playlist Creation",
    category: "Website UI",
    client: "Freelance",
    date: "April 2025",
    tags: ["UI", "Website UI"],
    coverImage: websiteui3,
    description:
      "A sleek and intuitive music discovery hub that allows users to browse and create playlists seamlessly. The design features a clean, modern interface with a focus on user-friendly navigation and personalized content.",
    galleryImages: [websiteui3, websiteui4, websiteui5],
    tools: ["Figma", "Adobe Photoshop"],
    projectUrl: "https://www.behance.net/gallery/197800781/Landing-Page-UI-Design"
  },

  // for dashboard ui

  "template-theprotect-task-dashboard-v1": {
    title: "TheProtect – Smart Task Management Dashboard UI",
    category: "Dashboard UI",
    client: "Freelance",
    date: "April 2025",
    tags: ["UI", "Dashboard UI"],
    coverImage:
      dashboardui1,

    description:
      "TheProtect is a smart task management dashboard that helps you manage your tasks and projects efficiently. It is a simple and easy to use dashboard that is designed to help you manage your tasks and projects efficiently.",
    galleryImages: [dashboardui1,
      dashboardui2,
      dashboardui3,
      dashboardui4,
      dashboardui5,
      dashboardui6,
      dashboardui7,
      dashboardui8,],
    tools: ["Figma", "Adobe Photoshop"],
    projectUrl: "https://www.behance.net/gallery/172851687/Task-Management-Dashboard-UI-Design"
  },

};

interface Comment {
  id: string;
  name: string;
  comment: string;
  timestamp: string;
}

interface ProjectStats {
  viewCount: number;
  likeCount: number;
  likedBy: string[];
  comments: Comment[];
}

const API_URL = 'https://ariful-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app';

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const projectId = params.projectId;
  const [isLoading, setIsLoading] = useState(true);
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });
  const [userIdentifier, setUserIdentifier] = useState('');

  // Get project data from projectsData
  const project: ProjectType | undefined = projectId ? projectsData[projectId] : undefined;

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        // Get user identifier
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const identifier = `${data.ip}-${navigator.userAgent}`;
        setUserIdentifier(identifier);

        // Check if project exists
        if (!project) {
          setIsLoading(false);
          return;
        }

        // Get project stats from Firebase
        const projectRef = `${API_URL}/projects/${projectId}.json`;
        const statsResponse = await fetch(projectRef);
        const statsData = await statsResponse.json();

        if (statsData) {
          setViewCount(statsData.viewCount || 0);
          setLikeCount(statsData.likeCount || 0);
          setComments(statsData.comments || []);
          setIsLiked(statsData.likedBy?.includes(identifier) || false);
        } else {
          // Initialize project stats if they don't exist
          const initialStats = {
            viewCount: 0,
            likeCount: 0,
            likedBy: [],
            comments: [],
            viewedBy: []
          };
          await fetch(projectRef, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(initialStats)
          });
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [project, projectId]);

  // Handle view count
  useEffect(() => {
    const incrementViewCount = async () => {
      if (projectId && userIdentifier && !isLoading) {
        const sessionKey = `viewed_${projectId}`;
        const hasViewed = sessionStorage.getItem(sessionKey);

        if (!hasViewed) {
          try {
            const projectRef = `${API_URL}/projects/${projectId}.json`;
            const response = await fetch(projectRef);
            const data = await response.json() || { viewCount: 0, viewedBy: [] };

            if (!data.viewedBy?.includes(userIdentifier)) {
              const newCount = (data.viewCount || 0) + 1;
              const newViewedBy = [...(data.viewedBy || []), userIdentifier];

              await fetch(projectRef, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  viewCount: newCount,
                  viewedBy: newViewedBy
                })
              });

              setViewCount(newCount);
              sessionStorage.setItem(sessionKey, 'true');
            }
          } catch (error) {
            console.error('Error updating view count:', error);
          }
        }
      }
    };

    incrementViewCount();
  }, [projectId, userIdentifier, isLoading]);

  // Handle like
  const handleLike = async () => {
    if (!isLiked && userIdentifier && projectId) {
      try {
        const projectRef = `${API_URL}/projects/${projectId}.json`;
        const response = await fetch(projectRef);
        const data = await response.json() || { likeCount: 0, likedBy: [] };

        if (!data.likedBy?.includes(userIdentifier)) {
          const newLikeCount = (data.likeCount || 0) + 1;
          const newLikedBy = [...(data.likedBy || []), userIdentifier];

          const updateResponse = await fetch(projectRef, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              likeCount: newLikeCount,
              likedBy: newLikedBy
            })
          });

          if (updateResponse.ok) {
            setLikeCount(newLikeCount);
            setIsLiked(true);
          }
        }
      } catch (error) {
        console.error('Error updating like:', error);
      }
    }
  };

  // Handle comment submission
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name.trim() && newComment.comment.trim() && projectId) {
      try {
        const projectRef = `${API_URL}/projects/${projectId}.json`;
        const response = await fetch(projectRef);
        const data = await response.json() || { comments: [] };

        const comment: Comment = {
          id: Date.now().toString(),
          name: newComment.name.trim(),
          comment: newComment.comment.trim(),
          timestamp: new Date().toISOString()
        };

        const updatedComments = [...(data.comments || []), comment];

        const updateResponse = await fetch(projectRef, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            comments: updatedComments
          })
        });

        if (updateResponse.ok) {
          setComments(updatedComments);
          setNewComment({ name: '', comment: '' });
        }
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  // If loading, show loading screen
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

  // If project not found, show error screen
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
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Main render
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Project Info */}
            <div className="flex flex-col gap-6 sticky top-24">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
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
                  className="w-full h-auto object-cover"
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
                          <div className={`relative ${isUIDesign ? 'cursor-zoom-in' : ''}`}>
                            <img
                              src={img}
                              alt={`${project.title} design showcase`}
                              className={`w-full h-auto object-cover ${isUIDesign ? 'min-h-[200px]' : ''}`}
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

      {/* Engagement Section (Likes, Comments, Views) */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Stats Row */}
            <div className="flex items-center justify-center gap-8">
              {/* View Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-green-800"
              >
                <Eye className="w-5 h-5" />
                <span className="text-lg font-medium">{viewCount.toLocaleString()} unique views</span>
              </motion.div>

              {/* Like Counter */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={handleLike}
                className={`flex items-center gap-2 ${isLiked ? 'text-green-600' : 'text-green-800 hover:text-green-600'} transition-colors`}
                disabled={isLiked}
              >
                <Heart 
                  className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-green-500 text-green-500 scale-110' : ''}`} 
                />
                <span className="text-lg font-medium">{likeCount.toLocaleString()} likes</span>
              </motion.button>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Opinion *
                  </label>
                  <textarea
                    id="comment"
                    required
                    value={newComment.comment}
                    onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all min-h-[100px]"
                    placeholder="Share your thoughts..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors gap-2"
                >
                  <Send className="w-4 h-4" />
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{comment.name}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.comment}</p>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center text-gray-500">
                    No comments yet. Be the first to comment!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
