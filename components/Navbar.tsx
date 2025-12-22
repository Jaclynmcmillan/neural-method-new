import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity } from 'lucide-react';
import { NavChild } from '../types';
import Logo from './Logo';

const solutions: NavChild[] = [
  { label: 'AI Consulting Services', description: 'Automation, workflows, and strategic AI implementation.', path: '/solutions/ai-integrations' },
  { label: 'Custom AI Platforms', description: 'Secure, domain-specific AI infrastructure for enterprise.', path: '/solutions/custom-ai-platform' },
  { label: 'Brand Identity & Creative Systems', description: 'Automated visual systems and living brand identities.', path: '/solutions/brand-identity' },
  { label: 'Web App Development', description: 'High-performance, scalable full-stack applications.', path: '/solutions/web-app-development' },
  { label: 'App Development', description: 'Native iOS and Android mobile experiences.', path: '/solutions/app-development' },
  { label: 'Strategic Web Design', description: 'Marketing sites designed for conversion and impact.', path: '/solutions/web-design' },
  { label: 'Growth & Marketing', description: 'SEO, technical growth, and AI content strategy.', path: '/solutions/growth-and-marketing' },
  { label: 'Talent Services', description: 'Engineering placements and fractional leadership.', path: '/solutions/talent-services' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group relative z-50"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            <Logo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
            <span className="font-montserrat font-bold text-2xl tracking-tight text-white group-hover:text-white/90 transition-colors">Neural Method</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center font-medium transition-colors ${dropdownOpen ? 'text-accent' : 'text-neutral-light hover:text-accent'}`}
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-80 bg-secondary rounded-xl shadow-2xl border border-white/5 overflow-hidden animate-fade-in-down p-2">
                  <div className="grid gap-1">
                    {solutions.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-4 py-3 rounded-lg hover:bg-primary/50 group transition-colors"
                      >
                        <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-neutral-light/60 mt-0.5">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-neutral-light hover:text-accent font-medium transition-colors">
              About
            </Link>

            <Link 
              to="/architect" 
              className={`flex items-center gap-2 font-medium transition-colors ${location.pathname === '/architect' ? 'text-accent' : 'text-neutral-light hover:text-accent'}`}
            >
              <Activity className="w-4 h-4" />
              Free Assessment
            </Link>

            <Link to="/contact" className="group">
              <span className="px-5 py-2.5 rounded-full border border-accent text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 font-semibold text-sm">
                Contact
              </span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-light hover:text-accent p-2 focus:outline-none relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 md:hidden bg-primary border-t border-secondary overflow-y-auto h-[calc(100vh-5rem)]">
          <div className="flex flex-col px-4 pt-4 pb-12 space-y-2">
            <div className="space-y-1">
              <button
                onClick={toggleMobileDropdown}
                className="w-full text-left px-3 py-4 text-lg text-neutral-light hover:text-accent font-medium flex justify-between items-center rounded-lg hover:bg-white/5 transition-colors border-b border-white/5"
              >
                Solutions
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 space-y-1 bg-white/5 rounded-lg my-2 py-2 animate-fade-in">
                  {solutions.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={handleMobileLinkClick}
                      className="block px-3 py-3 text-sm text-neutral-light/90 hover:text-accent border-l-2 border-transparent hover:border-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={handleMobileLinkClick}
              className="block px-3 py-4 text-lg text-neutral-light hover:text-accent font-medium rounded-lg hover:bg-white/5 transition-colors border-b border-white/5"
            >
              About
            </Link>

            <Link
              to="/architect"
              onClick={handleMobileLinkClick}
              className="block px-3 py-4 text-lg text-accent hover:text-white font-medium rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 flex items-center gap-2"
            >
              <Activity className="w-5 h-5" />
              Free Assessment
            </Link>
            
            <div className="pt-6 mt-auto">
              <Link
                to="/contact"
                onClick={handleMobileLinkClick}
                className="block w-full text-center px-4 py-4 bg-accent text-primary font-bold text-lg rounded-xl hover:bg-white transition-colors shadow-[0_0_15px_rgba(56,182,255,0.3)]"
              >
                Contact Us
              </Link>
            </div>
            <div className="h-20"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;