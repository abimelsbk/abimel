import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { 
  Shield, 
  TerminalSquare, 
  GraduationCap, 
  Users, 
  Wifi, 
  FileCode, 
  Briefcase,
  ChevronRight
} from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FeaturedLogos from '../components/FeaturedLogos';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-hero-pattern bg-cover bg-center min-h-[90vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 text-white leading-tight">
              Cybersecurity Essentials Program
            </h1>
            <div className="text-2xl md:text-3xl font-poppins mb-6 text-primary font-semibold">
              <TypeAnimation
                sequence={[
                  'From Fundamentals to Elite Pentesting in 40 Hours',
                  2000,
                  'Master Ethical Hacking & Penetration Testing',
                  2000,
                  'Learn Red Teaming, Web App & WiFi Attacks',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg text-gray-300 mb-8">
              Become a Cyber Defender. Learn from scratch to expert-level with hands-on projects, 
              mentorship, and career support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn btn-primary">
                <TerminalSquare className="h-5 w-5 mr-2" /> Enroll Now
              </Link>
              <a href="https://topmate.io" className="btn btn-outline">
                Book a 1:1 with Me
              </a>
              <Link to="/courses" className="btn btn-secondary">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute right-10 bottom-10 hidden lg:block">
          <div className="w-40 h-40 border-2 border-primary rounded-full opacity-20 animate-pulse"></div>
          <div className="w-20 h-20 border-2 border-primary rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse animation-delay-1000"></div>
        </div>
      </section>

      {/* Why Learn with Abimel */}
      <section className="py-20 bg-background-darker">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Learn with Abimel?</h2>
          <p className="section-subtitle text-center mx-auto">
            Join thousands of students who have transformed their careers through our expert-led training.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="card hover:transform hover:scale-105 hover:shadow-lg">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TerminalSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Hands-on Labs</h3>
              <p className="text-white/70">
                Practice with real-world environments and scenarios that simulate actual cyber threats and vulnerabilities.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="card hover:transform hover:scale-105 hover:shadow-lg">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Industry-Centric</h3>
              <p className="text-white/70">
                Curriculum constantly updated to align with current threats and industry demands to keep your skills relevant.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="card hover:transform hover:scale-105 hover:shadow-lg">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Personal Mentorship</h3>
              <p className="text-white/70">
                Get 1-on-1 sessions via Topmate to address your specific questions and career guidance from experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Course Highlights</h2>
              <p className="text-lg text-white/70 mb-8">
                Our comprehensive cybersecurity program offers everything you need to launch or advance your career.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded mr-4 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">40 Hours of Cybersecurity Brilliance</h3>
                    <p className="text-white/70">Comprehensive curriculum with industrial projects and hands-on labs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded mr-4 mt-1">
                    <Wifi className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Master Ethical Hacking & PenTesting</h3>
                    <p className="text-white/70">Learn the tools and techniques used by professional hackers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded mr-4 mt-1">
                    <FileCode className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Access to Tools, Scripts, Cheatsheets</h3>
                    <p className="text-white/70">Plus weekly 1:1 doubt clearing sessions and dedicated career guidance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded mr-4 mt-1">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Internships & Job Referrals Available</h3>
                    <p className="text-white/70">Resume building, LinkedIn optimization, and placement support included.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/courses" className="btn btn-primary">
                  View Full Curriculum <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-background-darker p-6 md:p-8 rounded-lg border border-white/10 shadow-xl">
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">Course<span className="text-white"> Details</span></h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Starts</span>
                    <span className="font-semibold text-primary">July 2025</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Duration</span>
                    <span className="font-semibold text-primary">40 Hours</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Format</span>
                    <span className="font-semibold text-primary">Live + Recorded</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Certificate</span>
                    <span className="font-semibold text-primary">Certified in Cybersecurity Essentials</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Modules</span>
                    <span className="font-semibold text-primary">12 Modules</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Original Price</span>
                    <span className="font-semibold text-white line-through">₹16,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">Offer Price</span>
                    <span className="font-semibold text-primary text-xl">₹3,999</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      Limited Time: Next 10 Days Only!
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/courses" className="btn btn-primary w-full justify-center">
                    Enroll Now
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-full h-full bg-cyber-gradient opacity-20 rounded-lg -z-10 transform rotate-3"></div>
              <div className="absolute top-4 right-4 w-full h-full bg-cyber-gradient opacity-10 rounded-lg -z-20 transform -rotate-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-darker">
        <div className="container-custom">
          <h2 className="section-title text-center">What Students Say</h2>
          <p className="section-subtitle text-center mx-auto">
            Real reviews from students who have transformed their careers through our mentorship and courses.
          </p>
          
          <TestimonialCarousel />
          
          <div className="text-center mt-12">
            <a 
              href="https://topmate.io/abimelsbkulumala" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Reviews on Topmate
            </a>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-center mb-12">Featured In</h2>
          <FeaturedLogos />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyber-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Cybersecurity Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our expert-led training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="https://forms.office.com/r/utbeMu8Wqm" className="btn bg-white text-primary hover:bg-gray-100">
              <TerminalSquare className="h-5 w-5 mr-2" /> Enroll Now
            </Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;