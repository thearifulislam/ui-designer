
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Check, Clock, Layout, Smartphone, Globe, Brush, Palette, PenTool, Type, PackageOpen, ImagePlus } from 'lucide-react';

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  const serviceData = {
    "logo-design": {
      icon: <Smartphone className="h-16 w-16 theme-color-secondary" />,
      title: "App Design",
      description: "Creating intuitive interfaces with thoughtful user experiences that solve real problems and delight users.",
      process: [
        { title: "Research & Discovery", description: "Understanding your users, business goals, and technical requirements." },
        { title: "Wireframing", description: "Creating the structural blueprint of your app to plan user flows and functionality." },
        { title: "UI Design", description: "Designing beautiful, intuitive interfaces that align with your brand." },
        { title: "Prototyping", description: "Building interactive prototypes to test and validate design decisions." },
        { title: "Design Handoff", description: "Providing developers with all necessary assets and specifications." }
      ],
      features: [
        "User-centered design approach",
        "Custom UI component libraries",
        "Responsive layouts for all screen sizes",
        "Accessibility compliance",
        "Design system creation",
        "Interactive prototypes",
        "User flow mapping",
        "Usability testing"
      ],
      subServices: ["Native Apps", "Web Apps", "Design Systems"],
      deliverables: [
        "Complete UI design files",
        "Interactive prototypes",
        "Design system documentation",
        "Asset library",
        "Developer handoff specifications"
      ],
      portfolio: [
        {
          id: "health-app",
          title: "Health Tracker App",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2400"
        },
        {
          id: "mobile-app",
          title: "Mobile App Design",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2400"
        },
        {
          id: "food-delivery",
          title: "Food Delivery App",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=2400"
        }
      ],
      timeframe: "4-8 weeks",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400"
    },
    "website-design": {
      icon: <Globe className="h-16 w-16 theme-color-secondary" />,
      title: "Website Design",
      description: "Building clean, responsive websites that work beautifully across all devices while reflecting your brand identity and business goals.",
      process: [
        { title: "Strategy & Planning", description: "Defining goals, audience, and content strategy for your website." },
        { title: "Information Architecture", description: "Organizing content and creating sitemaps for optimal user experience." },
        { title: "Wireframing", description: "Creating structural layouts to plan content placement and user flows." },
        { title: "Visual Design", description: "Designing beautiful interfaces aligned with your brand identity." },
        { title: "Responsive Design", description: "Ensuring your website works across all devices and screen sizes." }
      ],
      features: [
        "Custom design tailored to your brand",
        "Responsive layouts for all devices",
        "SEO-optimized structure",
        "Performance-focused design",
        "User journey mapping",
        "Call-to-action optimization",
        "Accessibility compliance",
        "Cross-browser compatibility"
      ],
      subServices: ["Landing Pages", "E-commerce", "Corporate Websites", "Portfolios"],
      deliverables: [
        "Website design mockups",
        "Interactive prototype",
        "Style guide",
        "Image assets",
        "Developer specifications"
      ],
      portfolio: [
        {
          id: "ecommerce",
          title: "E-commerce Website",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2400"
        },
        {
          id: "travel-website",
          title: "Travel Agency Website",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2400"
        },
        {
          id: "portfolio-site",
          title: "Artist Portfolio",
          image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=2400"
        }
      ],
      timeframe: "3-6 weeks",
      heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2400"
    },
    // Add more services with their details here
  };
  
  // Get the current service data or use a default if not found
  const service = serviceId ? serviceData[serviceId as keyof typeof serviceData] : undefined;
  
  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center theme-bg-primary text-white px-6 py-3 rounded-full font-medium"
          >
            Back to Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="inline-block theme-bg-primary/10 p-6 rounded-2xl mb-6">
            {service.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>
      
      {/* Service Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Process & Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold mb-8">My Process</h2>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-6">
                      <div className="theme-bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="theme-bg-secondary/20 p-2 rounded-full mr-3">
                      <Check className="h-5 w-5 theme-color-secondary" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
              
              {/* Timeframe */}
              <div className="mt-10 bg-[#f9f9f9] p-6 rounded-xl flex items-center">
                <Clock className="h-6 w-6 theme-color-secondary mr-4" />
                <div>
                  <h4 className="font-medium">Typical Timeframe</h4>
                  <p className="text-muted-foreground">{service.timeframe}</p>
                </div>
              </div>
              
              {/* Sub-Services */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Specialized Services</h3>
                <div className="flex flex-wrap gap-3">
                  {service.subServices.map((subService, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-sm font-medium"
                    >
                      {subService}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Deliverables */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.deliverables.map((deliverable, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="theme-bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="theme-color-secondary font-bold">{index + 1}</span>
                </div>
                <h3 className="font-medium">{deliverable}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.portfolio.map((item, index) => (
              <Link to={`/projects/${item.id}`} key={index} className="group">
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold group-hover:theme-color-secondary transition-colors">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Let's collaborate to create an amazing {service.title.toLowerCase()} that achieves your business goals and delights your users.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-[var(--color-primary)] px-6 py-3 rounded-full font-medium hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetails;
