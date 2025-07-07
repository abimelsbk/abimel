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
    title: 'Introduction to Cybersecurity & Career Paths',
    duration: '3 hrs',
    description: 'Foundation concepts, security principles, cybersecurity landscape, and career opportunities.'
  },
  {
    id: 2,
    title: 'Networking Fundamentals for Cybersecurity',
    duration: '3 hrs',
    description: 'TCP/IP, network infrastructure, protocols, and network security fundamentals.'
  },
  {
    id: 3,
    title: 'Operating Systems: Windows & Linux for Security',
    duration: '3 hrs',
    description: 'Windows and Linux security, essential commands, scripting, and system administration.'
  },
  {
    id: 4,
    title: 'Threat Landscape & Attack Vectors',
    duration: '4 hrs',
    description: 'Current threat landscape, attack vectors, and reconnaissance techniques including OSINT.'
  },
  {
    id: 5,
    title: 'Web & Application Security',
    duration: '5 hrs',
    description: 'Web application vulnerabilities, exploitation techniques, and security testing methodologies.'
  },
  {
    id: 6,
    title: 'Cryptography & Secure Communications',
    duration: '4 hrs',
    description: 'Cryptographic principles, encryption methods, and secure communication protocols.'
  },
  {
    id: 7,
    title: 'Security Operations & Monitoring',
    duration: '4 hrs',
    description: 'SOC operations, SIEM tools, incident response, and security monitoring techniques.'
  },
  {
    id: 8,
    title: 'Cloud Security Fundamentals',
    duration: '3 hrs',
    description: 'Cloud security concepts, AWS/Azure security, and cloud-specific vulnerabilities.'
  },
  {
    id: 9,
    title: 'Ethical Hacking & Pentesting Fundamentals',
    duration: '5 hrs',
    description: 'Penetration testing methodologies, tools, and ethical hacking techniques.'
  },
  {
    id: 10,
    title: 'Governance, Risk & Compliance (GRC)',
    duration: '3 hrs',
    description: 'Security frameworks, compliance requirements, risk management, and governance.'
  },
  {
    id: 11,
    title: 'Emerging Technology Security (AI, LLMs, Hardware, IoT)',
    duration: '4 hrs',
    description: 'Security challenges in AI/ML, IoT devices, hardware security, and emerging technologies.'
  },
  {
    id: 12,
    title: 'Cyber Hygiene & Online Anonymity',
    duration: '3 hrs',
    description: 'Personal security practices, privacy protection, and maintaining online anonymity.'
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
              Cybersecurity Essentials Program
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From Fundamentals to Elite Pentesting in 40 Hours
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
                The Cybersecurity Essentials Program is a comprehensive cybersecurity course designed to take you from the basics 
                to advanced pentesting skills in just 40 hours. Whether you're completely new to the field 
                or looking to enhance your existing knowledge, this course provides the perfect blend of 
                theory and hands-on practice.
              </p>
              <p className="text-white/80 mb-6">
                You'll learn through real-world scenarios, practical labs, and challenges designed to 
                simulate actual security threats. By the end of the course, you'll have the skills to 
                identify vulnerabilities, execute ethical hacks, and implement robust security measures.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">What Makes This Course Special</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 40 Hours of Course Content</h4>
                  <p className="text-white/70 text-sm">Comprehensive curriculum with industrial projects</p>
                </div>
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 Weekly 1-to-1 Doubt Clearing</h4>
                  <p className="text-white/70 text-sm">Personal sessions to address your specific questions</p>
                </div>
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 Resume Building Session</h4>
                  <p className="text-white/70 text-sm">Dedicated session to craft your cybersecurity resume</p>
                </div>
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 LinkedIn Profile Building</h4>
                  <p className="text-white/70 text-sm">Optimize your LinkedIn for cybersecurity opportunities</p>
                </div>
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 Placement Support</h4>
                  <p className="text-white/70 text-sm">No guarantee, but support with latest job opportunities in VAPT and SOC domains</p>
                </div>
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 Freelancing Career Guide</h4>
                  <p className="text-white/70 text-sm">Dedicated session on starting a freelancing career in cybersecurity</p>
                </div>
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 Bug Bounty Journey</h4>
                  <p className="text-white/70 text-sm">Learn how to start your bug bounty hunting career</p>
                </div>
                <div className="bg-background-dark p-4 rounded-lg border border-white/10">
                  <h4 className="font-bold text-primary mb-2">🔹 CTF Participation Guide</h4>
                  <p className="text-white/70 text-sm">Get started with Capture The Flag competitions</p>
                </div>
              </div>
              
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
                    <span className="text-primary font-medium">40 Hours</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <Terminal className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white">Modules</span>
                    </div>
                    <span className="text-primary font-medium">12 Modules</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white">Includes</span>
                    </div>
                    <span className="text-primary font-medium">Certified in Cybersecurity Essentials</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <span className="text-white">Original Price</span>
                    </div>
                    <span className="text-white line-through">₹16,000</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center">
                      <span className="text-white">Offer Price</span>
                    </div>
                    <span className="text-primary font-bold text-xl">₹3,999</span>
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      Limited Time: Next 10 Days Only!
                    </span>
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

      {/* Tools Section */}
      <section className="py-20 bg-cyber-gradient text-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Tools we cover in this course
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Row 1 */}
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-black">KALI LINUX</h3>
                <p className="text-gray-600 text-sm">Penetration Testing OS</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">Nessus</h3>
                <p className="text-gray-600 text-sm">Vulnerability Scanner</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-black">WIRESHARK</h3>
                <p className="text-gray-600 text-sm">Network Protocol Analyzer</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-500">NMAP</h3>
                <p className="text-gray-600 text-sm">Network Discovery Tool</p>
              </div>
            </motion.div>
            
            {/* Row 2 */}
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-orange-600">BurpSuite</h3>
                <p className="text-gray-600 text-sm">Web App Security Testing</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-700">Metasploit</h3>
                <p className="text-gray-600 text-sm">Exploitation Framework</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">EXPLOIT DATABASE</h3>
                <p className="text-gray-600 text-sm">Vulnerability Database</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">AIRCRACK-NG</h3>
                <p className="text-gray-600 text-sm">WiFi Security Auditing</p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-black text-lg font-medium">
              And many more industry-standard tools and frameworks!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Master Cybersecurity Essentials?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our comprehensive 40-hour program with industrial projects, 1:1 mentorship, and career support.
          </p>
          <div className="mb-6">
            <div className="inline-block bg-white/10 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center gap-4 text-white">
                <span className="text-2xl line-through opacity-60">₹16,000</span>
                <span className="text-4xl font-bold text-primary">₹3,999</span>
              </div>
              <p className="text-white/90 mt-2">Limited Time Offer - Next 10 Days Only!</p>
            </div>
          </div>
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