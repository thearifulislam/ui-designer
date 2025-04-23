
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import EmotionalButton from './EmotionalButton';

// Animation CSS: Inject into the global or component styles as required
const iconAnimationStyle = `
@keyframes mobileIconEnter {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-90deg);
  }
  70% {
    opacity: 1;
    transform: scale(1.1) rotate(8deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.mobile-navbar-icon-anim {
  animation: mobileIconEnter 0.4s cubic-bezier(.55,1,.38,1.11);
}
`;

// Inject animation styles on mount (works for demo/small projects, use CSS files for larger)
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = iconAnimationStyle;
  // Only insert if not already present
  if (!document.head.querySelector('style[data-navbar-icon-anim]')) {
    style.setAttribute('data-navbar-icon-anim', '1');
    document.head.appendChild(style);
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [iconKey, setIconKey] = useState(0); // For key prop on icon component (trigger re-mount/animation)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    setActiveLink(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blogs' },
    { name: 'FAQs', href: '/faqs' },
  ];

  // Handles icon transitions
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    setIconKey(prev => prev + 1); // force icon re-mount for animation
  };

  // Add appear animation delay for mobile menu items
  const getAnimationDelay = (index: number) => {
    return { animationDelay: `${index * 0.1}s` };
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold theme-color-primary flex items-center group">
          <Heart className="mr-2 text-[var(--color-secondary)] fill-[var(--color-secondary)] heart-bounce" size={20} />
          <span className="text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">Ariful</span>
          <span className="group-hover:text-[var(--color-secondary)] transition-colors">Islam</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium nav-item transition-colors duration-300 nav-item-animation ${
                activeLink === link.href ? 'theme-color-secondary' : ''
              }`}
              style={{
                animationName: 'slideInFromRight',
                animationDuration: '0.5s',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {link.name}
            </Link>
          ))}
          <EmotionalButton
            href="/contact"
            className="theme-bg-secondary text-white py-2 px-6 rounded-full font-medium hover:scale-110 hover:bg-yellow-400 hover:text-green-900 transition-all duration-200 flex items-center hire-me-btn"
            style={{ transition: 'transform 0.25s cubic-bezier(.4,2,.5,1)' }}
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
                className="h-6 w-6 mobile-navbar-icon-anim"
                data-testid="mobile-menu-close"
              />
            ) : (
              <Menu
                key={'menu-' + iconKey}
                className="h-6 w-6 mobile-navbar-icon-anim"
                data-testid="mobile-menu-open"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-10 py-5 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className="block font-medium hover:text-[var(--color-secondary)] animate-fade-in"
                style={getAnimationDelay(index)}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <EmotionalButton
              href="/contact"
              className="block theme-bg-secondary text-white py-2 px-6 rounded-full font-medium text-center hover:theme-bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center animate-fade-in hire-me-btn"
              style={getAnimationDelay(navLinks.length)}
              emotionType="heart"
              numEmotions={2}
              onClick={() => setIsOpen(false)}
            >
              Hire Me <Heart className="ml-2 h-4 w-4" />
            </EmotionalButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

