const conditions = [
  "Bel, Boyun, Sırt Ağrısı",
  "Bel Fıtığı, Boyun Fıtığı",
  "Dejeneratif Disk Hastalığı",
  "Gerilim Tipi Baş Ağrısı, Migren",
  "Bel Kayması (Başlangıç Seviyesi)",
  "Sinir Sıkışmaları (Siyatik, Karpal Tünel)",
  "Sakroiliak Eklem Ağrısı",
  "Kanal Daralması",
  "Spor Sakatlıkları",
  "Postür Bozukluğu",
];

const CompLogos = () => {
  return (
    <div className="bg-green-500 py-24 sm:py-32 mx-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          KAYROPRAKTİK KİMLERE UYGULANIR?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md text-gray-900 font-semibold"
            >
              {condition}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompLogos;
