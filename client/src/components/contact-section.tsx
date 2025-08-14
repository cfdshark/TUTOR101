import { Button } from "@/components/ui/button";
import { Phone, Mail, Youtube, MapPin, Calendar } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

export default function ContactSection() {
  const handleBooking = () => {
    const whatsappMessage = encodeURIComponent("Hi, I'm looking for a tutor. How can I get started with Tutor101?");
    window.open(`https://wa.me/27838623544?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-tutor-black to-tutor-black-light text-white">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4" data-testid="contact-title">
                Ready to <span className="text-tutor-white">Start Learning?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed" data-testid="contact-description">
                Book your personalized tutoring session today. Choose the time and place that works best for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center space-y-2" data-testid="contact-phone">
                <div className="w-16 h-16 bg-tutor-white rounded-full flex items-center justify-center">
                  <Phone className="text-tutor-black text-xl" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">Call/WhatsApp</div>
                  <a 
                    href={`https://wa.me/27838623544?text=${encodeURIComponent("Hi, I'm looking for a tutor. How can I get started with Tutor101?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tutor-white hover:text-tutor-gray"
                  >
                    (+27) 83 862 3544
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2" data-testid="contact-email">
                <div className="w-16 h-16 bg-tutor-white rounded-full flex items-center justify-center">
                  <Mail className="text-tutor-black text-xl" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">Email</div>
                  <a href="mailto:tutor101lessons@gmail.com" className="text-tutor-white hover:text-tutor-gray text-sm">
                    tutor101lessons@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2" data-testid="contact-youtube">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Youtube className="text-white text-xl" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">YouTube Channel</div>
                  <a href="https://www.youtube.com/@tutor101za" target="_blank" rel="noopener noreferrer"
                     className="text-tutor-white hover:text-tutor-gray">
                    @tutor101za
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2" data-testid="contact-location">
                <div className="w-16 h-16 bg-tutor-white rounded-full flex items-center justify-center">
                  <MapPin className="text-tutor-black text-xl" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-300">Braamfontein, Johannesburg</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBooking}
                className="bg-tutor-white text-tutor-black hover:bg-tutor-gray font-bold px-8 py-3"
                data-testid="button-book-session-contact"
              >
                <Calendar className="mr-2" />
                Book Session Now
              </Button>
              <Button 
                asChild
                className="bg-tutor-white text-tutor-black border-2 border-tutor-white hover:bg-tutor-gray hover:text-tutor-black font-semibold px-8 py-3"
                data-testid="button-youtube-contact"
              >
                <a href="https://www.youtube.com/@tutor101za" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2" />
                  Watch Videos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}