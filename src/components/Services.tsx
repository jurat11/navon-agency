import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Bot, Palette, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites for Businesses",
    description: "Professional, responsive websites that drive results and enhance your brand presence online."
  },
  {
    icon: Bot,
    title: "Telegram Bots",
    description: "Custom automated solutions for customer service, marketing, and business process optimization."
  },
  {
    icon: Palette,
    title: "Designs",
    description: "Creative visual solutions including branding, UI/UX design, and digital marketing materials."
  },
  {
    icon: Lightbulb,
    title: "Other Solutions",
    description: "Innovative digital solutions tailored to your unique business needs and challenges."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;