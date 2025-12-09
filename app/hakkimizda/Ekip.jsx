"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Ekip = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Ahmet Burak Bayır",
      title: "Kayropraktik Uzmanı",
      description: `
        Lisans eğitimini İzmir Demokrasi Üniversitesi'nin Fizyoterapi ve Rehabilitasyon bölümünden mezun olarak tamamladı. Lisans sürecinin bir dönemini Uniwersytet Kaliskim Prezydenta Stanisława Wojciechowskiego'da tamamladı. Lisans boyunca 7 farklı hastanede intörn fizyoterapist olarak çalıştı ve omurga mobilizasyonu-manipülasyonu, ortopedik manuel terapi alanlarında eğitimler aldı.

        Mezuniyet sonrası özel bir klinikte Kas-İskelet Ağrıları ve Spor Sakatlanmaları üzerine çalışarak manuel terapi, ortopedik rehabilitasyon, koruyucu rehabilitasyon, kişiye özel egzersiz programı hazırlanması, medikal masaj ve EMS training alanlarında hizmet verdi.

        Daha sonra Maltepe Üniversitesi Tıp Fakültesi Hastaneleri'nde fizyoterapist olarak görev alarak ortopedik rehabilitasyon, nörolojik rehabilitasyon, evde fizik tedavi ve kayropraktik alanlarında çalıştı. Şu anda Chiro Care Fizyoterapi Danışmanlık Merkezi'nde hizmet vermektedir.
      `,
      image: "/images/AhmetYeni.jpg",
      reverse: true,
      certifications: [
        "Omurga Mobilizasyonu ve Manipülasyonu Eğitimi",
        "Ortopedik Manuel Terapi Eğitimi",
        "Kas-İskelet Ağrıları ve Spor Sakatlanmaları Rehabilitasyonu",
        "EMS Training Uzmanlık Sertifikası",
        "Nörolojik Rehabilitasyon Eğitimi",
        "Postür (Duruş) Bozuklukları ve Omurga Sağlığı Uzmanlığı",
      ],
    },
  ];

  return (
    <section className="relative py-10 md:py-14 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#acf48c]/5 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {teamMembers.map((member, index) => (
          <div key={index}>
            {/* Üst Bölüm: Sol Metin - Sağ Görsel */}
            <div
              className={`group flex flex-col md:flex-row ${
                member.reverse ? "md:flex-row-reverse" : ""
              } items-center bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden mb-8 transition-all duration-700 transform hover:scale-[1.02] border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/5 to-[#6EE7B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Premium Image Section */}
              <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden">
                {/* Decorative Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c] to-[#6EE7B7] opacity-10 blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                
                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-[#6EE7B7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Premium Bio Section */}
              <div className="relative p-8 md:p-12 w-full md:w-1/2 text-left flex flex-col justify-center">
                {/* Kayropraktik Uzmanı - İsmin Üstünde */}
                <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] text-white font-bold rounded-full text-base md:text-lg shadow-lg mb-6 w-fit">
                  {member.title}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {member.name}
                </h3>

                <div className="w-16 h-0.5 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mb-6"></div>

                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base md:text-lg">
                  {member.description}
                </p>
              </div>
            </div>

            {/* Alt Bölüm: Sertifikalar - Tüm Genişlikte */}
            {member.certifications.length > 0 && (
              <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 border border-gray-100">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#acf48c] rounded-full"></span>
                  Katıldığı Eğitimler ve Sertifikalar
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {member.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="group/cert flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#acf48c]/10 transition-all duration-300 border border-gray-100 hover:border-[#acf48c]/50 hover:shadow-md"
                    >
                      <div className="w-2 h-2 bg-[#acf48c] rounded-full mt-2 flex-shrink-0 transform group-hover/cert:scale-150 transition-transform duration-300"></div>
                      <span className="text-sm md:text-base text-gray-700 font-medium">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ekip;
