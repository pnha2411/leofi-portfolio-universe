
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Award } from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "LeoFi Founded",
    description: "Our journey began with a simple mission to transform financial technology and make it accessible to everyone."
  },
  {
    year: "2019",
    title: "Launch of TrackIt",
    description: "Our first product, TrackIt, was launched to help users take control of their expenses and financial planning."
  },
  {
    year: "2020",
    title: "Expanded Services",
    description: "We expanded our product lineup with additional features and services to meet growing customer demands."
  },
  {
    year: "2021",
    title: "Nimpad Wallet Release",
    description: "The launch of our secure cryptocurrency wallet solution marked our entry into the digital asset space."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "LeoFi expanded operations to multiple countries, serving clients worldwide with localized solutions."
  },
  {
    year: "2023",
    title: "Ecosystem Integration",
    description: "Completed the full integration of all products into a unified ecosystem for seamless user experience."
  }
];

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
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up">
            About <span className="gradient-text">LeoFi</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl slide-up-delay-1">
            We're on a mission to revolutionize financial technology through innovation, security, and user-centered design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 slide-up-delay-2">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Our Story</h3>
            <p className="text-gray-300 mb-6">
              LeoFi was founded in 2018 with a vision to transform how people interact with financial technology. Starting with a small team of passionate innovators, we set out to create solutions that combine security, functionality, and exceptional user experience.
            </p>
            <p className="text-gray-300 mb-6">
              Our journey began with a simple expense tracking tool that evolved into the comprehensive TrackIt platform. The success of this initial product fueled our expansion into other areas of financial technology, including our flagship LeoFi banking platform and the secure Nimpad Wallet for cryptocurrency management.
            </p>
            <p className="text-gray-300">
              Today, LeoFi stands as a leader in the fintech space, committed to continuous innovation and dedicated to empowering users to take control of their financial future through our integrated ecosystem of products.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Our Timeline</h3>
            <div className="relative border-l border-gray-700 pl-6">
              {timeline.map((item, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="absolute -left-2.5 w-5 h-5 rounded-full border-2 border-leofi-orange bg-card"></div>
                  <time className="text-sm font-semibold text-leofi-orange">{item.year}</time>
                  <h4 className="text-lg font-semibold text-white mt-1">{item.title}</h4>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20 slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="gradient-text">Our Values</span>
            </h3>
            <p className="text-gray-300">
              These core values guide everything we do at LeoFi, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-leofi-gradient flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">User-Centered</h4>
                <p className="text-gray-300">
                  We design all our products with the user experience as our top priority, ensuring accessibility and usability for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-leofi-gradient flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">Innovation</h4>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible in fintech, leveraging the latest technologies to create cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-leofi-gradient flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="gradient-text">Leadership Team</span>
            </h3>
            <p className="text-gray-300">
              Meet the passionate individuals driving LeoFi's mission and vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="absolute -inset-1 bg-leofi-gradient rounded-full blur opacity-20"></div>
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-2 border-leofi-orange/50">
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
