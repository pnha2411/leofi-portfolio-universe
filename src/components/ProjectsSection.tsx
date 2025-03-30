
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "leofi",
    title: "LeoFi",
    description: "Our flagship financial platform offering comprehensive banking solutions with a focus on security and user experience.",
    features: ["Digital Banking", "Investment Platform", "Financial Planning"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "finance",
    color: "bg-gradient-to-r from-leofi-red to-leofi-orange"
  },
  {
    id: "trackit",
    title: "TrackIt",
    description: "An intelligent expense tracking and budgeting tool that helps users take control of their finances through data-driven insights.",
    features: ["Expense Tracking", "Budget Planning", "Financial Reports", "Goal Setting"],
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "tool",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600"
  },
  {
    id: "nimpad",
    title: "Nimpad Wallet",
    description: "A secure digital wallet solution for seamless transactions and cryptocurrency management with advanced security features.",
    features: ["Crypto Support", "Secure Transactions", "Multi-currency", "Biometric Authentication"],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "wallet",
    color: "bg-gradient-to-r from-emerald-500 to-teal-500"
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up">
            Our <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl slide-up-delay-1">
            Discover our suite of innovative financial products designed to revolutionize how you manage and grow your finances.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full slide-up-delay-2">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-leofi-dark/60 border border-gray-800">
              <TabsTrigger 
                value="all" 
                onClick={() => setFilter("all")}
                className="data-[state=active]:bg-leofi-gradient data-[state=active]:text-white"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="finance" 
                onClick={() => setFilter("finance")}
                className="data-[state=active]:bg-leofi-gradient data-[state=active]:text-white"
              >
                Finance
              </TabsTrigger>
              <TabsTrigger 
                value="tool" 
                onClick={() => setFilter("tool")}
                className="data-[state=active]:bg-leofi-gradient data-[state=active]:text-white"
              >
                Tools
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="bg-card border border-gray-800 overflow-hidden card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 opacity-90 ${project.color}`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="finance" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="bg-card border border-gray-800 overflow-hidden card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 opacity-90 ${project.color}`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tool" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="bg-card border border-gray-800 overflow-hidden card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 opacity-90 ${project.color}`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wallet" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="bg-card border border-gray-800 overflow-hidden card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 opacity-90 ${project.color}`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
