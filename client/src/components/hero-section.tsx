import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

export default function HeroSection() {
  const handleBooking = () => {
    const message = "Contact us at (+27) 83 862 3544 or tutor101lessons@gmail.com to book your session!";
    alert(message);
  };

  const handleWatchVideos = () => {
    window.open("https://www.youtube.com/@tutor101za", "_blank");
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-tutor-black to-tutor-black-light text-white">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <SectionContainer className="relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                Achieve Your <span className="text-tutor-white">Academic Goals</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed" data-testid="hero-description">
                We are a registered professional tutoring company specializing in helping university and high school students achieve their academic goals. We offer both online and in-person tuition, providing flexible, high-quality support tailored to each learner's needs.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4" data-testid="curriculum-badges">
              <span className="bg-tutor-white text-tutor-black px-4 py-2 rounded-full font-semibold">NSC</span>
              <span className="bg-tutor-white text-tutor-black px-4 py-2 rounded-full font-semibold">IEB</span>
              <span className="bg-tutor-white text-tutor-black px-4 py-2 rounded-full font-semibold">CAMBRIDGE</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleBooking}
                className="bg-tutor-white text-tutor-black hover:bg-tutor-gray font-bold text-lg px-8 py-4"
                data-testid="button-book-session"
              >
                <Calendar className="mr-2" />
                Book a Session
              </Button>
              <Button 
                onClick={handleWatchVideos}
                className="bg-tutor-white text-tutor-black border-2 border-tutor-white hover:bg-tutor-gray hover:text-tutor-black font-semibold px-8 py-4"
                data-testid="button-watch-videos"
              >
                <Play className="mr-2" />
                Watch Videos
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4" data-testid="hero-stats">
              <div className="text-center">
                <div className="text-3xl font-bold text-tutor-white">4.8★</div>
                <div className="text-sm text-gray-300">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tutor-white">1100+</div>
                <div className="text-sm text-gray-300">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tutor-white">100%</div>
                <div className="text-sm text-gray-300">Personalized</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Students studying together in a modern classroom setting" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl" data-testid="achievement-card">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Success Rate</div>
                  <div className="text-green-600 font-semibold">Marks Improved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
