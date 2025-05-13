import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, Search, Filter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  readTime: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Tools Every Beginner Hacker Should Learn',
    excerpt: 'A guide to the essential tools that will help you get started in cybersecurity and ethical hacking.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Tools', 'Beginner', 'Hacking'],
    readTime: '5 min',
    date: 'Mar 15, 2025'
  },
  {
    id: 2,
    title: 'WiFi Phishing: A Real-World Simulation',
    excerpt: 'Learn how attackers create fake access points to steal credentials and how to protect yourself.',
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['WiFi', 'Phishing', 'RedTeaming'],
    readTime: '8 min',
    date: 'Feb 22, 2025'
  },
  {
    id: 3,
    title: 'Chronicle SOAR Explained for Newbies',
    excerpt: 'A beginner-friendly introduction to Google\'s Security Orchestration, Automation, and Response platform.',
    image: 'https://images.pexels.com/photos/4480989/pexels-photo-4480989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Cloud', 'SOAR', 'Google'],
    readTime: '6 min',
    date: 'Jan 10, 2025'
  },
  {
    id: 4,
    title: 'How I Taught 2000+ Students Cybersecurity Remotely',
    excerpt: 'My journey teaching cybersecurity to students from all over India during the pandemic.',
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Teaching', 'Remote', 'Education'],
    readTime: '7 min',
    date: 'Dec 28, 2024'
  },
  {
    id: 5,
    title: 'Securing Your Smart Home: Practical Tips',
    excerpt: 'Simple but effective strategies to protect your IoT devices from common vulnerabilities.',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['IoT', 'SmartHome', 'Security'],
    readTime: '4 min',
    date: 'Nov 15, 2024'
  },
  {
    id: 6,
    title: 'The Rise of AI in Cybersecurity Defenses',
    excerpt: 'How artificial intelligence is transforming the way we detect and respond to threats.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['AI', 'MachineLearning', 'Defense'],
    readTime: '9 min',
    date: 'Oct 5, 2024'
  }
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

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
              Deep Dives. Personal Hacks. Industry Lessons.
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore articles on cybersecurity, ethical hacking, and technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background-darker sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search input */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-background-dark border border-white/10 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter by tag */}
            <div className="relative">
              <button className="flex items-center space-x-2 bg-background-dark border border-white/10 rounded-md py-2 px-4 text-white">
                <Filter className="h-4 w-4" />
                <span>{selectedTag || 'Filter by tag'}</span>
              </button>
              
              {/* Tag dropdown */}
              <div className="absolute top-full left-0 right-0 mt-2 bg-background-dark border border-white/10 rounded-md py-2 z-10">
                <div 
                  className={`px-3 py-1 cursor-pointer ${selectedTag === null ? 'text-primary' : 'text-white hover:bg-background-darker'}`}
                  onClick={() => setSelectedTag(null)}
                >
                  All Tags
                </div>
                {allTags.map(tag => (
                  <div 
                    key={tag}
                    className={`px-3 py-1 cursor-pointer ${selectedTag === tag ? 'text-primary' : 'text-white hover:bg-background-darker'}`}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  className="card overflow-hidden hover:transform hover:scale-[1.03]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          onClick={() => setSelectedTag(tag)}
                        >
                          <Tag className="h-3 w-3 inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                    <p className="text-white/70 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-white/50">
                      <span>{post.date}</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime} read
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-white/70">No articles found matching your criteria.</p>
              <button 
                className="mt-4 btn btn-primary"
                onClick={() => { setSearchTerm(''); setSelectedTag(null); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-cyber-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated with Our Newsletter</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest cybersecurity tips, tutorials, and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-md focus:outline-none"
            />
            <button className="bg-background-dark text-white px-6 py-3 rounded-r-md hover:bg-background-darker transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;