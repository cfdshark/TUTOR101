import { GraduationCap } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <SectionContainer>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-tutor-white rounded-lg flex items-center justify-center">
                <GraduationCap className="text-tutor-black text-lg" />
              </div>
              <span className="text-2xl font-bold">TUTOR101</span>
            </div>
            <p className="text-gray-400" data-testid="footer-description">
              Professional tutoring services helping students achieve their academic goals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-services-title">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-service-engineering">Engineering Tutoring</li>
              <li data-testid="footer-service-science">Science Support</li>
              <li data-testid="footer-service-health">Health Sciences</li>
              <li data-testid="footer-service-commerce">Commerce Studies</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-curricula-title">Offerings</h3>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-curriculum-nsc">NSC (National Senior Certificate)</li>
              <li data-testid="footer-curriculum-ieb">IEB (Independent Examinations Board)</li>
              <li data-testid="footer-curriculum-cambridge">Cambridge International</li>
              <li data-testid="footer-curriculum-university">University Level</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href={`https://wa.me/27838623544?text=${encodeURIComponent("Hi, I'm looking for a tutor. How can I get started with Tutor101?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tutor-white" 
                  data-testid="footer-phone"
                >
                  (+27) 83 862 3544
                </a>
              </li>
              <li>
                <a href="mailto:tutor101lessons@gmail.com" className="hover:text-tutor-white" data-testid="footer-email">
                  tutor101lessons@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@tutor101za" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-tutor-white" data-testid="footer-youtube">
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-testid="footer-copyright">
          <p>&copy; 2024 Tutor101. All rights reserved. | Registered Professional Tutoring Company</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
