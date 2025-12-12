// app/page.tsx
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/components/home/home";

// Ana Sayfa Bileşeni (Sunucu Bileşeni)
export default function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
