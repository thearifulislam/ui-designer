
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import UserGreeting from "./components/UserGreeting";
import WhatsAppButton from "./components/WhatsAppButton";
import IntroLogo from "./components/IntroLogo";
import ScrollToTop from "./components/ScrollToTop";

// ==== Dashboard Imports ====
import DashboardHome from "./pages/DashboardHome";
import DashboardUsers from "./pages/DashboardUsers";
import DashboardProjects from "./pages/DashboardProjects";
// ===========================

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <IntroLogo />
        <UserGreeting />
        <ScrollToTop />
        <WhatsAppButton />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogPost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          {/* ===== Dashboard Routes ===== */}
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/users" element={<DashboardUsers />} />
          <Route path="/dashboard/projects" element={<DashboardProjects />} />
          {/* =========================== */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
