
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/#projects" },
    { label: "About", path: "/#about" },
    { label: "Contact", path: "/#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-leofi-dark/90 backdrop-blur-md py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/537ce37f-7eb0-47a8-9122-172f85b65331.png" 
            alt="LeoFi Logo" 
            className="h-10 md:h-12" 
          />
          <span className="text-xl md:text-2xl font-bold ml-2 text-white">LeoFi</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-leofi-gradient hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-leofi-dark/95 backdrop-blur-lg flex flex-col z-40 p-6 animate-fade-in">
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-white/80 hover:text-white transition-colors text-lg py-2"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-leofi-gradient hover:opacity-90 transition-opacity mt-4"
                onClick={toggleMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
