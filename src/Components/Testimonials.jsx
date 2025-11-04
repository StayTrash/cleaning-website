"use client";
import React from "react";
import HelloIcon from "./Icons/HelloIcon";

const Testimonials = () => {
  // Demo testimonials - for showcase purposes only
  const testimonials = [
    {
      id: 1,
      name: "Demo Customer 1",
      role: "Sample Role, Location",
      avatar: "DC",
      rating: 5,
      text: "This is a demo testimonial to showcase the testimonials section. In a real application, this would be replaced with actual customer feedback and reviews from verified clients.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 2,
      name: "Demo Customer 2",
      role: "Sample Role, Location",
      avatar: "DC",
      rating: 5,
      text: "Demo content placeholder for testimonials section. This demonstrates how customer reviews and feedback would appear on the landing page.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 3,
      name: "Demo Customer 3",
      role: "Sample Role, Location",
      avatar: "DC",
      rating: 5,
      text: "Placeholder testimonial text for demonstration purposes. Replace with real customer reviews in production version of the application.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 4,
      name: "Demo Customer 4",
      role: "Sample Role, Location",
      avatar: "DC",
      rating: 5,
      text: "This is example content showing how testimonials would be displayed. Actual customer feedback would be displayed here in a live version.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 5,
      name: "Demo Customer 5",
      role: "Sample Role, Location",
      avatar: "DC",
      rating: 5,
      text: "Demo testimonial for showcase purposes. This section demonstrates the testimonials carousel animation and layout structure.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 6,
      name: "Demo Customer 6",
      role: "Sample Role, Location",
      avatar: "DC",
      rating: 5,
      text: "Placeholder content for testimonials section. Real customer reviews and ratings would replace this demo content in production.",
      bgColor: "bg-[#E1F1E7]",
    },
  ];

  // Create multiple duplicates for infinite scroll effect
  const createInfiniteArray = (arr, multiplier = 4) => {
    const result = [];
    for (let i = 0; i < multiplier; i++) {
      result.push(...arr.map(item => ({ ...item, id: `${item.id}-${i}` })));
    }
    return result;
  };

  // Split testimonials for desktop (3 columns) with duplicates
  const infiniteTestimonials = createInfiniteArray(testimonials);
  const column1 = infiniteTestimonials.filter((_, index) => index % 3 === 0);
  const column2 = infiniteTestimonials.filter((_, index) => index % 3 === 1);
  const column3 = infiniteTestimonials.filter((_, index) => index % 3 === 2);

  // For mobile: Use all testimonials in both rows with duplicates
  const infiniteTestimonialsForMobile = createInfiniteArray(testimonials);
  const row1 = infiniteTestimonialsForMobile; // All testimonials in both rows
  const row2 = infiniteTestimonialsForMobile; // All testimonials in both rows

  // For mobile: Create separate arrays for left and right moving carousels
  const mobileInfiniteTestimonials = createInfiniteArray(testimonials, 6);

  const TestimonialCard = ({ testimonial, duplicateKey }) => (
    <div
      key={duplicateKey || testimonial.id}
      className={`${testimonial.bgColor} flex flex-col justify-between items-between p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 w-80 md:w-auto`}
    >
      {/* Testimonial Text */}
      <p className="text-gray-700 font-work-sans italic text-xs md:text-sm leading-relaxed mb-6 line-clamp-6">
        {testimonial.text}
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
  <section className=" bg-[#FAFFFA] py-6 md:py-20 overflow-hidden">
      <div className="container mx-auto md:w-10/12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2">
              <HelloIcon />
            </div>
            <span className="text-[#00603A] font-semibold font-serif text-lg">
              Our Testimonials
            </span>
          </div>

          <h2 className="md:hidden block text-3xl lg:text-6xl font-semibold text-[#1a1a1a] leading-tight mb-6">
            Voices That Reflect the Shine
          </h2>
          <h2 className="hidden md:!block text-3xl lg:text-6xl font-semibold text-[#1a1a1a] leading-tight mb-6">
            Voices That Reflect the
            <br />
            Shine
          </h2>
        </div>

        {/* Mobile Testimonials Carousel (Two horizontal rows) */}
        <div className="md:hidden relative h-[500px] overflow-hidden">
          {/* Gradient overlays for smooth transition */}
          {/* <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-[#FAFFFA] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[#FAFFFA] to-transparent z-10"></div> */}

          <div className="flex flex-col gap-6 h-full justify-center">
            {/* First Carousel - Moving Right */}
            <div className="overflow-hidden">
              <div className="animate-mobile-scroll-right flex gap-6">
                {mobileInfiniteTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`mobile-right-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    duplicateKey={`mobile-right-${testimonial.id}-${index}`}
                  />
                ))}
              </div>
            </div>

            {/* Second Carousel - Moving Left */}
            <div className="overflow-hidden">
              <div className="animate-mobile-scroll-left flex gap-6">
                {mobileInfiniteTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`mobile-left-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    duplicateKey={`mobile-left-${testimonial.id}-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Testimonials Carousel (Vertical) */}
        <div className="hidden md:block relative h-[600px] overflow-hidden">
          {/* Gradient overlays for smooth transition */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FAFFFA] to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFFFA] to-transparent z-10"></div>

          {/* Three columns with alternating animations */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1 - Scroll Up */}
            <div className="animate-scroll-up">
              <div className="flex flex-col gap-6">
                {column1.map((testimonial, index) => (
                  <TestimonialCard
                    key={`col1-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    duplicateKey={`col1-${testimonial.id}-${index}`}
                  />
                ))}
              </div>
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="animate-scroll-down">
              <div className="flex flex-col gap-6">
                {column2.map((testimonial, index) => (
                  <TestimonialCard
                    key={`col2-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    duplicateKey={`col2-${testimonial.id}-${index}`}
                  />
                ))}
              </div>
            </div>

            {/* Column 3 - Scroll Up (only on large screens) */}
            <div className="animate-scroll-up hidden lg:block">
              <div className="flex flex-col gap-6">
                {column3.map((testimonial, index) => (
                  <TestimonialCard
                    key={`col3-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    duplicateKey={`col3-${testimonial.id}-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop animations (unchanged from base code) */
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-75%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-75%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Mobile horizontal animations */
        @keyframes mobile-scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes mobile-scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Animation classes */
        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 5s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 5s linear infinite;
        }

        .animate-mobile-scroll-right {
          animation: mobile-scroll-right 40s linear infinite;
        }

        .animate-mobile-scroll-left {
          animation: mobile-scroll-left 40s linear infinite;
        }

        /* Hover pause for all animations */
        .animate-scroll-up:hover,
        .animate-scroll-down:hover,
        .animate-scroll-right:hover,
        .animate-scroll-left:hover,
        .animate-mobile-scroll-right:hover,
        .animate-mobile-scroll-left:hover {
          animation-play-state: paused;
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials