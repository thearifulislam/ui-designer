
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight } from "lucide-react";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "ui-ux", name: "UI/UX Design" },
    { id: "web-design", name: "Web Design" },
    { id: "app-design", name: "App Design" },
    { id: "branding", name: "Branding" },
    { id: "trends", name: "Design Trends" }
  ];
  
  const blogPosts = [
    {
      id: "principles-of-ui-design",
      title: "10 Principles of Effective UI Design",
      excerpt: "Explore the core principles that guide effective user interface design and learn how to apply them to your projects.",
      category: "ui-ux",
      date: "October 15, 2023",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "5 min read"
    },
    {
      id: "mobile-first-approach",
      title: "Why Mobile-First Design is Essential in 2023",
      excerpt: "Discover why designing for mobile devices first creates better experiences across all platforms and how to implement this approach.",
      category: "app-design",
      date: "September 22, 2023",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "4 min read"
    },
    {
      id: "typography-basics",
      title: "Typography Fundamentals Every Designer Should Know",
      excerpt: "Learn the essential typography concepts that can elevate your designs from good to great.",
      category: "web-design",
      date: "August 10, 2023",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "7 min read"
    },
    {
      id: "color-theory",
      title: "Color Theory in Digital Design: A Comprehensive Guide",
      excerpt: "Understand how color theory impacts user perception and learn strategies for creating effective color schemes.",
      category: "ui-ux",
      date: "July 28, 2023",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "6 min read"
    },
    {
      id: "branding-consistency",
      title: "Maintaining Brand Consistency Across Digital Platforms",
      excerpt: "Explore strategies for creating and maintaining a consistent brand presence across various digital touchpoints.",
      category: "branding",
      date: "July 15, 2023",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "5 min read"
    },
    {
      id: "design-systems",
      title: "Building Scalable Design Systems: A Step-by-Step Guide",
      excerpt: "Learn how to create design systems that scale with your product and maintain consistency across your user interface.",
      category: "ui-ux",
      date: "June 20, 2023",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "8 min read"
    },
    {
      id: "design-trends-2023",
      title: "Design Trends Shaping the Industry in 2023",
      excerpt: "Stay ahead of the curve with insights into the design trends that are defining the industry this year.",
      category: "trends",
      date: "June 5, 2023",
      image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "4 min read"
    },
    {
      id: "ux-research-methods",
      title: "Essential UX Research Methods for Better Design Decisions",
      excerpt: "Discover the most effective UX research methods that will help you make informed design decisions.",
      category: "ui-ux",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "6 min read"
    }
  ];
  
  // Filter blog posts by search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Design <span className="theme-color-secondary">Insights</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, ideas, and perspectives on design, user experience, and creative processes from my professional journey.
          </p>
        </div>
      </section>
      
      {/* Blog Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          {/* Search bar */}
          <div className="mb-8 relative">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Category filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-[var(--color-secondary)] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link to={`/blogs/${post.id}`} key={post.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                        {categories.find(cat => cat.id === post.category)?.name || post.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                      <span className="text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors flex items-center">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* No results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest design insights, trends, and tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow py-3 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            />
            <button className="theme-bg-secondary text-white py-3 px-6 rounded-full font-medium hover:theme-bg-primary transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blogs;
