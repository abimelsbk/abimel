import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, FileDown, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Introduction to Cybersecurity',
    duration: '3 hrs',
    description: 'Foundation concepts, security principles, and the cybersecurity landscape.'
  },
  {
    id: 2,
    title: 'Networking & Protocols',
    duration: '3 hrs',
    description: 'Understanding TCP/IP, network infrastructure, and common protocols.'
  },
  {
    id: 3,
    title: 'Linux for Hackers',
    duration: '3 hrs',
    description: 'Essential Linux commands, scripting, and system administration.'
  },
  {
    id: 4,
    title: 'Information Gathering',
    duration: '4 hrs',
    description: 'Reconnaissance techniques, OSINT, and target profiling methods.'
  },
  {
    id: 5,
    title: 'Web App Attacks',
    duration: '5 hrs',
    description: 'Vulnerabilities, exploitation, and security testing of web applications.'
  },
  {
    id: 6,
    title: 'WiFi Attacks & Tools',
    duration: '4 hrs',
    description: 'Wireless network security, attack vectors, and defense strategies.'
  },
  {
    id: 7,
    title: 'Social Engineering',
    duration: '2 hrs',
    description: 'Human exploitation techniques, phishing, and psychological manipulation.'
  },
  {
    id: 8,
    title: 'Advanced Exploitation',
    duration: '3 hrs',
    description: 'Complex attack chains, privilege escalation, and post-exploitation.'
  },
  {
    id: 9,
    title: 'Reporting & Certification Prep',
    duration: '2 hrs',
    description: 'Professional documentation, findings presentation, and exam preparation.'
  }
];

const CoursesPage: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-background-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Cybersecurity 101 by ASBK
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From Fundamentals to Elite Pentesting in 30 Hours
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#modules" className="btn btn-primary">
                <Terminal className="h-5 w-5 mr-2" /> View Modules
              </a>
              <a href="#" className="btn btn-outline">
                <Calendar className="h-5 w-5 mr-2" /> Book a Session
              </a>
              <a href="#" className="btn btn-secondary">
                <FileDown className="h-5 w-5 mr-2" /> Download Curriculum
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-background-darker">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Course Overview</h2>
              <p className="text-white/80 mb-6">
                Cybersecurity 101 is a comprehensive cybersecurity program designed to take you from the basics 
                to advanced pentesting skills in just 30 hours. Whether you're completely new to the field 
                or looking to enhance your existing knowledge, this course provides the perfect blend of 
                theory and hands-on practice.
              </p>
              <p className="text-white/80 mb-6">
                You'll learn through real-world scenarios, practical labs, and challenges designed to 
                simulate actual security threats. By the end of the course, you'll have the skills to 
                identify vulnerabilities, execute ethical hacks, and implement robust security measures.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">What You'll Learn</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Foundations of cybersecurity and ethical hacking principles</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Network security fundamentals and vulnerability assessment</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Web application penetration testing techniques</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Wireless network security and attack methodologies</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Social engineering tactics and defense strategies</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Professional security reporting and documentation</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-white">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white">Start Date</span>
                    </div>
                    <span className="text-primary font-medium">July 2025</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white">Duration</span>
                    </div>
                    <span className="text-primary font-medium">30 Hours</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <Terminal className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white">Modules</span>
                    </div>
                    <span className="text-primary font-medium">9 Modules</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white">Includes</span>
                    </div>
                    <span className="text-primary font-medium">Certificate</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="#" className="btn btn-primary w-full justify-center">
                    Enroll Now
                  </a>
                  <a href="#" className="btn btn-outline w-full justify-center mt-3">
                    Download Syllabus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 bg-background-dark">
        <div className="container-custom">
          <h2 className="section-title text-center">Course Modules</h2>
          <p className="section-subtitle text-center mx-auto">
            A structured learning path to master cybersecurity skills.
          </p>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/30 hidden md:block"></div>
              
              {/* Modules */}
              {modules.map((module, index) => (
                <motion.div 
                  key={module.id}
                  className="mb-8 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    {/* Number circle */}
                    <div className="w-16 h-16 rounded-full bg-background-darker border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-xl font-bold text-primary">{module.id}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="card flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-white">{module.title}</h3>
                        <div className="flex items-center mt-2 md:mt-0">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span className="text-primary text-sm">{module.duration}</span>
                        </div>
                      </div>
                      <p className="text-white/70">{module.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Begin Your Cybersecurity Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our comprehensive course and gain the skills needed to excel in the cybersecurity industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn bg-white text-primary hover:bg-gray-100">
              <Terminal className="h-5 w-5 mr-2" /> Enroll Now
            </a>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;