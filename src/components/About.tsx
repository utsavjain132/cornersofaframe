import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Palette, Gift } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every piece is crafted with passion and attention to detail"
  },
  {
    icon: Palette,
    title: "Unique Designs",
    description: "Original creations that you won't find anywhere else"
  },
  {
    icon: Gift,
    title: "Perfect Gifts",
    description: "Meaningful presents for your loved ones and special occasions"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Welcome to <span className="text-terracotta">cornersofaframe</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are passionate artisans dedicated to creating beautiful, handmade items 
              that bring warmth and personality to your home. From the gentle flicker of 
              our hand-poured candles to the intricate patterns of our crochet work, 
              every piece tells a story of creativity and craftsmanship.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our journey began with a simple love for creating beautiful things. 
              Today, we're proud to share our handmade treasures with families 
              who appreciate the time, care, and artistry that goes into each piece.
            </p>
            <Button variant="hero" size="lg">
              Read Our Full Story
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-terracotta/10 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;