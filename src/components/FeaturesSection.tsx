
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
      </div>
    </section>
  );
};

export default FeaturesSection;
