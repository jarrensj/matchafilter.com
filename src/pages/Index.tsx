
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleGrid from "@/components/ArticleGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-matcha-cream">
      <Header />
      <main>
        <Hero />
        <ArticleGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
