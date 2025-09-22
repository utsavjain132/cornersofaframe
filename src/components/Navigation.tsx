import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-terracotta">
              cornersofaframe
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-terracotta transition-colors">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-terracotta transition-colors">
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-terracotta transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-terracotta transition-colors">
              Contact
            </a>
            <Button variant="hero" size="sm">
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;