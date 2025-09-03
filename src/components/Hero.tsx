import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      <div className="max-w-4xl mx-auto animate-fade-in relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
          Welcome to NAVON Agency
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting innovative solutions for businesses worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-gold-glow"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-card hover:border-primary font-medium px-8 py-3 rounded-lg transition-all duration-300"
          >
            View Our Work
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;