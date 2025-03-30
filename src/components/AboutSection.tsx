
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Award } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

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

        <div className="mb-16 slide-up">
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

        <div className="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Leadership Team</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="absolute -inset-1 bg-leofi-gradient rounded-full blur opacity-10"></div>
                  <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border border-white/10">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                <p className="text-leofi-orange">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
