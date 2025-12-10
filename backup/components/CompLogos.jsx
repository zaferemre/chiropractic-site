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
    <section
      id="chiropractic-conditions"
      aria-label="Kayropraktik Uygulama Alanları"
      className="py-24 sm:py-32 mx-4"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black mb-10">
          Kayropraktik Hangi Durumlarda Uygulanır?
        </h2>

        {/* Semantic unordered list */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center list-none">
          {conditions.map((condition, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow-md text-gray-900 font-semibold"
            >
              {condition}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompLogos;
