import Footer from "../components/Footer";
import Header from "../components/Header";
import Ekip from "./Ekip";
import BackgroundWrapper from "../components/BackgroundWrapper";

export const metadata = {
  title: "Hakkımızda | ChiroCare Kadıköy",
  description:
    "ChiroCare hakkında bilgi edinin. Uzman fizyoterapist ve kayropraktik uzmanımız Ahmet Burak Bayır ile tanışın.",
};

export default function Hakkimizda() {
  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-gray-900 relative pt-16">
        <Header />
        
        {/* Premium Hero Section - EN ÜSTTE */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#acf48c]/5 to-transparent -z-10"></div>
          
          {/* Decorative Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#acf48c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#6EE7B7] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hakkımızda
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              ChiroCare olarak, sağlığınızı ve yaşam kalitenizi iyileştirmek için
              buradayız. Doğal ve etkili tedavi yöntemleriyle yanınızdayız.
            </p>
          </div>
        </section>
        
        {/* Ahmet Burak Bayır */}
        <Ekip />

        {/* Misyon & Değerler Section */}
        <section className="py-10 md:py-14 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* Misyon */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/10 to-[#6EE7B7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#acf48c] to-[#6EE7B7] rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Her hastamıza kişiselleştirilmiş, doğal ve etkili tedavi
                    yöntemleri sunarak yaşam kalitelerini artırmak ve ağrısız bir
                    yaşam sürmelerine yardımcı olmak.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Vizyon */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/10 to-[#6EE7B7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6EE7B7] to-[#34D399] rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Türkiye'nin önde gelen kayropraktik ve fizyoterapi merkezi
                    olmak, modern tedavi yöntemleriyle toplum sağlığına katkıda
                    bulunmak.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#6EE7B7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Değerler */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Güvenilirlik", icon: "🛡️", description: "Hastalarımıza güvenilir ve şeffaf hizmet sunuyoruz." },
                { title: "Uzmanlık", icon: "🎓", description: "Alanında uzmanımızla hizmet veriyoruz." },
                { title: "Kişiselleştirme", icon: "👤", description: "Her danışan için özel tedavi planı hazırlıyoruz." },
                { title: "Doğallık", icon: "🌿", description: "Doğal ve etkili tedavi yöntemleri kullanıyoruz." },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                  <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-[#acf48c] to-[#6EE7B7] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Sağlığınız İçin Buradayız
                </h2>
                <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                  Randevu almak veya sorularınız için bizimle iletişime geçin.
                  Uzmanımız size yardımcı olmaya hazır.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/905464213365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white text-gray-900 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      WhatsApp ile İletişim
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="tel:05464213365"
                    className="group bg-gray-900 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Hemen Ara
                      <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </BackgroundWrapper>
  );
}
