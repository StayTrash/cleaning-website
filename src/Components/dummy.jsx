"use client";
import React, { useState, useEffect } from "react";
import HelloIcon from "./Icons/HelloIcon";
import HomeBrushIocn from "./Icons/HomeBrushIocn";

const ServicesSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const services = [
    {
      id: 1,
      title: "Task-Based",
      image: "/Images/task-based.png",
      description: "Customized cleaning tasks tailored to your specific needs"
    },
    {
      id: 2,
      title: "Specialty",
      image: "/Images/specialty.png", 
      description: "Specialized cleaning services for unique requirements"
    },
    {
      id: 3,
      title: "Recurring",
      image: "/Images/recurring.png",
      description: "Regular cleaning schedules to maintain your space"
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Initial Contact and Booking",
      icon: <HomeBrushIocn />,
      step: 1
    },
    {
      id: 2,
      title: "Pre-Cleaning Preparation",
      icon: <HomeBrushIocn />,
      step: 2
    },
    {
      id: 3,
      title: "The Cleaning Session",
      icon: <HomeBrushIocn />,
      step: 3
    },
    {
      id: 4,
      title: "Post-Cleaning",
      icon: <HomeBrushIocn />,
      step: 4
    }
  ];

  // Auto-rotate carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);

  // Animate progress line
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + (100 / 6); // 6 seconds total cycle (2 seconds per image * 3 images)
      });
    }, 333); // Update every 333ms for smooth animation

    return () => clearInterval(progressInterval);
  }, []);

  const getImageStyle = (index) => {
    if (index === currentIndex) {
      return "w-80 h-80 z-20 scale-110 opacity-100";
    } else if (index === (currentIndex + 1) % services.length) {
      return "w-64 h-64 z-10 scale-90 opacity-80 translate-x-8";
    } else {
      return "w-48 h-48 z-0 scale-75 opacity-60 -translate-x-8";
    }
  };

  return (
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto w-10/12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2">
              <HelloIcon />
            </div>
            <span className="text-[var(--accent-strong)] font-serif font-semibold text-lg">
              Our Services
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-semibold text-[#1a1a1a] leading-tight mb-6">
            Reliable Cleaning,<br />
            Designed Around You
          </h2>
        </div>

        {/* Image Carousel Section */}
        <div className="relative mb-20">
          <div className="flex items-center justify-center relative h-96">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute transition-all duration-500 ease-in-out ${getImageStyle(index)}`}
                style={{
                  clipPath: index === currentIndex 
                    ? "polygon(0% 0%, calc(100% - 60px) 0%, 100% 60px, 100% 100%, 60px 100%, 0% calc(100% - 60px))"
                    : "polygon(0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 40px 100%, 0% calc(100% - 40px))"
                }}
              >
                <div className="relative w-full h-full bg-primary rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-full">
                    <span className="font-semibold text-sm">{service.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-primary rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-8 right-8">
            <div className="w-32 h-32 bg-white/10 rounded-full"></div>
          </div>
          <div className="absolute bottom-8 left-8">
            <div className="w-20 h-20 bg-white/5 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2">
                <HelloIcon />
              </div>
              <span className="text-tertiary font-semibold font-serif text-lg">
                How it work
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Behind Every Shine, There&apos;s a System
            </h3>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-white/20 rounded-full">
              <div 
                className="h-full bg-tertiary rounded-full transition-all duration-300 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={step.id} className="text-center">
                  {/* Step Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4 relative z-20">
                      <div className="w-8 h-8 text-primary">
                        {step.icon}
                      </div>
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary border-4 border-white rounded-full flex items-center justify-center z-30">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h4 className="text-lg font-semibold mb-2 leading-tight">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection2;