import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Search, Eye, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// for landing page design
import websiteui1 from "../assets/portfolios/ui/website ui/landing-page/1/Website UI Design.jpg"
// for dashboard ui
import dashboardui1 from "../assets/portfolios/dashboard/1/1.jpg"

// Categories for main filter buttons
const categories = [
  { id: "all", name: "All Projects" },
  { id: "website", name: "Website" },
  { id: "dashboard", name: "Dashboard" },
  { id: "landing-page", name: "Landing Page" },
];

// === Custom Hook: Detect if element is in viewport using IntersectionObserver ===
function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
}

// --- Portfolio Card with enhanced hover effects ---
function AnimatedCard({ item, idx }: { item: any; idx: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`portfolio-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
        inView ? "card-scroll-animate-active" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/projects/${item.id}`}>
        <div className="h-80 overflow-hidden relative">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags?.map((tag: string, idx2: number) => (
                  <motion.span
                    key={idx2}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx2 * 0.1 }}
                    className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-[5px] font-medium mr-2 mb-2"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/projects/${item.id}`}>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--color-secondary)] transition-colors mb-3 line-clamp-2">
            {item.title}
          </h3>
        </Link>
        <Link
          to={`/projects/${item.id}`}
          className="view-button bg-gray-100 hover:bg-[var(--color-secondary)] hover:text-white text-gray-700 px-4 py-2 rounded-full font-medium flex items-center justify-center w-full transition-all duration-300"
        >
          <Eye className="mr-2 h-5 w-5" />
          View Project
        </Link>
      </div>
    </motion.div>
  );
}

// ---- Main Projects Page ----
const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cardAnimKey, setCardAnimKey] = useState("");

  // ==== Example portfolio items ====
  const portfolioItems = [
    {
      id: "template-tricore-creative-onepage-v1",
      title: "Tricore Creative One Page Website Template",
      categories: ["website"],
      tags: ["website"],
      image: websiteui1,
    },
    {
      id: "template-theprotect-task-dashboard-v1",
      title: "TheProtect – Smart Task Management Dashboard UI",
      categories: ["dashboard"],
      tags: ["UI", "Dashboard UI"],
      image: dashboardui1,
    },
  ];

  // ==== Filtering Logic ====
  const filteredProjects = portfolioItems.filter((item) => {
    // Search filter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags &&
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));

    // Category filter
    const matchesCategory =
      activeFilter === "all" ||
      (Array.isArray(item.categories) &&
        item.categories.includes(activeFilter));

    return matchesCategory && matchesSearch;
  });

  const handleFilterChange = (categoryId: string) => {
    setIsLoading(true);
    setActiveFilter(categoryId);
    setIsFilterOpen(false);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    setCardAnimKey(`${searchQuery}|${activeFilter}`);
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Creative <span className="theme-color-secondary">Portfolio</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Explore my latest projects and design work across various industries
            and platforms. Each project represents a unique challenge and
            creative solution.
          </p>
        </div>
      </section>

      <section className="py-0">
        <div className="container mx-auto px-4 md:px-8">
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-row items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-5 pl-16 pr-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] shadow-sm text-xl h-[56px]"
              />
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                size={26}
              />
            </div>
            <button
              onClick={() => setIsFilterOpen((prev) => !prev)}
              className="flex-shrink-0 ml-4 flex items-center gap-2 px-6 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors h-[56px] text-xl"
              style={{ minWidth: "120px" }}
            >
              <Filter size={22} />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Filter Projects</h3>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Main Categories */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleFilterChange(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === category.id
                            ? "bg-[var(--color-secondary)] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center py-20"
              >
                <div className="w-12 h-12 border-4 border-[var(--color-secondary)] border-t-transparent rounded-full animate-spin" />
              </motion.div>
            ) : (
              <motion.div
                key={cardAnimKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((item, idx) => (
                    <AnimatedCard key={item.id} idx={idx} item={item} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {!isLoading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-3">No projects found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* UI Design Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">UI Design Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Modern & Clean Designs</h3>
                    <p className="text-gray-600 text-sm">Creating intuitive and visually appealing interfaces that enhance user experience</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Responsive Layouts</h3>
                    <p className="text-gray-600 text-sm">Ensuring perfect display across all devices and screen sizes</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">User-Centered Approach</h3>
                    <p className="text-gray-600 text-sm">Focusing on user needs and creating seamless interactions</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Latest Design Trends</h3>
                    <p className="text-gray-600 text-sm">Implementing modern design patterns and staying ahead of trends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animation styles */}
      <style>
        {`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                           linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation-name: fadeInUp;
        }

        @keyframes scrollFadeInCard {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-scroll-animate {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
        }

        .card-scroll-animate.card-scroll-animate-active {
          animation: scrollFadeInCard 0.7s cubic-bezier(.23, 1.07, .66, .99) forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        `}
      </style>
    </div>
  );
};

export default Projects;
