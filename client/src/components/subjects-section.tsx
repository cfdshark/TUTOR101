import SectionContainer from "@/components/ui/section-container";

export default function SubjectsSection() {
  const subjects = [
    {
      title: "Engineering",
      description: "Mathematics, Physics, Chemistry, and specialized engineering subjects",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "University engineering classroom with students and professor",
      topics: [
        "Engineering Mathematics",
        "Applied Physics", 
        "Technical Drawing",
        "Engineering Fundamentals"
      ]
    },
    {
      title: "Science",
      description: "Core sciences with practical applications and exam preparation",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Modern science laboratory with equipment and experiments",
      topics: [
        "Physical Science",
        "Life Sciences",
        "Chemistry", 
        "Biology"
      ]
    },
    {
      title: "Health Sciences",
      description: "Preparation for medical and health science programs",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Medical students studying anatomy in modern classroom",
      topics: [
        "Human Biology",
        "Biochemistry",
        "Anatomy & Physiology",
        "Medical Terminology"
      ]
    },
    {
      title: "Commerce",
      description: "Business studies, economics, and commercial subjects",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Business students collaborating on project with laptops and charts",
      topics: [
        "Accounting",
        "Economics",
        "Business Studies",
        "Mathematics Literacy"
      ]
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-gray-50">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="subjects-title">
            Subject <span className="text-tutor-black">Specializations</span>
          </h2>
          <p className="text-xl text-gray-600" data-testid="subjects-description">
            Expert tutoring across multiple academic disciplines
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`subject-card-${index}`}
            >
              <div className="text-center">
                <img 
                  src={subject.image}
                  alt={subject.alt}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  data-testid={`subject-image-${index}`}
                />
                <h3 className="text-2xl font-bold text-tutor-black mb-4" data-testid={`subject-title-${index}`}>
                  {subject.title}
                </h3>
                <p className="text-gray-600 mb-6" data-testid={`subject-description-${index}`}>
                  {subject.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-2" data-testid={`subject-topics-${index}`}>
                  {subject.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>• {topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
