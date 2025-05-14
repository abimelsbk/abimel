import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Youtube, 
  Mail, 
  Shield 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-darker pt-16 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-orbitron font-bold">TapGlobe<span className="text-primary">Academy</span></span>
            </Link>
            <p className="text-white/70 mb-4">
              Cybersecurity training, mentorship, and career support from fundamentals to elite pentesting.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-white/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-white/70 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-white/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-white/70 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/70 hover:text-primary transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-white/70 hover:text-primary transition-colors">Jobs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-white/70">abimelsbk@gmail.com</span>
              </li>
              <li>
                <a href="https://topmate.io" className="text-white/70 hover:text-primary transition-colors">Book a 1:1 on Topmate</a>
              </li>
              <li>
                <span className="text-white/70">Based in Kerala, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-3">Subscribe to our monthly cybersecurity newsletter.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-background-dark text-white rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary border border-white/10"
              />
              <button type="submit" className="bg-primary hover:bg-primary-light text-white px-4 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center py-6 border-t border-white/10 text-white/50 text-sm">
          © 2025 Abimel S B Kulumala. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;