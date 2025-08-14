import SectionContainer from "@/components/ui/section-container";
import witsLogo from "@assets/image_1755134290910.png";
import upLogo from "@assets/image_1755134340191.png";
import ujLogo from "@assets/image_1755134453844.png";
import uctLogo from "@assets/image_1755134951968.png";

export default function TrustedUniversitiesSection() {
  const universities = [
    {
      name: "University of the Witwatersrand",
      logo: witsLogo,
      alt: "University of the Witwatersrand logo"
    },
    {
      name: "University of Pretoria", 
      logo: upLogo,
      alt: "University of Pretoria logo"
    },
    {
      name: "University of Johannesburg",
      logo: ujLogo,
      alt: "University of Johannesburg logo"
    },
    {
      name: "University of Cape Town",
      logo: uctLogo,
      alt: "University of Cape Town logo"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="trusted-universities-title">
            Trusted by students at
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {universities.map((university, index) => (
            <div 
              key={index}
              className="flex flex-col items-center space-y-4 p-6 hover:transform hover:scale-105 transition-transform duration-300"
              data-testid={`university-${index}`}
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={university.logo}
                  alt={university.alt}
                  className="max-w-full max-h-full object-contain"
                  data-testid={`university-logo-${index}`}
                />
              </div>
              <p className="text-sm font-semibold text-gray-700 text-center leading-tight max-w-32" data-testid={`university-name-${index}`}>
                {university.name}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}