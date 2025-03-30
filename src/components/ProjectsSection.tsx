
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart3, Wallet, Layers } from "lucide-react";

const projects = [
  {
    id: "leofi",
    title: "LeoFi DeFi Kit",
    description: "A comprehensive decentralized finance toolkit enabling users to access lending, borrowing, and yield farming opportunities from a single intuitive interface.",
    features: ["Liquidity Pools", "Yield Farming", "Cross-chain Swaps", "Portfolio Management"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "finance",
    color: "bg-gradient-to-r from-leofi-red to-leofi-orange",
    icon: <Layers className="h-6 w-6 text-white" />,
    link: "https://app.leofi.xyz/"
  },
  {
    id: "trackit",
    title: "TrackIt AI Agent",
    description: "An intelligent financial tracking tool powered by AI that monitors your expenses, provides personalized insights, and helps optimize your budget automatically.",
    features: ["AI-Powered Analysis", "Smart Categorization", "Prediction Models", "Automated Reports"],
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "tool",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600",
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    link: "https://trackit-app.xyz/"
  },
  {
    id: "nimpad",
    title: "Nimpad Social Wallet",
    description: "A next-generation social wallet that combines secure cryptocurrency management with social features, allowing you to send, receive, and interact with your network.",
    features: ["Social Transactions", "Multi-chain Support", "NFT Gallery", "Community Features"],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "wallet",
    color: "bg-gradient-to-r from-emerald-500 to-teal-500",
    icon: <Wallet className="h-6 w-6 text-white" />,
    link: "https://wallet.nimpad.xyz/"
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 slide-up">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-gray-300 text-lg slide-up-delay-1">
            Cutting-edge financial technology solutions designed for the future of finance.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full slide-up-delay-2">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-card/40 backdrop-blur-sm border border-white/5">
              <TabsTrigger 
                value="all" 
                onClick={() => setFilter("all")}
                className="data-[state=active]:bg-leofi-gradient data-[state=active]:text-white"
              >
                All Products
              </TabsTrigger>
              <TabsTrigger 
                value="finance" 
                onClick={() => setFilter("finance")}
                className="data-[state=active]:bg-leofi-gradient data-[state=active]:text-white"
              >
                DeFi
              </TabsTrigger>
              <TabsTrigger 
                value="tool" 
                onClick={() => setFilter("tool")}
                className="data-[state=active]:bg-leofi-gradient data-[state=active]:text-white"
              >
                AI Tools
              </TabsTrigger>
              <TabsTrigger 
                value="wallet" 
                onClick={() => setFilter("wallet")}
                className="data-[state=active]:bg-leofi-gradient data-[state=active]:text-white"
              >
                Wallets
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="bg-card/30 backdrop-blur-sm border border-white/5 overflow-hidden card-hover"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full ${project.color} flex items-center justify-center mr-3`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="bg-white/5 text-gray-300 border-white/10">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-white/10 hover:bg-white/5 text-white mt-auto"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["finance", "tool", "wallet"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="bg-card/30 backdrop-blur-sm border border-white/5 overflow-hidden card-hover"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full ${project.color} flex items-center justify-center mr-3`}>
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="bg-white/5 text-gray-300 border-white/10">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-white/10 hover:bg-white/5 text-white mt-auto"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
