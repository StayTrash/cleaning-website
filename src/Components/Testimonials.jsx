"use client";
import React from "react";
import HelloIcon from "./Icons/HelloIcon";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nikita Shah",
      role: "Software Engineer, Ahmedabad",
      avatar: "NS",
      rating: 5,
      text: "As someone who works late hours, I hardly get time to manage household chores. True Clean came as a blessing. They cleaned every corner of my flat with complete care. What I liked most was the freshness I felt after the cleaning—it wasn't just dusting, it actually felt hygienic and organized. I will definitely call them again.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 2,
      name: "Komal Trivedi",
      role: "College Lecturer, Surat",
      avatar: "KT",
      rating: 5,
      text: "I recently moved into an apartment on rent in Surat and required a full cleaning before moving in. True Clean did a superb job cleaning the kitchen, bathroom and general living area. They were quick, safe, and reliable. I loved the ease of booking the service online and just enjoying the worry-free cleanliness. I would definitely recommend them!",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 3,
      name: "Priya Desai",
      role: "Housewife, Bharuch",
      avatar: "PD",
      rating: 5,
      text: "As a mother of two, I am always concerned about the products used during cleaning. When I learned that True Clean only uses eco-friendly solutions, that put my mind at ease. The crew were timely, professional, and detailed. My home smelled good and sparkled clean. I didn't even have to give the crew any guidance, which was helpful.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 4,
      name: "Kavita Modi",
      role: "Marketing Executive, Surat",
      avatar: "KM",
      rating: 5,
      text: "True Clean has made my life so much easier. Their regular cleaning keeps my flat tidy without me worrying. The staff is polite and respectful of my time and space. I especially appreciate that their products don't leave any harsh smell, only freshness. For working professionals like me, this is a service we can trust.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 5,
      name: "Sneha Gohil",
      role: "Event Planner, Vadodara",
      avatar: "SG",
      rating: 5,
      text: "True Clean is reliable and efficient. I had guests arriving the same evening, and they managed to clean the entire home on short notice. The staff worked quietly and finished right on time. I was amazed at how fresh and clean the home looked afterward. Their system and professionalism make them stand out from others.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 6,
      name: "Dr. Nilesh Patel",
      role: "Owner, Clinic, Bharuch",
      avatar: "NP",
      rating: 5,
      text: "We have a small clinic in Bharuch and we wanted to have a thorough clean by professionals. True Clean's team was careful and made sure everything looked tidy and hygienic. They practised all the safety protocols and used safe products. Our patients noticed the change the next day and commented on how fresh it felt afterwards. I am very happy with their service.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 7,
      name: "Pooja Deshmukh",
      role: "HR Manager, Vadodara",
      avatar: "PD",
      rating: 5,
      text: "I was quite impressed with the professionalism of True Clean. The whole process from booking to the final clean was seamless, and all of the staff members were pleasant and hardworking. They provided a deep cleaning service and were able to clean areas I did not think would shine again such as kitchen racks and bathroom corners. Their commitment to use eco-friendly products makes me feel more confident in their services. Great service overall!",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 8,
      name: "Deepak Trivedi",
      role: "Secretary of the Society, Ahmedabad",
      avatar: "DT",
      rating: 5,
      text: "Our society recommended True Clean for the cleaning of shared spaces and the difference was obvious. The staircases, lifts and the lobby were all left looking immaculate. The staff worked quietly not disturbing residents, and completed the job on time. I'll be hiring them for my flat in the future as well. They're very professional and organized.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 9,
      name: "Meena Vyas",
      role: "College Professor, Ahmedabad",
      avatar: "MV",
      rating: 5,
      text: "True Clean has become my regular choice for cleaning services. I love how professional and organized their staff is. They arrive on time, follow a proper system, and finish exactly as promised. My home feels not just clean but refreshed. It saves me so much energy and time. I'm happy to recommend them to my friends and family.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 10,
      name: "Ananya Desai",
      role: "Interior Designer, Surat",
      avatar: "AD",
      rating: 5,
      text: "With my busy schedule, regular cleaning is difficult to manage. True Clean's recurring cleaning service is exactly what I needed. Their staff is reliable, and I never have to supervise. They leave my home spotless every time, and I can trust them completely. It feels good to come home to a fresh and neat space.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 11,
      name: "Manoj Thakkar",
      role: "Engineer, Bharuch",
      avatar: "MT",
      rating: 5,
      text: "The service we received from True Clean was excellent. The scheduling was effortless and included clear rates, and the team showed up right on time. They worked diligently and did a thorough job, even in areas that we often forget to clean. The staff were polite and explained what they were doing during the cleaning, which provided reassurance. Once they left, our house felt new again. I highly recommend them to anyone.",
      bgColor: "bg-[#E1F1E7]",
    },
    {
      id: 12,
      name: "Kruti Joshi",
      role: "School Teacher, Vadodara",
      avatar: "KJ",
      rating: 5,
      text: "True Clean has really simplified my life. Earlier, I used to spend hours cleaning on weekends, but now I can simply book them and relax. Their team is polite, trained, and efficient. They make sure every corner is spotless, and I don't have to worry about anything. My family loves the freshness after every session. Excellent service!",
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