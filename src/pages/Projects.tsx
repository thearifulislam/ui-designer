
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Search, Eye } from "lucide-react";

// logo design
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";

// Util: For animation resets when filters change
const getFilterKey = (
  searchQuery: string,
  activeFilter: string,
  activeSubFilter: string
) => `${searchQuery}|${activeFilter}|${activeSubFilter}`;

// Categories for main filter buttons
const categories = [
  { id: "all", name: "All Projects" },
  { id: "logo", name: "Logo" },
  { id: "business-card", name: "Business Card" },
  { id: "letterhead", name: "Letterhead" },
  { id: "brand-guidelines", name: "Brand Guidelines" },
  { id: "social-media-post", name: "Social Media Post" },
  { id: "banner", name: "Banner" },
  { id: "web-banner", name: "Web Banner" },
  { id: "email-signature", name: "Email Signature" },
  { id: "flyer", name: "Flyer" },
  { id: "billboards", name: "Billboards" },
  { id: "stationery", name: "Stationery" },
  { id: "image-editing", name: "Image Editing" },
  { id: "resume", name: "Resume" },
  { id: "background-removal", name: "Background Removal" },
];

// Subcategories for subfilter (used as tag filters)
const subcategories = {
  logo: [
    "All",
    "Lettermark",
    "Wordmark",
    "Abstract",
    "Combination Mark",
    "Emblem",
    "Mascot Logo",
    "3D Logo",
  ],
  "business-card": [
    "All",
    "Minimal",
    "Corporate",
    "Creative",
    "Vertical Layout",
    "Double-sided",
    "Die-cut",
  ],
  letterhead: [
    "All",
    "Classic",
    "Modern",
    "Colored",
    "Monochrome",
    "With Logo",
    "With Watermark",
  ],
  "brand-guidelines": ["All", "Logo Usage", "Stationery Mockups"],
  "social-media-post": [
    "All",
    "Instagram Post",
    "Facebook Post",
    "LinkedIn Post",
    "Promotional",
  ],
  banner: [
    "All",
    "Roll-up Banner",
    "Event Banner",
    "Product Banner",
    "Sale/Offer Banner",
    "Vertical Banner",
    "Horizontal Banner",
  ],
  "web-banner": [
    "All",
    "Website Hero",
    "Google Display Ad",
    "Blog Banner",
    "Youtube Thumbnail",
    "Email Banner",
  ],
  "email-signature": [
    "All",
    "Personal",
    "Corporate",
    "With Social Icons",
    "With Profile Picture",
    "Dark Mode Compatible",
  ],
  flyer: [
    "All",
    "Event Flyer",
    "Product Flyer",
    "Sale Flyer",
    "Real Estate Flyer",
    "Corporate Flyer",
    "Party Flyer",
  ],
  billboards: [
    "All",
    "Highway Billboard",
    "City Billboard",
    "Event Billboard",
    "Launch Campaign",
    "Awareness Billboard",
  ],
  stationery: ["All", "Letterhead", "Envelope", "Business Card", "ID Card"],
  "image-editing": [
    "All",
    "Retouching",
    "Color Correction",
    "Photo Manipulation",
    "Old Photo Restoration",
    "Background Enhancement",
  ],
  resume: [
    "All",
    "Modern Resume",
    "Minimalist Resume",
    "Infographic Resume",
    "Creative Resume",
    "Corporate Resume",
    "Cover Letter Design",
  ],
  "background-removal": [
    "All",
    "Product Image",
    "Portrait Image",
    "Transparent Background",
    "White Background",
    "Shadow Added",
    "Bulk Removal",
  ],
};

const ANIMATION_DURATION = 300; // ms animation duration for subfilter hide

// === Custom Hook: Detect if element is in viewport using IntersectionObserver ===
function useInView<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only animate-once style: disconnect on first view
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
}

