import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ExternalLink, 
  Download 
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Message sent successfully!');
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
              Let's Talk Tech, Collab, or Mentorship.
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions about courses? Want to collaborate? Just reach out!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-background-darker">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 bg-background-dark border ${
                      errors.name ? 'border-error' : 'border-white/10'
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-white`}
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-error-light text-sm">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 bg-background-dark border ${
                      errors.email ? 'border-error' : 'border-white/10'
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-white`}
                    placeholder="john@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-error-light text-sm">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-background-dark border ${
                      errors.message ? 'border-error' : 'border-white/10'
                    } rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-white`}
                    placeholder="How can I help you?"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-error-light text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Email</h3>
                    <a href="mailto:abimelsbk@gmail.com" className="text-white/70 hover:text-primary transition-colors">
                      abimelsbk@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">WhatsApp</h3>
                    <p className="text-white/70">
                      +91 9744770779 
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Location</h3>
                    <p className="text-white/70">
                      Based in Kerala, India
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-medium text-white mb-4">Quick Links</h3>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="https://topmate.io" 
                      className="flex items-center text-white/70 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Book a 1-on-1 on Topmate
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center text-white/70 hover:text-primary transition-colors"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="section-subtitle text-center mx-auto">
            Quick answers to common questions about our courses and services.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <motion.div 
              className="card h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">How do I enroll in a course?</h3>
              <p className="text-white/70">
                You can enroll by visiting the Courses page and clicking on "Enroll Now" for your desired 
                program. Follow the steps to complete registration and payment.
              </p>
            </motion.div>
            
            <motion.div 
              className="card h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Are there prerequisites for courses?</h3>
              <p className="text-white/70">
                Our beginner courses have no prerequisites, but intermediate and advanced programs 
                may require basic understanding of programming or networking concepts.
              </p>
            </motion.div>
            
            <motion.div 
              className="card h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Do you offer refunds?</h3>
              <p className="text-white/70">
                Yes, we offer a 7-day money-back guarantee for all courses if you're not satisfied 
                with the content or experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="card h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">How long do I have access to course materials?</h3>
              <p className="text-white/70">
                Once enrolled, you have lifetime access to all course materials, updates, and the 
                community forum.
              </p>
            </motion.div>
            
            <motion.div 
              className="card h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Do you provide job placement?</h3>
              <p className="text-white/70">
                While we don't guarantee job placement, we provide internship opportunities and job 
                referrals for top-performing students through our industry network.
              </p>
            </motion.div>
            
            <motion.div 
              className="card h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Can I book private mentoring sessions?</h3>
              <p className="text-white/70">
                Yes, you can book 1:1 mentoring sessions via Topmate. These are separate from course 
                enrollment and can be scheduled based on availability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyber-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Take the Next Step?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Enroll in our courses or book a personal mentoring session to accelerate your cybersecurity career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/courses" className="btn bg-white text-primary hover:bg-gray-100">
              View Courses
            </a>
            <a 
              href="https://topmate.io" 
              className="btn btn-outline border-white text-white hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Mentoring
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;