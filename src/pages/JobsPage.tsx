import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  ExternalLink,
  Search,
  Filter,
  Building,
  Wifi
} from 'lucide-react';

interface Job {
  id: number;
  position: string;
  company: string;
  location: string;
  type: string;
  postedBy: string;
  link: string;
  isRemote: boolean;
  tags: string[];
  date: string;
}

const jobs: Job[] = [
  {
    id: 1,
    position: 'SOC Analyst Intern',
    company: 'TCS',
    location: 'Remote',
    type: 'Internship',
    postedBy: 'Abimel',
    link: '#',
    isRemote: true,
    tags: ['Entry-level', 'SOC', 'Monitoring'],
    date: 'June 10, 2025'
  },
  {
    id: 2,
    position: 'Jr. Pentester',
    company: 'HackerTrail',
    location: 'Bangalore',
    type: 'Full-Time',
    postedBy: 'Abimel',
    link: '#',
    isRemote: false,
    tags: ['Pentesting', 'RedTeam', 'Entry-level'],
    date: 'June 8, 2025'
  },
  {
    id: 3,
    position: 'Cybersecurity Analyst',
    company: 'Infosys',
    location: 'Pune',
    type: 'Full-Time',
    postedBy: 'Careers Team',
    link: '#',
    isRemote: false,
    tags: ['Analyst', 'Mid-level', 'Defense'],
    date: 'June 5, 2025'
  },
  {
    id: 4,
    position: 'Security Engineer',
    company: 'Amazon',
    location: 'Remote',
    type: 'Full-Time',
    postedBy: 'Careers Team',
    link: '#',
    isRemote: true,
    tags: ['Cloud', 'AWS', 'Engineering'],
    date: 'June 1, 2025'
  },
  {
    id: 5,
    position: 'Cybersecurity Intern',
    company: 'Microsoft',
    location: 'Hyderabad',
    type: 'Internship',
    postedBy: 'Abimel',
    link: '#',
    isRemote: false,
    tags: ['Entry-level', 'Internship', 'Azure'],
    date: 'May 28, 2025'
  },
  {
    id: 6,
    position: 'Security Consultant',
    company: 'Deloitte',
    location: 'Mumbai',
    type: 'Contract',
    postedBy: 'Careers Team',
    link: '#',
    isRemote: false,
    tags: ['Consulting', 'Senior', 'Compliance'],
    date: 'May 25, 2025'
  }
];

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    remote: false,
    internship: false,
    entryLevel: false,
    postedByAbimel: false
  });
  
  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    // Search filter
    const matchesSearch = searchTerm === '' || 
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Other filters
    const matchesRemote = !filters.remote || job.isRemote;
    const matchesInternship = !filters.internship || job.type === 'Internship';
    const matchesEntryLevel = !filters.entryLevel || job.tags.includes('Entry-level');
    const matchesPostedByAbimel = !filters.postedByAbimel || job.postedBy === 'Abimel';
    
    return matchesSearch && matchesRemote && matchesInternship && matchesEntryLevel && matchesPostedByAbimel;
  });

  const toggleFilter = (filter: keyof typeof filters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter]: !prevFilters[filter]
    }));
  };

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
              Get Hired. Get Paid. Get Ahead.
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Curated cybersecurity and tech opportunities shared by ASBK.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background-darker sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative w-full md:w-auto md:flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full bg-background-dark border border-white/10 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button 
                className={`px-3 py-1 rounded-full border text-sm ${
                  filters.remote 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-white/20 text-white/70'
                }`}
                onClick={() => toggleFilter('remote')}
              >
                <Wifi className="h-3 w-3 inline mr-1" /> Remote
              </button>
              <button 
                className={`px-3 py-1 rounded-full border text-sm ${
                  filters.internship 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-white/20 text-white/70'
                }`}
                onClick={() => toggleFilter('internship')}
              >
                <Briefcase className="h-3 w-3 inline mr-1" /> Internship
              </button>
              <button 
                className={`px-3 py-1 rounded-full border text-sm ${
                  filters.entryLevel 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-white/20 text-white/70'
                }`}
                onClick={() => toggleFilter('entryLevel')}
              >
                <Filter className="h-3 w-3 inline mr-1" /> Entry-level
              </button>
              <button 
                className={`px-3 py-1 rounded-full border text-sm ${
                  filters.postedByAbimel 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-white/20 text-white/70'
                }`}
                onClick={() => toggleFilter('postedByAbimel')}
              >
                <Building className="h-3 w-3 inline mr-1" /> Posted by Abimel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-16 bg-background-dark min-h-[60vh]">
        <div className="container-custom">
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div 
                  key={job.id}
                  className="card p-6 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.position}</h3>
                      <p className="text-primary font-medium mb-2">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-3 text-white/70 text-sm mb-4">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {job.type}
                        </span>
                        {job.isRemote && (
                          <span className="inline-block px-2 py-0.5 bg-success-dark/10 text-success-light rounded-full">
                            Remote
                          </span>
                        )}
                        <span className="text-white/50">Posted: {job.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-0.5 bg-background-darker text-white/70 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <a 
                        href={job.link} 
                        className="btn btn-primary flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-white/70">No jobs found matching your criteria.</p>
              <button 
                className="mt-4 btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    remote: false,
                    internship: false,
                    entryLevel: false,
                    postedByAbimel: false
                  });
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyber-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Looking for Talent?</h2>
              <p className="text-white/90 mb-6">
                If you're an employer looking to hire cybersecurity professionals or interns, 
                get in touch with us to feature your job listing.
              </p>
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Post a Job
              </a>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Need Career Guidance?</h2>
              <p className="text-white/90 mb-6">
                Book a 1:1 session with Abimel to discuss your career goals, resume review, 
                or interview preparation.
              </p>
              <a href="https://topmate.io" className="btn bg-white text-primary hover:bg-gray-100">
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsPage;