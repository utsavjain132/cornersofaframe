import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductCategories />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
