import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Search, Eye, Filter, X } from "lucide-react";

// Asset imports (unchanged, use as in your project)
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";
import winnest from "../assets/portfolios/logo-design/wordmark/real-estate/1/1.jpg";
import meloplay from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import player from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import arborsphere from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/1.jpg";
import wind from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/1.jpg";
import zxon from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/1.jpg";
import zepeq from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import ecogrow from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/1.jpg";
import playerlogo from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/1.jpg";
import cycle from "../assets/portfolios/logo-design/lettermark-logo/cycle/1.png";

// for business card design
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";
import visitingcard from "../assets/portfolios/business-card/professional/1/1.jpg";
import minimalistcard from "../assets/portfolios/business-card/minimalist/3/mnvb-24.jpg";
import professionalcard from "../assets/portfolios/business-card/professional/2/1.jpg";
import customcard from "../assets/portfolios/business-card/custom/1/1.jpg";
import moderncard from "../assets/portfolios/business-card/modern/1/1.jpg";

// for letterhead design
import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";
import corporate from "../assets/portfolios/letterhead/minimalist-corporate/1/3.jpg";
import modern from "../assets/portfolios/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg";

// for banner design
import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover design
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";

// image editing
import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";

// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";
import nexus from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/1.jpg";

// Util: For animation resets when filters change
const getFilterKey = (
  searchQuery: string,
  activeFilter: string,
  activeSubFilter: string
) => `${searchQuery}|${activeFilter}|${activeSubFilter}`;

// Categories for main filter buttons (unchanged)
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
];

