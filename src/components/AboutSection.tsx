
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 slide-up">
            About <span className="gradient-text">LeoFi</span>
          </h2>
          <p className="text-gray-300 text-lg slide-up-delay-1">
            We're on a mission to revolutionize financial technology through innovation, security, and user-centered design.
          </p>
        </div>

        <div className="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Our Values</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/30 backdrop-blur-sm border border-white/5">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-leofi-gradient flex items-center justify-center mx-auto mb-4">
                  <User className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">User-Centered</h4>
                <p className="text-gray-300">
                  We design all our products with the user experience as our top priority, ensuring accessibility and usability for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border border-white/5">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-leofi-gradient flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">Innovation</h4>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible in fintech, leveraging the latest technologies to create cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border border-white/5">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-leofi-gradient flex items-center justify-center mx-auto mb-4">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">Integrity</h4>
                <p className="text-gray-300">
                  We uphold the highest standards of security, transparency, and ethical practices in all our operations and product development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
