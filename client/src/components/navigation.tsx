import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Youtube, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleBooking = () => {
    const whatsappMessage = encodeURIComponent("Hi, I'm looking for a tutor. How can I get started with Tutor101?");
    window.open(`https://wa.me/27838623544?text=${whatsappMessage}`, '_blank');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-tutor-black rounded-lg flex items-center justify-center">
              <GraduationCap className="text-tutor-white text-lg" />
            </div>
            <span className="text-2xl font-bold text-tutor-black">TUTOR101</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-gray-700 hover:text-tutor-black transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-gray-700 hover:text-tutor-black transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("subjects")} 
              className="text-gray-700 hover:text-tutor-black transition-colors"
              data-testid="nav-subjects"
            >
              Subjects
            </button>
            <button 
              onClick={() => scrollToSection("reviews")} 
              className="text-gray-700 hover:text-tutor-black transition-colors"
              data-testid="nav-reviews"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-gray-700 hover:text-tutor-black transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.youtube.com/@tutor101za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors"
              data-testid="link-youtube"
            >
              <Youtube className="text-xl" />
            </a>
            <Button 
              onClick={handleBooking}
              className="bg-tutor-black text-tutor-white hover:bg-tutor-black-light font-semibold"
              data-testid="button-book-nav"
            >
              Book Now
            </Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-gray-700 hover:text-tutor-black transition-colors text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-gray-700 hover:text-tutor-black transition-colors text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("subjects")} 
                className="text-gray-700 hover:text-tutor-black transition-colors text-left"
                data-testid="mobile-nav-subjects"
              >
                Subjects
              </button>
              <button 
                onClick={() => scrollToSection("reviews")} 
                className="text-gray-700 hover:text-tutor-black transition-colors text-left"
                data-testid="mobile-nav-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-gray-700 hover:text-tutor-black transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
