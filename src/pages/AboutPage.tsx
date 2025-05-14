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
      year: 2022,
      title: 'Lead Communities of Google and Microsoft',
      description: 'Founded a community of tech enthusiasts focusing on cybersecurity education.'
    },
    {
      year: 2023,
      title: 'Started Silicon Society',
      description: 'Founded a community of tech enthusiasts focusing on cybersecurity education.'
    },
    {
      year: 2023,
      title: 'Delivered Session at Microsoft Office',
      description: 'Founded a community of tech enthusiasts focusing on cybersecurity education.'
    },
    {
      year: 2024,
      title: 'Gave 35+ workshops across India',
      description: 'Conducted hands-on cybersecurity workshops at multiple universities and tech events.'
    },
    {
      year: 2025,
      title: 'Still training 10000+ Students',
      description: 'Creating an afffordable cybersecurity course for aspiring security professionals.'
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
                Meet Abimel
                <span className="block text-primary mt-2">Educator. Builder. Hacker.</span>
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Cybersecurity researcher, community leader, and educator with a passion for 
                helping students transition into skilled professionals.
              </p>
              <p className="text-white/70 mb-6">
                Abimel has trained 10,000+ learners through events, workshops, and courses. 
                With a foundation in real-world pentesting, he also leads projects in cloud 
                security, DevOps AI, and ethical hacking. And Abimel is a linkedin Personal branding Strategist
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://www.linkedin.com/in/abimelsbk/" 
                  className="btn btn-outline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
                </a>
                <a 
                  href="https://github.com/abimelsbk" 
                  className="btn btn-outline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" /> GitHub
                </a>
                <a 
                  href="https://medium.com/@abimelsbkulumala" 
                  className="btn btn-outline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5 mr-2" /> Medium
                </a>
                <a 
                  href="https://topmate.io/abimelsbkulumala" 
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">3+</h3>
              <p className="text-white/70">Years in Cybersecurity</p>
            </motion.div>
            
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-white/70">Students Trained</p>
            </motion.div>
            
            <motion.div 
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">35+</h3>
              <p className="text-white/70">Workshops Conducted</p>
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