import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Arjun Krishnan',
    role: 'Software Engineer',
    content: 'Abimel\'s mentorship was game-changing! His practical approach to cybersecurity helped me transition from development to security. The 1:1 sessions were incredibly valuable for clearing doubts and getting career guidance.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: 'March 2025'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Cybersecurity Analyst',
    content: 'Excellent mentor! Abimel helped me understand complex penetration testing concepts with real-world examples. His teaching style is very engaging and he always makes time to answer questions thoroughly.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: 'February 2025'
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'IT Student',
    content: 'Amazing session on ethical hacking! Abimel explained everything from basics to advanced techniques. His practical demonstrations made learning so much easier. Highly recommend for anyone starting in cybersecurity.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: 'January 2025'
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Security Consultant',
    content: 'Great mentor with deep industry knowledge. Abimel helped me prepare for my CISSP certification and provided valuable insights about the cybersecurity industry. His guidance was instrumental in my career growth.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: 'December 2024'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Network Administrator',
    content: 'Fantastic session on network security! Abimel\'s expertise in penetration testing is evident. He provided practical tips that I could immediately apply in my work. Looking forward to more sessions.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: 'November 2024'
  },
  {
    id: 6,
    name: 'Ananya Reddy',
    role: 'Fresh Graduate',
    content: 'Abimel is an excellent teacher! His cybersecurity course content is comprehensive and up-to-date. The hands-on labs and real-world scenarios helped me understand concepts better than any textbook.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: 'October 2024'
  }
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
      >
        ★
      </span>
    ));
  };

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
                    <div className="flex items-center mt-1">
                      {renderStars(testimonial.rating)}
                      <span className="text-white/50 text-sm ml-2">{testimonial.date}</span>
                    </div>
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