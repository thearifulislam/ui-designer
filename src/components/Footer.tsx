import { Linkedin, Instagram } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-green text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Logo & About */}
          <div>
            <a
              href="#hero"
              className="text-xl md:text-2xl font-bold mb-4 inline-block"
            >
              <span className="text-yellow">Ariful</span>Islam
            </a>
            <p className="text-white/80 mt-4">
              I specialize in crafting unique brand identities and delivering
              top-tier design solutions that help businesses stand out in
              today's competitive market.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/arifulislamofficialprofile/"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/_md._ariful_islam/"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arifulcreatorstudio/"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://behance.net/arifulcreatorstudio"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaBehance className="h-5 w-5" />
              </a>
              <a
                href="https://dribbble.com/arifulcreatorstudio"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaDribbble className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/logo-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Logo Design
                </a>
              </li>
              <li>
                <a
                  href="/services/business-card-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Business Card Design
                </a>
              </li>
              <li>
                <a
                  href="/services/letterhead-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Letterhead Design
                </a>
              </li>
              <li>
                <a
                  href="/services/brand-guidelines-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Brand Guidelines Design
                </a>
              </li>
              <li>
                <a
                  href="/services/social-media-post-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Social Media Post Design
                </a>
              </li>
              <li>
                <a
                  href="/services/banner-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Banner Design
                </a>
              </li>
              <li>
                <a
                  href="/services/web-banner-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Web Banner Design
                </a>
              </li>
              <li>
                <a
                  href="/services/email-signature-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Email Signature Design
                </a>
              </li>
              <li>
                <a
                  href="/services/flyer-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Brochures, Posters, and Flyers Design
                </a>
              </li>
              <li>
                <a
                  href="/services/billboards-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Billboards Design
                </a>
              </li>
              <li>
                <a
                  href="/services/stationery-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Stationery Design
                </a>
              </li>
              <li>
                <a
                  href="/services/image-editing"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Image Editing
                </a>
              </li>
              <li>
                <a
                  href="/services/resume-design"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Resume Designs
                </a>
              </li>
              <li>
                <a
                  href="/services/background-removal"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Background Removal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow mr-3">Email:</span>
                <a
                  href="mailto:acs.arifulislam@gmail.com"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  acs.arifulislam@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">Phone:</span>
                <a
                  href="tel:+8801938434733"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  +880 1938-434733
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">Address:</span>
                <span className="text-white/80">Khulna, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 text-center text-white/60">
          <p>Copyright © 2024 Ariful Islam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
