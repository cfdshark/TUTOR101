import { Star, ExternalLink } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "Perfect, affordable, makes learning interesting and simple. Very good at explaining concepts and simplifying complex problems.",
      author: "Lutricia Fanisa",
      timeAgo: "2 months ago",
      initials: "L",
      bgColor: "bg-pink-500"
    },
    {
      rating: 5,
      text: "I was really struggling with Maths last year. Tutor101 genuinely helped me and my marks have significantly improved. I love the additional resources outside what we're given at school.",
      author: "Oratile Modiakgotla", 
      timeAgo: "1 month ago",
      initials: "O",
      bgColor: "bg-blue-500"
    },
    {
      rating: 5,
      text: "I highly recommend tutor 101, he explains very thoroughly and makes things much easier to understand. I've seen improvement in my marks after attending his classes. 😊",
      author: "Kamogelo Buseletso",
      timeAgo: "2 months ago", 
      initials: "K",
      bgColor: "bg-pink-500"
    },
    {
      rating: 5,
      text: "My math tutorial was clear, engaging, and well-structured. The tutor explained complex concepts in a simple way and created a comfortable learning environment. Highly effective! 🙏🏾",
      author: "Nelisiwe Mdodana",
      timeAgo: "1 month ago",
      initials: "N", 
      bgColor: "bg-indigo-500"
    },
    {
      rating: 5,
      text: "Tutor was incredibly kind and patient and helped me pass my Engineering maths supplementary exams. His focus on consistent practice made all the difference.",
      author: "Owethusendzelwe",
      timeAgo: "3 weeks ago",
      initials: "O",
      bgColor: "bg-green-500"
    },
    {
      rating: 5,
      text: "I highly recommend Tutor101 as a maths tutor. His expertise and passion for teaching are exceptional. He has a unique ability to simplify complex concepts.",
      author: "Gugu Felicia",
      timeAgo: "1 year ago",
      initials: "G",
      bgColor: "bg-purple-500"
    }
  ];

  const cardBackgrounds = [
    "from-blue-50 to-indigo-50 border-blue-100",
    "from-green-50 to-emerald-50 border-green-100", 
    "from-purple-50 to-violet-50 border-purple-100",
    "from-yellow-50 to-orange-50 border-yellow-100",
    "from-rose-50 to-pink-50 border-rose-100",
    "from-cyan-50 to-blue-50 border-cyan-100"
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="testimonials-title">
            What Our <span className="text-tutor-yellow">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6" data-testid="testimonials-description">
            Real reviews from students who've experienced our tutoring services
          </p>
          <div className="flex items-center justify-center space-x-2" data-testid="rating-summary">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.8</span>
            <span className="text-gray-600">(22 reviews on Google Maps)</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${cardBackgrounds[index]} p-8 rounded-2xl border`}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex space-x-1 mb-4" data-testid={`testimonial-rating-${index}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900" data-testid={`testimonial-author-${index}`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500" data-testid={`testimonial-time-${index}`}>
                    {testimonial.timeAgo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://maps.app.goo.gl/95uL8tjv63qRbEai9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-tutor-blue hover:text-tutor-blue-dark font-semibold"
            data-testid="link-google-reviews"
          >
            <span className="mr-2">🔍</span>
            View all reviews on Google Maps
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}
