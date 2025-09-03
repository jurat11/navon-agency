import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import projectWebsite from "@/assets/project-website.jpg";
import projectBot from "@/assets/project-bot.jpg";
import projectDesign from "@/assets/project-design.jpg";
import projectSolution from "@/assets/project-solution.jpg";

const projects = [
  {
    id: 1,
    title: "TechCorp Business Website",
    category: "Website Development",
    image: projectWebsite,
    description: "Modern responsive website with advanced SEO optimization",
    liveLink: "https://example-techcorp.com",
    tags: ["React", "Tailwind", "SEO"]
  },
  {
    id: 2,
    title: "Customer Service Bot",
    category: "Telegram Bot",
    image: projectBot,
    description: "AI-powered customer support automation for e-commerce",
    liveLink: "https://t.me/example_support_bot",
    tags: ["AI", "Automation", "Customer Service"]
  },
  {
    id: 3,
    title: "Brand Identity Package",
    category: "Design & Branding",
    image: projectDesign,
    description: "Complete visual identity with logo and brand guidelines",
    liveLink: "https://behance.net/example-brand-project",
    tags: ["Branding", "Logo Design", "Guidelines"]
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Custom Solution",
    image: projectSolution,
    description: "Real-time business intelligence dashboard with advanced metrics",
    liveLink: "https://example-dashboard.com",
    tags: ["Dashboard", "Analytics", "Real-time"]
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Recent Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our latest projects and see how we bring innovative solutions to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card border-border hover:border-salad-green/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-salad-green text-background px-3 py-1 rounded-full text-sm font-medium animate-pulse-glow">
                    {project.category}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-salad-green transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-salad-green hover:bg-salad-green-dark text-background font-medium transition-all duration-300 hover:shadow-green-glow flex-1"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-salad-green/30 text-salad-green hover:bg-salad-green/10 hover:border-salad-green transition-all duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;