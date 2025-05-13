import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Devika T.',
    role: 'Final Year BTech',
    content: 'ASBK made cybersecurity click for me! The labs were amazing and provided real-world experience. I can now confidently apply for security roles knowing I have practical skills.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Joel K.',
    role: 'Fresh Graduate',
    content: 'From zero to internship-ready in 6 weeks! The course structure is perfect for beginners, and the mentorship sessions helped me navigate my career path.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Sanjana R.',
    role: 'Security Analyst',
    content: 'The advanced modules on Web App Attacks completely transformed my approach to security testing. Abimel\'s teaching style makes complex concepts easy to grasp.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-12">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-full px-4"
            >
              <div className="card p-8 md:p-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-primary">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 -translate-x-2 -translate-y-2" />
                  <p className="text-white/80 italic relative z-10 text-lg">{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 space-x-2">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-background-dark hover:bg-primary/20 text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-colors ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-background-dark hover:bg-primary/20 text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;