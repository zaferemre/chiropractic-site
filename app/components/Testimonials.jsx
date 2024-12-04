"use client";

import React, { useRef, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
      name: "Judith Black",
      role: "CEO of Workcation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“This is the best service I have ever experienced. Highly recommended to everyone looking for quality and professionalism!”",
      name: "John Doe",
      role: "Manager at Example Co.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“The team was incredibly supportive and made the entire process seamless. Would definitely return for future needs!”",
      name: "Alice Smith",
      role: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Fantastic service and very professional team. My go-to for anything I need!”",
      name: "Emma Johnson",
      role: "Freelancer",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Amazing experience! They truly care about their customers.”",
      name: "Oliver Brown",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“I couldn't be happier with the results. Highly recommended!”",
      name: "Sophia Wilson",
      role: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Incredible customer service and attention to detail. Very satisfied!”",
      name: "Liam Taylor",
      role: "Architect",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“The best decision I’ve made this year. Thank you so much!”",
      name: "Mia Martinez",
      role: "Small Business Owner",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Affordable, efficient, and high-quality service. Can't ask for more!”",
      name: "Noah Davis",
      role: "Marketer",
      image:
        "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“They exceeded my expectations in every way possible.”",
      name: "Amelia Clark",
      role: "Photographer",
      image:
        "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“An unforgettable experience. I’ll be back for sure!”",
      name: "Elijah Walker",
      role: "Chef",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Their dedication to quality is evident in every interaction.”",
      name: "Isabella Perez",
      role: "Fitness Trainer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Friendly staff and great results. A wonderful experience!”",
      name: "James White",
      role: "Consultant",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“Top-notch service! I'm beyond impressed.”",
      name: "Emily Harris",
      role: "Editor",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      text: "“They turned my vision into reality. Highly grateful!”",
      name: "Benjamin Lewis",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animation;
    if (carousel) {
      animation = setInterval(() => {
        carousel.scrollLeft += 1; // Adjust speed here
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0; // Reset scroll
        }
      }, 20); // Animation speed
    }

    return () => {
      clearInterval(animation);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden lg:px-4">
      <div
        ref={carouselRef}
        className="mt-10 flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
        onMouseEnter={() =>
          (carouselRef.current.style.animationPlayState = "paused")
        }
        onMouseLeave={() =>
          (carouselRef.current.style.animationPlayState = "running")
        }
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-6 bg-white border rounded-lg shadow-lg text-center flex flex-col items-center justify-between"
          >
            {/* Text Centered in Y-Axis */}
            <blockquote className="text-lg font-semibold text-gray-900 flex-grow flex items-center justify-center">
              <p>{testimonial.text}</p>
            </blockquote>
            {/* Image, Name, and Role at the Bottom */}
            <figcaption className="mt-6">
              <img
                alt={testimonial.name}
                src={testimonial.image}
                className="mx-auto h-16 w-16 rounded-full"
              />
              <div className="mt-4 text-base font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
