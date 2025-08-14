import SectionContainer from "@/components/ui/section-container";

export default function SubjectsSection() {
  const highSchoolSubjects = [
    "Accounting",
    "Mathematics", 
    "Geography",
    "Economics",
    "Business Studies",
    "Mathematical Literacy",
    "Technical Mathematics",
    "Life Science",
    "Physical Science"
  ];

  const universityCourses = [
    {
      title: "Mechanical Engineering",
      description: "Complete mechanical engineering curriculum support"
    },
    {
      title: "Electrical Engineering", 
      description: "Electrical systems and engineering principles"
    },
    {
      title: "Civil Engineering",
      description: "Structural design, construction, and infrastructure engineering"
    },
    {
      title: "Computer Science",
      description: "Programming, algorithms, and software development"
    },
    {
      title: "Accounting",
      description: "Advanced accounting principles and practices"
    },
    {
      title: "Commerce",
      description: "Business administration and commercial studies"
    },
    {
      title: "Actuarial Science",
      description: "Risk assessment, insurance, and financial mathematics"
    },
    {
      title: "Statistics",
      description: "Data analysis, probability theory, and statistical modeling"
    },
    {
      title: "Health Sciences",
      description: "Medical and health science program preparation"
    }
  ];

  const curricula = ["NSC", "IEB", "Cambridge"];

  return (
    <section id="subjects" className="py-20 bg-gray-50">
      <SectionContainer>
        {/* High School Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="high-school-title">
              High School <span className="text-tutor-black">Subjects</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6" data-testid="high-school-description">
              Expert tutoring for high school students across all major curricula
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <span className="text-lg font-semibold text-gray-700 mr-2">Offerings:</span>
              {curricula.map((curriculum, index) => (
                <span 
                  key={index}
                  className="bg-tutor-black text-white px-4 py-2 rounded-full text-sm font-semibold"
                  data-testid={`curriculum-badge-${index}`}
                >
                  {curriculum}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {highSchoolSubjects.map((subject, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200"
                data-testid={`high-school-subject-${index}`}
              >
                <h3 className="text-lg font-semibold text-tutor-black" data-testid={`high-school-subject-title-${index}`}>
                  {subject}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* University Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="university-title">
              University <span className="text-tutor-black">Courses</span>
            </h2>
            <p className="text-xl text-gray-600" data-testid="university-description">
              Specialized support for university-level engineering, science, and commerce programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universityCourses.map((course, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                data-testid={`university-course-${index}`}
              >
                <h3 className="text-xl font-bold text-tutor-black mb-3" data-testid={`university-course-title-${index}`}>
                  {course.title}
                </h3>
                <p className="text-gray-600" data-testid={`university-course-description-${index}`}>
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
