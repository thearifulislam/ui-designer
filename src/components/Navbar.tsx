
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import EmotionalButton from './EmotionalButton';

// ==== Animation CSS ====
// Card slide-up & bounce
const cardAnimStyles = `
@keyframes mobileCardEnter {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95) rotate(-5deg);
  }
  50% {
    opacity: 0.6;
    transform: translateY(-8px) scale(1.02) rotate(1.5deg);
  }
  85% {
    opacity: 1;
    transform: translateY(3px) scale(1.01) rotate(0.5deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

.mobile-nav-card-anim {
  animation: mobileCardEnter 0.5s cubic-bezier(.6,1.3,.3,1.05) both;
}
`;

if (typeof window !== 'undefined') {
  const styleId = 'mobile-nav-card-anim';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = cardAnimStyles;
    document.head.appendChild(style);
  }
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blogs' },
  { name: 'FAQs', href: '/faqs' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconKey, setIconKey] = useState(0);
  const [activeLink, setActiveLink] = useState('/');

  // Update active link on path change (browser)
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Add body scroll lock when mobile menu open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Handle menu open/close
  const handleMenuToggle = () => {
    setIsOpen((v) => !v);
    setIconKey((prev) => prev + 1);
  };

  // Staggered animation delay
  const getAnimDelay = (idx: number) => ({
    animationDelay: `${idx * 0.12 + 0.1}s`,
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center min-h-[64px]">
        <Link to="/" className="text-xl md:text-2xl font-bold theme-color-primary flex items-center group">
          <Heart className="mr-2 text-[var(--color-secondary)] fill-[var(--color-secondary)] heart-bounce" size={20} />
          <span className="text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">Ariful</span>
          <span className="group-hover:text-[var(--color-secondary)] transition-colors">Islam</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium nav-item transition-colors duration-300 ${activeLink === link.href ? 'theme-color-secondary' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <EmotionalButton
            href="/contact"
            className="theme-bg-secondary text-white py-2 px-6 rounded-full font-medium hover:scale-110 hover:bg-yellow-400 hover:text-green-900 transition-all duration-200 flex items-center hire-me-btn"
            emotionType="heart"
            numEmotions={3}
          >
            Hire Me <Heart className="ml-2 h-4 w-4" />
          </EmotionalButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-black-soft focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X
                key={'x-' + iconKey}
                className="h-6 w-6"
                data-testid="mobile-menu-close"
              />
            ) : (
              <Menu
                key={'menu-' + iconKey}
                className="h-6 w-6"
                data-testid="mobile-menu-open"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Animated Cards */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-200">
          <div className="px-4 py-6 space-y-5 flex flex-col">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block font-medium rounded-xl shadow nav-mobile-card mobile-nav-card-anim hover:scale-105 transition
                            ${activeLink === link.href ? 'bg-yellow-50 theme-color-secondary border border-yellow-300' : 'bg-white/95'}
                            `}
                style={getAnimDelay(idx)}
                onClick={() => setIsOpen(false)}
              >
                <div className="px-4 py-3 flex items-center space-x-3 text-base">
                  <span>{link.name}</span>
                </div>
              </Link>
            ))}
            <div style={getAnimDelay(navLinks.length)}>
              <EmotionalButton
                href="/contact"
                className="block w-full theme-bg-secondary text-white py-2 px-6 rounded-xl font-medium text-center hover:theme-bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center hire-me-btn shadow mobile-nav-card-anim"
                emotionType="heart"
                numEmotions={2}
                onClick={() => setIsOpen(false)}
              >
                Hire Me <Heart className="ml-2 h-4 w-4" />
              </EmotionalButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
