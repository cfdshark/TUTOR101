import { IdCard, GraduationCap, Clock, BookOpen, Tag, Laptop } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

export default function ServicesSection() {
  const services = [
    {
      icon: IdCard,
      title: "Professional Registration",
      description: "We are a registered professional tutoring company with experienced and qualified tutors.",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-tutor-blue",
      iconColor: "text-tutor-yellow"
    },
    {
      icon: GraduationCap,
      title: "Personalized Tutoring",
      description: "Work at your own pace and level with friendly, experienced tutors who adapt to your learning style.",
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-100",
      iconBg: "bg-tutor-yellow",
      iconColor: "text-tutor-blue"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose the time and place that suits you best. Available both in-person and online.",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      iconBg: "bg-green-600",
      iconColor: "text-white"
    },
    {
      icon: BookOpen,
      title: "Multi-Curriculum Support",
      description: "Supporting NSC, IEB, and Cambridge curricula for comprehensive academic coverage.",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-600",
      iconColor: "text-white"
    },
    {
      icon: Tag,
      title: "Affordable Rates",
      description: "Quality education shouldn't break the bank. We offer competitive and affordable tutoring rates.",
      bgColor: "from-rose-50 to-pink-50",
      borderColor: "border-rose-100",
      iconBg: "bg-rose-600",
      iconColor: "text-white"
    },
    {
      icon: Laptop,
      title: "Additional Resources",
      description: "Access to supplementary materials and resources beyond what's provided at school.",
      bgColor: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-100",
      iconBg: "bg-cyan-600",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">
            Why Choose <span className="text-tutor-yellow">Tutor101?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-description">
            We are a registered professional tutoring company specializing in helping 
            university and high school students achieve their academic goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-2xl border ${service.borderColor}`}
              data-testid={`service-card-${index}`}
            >
              <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className={`${service.iconColor} text-2xl`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
