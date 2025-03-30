
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Secure Infrastructure",
    description: "Advanced encryption and security protocols to protect all user data and transactions across our ecosystem.",
    icon: "🔒"
  },
  {
    title: "Seamless Integration",
    description: "Our products work together flawlessly, providing a unified experience across the entire LeoFi ecosystem.",
    icon: "🔄"
  },
  {
    title: "Real-time Analytics",
    description: "Powerful analytics tools provide insights and help users make informed financial decisions.",
    icon: "📊"
  },
  {
    title: "Cross-platform Support",
    description: "Access your finances from any device with our responsive web and native mobile applications.",
    icon: "📱"
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage artificial intelligence to receive personalized recommendations and financial forecasts.",
    icon: "🤖"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist with any questions or concerns.",
    icon: "🌐"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-leofi-dark/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up">
            Why Choose <span className="gradient-text">LeoFi</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl slide-up-delay-1">
            Our ecosystem is built with cutting-edge technology and designed with user experience at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up-delay-2">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-gray-800 hover:border-leofi-orange/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-card/30 backdrop-blur-sm border border-gray-800 rounded-lg p-8 md:p-10 slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="gradient-text">Seamless Experience</span> Across All Products
              </h3>
              <p className="text-gray-300 mb-6">
                Our products are designed to work together, creating a unified financial ecosystem that simplifies your financial life.
              </p>
              <ul className="space-y-3">
                {["Single sign-on for all products", "Shared data across platforms", "Consistent user interface", "Synchronized updates"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-leofi-orange mr-2" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-leofi-gradient rounded-lg blur opacity-20"></div>
              <div className="relative bg-card rounded-lg overflow-hidden border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Seamless Experience" 
                  className="w-full h-64 object-cover object-center opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
