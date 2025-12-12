// components/layout/Footer.tsx
import { Sparkles, Shield, Globe, Zap } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Trust Section */}
      <section className="relative px-4 md:px-8 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden AdsToWin?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Güvenilir, şeffaf ve kullanıcı odaklı platformumuzla dijital
              dünyada fark yaratın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenli Platform</h3>
              <p className="text-gray-400 text-sm">
                SSL sertifikası ve güvenli ödeme altyapısı ile verileriniz
                korunur
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">7/24 Erişim</h3>
              <p className="text-gray-400 text-sm">
                İstediğiniz zaman, istediğiniz yerden platformumuza erişin
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hızlı İşlemler</h3>
              <p className="text-gray-400 text-sm">
                Anlık reklam yayını ve hızlı para çekme işlemleri
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="relative px-4 md:px-8 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">AdsToWin</span>
              </div>
              <p className="text-sm text-gray-400">
                Dijital reklamcılık ve kazanç platformu
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ürünler</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Reklam Verenler
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Para Kazananlar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fiyatlandırma
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yardım
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Giriş Yap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kullanım Şartları
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AdsToWin Platformu. Tüm hakları
          saklıdır.
        </div>
      </footer>
    </>
  );
};

export default Footer;
