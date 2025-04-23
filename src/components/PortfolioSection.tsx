import { Link } from "react-router-dom";
import EmotionalButton from './EmotionalButton';
import { ArrowRight, Eye } from "lucide-react";

// logo design portfolio

import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg"

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: "momentum-clothing-brand-for-men",
      title: "Momentum Menswear – Modern & Stylish Clothing for Men",
      category: "Logo Design",
      tags: ["Logo", "Abastract Logo"],
      image: momentum,
    },
    {
      id: "mobile-app",
      title: "Mobile App Design",
      category: "App Design",
      tags: ["Mobile", "UI/UX"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "ecommerce",
      title: "E-commerce Website",
      category: "Web Design",
      tags: ["Web", "E-commerce"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "branding-project",
      title: "Branding Project",
      category: "Branding",
      tags: ["Identity", "Logo"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "health-app",
      title: "Health Tracker App",
      category: "App Design",
      tags: ["Healthcare", "Mobile"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "travel-website",
      title: "Travel Agency Website",
      category: "Web Design",
      tags: ["Travel", "Web"],
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "saas-wireframe",
      title: "SaaS Platform Wireframe",
      category: "Wireframe",
      tags: ["SaaS", "Wireframe"],
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Dashboard",
      category: "Dashboard",
      tags: ["Business", "Analytics"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "education-app",
      title: "Education Platform",
      category: "App Design",
      tags: ["Education", "Mobile"],
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "portfolio-site",
      title: "Artist Portfolio",
      category: "Web Design",
      tags: ["Portfolio", "Creative"],
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "crm-design",
      title: "CRM System Design",
      category: "Dashboard",
      tags: ["Enterprise", "CRM"],
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2400",
    },
    {
      id: "food-delivery",
      title: "Food Delivery App",
      category: "App Design",
      tags: ["Food", "Mobile"],
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=2400",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center flex-wrap mb-12">
          <h2 className="text-3xl md:text-4xl font-bold theme-color-primary">
            My Latest Projects
          </h2>
          <EmotionalButton
            href="/projects"
            className="mt-4 md:mt-0 theme-bg-secondary hover:bg-[#f9be5a] text-white px-5 py-3 rounded-full font-semibold flex items-center shadow transition-all duration-300"
            emotionType="heart"
            numEmotions={3}
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </EmotionalButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="portfolio-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-[5px] font-medium mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${item.id}`}>
                  <h3 className="text-xl font-bold text-black-soft group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>
                </Link>
                <Link
                  to={`/projects/${item.id}`}
                  className="view-button theme-bg-secondary hover:theme-bg-primary text-white px-4 py-2 rounded-full font-medium flex items-center justify-center w-full mx-auto mt-4"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Portfolio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
