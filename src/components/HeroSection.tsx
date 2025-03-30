
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-leofi-red/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-leofi-orange/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            <span className="gradient-text">Innovating Finance</span> for a <br />
            Better Tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto fade-in-delay-1">
            Discover LeoFi's ecosystem of cutting-edge financial technology products designed to empower users and transform financial experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
            <Button 
              size="lg" 
              className="bg-leofi-gradient hover:opacity-90 transition-opacity text-white"
            >
              Explore Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 transition-colors"
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
