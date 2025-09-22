import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import candlesImage from "@/assets/candles.jpg";
import crochetImage from "@/assets/crochet.jpg";
import resinImage from "@/assets/resin.jpg";
import dreamcatchersImage from "@/assets/dreamcatchers.jpg";

const categories = [
  {
    title: "Candles",
    description: "Handpoured scented candles with natural wax",
    image: candlesImage,
    items: "15+ varieties"
  },
  {
    title: "Crochet",
    description: "Cozy blankets, scarves, and decorative pieces",
    image: crochetImage,
    items: "20+ items"
  },
  {
    title: "Resin Art",
    description: "Unique coasters, keychains, and art pieces",
    image: resinImage,
    items: "25+ designs"
  },
  {
    title: "Dreamcatchers",
    description: "Beautiful dreamcatchers for peaceful nights",
    image: dreamcatchersImage,
    items: "10+ styles"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-terracotta">Handmade</span> Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each category represents hours of careful craftsmanship and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground mb-3">{category.description}</p>
                <p className="text-sm text-terracotta font-medium mb-4">{category.items}</p>
                <Button variant="outline" className="w-full group-hover:bg-terracotta group-hover:text-cream transition-colors">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;