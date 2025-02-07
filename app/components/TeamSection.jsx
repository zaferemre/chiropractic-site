import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ahmet Burak Bayır",
      title: "Kayropraktik Uzmanı",
      description:
        "Ahmet Burak Bayır, omurga sağlığı alanında uzmanlaşmış bir kayropraktik uzmanıdır ve hastalarına en iyi tedaviyi sunmayı hedefler.",
      image: "/images/Chiro3.jpeg",
    },
    {
      name: "Eda Gültekin",
      title: "Fizyoterapist & Pilates Eğitmeni",
      description:
        "Eda Gültekin, fizyoterapi ve pilates alanında uzmanlaşmış olup, hareket özgürlüğünüzü yeniden kazanmanıza yardımcı olur.",
      image: "/images/Eda1.jpeg",
    },
  ];

  return (
    <section className="bg-transparent">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Ekibimiz
          </h2>
          <p className="font-light text-gray-700 lg:mb-16 sm:text-xl">
            Sağlık ve iyilik halinizi ön planda tutan uzman ekibimizle tanışın.
          </p>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-transparent border border-gray-300 rounded-lg shadow-lg p-4"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <Image
                  className="rounded-lg md:rounded-none md:rounded-l-lg"
                  src={member.image}
                  alt={`${member.name} Avatar`}
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
              <div className="p-5 w-full text-center md:text-left">
                <h3 className="text-xl font-bold tracking-tight text-black">
                  {member.name}
                </h3>
                <span className="text-gray-700">{member.title}</span>
                <p className="mt-3 mb-4 font-light text-gray-600">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