// --- Portfolio Card with scroll-dependent animation ---
function AnimatedCard({ item, idx }: { item: any; idx: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={
        "portfolio-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group card-scroll-animate" +
        (inView ? " card-scroll-animate-active" : "")
      }
      style={{
        animationDelay: `${idx * 80}ms`,
        animationDuration: "700ms",
        animationFillMode: "both",
      }}
    >
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
          {item.tags.map((tag: string, idx2: number) => (
            <span
              key={idx2}
              className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/projects/${item.id}`}>
          <h3 className="text-xl font-bold text-black-soft group-hover:text-[var(--color-secondary)] transition-colors mb-2">
            {item.title}
          </h3>
        </Link>
        <span className="text-gray-600 mt-2 text-sm">
          {item.subcategory}
        </span>
        <Link
          to={`/projects/${item.id}`}
          className="view-button theme-bg-secondary hover:theme-bg-primary text-white px-4 py-2 rounded-full font-medium flex items-center justify-center w-full mt-4"
        >
          <Eye className="mr-2 h-5 w-5" />
          View Project
        </Link>
      </div>
    </div>
  );
}

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSubFilter, setShowSubFilter] = useState(false);
  const [hidingSubFilter, setHidingSubFilter] = useState(false);
  const [activeSubFilter, setActiveSubFilter] = useState("All");
  const [filterAnim, setFilterAnim] = useState(false);
  const [cardAnimKey, setCardAnimKey] = useState(
    getFilterKey("", "all", "All")
  );

  const getSubcategories = () => {
    if (activeFilter === "all") return [];
    return subcategories[activeFilter as keyof typeof subcategories] || [];
  };

  // Filter click also toggles subfilter, and triggers subfilter hide animation if needed
  const handleCategoryClick = (categoryId: string) => {
    const subs = subcategories[categoryId as keyof typeof subcategories];

    if (categoryId === activeFilter && showSubFilter) {
      setHidingSubFilter(true);
      setTimeout(() => {
        setShowSubFilter(false);
        setHidingSubFilter(false);
      }, ANIMATION_DURATION);
      return;
    }

    setActiveFilter(categoryId);

    if (subs && subs.length > 0) {
      setActiveSubFilter(subs[0]);
      setShowSubFilter(true);
    } else {
      setActiveSubFilter("All");
      setShowSubFilter(false);
    }
    setFilterAnim(true);
    setTimeout(() => setFilterAnim(false), 300);
  };

  const handleSubFilterClick = (subcategory: string) => {
    setActiveSubFilter(subcategory);
  };

  // Example portfolio items (replace with your real data)
  const portfolioItems = [
    {
      id: "momentum-clothing-brand-for-men",
      title: "Momentum Menswear – Modern & Stylish Clothing for Men",
      category: "logo",
      subcategory: "Abstract",
      tags: ["Logo", "Abstract"],
      image: momentum
    },
    {
      id: "mobile-app",
      title: "Mobile App Design",
      category: "app",
      subcategory: "iOS",
      tags: ["Mobile", "UI/UX"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "ecommerce",
      title: "E-commerce Website",
      category: "web",
      subcategory: "E-commerce",
      tags: ["Web", "E-commerce"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "branding-project",
      title: "Branding Project",
      category: "branding",
      subcategory: "Identity",
      tags: ["Identity", "Logo"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "health-app",
      title: "Health Tracker App",
      category: "app",
      subcategory: "Cross Platform",
      tags: ["Healthcare", "Mobile"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "travel-website",
      title: "Travel Agency Website",
      category: "web",
      subcategory: "Corporate",
      tags: ["Travel", "Web"],
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "saas-wireframe",
      title: "SaaS Platform Wireframe",
      category: "ui-ux",
      subcategory: "Web App",
      tags: ["SaaS", "Wireframe"],
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Dashboard",
      category: "dashboard",
      subcategory: "Analytics",
      tags: ["Business", "Analytics"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "education-app",
      title: "Education Platform",
      category: "app",
      subcategory: "Cross Platform",
      tags: ["Education", "Mobile"],
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "portfolio-site",
      title: "Artist Portfolio",
      category: "web",
      subcategory: "Portfolio",
      tags: ["Portfolio", "Creative"],
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "crm-design",
      title: "CRM System Design",
      category: "dashboard",
      subcategory: "CRM",
      tags: ["Enterprise", "CRM"],
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "food-delivery",
      title: "Food Delivery App",
      category: "app",
      subcategory: "Android",
      tags: ["Food", "Mobile"],
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=2400",
    },
  ];

  // Filtering logic: filter by category, then by subfilter (tag), then by search
  const filteredProjects = portfolioItems.filter((item) => {
    // Search filter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Category filter
    const matchesCategory =
      activeFilter === "all" || item.category === activeFilter;

    if (!matchesCategory || !matchesSearch) return false;

    // Subfilter logic: for categories with subfilters, match tag (except "All")
    if (
      showSubFilter &&
      activeSubFilter &&
      activeSubFilter.toLowerCase() !== "all"
    ) {
      // For logo and other categories, subfilter matches tag (case-insensitive)
      return item.tags.some(
        (tag) => tag.toLowerCase() === activeSubFilter.toLowerCase()
      );
    }

    return true;
  });

  useEffect(() => {
    setCardAnimKey(getFilterKey(searchQuery, activeFilter, activeSubFilter));
  }, [searchQuery, activeFilter, activeSubFilter]);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="theme-color-secondary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects and design work across various industries
            and platforms. Each project represents a unique challenge and
            creative solution.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 relative">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          {/* Main filter bar */}
          <div className="mb-6 flex flex-wrap justify-center gap-3 rounded-xl p-5 bg-blue-50 shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-[var(--color-secondary)] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                style={{
                  transition: "all 0.2s cubic-bezier(.4,2,1,0.9)",
                  transform:
                    filterAnim && activeFilter === category.id
                      ? "scale(1.08)"
                      : "scale(1)",
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Subfilter bar with hide/show animation */}
          {(getSubcategories().length > 0 && (showSubFilter || hidingSubFilter)) && (
            <div
              className={`mb-10 flex flex-wrap justify-center gap-2 rounded-xl p-5 bg-blue-50 shadow-sm transition-all duration-300 ${
                showSubFilter && !hidingSubFilter
                  ? "animate-fade-in"
                  : hidingSubFilter
                  ? "slide-fade-out"
                  : "hidden"
              }`}
            >
              {getSubcategories().map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubFilterClick(subcategory)}
                  className={`filter-item cursor-pointer transition-all duration-200 px-4 py-1 rounded-md text-sm font-medium ${
                    activeSubFilter?.toLowerCase() === subcategory?.toLowerCase()
                      ? "bg-[var(--color-secondary)] text-white"
                      : "bg-white text-gray-700 hover:bg-blue-100"
                  }`}
                  style={{ transition: "all 0.2s cubic-bezier(.4,2,1,0.9)" }}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}

          {/* Portfolio cards with scroll animation */}
          <div
            key={cardAnimKey}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 pb-10"
          >
            {filteredProjects.map((item, idx) => (
              <AnimatedCard key={item.id} idx={idx} item={item} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
      {/* Animation styles */}
      <style>
        {`
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
        @keyframes slideFadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-24px);
          }
        }
        .slide-fade-out {
          animation: slideFadeOut ${ANIMATION_DURATION}ms cubic-bezier(.4,2,1,0.9) both;
        }
        /* Card scroll-in animation */
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
        `}
      </style>
    </div>
  );
};

export default Projects;
