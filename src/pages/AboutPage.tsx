import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Github, 
  Youtube, 
  ExternalLink,
  Calendar, 
  Users, 
  Trophy 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const timelineItems = [
    {
      year: 2023,
      title: 'Founded Silicon Society',
      description: 'Created a vibrant community for tech learners and builders, focusing on cybersecurity education and skill development.'
    },
    {
      year: 2024,
      title: 'Ranked #38 Top Cybersecurity Creator',
      description: 'Recognized by Favikon among Top 200 Cybersecurity Creators for impactful educational content.'
    },
    {
      year: 2025,
      title: 'Launched ASBK 2999',
      title: 'Launched Cybersecurity Essentials Program & Tapglobe Solutions',
      description: 'Created comprehensive 40-hour cybersecurity course and founded innovation lab for security, AI, and education tools.'
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-background-dark">
        <div className="container-custom">
          <motion.div 
            className="flex flex-col md:flex-row gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/3">
              <motion.div 
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden border-2 border-primary">
                  <img 
                    src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Abimel S B Kulumala"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl z-[-1]"></div>
                <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-primary/50 rounded-2xl z-[-2]"></div>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-2/3"
              {...fadeIn}
            >
              <h1 className="section-title">
                About the Trainer
                <span className="block text-primary mt-2">Ranked #38 Among Top 200 Cybersecurity Creators</span>
              </h1>
              <p className="text-xl text-white/80 mb-6">
                You're learning from one of India's rising cybersecurity educators and creators. 
                Your trainer is ranked #38 among Favikon's Top 200 Cybersecurity Creators, 
                recognized for delivering impactful content that bridges industry knowledge with student learning.
              </p>
              <p className="text-white/70 mb-6">
                You've probably seen his insights on LinkedIn News, where he's been featured for his unique takes 
                on cybersecurity and emerging threats. His expertise even caught the attention of global tech 
                giants—he received an inbound cybersecurity job offer from Google.
              </p>
              
              <div className="bg-background-darker p-6 rounded-lg border border-primary/20 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">🚀 Mission: Democratize Cybersecurity Education</h3>
                <p className="text-white/80 mb-4">With a mission to democratize cybersecurity education, your trainer has:</p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Taught over 10,000 students through workshops, sessions, and hands-on bootcamps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Personally mentored more than 400 students, helping them crack internships, jobs, and research opportunities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background-darker p-6 rounded-lg border border-primary/20 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Founded Two Ventures:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🚀</span>
                    <div>
                      <h4 className="font-bold text-primary">Silicon Society</h4>
                      <p className="text-white/70">A vibrant community for tech learners and builders</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🧠</span>
                    <div>
                      <h4 className="font-bold text-primary">Tapglobe Solutions</h4>
                      <p className="text-white/70">An innovation lab for security, AI, and education tools</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30 mb-6">
                <p className="text-white font-medium italic">
                  "This course isn't just theory. You'll learn from someone who's lived it, built it, 
                  and is actively shaping the future of cybersecurity education."
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://linkedin.com" 
                  className="btn btn-outline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
                </a>
                <a 
                  href="https://github.com" 
                  className="btn btn-outline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" /> GitHub
                </a>
                <a 
                  href="https://youtube.com" 
                  className="btn btn-outline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5 mr-2" /> YouTube
                </a>
                <a 
                  href="https://topmate.io" 
                  className="btn btn-primary flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 mr-2" /> Topmate
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-darker">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Recognition & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-4xl font-bold text-white mb-2">#38</h3>
              <p className="text-white/70">Favikon's Top 200 Cybersecurity Creators</p>
            </motion.div>
            
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">10K+</h3>
              <p className="text-white/70">Students Trained</p>
            </motion.div>
            
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-4xl font-bold text-white mb-2">400+</h3>
              <p className="text-white/70">Students Personally Mentored</p>
            </motion.div>
          </div>
          
          {/* Additional Recognition */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-bold text-white mb-2">Featured on LinkedIn News</h3>
              <p className="text-white/70">Recognized for unique insights on cybersecurity and emerging threats</p>
            </motion.div>
            
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Google Job Offer</h3>
              <p className="text-white/70">Received inbound cybersecurity job offer from Google</p>
            </motion.div>
          </div>
          
          {/* Reviews Summary */}
          <div className="mt-16 text-center">
            <motion.div 
              className="card max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Trusted by Students Worldwide</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400 text-2xl mr-3">
                  ★★★★★
                </div>
                <span className="text-white text-xl font-semibold">5.0/5</span>
              </div>
              <p className="text-white/70 mb-6">
                Based on 50+ reviews from students who have taken our courses and mentorship sessions.
              </p>
              <a 
                href="https://topmate.io/abimelsbkulumala" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read All Reviews
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <h2 className="section-title text-center">My Journey</h2>
          <p className="section-subtitle text-center mx-auto">
            A timeline of key milestones in my professional career.
          </p>
          
          <div className="relative mt-16 max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Year bubble */}
                <div className="absolute left-[-12px] md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary transform md:translate-x-[-50%] z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-6">
                  <div className="card h-full">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
                
                {/* Empty div for layout (alternating sides) */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Connect!</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're interested in courses, collaborations, or just have questions, 
            I'm here to help you navigate the cybersecurity world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Me
            </Link>
            <Link to="/courses" className="btn btn-outline border-white text-white hover:bg-white/10">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;