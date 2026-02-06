import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Label Anushree',
    role: 'CEO, Handcrafted Fashion',
    content: 'Working with this agency transformed our brand completely. Their strategic approach and creative execution exceeded all expectations, driving growth and engagement.',
    avatar: 'data:image/jpeg;base64,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',
  },
  {
    id: 2,
    name: 'Sadhev ',
    role: 'Marketing Director, Ayurvedic Skincare',
    content: 'The ROI we achieved through their campaigns was phenomenal. They truly understand digital marketing and deliver tangible results every single time.',
    avatar: 'https://static.toiimg.com/thumb/width-400,resizemode-4,msid-124210611/herbal-skincare.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, StyleHub',
    content: 'From concept to execution, they were professional, creative, and incredibly responsive. Our online sales increased by a staggering 200% in just one quarter!',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'VP Marketing, InnovateLabs',
    content: 'Their team brought fresh perspectives and innovative solutions to every challenge we faced. I highly recommend their services to any business looking to scale.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Jessica Williams',
    role: 'Product Manager, NexGen',
    content: 'The user experience design they delivered was intuitive and beautiful. Our customer satisfaction scores have never been higher. An absolute pleasure to work with.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Chris Martinez',
    role: 'CTO, DataStream',
    content: 'Their technical expertise in web development is second to none. They built a scalable and secure platform that has become the backbone of our operations.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < testimonials.length - itemsPerPage;

  const scroll = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'left' && canScrollLeft) {
      newIndex = Math.max(0, currentIndex - 1);
    } else if (direction === 'right' && canScrollRight) {
      newIndex = Math.min(testimonials.length - itemsPerPage, currentIndex + 1);
    }

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      if (scrollContainerRef.current) {
        const card = scrollContainerRef.current.children[newIndex];
        if(card) {
          scrollContainerRef.current.scrollTo({
            left: card.offsetLeft,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase max-w-lg">
            People who <span className="text-accent-purple">changed</span> how they do business
          </h2>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-3 rounded-full bg-[#1E1E2A] border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-3 rounded-full bg-[#1E1E2A] border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div
          ref={scrollContainerRef}
          // Removed -mx-6 and adjusted card width for proper alignment with px-6 on parent
          className="flex flex-nowrap gap-8 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              // Adjusting width to be responsive to the parent's padding
              className="flex-shrink-0 w-[calc(100%-48px)] md:w-[calc(50%-16px)] snap-start"
            >
              <div className="bg-[#1E1E2A] p-8 rounded-2xl h-full flex flex-col border border-white/10">
                <div className="flex items-center mb-6">
                  <img className="w-12 h-12 rounded-full mr-4 object-cover" alt={testimonial.name} src={testimonial.avatar} />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end md:hidden">
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-3 rounded-full bg-[#1E1E2A] border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-50"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-3 rounded-full bg-[#1E1E2A] border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-50"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;