// Subcategories (unchanged, used for filtering)
const subcategories = {
  logo: ["All", "Lettermark", "Wordmark", "Abstract", "Combination Mark"],
  "business-card": ["All", "Minimal", "Corporate", "Creative", "Modern"],
  letterhead: ["All", "Modern", "Minimalist", "Corporate"],
  "social-media-post": [
    "All",
    "Instagram Post",
    "Facebook Post",
    "LinkedIn Post",
    "Promotional",
  ],
  banner: ["All", "Promotional Banner"],
  "web-banner": ["All", "Youtube Thumbnail", "Email Banner"],
  "email-signature": ["All", "Personal", "Corporate"],
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
    "Background Remove",
    "Retouching",
    "Color Correction",
    "Photo Manipulation",
    "Old Photo Restoration",
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
    <div
      ref={ref}
      className={`portfolio-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group card-scroll-animate ${
        inView ? "card-scroll-animate-active" : ""
      }`}
      style={{
        animationDelay: `${idx * 80}ms`,
        animationDuration: "700ms",
        animationFillMode: "both",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/projects/${item.id}`}>
        <div className="h-80 overflow-hidden relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags?.map((tag: string, idx2: number) => (
                  <span
                    key={idx2}
                    className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-[5px] font-medium mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
    </div>
  );
}

// ---- Main Projects Page ----
const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSubFilter, setShowSubFilter] = useState(false);
  const [hidingSubFilter, setHidingSubFilter] = useState(false);
  const [activeSubFilter, setActiveSubFilter] = useState("All");
  const [filterAnim, setFilterAnim] = useState(false);
  const [cardAnimKey, setCardAnimKey] = useState(getFilterKey("", "all", "All"));
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getSubcategories = () => {
    if (activeFilter === "all") return [];
    return subcategories[activeFilter as keyof typeof subcategories] || [];
  };

  // Filter click also toggles subfilter, and triggers subfilter hide animation if needed
  const handleCategoryClick = (categoryId: string) => {
    const subs = subcategories[categoryId as keyof typeof subcategories];

    if (categoryId === activeFilter) {
      // Toggle subfilter visibility if clicking the same category
      if (showSubFilter) {
        setShowSubFilter(false);
        setActiveSubFilter("All");
      } else if (subs && subs.length > 0) {
        setActiveSubFilter(subs[0]);
        setShowSubFilter(true);
      }
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

  // ==== Example portfolio items (multi-categories / subcategories) ====
  const portfolioItems = [
    {
      id: "momentum-clothing-brand-for-men",
      title: "Momentum Menswear – Modern & Stylish Clothing for Men",
      categories: ["logo"],
      subcategories: ["Abstract", "Combination Mark"],
      tags: ["Logo", "Abstract", "Combination Mark"],
      image: momentum,
    },
    {
      id: "modern-minimalist-camera-business-card",
      title: "Modern Minimalist Camera Science Business Card",
      categories: ["business-card", "stationery"],
      subcategories: ["Modern", "Minimal"],
      tags: ["Business Card", "Modern", "Minimal"],
      image: modernminimalistcamerabusinesscard,
    },
    {
      id: "elegant-gold-accented-corporate-letterhead",
      title: "Elegant Gold-Accented Corporate Letterhead",
      categories: ["letterhead", "stationery"],
      subcategories: ["Minimalist", "Corporate"],
      tags: ["Letterhead", "Minimalist"],
      image: elegantgoldaccentedcorporateletterhead,
    },
    {
      id: "professional-promotional-banner",
      title: "Promotional Banner",
      categories: ["banner"],
      subcategories: ["Promotional"],
      tags: ["Banner", "Promotional"],
      image: professionalpromotionalbanner,
    },
    {
      id: "creative-facebook-cover-design",
      title: "The Future of Luxury Living – Tailored for You",
      categories: ["social-media-post"],
      subcategories: ["Promotional"],
      tags: ["Social Media Cover"],
      image: socialmediacoverdesign,
    },
    {
      id: "image-background-remove-clipping-path",
      title: "Image Clipping Path",
      categories: ["image-editing"],
      subcategories: ["Background Remove"],
      tags: ["Background Remove", "Clipping Path"],
      image: imageclippingpath,
    },
    {
      id: "boldpath-brand-guidelines",
      title: "The Guidelines for Bold Path",
      categories: ["brand-guidelines"],
      subcategories: [],
      tags: ["Brand Guidelines"],
      image: boldpath,
    },
    {
      id: "blood-donation-logo-design",
      title: "Blood Donation Logo Design",
      categories: ["logo"],
      subcategories: ["Combination Mark"],
      tags: ["Logo", "Blood Donation"],
      image: blooddonation,
    },
    {
      id: "modern-business-card-design",
      title: "Modern Business Card Design",
      categories: ["business-card", "stationery"],
      subcategories: ["Cross Platform", "Creative"],
      tags: ["Business Card"],
      image: modernbusinesscard,
    },
    {
      id: "modern-minimalist-letterhead-design",
      title: "Modern Minimalist Letterhead Design",
      categories: ["letterhead", "stationery"],
      subcategories: ["Portfolio", "Minimalist"],
      tags: ["Letterhead"],
      image: modernminimalist,
    },
    {
      id: "uniflora-logo-design",
      title: "Uniflora Logo Design",
      categories: ["logo"],
      subcategories: ["Health Care"],
      tags: ["Logo", "Health Care"],
      image: uniflora,
    },
    {
      id: "ranova-brand-guidelines",
      title: "Ranova Brand Guidelines",
      categories: ["brand-guidelines"],
      subcategories: [],
      tags: ["Brand Guidelines"],
      image: ranova,
    },
    {
      id: "professional-business-card-design",
      title: "Professional Business Card Design",
      categories: ["business-card"],
      subcategories: ["Professional", "Corporate"],
      tags: ["Business Card", "Professional"],
      image: visitingcard,
    },
    {
      id: "winnest-logo-design",
      title: "WinNest Real Estate Logo Design",
      categories: ["logo"],
      subcategories: ["Wordmark", "Real Estate"],
      tags: ["Logo Design", "Wordmark"],
      image: winnest,
    },
    {
      id: "minimalist-card-design",
      title: "Minimalist Card Design",
      categories: ["business-card"],
      subcategories: ["Minimalist"],
      tags: ["Business Card", "Minimalist"],
      image: minimalistcard,
    },
    {
      id: "professional-card-design",
      title: "Professional Card Design",
      categories: ["business-card"],
      subcategories: ["Professional"],
      tags: ["Business Card", "Professional"],
      image: professionalcard,
    },
    {
      id: "nexus-brand-guidelines",
      title: "Nexus Brand Guidelines",
      categories: ["brand-guidelines", "logo"],
      subcategories: ["Logo Design"],
      tags: ["Brand Guidelines", "Logo Design"],
      image: nexus,
    },
    {
      id: "custom-card-design",
      title: "Custom Card Design",
      categories: ["business-card", "stationery"],
      subcategories: ["Custom"],
      tags: ["Business Card", "Custom"],
      image: customcard,
    },
    {
      id: "meloplay-logo-design",
      title: "Meloplay Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo", "Lettermark"],
      image: meloplay,
    },
    {
      id: "player-logo-design",
      title: "Player Logo Design",
      categories: ["logo"],
      subcategories: ["Abstrack"],
      tags: ["Logo", "Abstrack"],
      image: player,
    },
    {
      id: "arborsphere-logo-design",
      title: "ArborSphere Logo Design",
      categories: ["logo"],
      subcategories: ["Abstrack"],
      tags: ["Logo", "Abstrack"],
      image: arborsphere,
    },
    {
      id: "modern-card-design",
      title: "Modern Type Business Card Design",
      categories: ["business-card"],
      subcategories: ["Modern"],
      tags: ["Business Card", "Modern"],
      image: moderncard,
    },
    {
      id: "wind-logo-design",
      title: "Wind Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: wind,
    },
    {
      id: "zxon-logo-design",
      title: "Zxon Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: zxon,
    },
    {
      id: "zepeq-logo-design",
      title: "Zepeq Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: zepeq,
    },
    {
      id: "ecogrow-logo-design",
      title: "Ecogrow Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: ecogrow,
    },
    {
      id: "corporate-letterhead-design",
      title: "Corporate Design",
      categories: ["letterhead"],
      subcategories: ["Corporate"],
      tags: ["Letterhead Deisgn", "Corporate"],
      image: corporate,
    },
    {
      id: "modern-letterhead-design",
      title: "Modern Letterhead Design",
      categories: ["letterhead"],
      subcategories: ["modern"],
      tags: ["Letterhead Deisgn", "Modern"],
      image: modern,
    },
    {
      id: "the-player-logo-design",
      title: "Player Logo Design",
      categories: ["logo"],
      subcategories: ["Abstrack"],
      tags: ["Logo", "Abstrack"],
      image: playerlogo,
    },
    {
      id: "cycle-logo-design",
      title: "Cycle Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo", "Lettermark"],
      image: cycle,
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

    // Category filter (multi-category)
    const matchesCategory =
      activeFilter === "all" ||
      (Array.isArray(item.categories) &&
        item.categories.includes(activeFilter));

    if (!matchesCategory || !matchesSearch) return false;

    // Subfilter (multi-subcategory support)
    if (
      showSubFilter &&
      activeSubFilter &&
      activeSubFilter.toLowerCase() !== "all"
    ) {
      const subcats = item.subcategories || [];
      const tags = item.tags || [];
      return (
        subcats.some(
          (sub) => sub.toLowerCase() === activeSubFilter.toLowerCase()
        ) ||
        tags.some((tag) => tag.toLowerCase() === activeSubFilter.toLowerCase())
      );
    }

    return true;
  });

  useEffect(() => {
    setCardAnimKey(getFilterKey(searchQuery, activeFilter, activeSubFilter));
  }, [searchQuery, activeFilter, activeSubFilter]);

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
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my latest projects and design work across various industries
            and platforms. Each project represents a unique challenge and
            creative solution.
          </p>
        </div>
      </section>

      <section className="py-0">
        <div className="container mx-auto px-4 md:px-8">
          {/* Search and Filter Bar */}
          <div className="mb-0 flex flex-row items-center pb-4">
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
          {isFilterOpen && (
            <div className="transition-all duration-300 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
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
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === category.id
                            ? "bg-[var(--color-secondary)] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subcategories */}
                {showSubFilter && getSubcategories().length > 0 && (
                  <div className="border-t pt-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Subcategories</h4>
                    <div className="flex flex-wrap gap-2">
                      {getSubcategories().map((subcategory) => (
                        <button
                          key={subcategory}
                          onClick={() => handleSubFilterClick(subcategory)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeSubFilter?.toLowerCase() === subcategory?.toLowerCase()
                              ? "bg-[var(--color-secondary)] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {subcategory}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Portfolio Grid */}
          <div
            key={cardAnimKey}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8`}
          >
            {filteredProjects.map((item, idx) => (
              <AnimatedCard key={item.id} idx={idx} item={item} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-3">No projects found</h3>
              <p className="text-gray-600">
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
