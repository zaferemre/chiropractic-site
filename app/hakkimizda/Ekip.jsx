import Image from "next/image";

const Ekip = () => {
  const teamMembers = [
    {
      name: "Ahmet Burak Bayır",
      title: "Kayropraktik Uzmanı",
      description: `
        Lisans eğitimini İzmir Demokrasi Üniversitesi’nin Fizyoterapi ve Rehabilitasyon bölümünden mezun olarak tamamladı. Lisans sürecinin bir dönemini Uniwersytet Kaliskim Prezydenta Stanisława Wojciechowskiego’da tamamladı. Lisans boyunca 7 farklı hastanede intörn fizyoterapist olarak çalıştı ve omurga mobilizasyonu-manipülasyonu, ortopedik manuel terapi alanlarında eğitimler aldı.

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
    <section className="bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-black mb-12">
          Ekibimiz
        </h2>

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              member.reverse ? "md:flex-row-reverse" : ""
            } items-center bg-white shadow-lg rounded-lg overflow-hidden mb-12`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bio Section */}
            <div className="p-6 w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="text-lg text-gray-700 font-semibold mb-3">
                {member.title}
              </p>
              <p className="text-gray-700 whitespace-pre-line">
                {member.description}
              </p>

              {/* Certifications */}
              {member.certifications.length > 0 && (
                <>
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">
                    Katıldığı Eğitimler ve Sertifikalar:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {member.certifications.map((cert, i) => (
                      <li key={i}>{cert}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ekip;
