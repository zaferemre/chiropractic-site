"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Ahmet Burak Bayır",
      title: "Uzman Fizyoterapist ve Kayropraktik Uzmanı",
      description:
        "Ahmet Burak Bayır, omurga sağlığı alanında uzmanlaşmış bir kayropraktik uzmanıdır ve hastalarına en iyi tedaviyi sunmayı hedefler. Yılların deneyimi ve modern tedavi yöntemleriyle sağlığınıza değer katıyor.",
      image: "/images/AhmetYeni.jpg",
      specialties: [
        "Omurga Sağlığı",
        "Kayropraktik",
        "Fizyoterapi",
        "Postür Düzeltme",
      ],
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#acf48c]/5 to-transparent -z-10"></div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* Premium Heading */}
        <div className="mx-auto max-w-screen-sm text-center mb-12 lg:mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900">
            <span className="text-[#acf48c]">Ekibimiz</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mx-auto rounded-full mb-6"></div>
          <p className="font-medium text-gray-700 lg:mb-16 sm:text-xl">
            Sağlık ve iyilik halinizi ön planda tutan uzman ekibimizle tanışın.
          </p>
        </div>

        {/* Premium Team Card */}
        <div className="grid gap-8 mb-6 lg:mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group flex flex-col md:flex-row items-center bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl p-6 md:p-8 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden relative ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/5 to-[#6EE7B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image Section */}
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 relative z-10">
                <div className="relative">
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#acf48c] to-[#6EE7B7] opacity-20 blur-xl transform scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      className="rounded-2xl"
                      src={member.image}
                      alt={`${member.name} Avatar`}
                      width={300}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-8 w-full text-center md:text-left relative z-10 flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <span className="inline-block px-4 py-2 bg-[#acf48c]/10 text-[#acf48c] font-semibold rounded-full text-sm md:text-base">
                    {member.title}
                  </span>
                </div>
                
                <p className="mt-4 mb-6 font-medium text-gray-700 leading-relaxed text-base md:text-lg">
                  {member.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {member.specialties?.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg text-sm border border-gray-200 group-hover:border-[#acf48c]/50 group-hover:bg-[#acf48c]/10 transition-all duration-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#6EE7B7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
