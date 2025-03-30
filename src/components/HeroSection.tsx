
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Minimalist background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-leofi-red/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-leofi-orange/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 fade-in leading-tight">
            <span className="gradient-text">Innovative</span> Financial <br />
            Technology Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-in-delay-1 leading-relaxed">
            Discover LeoFi's ecosystem of modern financial technology products designed with simplicity and user experience at their core.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
            <Button 
              size="lg" 
              className="bg-leofi-gradient hover:opacity-90 transition-opacity text-white"
              onClick={scrollToProjects}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 text-white hover:bg-white/5 transition-colors"
              onClick={() => window.open('https://app.leofi.xyz/', '_blank')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
