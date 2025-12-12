// components/sections/HeroSplitSection.tsx
import {
  ArrowRight,
  BarChart3,
  HandCoins,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Target,
  Rocket,
  Star,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureItem from "./featureItem";
import StatCard from "./statCard";
import PreRegistrationForm from "./preRegistrationForm";

const HeroSplitSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 backdrop-blur-sm">
          <Rocket className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-indigo-300">
            Türkiye'nin En Yeni Dijital Reklam Platformu
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200">
          Reklam Vermenin ve
          <br />
          Para Kazanmanın
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Yeni Yolu
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          İşletmeniz için hedefli reklamlar verin veya reklam izleyerek para
          kazanın. Herkes için fırsatlar sunan yeni nesil platform.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
          <StatCard value="10K+" label="Kullanıcı Hedefi" />
          <StatCard value="₺250K+" label="Dağıtılacak Ödül" />
          <StatCard value="100%" label="Garanti Gösterim" />
        </div>
      </div>

      {/* Main Split Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Sol Kart: Reklam Verenler */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500/30 backdrop-blur-xl shadow-2xl group hover:shadow-indigo-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>

          <CardContent className="relative p-8 space-y-6">
            <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                alt="Business Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent"></div>
              <div className="absolute bottom-4 left-8 flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Reklam Verenler</h2>
                  <p className="text-sm text-indigo-200">İşinizi Büyütün</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Hedef kitlenize ulaşmanın en etkili yolu. Garantili gösterimler
              ve düşük maliyetlerle işinizi büyütün.
            </p>

            <div className="space-y-3">
              <FeatureItem
                icon={<Target className="w-5 h-5 text-white" />}
                title="Hedefli Reklamlar"
                description="%100 garantili gösterim ile doğru kitleye ulaşın"
              />
              <FeatureItem
                icon={<Shield className="w-5 h-5 text-white" />}
                title="Premium Konumlar"
                description="Odaklanma garantili özel reklam alanları"
              />
              <FeatureItem
                icon={<TrendingUp className="w-5 h-5 text-white" />}
                title="Anlık Analiz"
                description="Reklam performansınızı gerçek zamanlı takip edin"
              />
            </div>

            <Button className="w-full bg-white text-indigo-900 hover:bg-indigo-50 font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Reklam Paketi İncele
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Orta Kart: Ön Kayıt Formu */}
        <PreRegistrationForm />

        {/* Sağ Kart: Para Kazananlar */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-emerald-500/30 backdrop-blur-xl shadow-2xl group hover:shadow-emerald-500/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>

          <CardContent className="relative p-8 space-y-6">
            <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
                alt="Money Growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent"></div>
              <div className="absolute bottom-4 left-8 flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <HandCoins className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Para Kazananlar</h2>
                  <p className="text-sm text-emerald-200">Kazanmaya Başla</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Boş zamanlarınızı değerlendirin, reklam izleyerek ve çeşitli
              aktivitelerle para kazanın.
            </p>

            <div className="space-y-3">
              <FeatureItem
                icon={<Zap className="w-5 h-5 text-white" />}
                title="Anında Kazanç"
                description="Reklam izle, anında hesabına para yükle"
              />
              <FeatureItem
                icon={<Star className="w-5 h-5 text-white" />}
                title="Şans Oyunları"
                description="Şans çarkı, çekiliş ve bonus ödüller"
              />
              <FeatureItem
                icon={<Users className="w-5 h-5 text-white" />}
                title="Arkadaşını Getir"
                description="Referans sistemi ile ekstra kazanç sağla"
              />
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-yellow-400">
                  Özel Fırsat
                </span>
              </div>
              <p className="text-sm text-gray-300">
                İlk 10.000 üyeye{" "}
                <span className="font-bold text-white">1 TKRYPTO</span> hediye!
              </p>
            </div>

            <Button className="w-full bg-white text-emerald-900 hover:bg-emerald-50 font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Ücretsiz Başla
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSplitSection;