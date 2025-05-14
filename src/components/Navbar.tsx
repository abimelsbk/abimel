import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Terminal, Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background-darker shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white" 
            onClick={closeMenu}
          >
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-orbitron font-bold">TapGlobe<span className="text-primary">Academy</span></span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Courses
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/jobs" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Jobs
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Enroll button */}
          <div className="hidden md:block">
            <Link to="/courses" className="btn btn-primary">
              <Terminal className="h-4 w-4 mr-2" />
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen 
            ? 'max-h-[500px] opacity-100 visible bg-background-darker border-b border-white/10' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="container-custom py-4 space-y-2">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block py-2 ${isActive ? 'text-primary font-medium' : 'text-white'}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `block py-2 ${isActive ? 'text-primary font-medium' : 'text-white'}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/courses" 
            className={({ isActive }) => 
              `block py-2 ${isActive ? 'text-primary font-medium' : 'text-white'}`
            }
            onClick={closeMenu}
          >
            Courses
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `block py-2 ${isActive ? 'text-primary font-medium' : 'text-white'}`
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/jobs" 
            className={({ isActive }) => 
              `block py-2 ${isActive ? 'text-primary font-medium' : 'text-white'}`
            }
            onClick={closeMenu}
          >
            Jobs
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `block py-2 ${isActive ? 'text-primary font-medium' : 'text-white'}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <div className="pt-2">
            <Link to="/courses" className="btn btn-primary w-full flex justify-center" onClick={closeMenu}>
              <Terminal className="h-4 w-4 mr-2" />
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;