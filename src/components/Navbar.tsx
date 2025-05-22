import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, Palette, Layers, Code } from "lucide-react";

// ==== Animation CSS ====
const navAnimations = `
@keyframes slideInLeftMobile {
  0% {
    opacity: 0;
    transform: translateX(-120px) scale(0.95);
  }
  70% {
    opacity: 0.9;
    transform: translateX(8px) scale(1.03);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes logoSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes navItemSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes contactButtonSlide {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-nav-slidein {
  animation: slideInLeftMobile 0.55s cubic-bezier(.6,1.3,.4,1.05) both;
}

.nav-item {
  position: relative;
  opacity: 0;
  animation: navItemSlideDown 0.5s ease forwards;
  transition: all 0.3s ease;
}

.nav-item:nth-child(1) { animation-delay: 0.2s; }
.nav-item:nth-child(2) { animation-delay: 0.3s; }
.nav-item:nth-child(3) { animation-delay: 0.4s; }
.nav-item:nth-child(4) { animation-delay: 0.5s; }
.nav-item:nth-child(5) { animation-delay: 0.6s; }

.nav-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: var(--color-secondary);
  transition: width 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.nav-item:hover::after {
  width: 100%;
}

.nav-item:hover {
  transform: translateY(-2px);
}

.nav-item.active::after {
  width: 100%;
}

.logo-text {
  animation: logoSlideIn 0.8s ease-out forwards;
}

.logo-text-first {
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.logo-text-last {
  color: var(--color-secondary);
  transition: all 0.3s ease;
}

.logo-container:hover .logo-text-first {
  color: var(--color-secondary);
}

.logo-container:hover .logo-text-last {
  color: var(--color-primary);
}

.contact-button {
  opacity: 0;
  animation: contactButtonSlide 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
}
`;

if (typeof window !== "undefined") {
  const styleId = "nav-animations";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = navAnimations;
    document.head.appendChild(style);
  }
}

const navLinks = [
  { name: "Home", href: "/", icon: <Heart className="w-4 h-4" /> },
  { name: "About", href: "/about", icon: <Code className="w-4 h-4" /> },
  { name: "Services", href: "/services", icon: <Palette className="w-4 h-4" /> },
  { name: "Projects", href: "/projects", icon: <Layers className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconKey, setIconKey] = useState(0);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  // Update active link on path change
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add body scroll lock when mobile menu open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen((v) => !v);
    setIconKey((prev) => prev + 1);
  };

  const getAnimDelay = (idx: number) => ({
    animationDelay: `${idx * 0.1 + 0.08}s`,
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between min-h-[70px]">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold flex items-center group shrink-0 transition-transform duration-300 logo-container"
        >
          <Heart
            className="mr-2 text-[var(--color-secondary)] fill-[var(--color-secondary)] heart-bounce"
            size={24}
          />
          <span className="logo-text">
            <span className="logo-text-first">Ariful</span>
            <span className="logo-text-last">UI</span>
          </span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 ml-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium nav-item flex items-center space-x-2 px-2 py-1 rounded-md transition-colors duration-300 ${
                  activeLink === link.href
                    ? "theme-color-secondary active"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Button - Right aligned */}
        <div className="hidden md:block shrink-0">
          <Link
            to="/contact"
            className="contact-button inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X
                key={"x-" + iconKey}
                className="h-6 w-6 text-gray-600"
                data-testid="mobile-menu-close"
              />
            ) : (
              <Menu
                key={"menu-" + iconKey}
                className="h-6 w-6 text-gray-600"
                data-testid="mobile-menu-open"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav with Glass Effect */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/5 backdrop-blur-sm">
          <div className="h-screen w-[80%] max-w-[300px] bg-white shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    block font-medium rounded-xl p-3 mobile-nav-slidein
                    flex items-center space-x-3 transition-all duration-300
                    ${
                      activeLink === link.href
                        ? "bg-yellow-50 theme-color-secondary shadow-sm"
                        : "hover:bg-gray-50"
                    }
                  `}
                  style={getAnimDelay(idx)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <div
                className="pt-4 mobile-nav-slidein"
                style={getAnimDelay(navLinks.length)}
              >
                <Link
                  to="/contact"
                  className="w-full bg-green hover:bg-green/90 text-white py-3 px-6 rounded-xl font-medium text-center transition-all duration-300 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
