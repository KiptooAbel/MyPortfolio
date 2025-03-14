import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Components/Layout';
import SectionHeading from '@/Components/SectionHeading';

const AboutSection = ({ title, children, className = '' }) => (
  <div className={`mb-16 ${className}`}>
    <h3 className="text-2xl font-bold text-white relative inline-block mb-6">
      {title}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
    </h3>
    {children}
  </div>
);

const ExperienceCard = ({ experience }) => (
  <div className="relative pl-8 pb-8 border-l border-gray-700 group">
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600"></div>
    <div className="mb-1">
      <span className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
        {experience.period}
      </span>
    </div>
    <h4 className="text-xl font-bold text-white mt-2">{experience.title}</h4>
    <h5 className="text-indigo-400 mb-3">{experience.company}</h5>
    <p className="text-gray-300">{experience.description}</p>
  </div>
);

const EducationCard = ({ education }) => (
  <div className="relative pl-8 pb-8 border-l border-gray-700 group">
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600"></div>
    <div className="mb-1">
      <span className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
        {education.period}
      </span>
    </div>
    <h4 className="text-xl font-bold text-white mt-2">{education.degree}</h4>
    <h5 className="text-indigo-400 mb-3">{education.institution}</h5>
    <p className="text-gray-300">{education.description}</p>
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10">
    <div className="mb-4">
      <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    <p className="text-gray-300 italic mb-6">{testimonial.text}</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
        {testimonial.author.charAt(0)}
      </div>
      <div className="ml-3">
        <h5 className="font-semibold text-white">{testimonial.author}</h5>
        <p className="text-sm text-gray-400">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

const CertificationBadge = ({ certification }) => (
  <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 flex items-center space-x-3">
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <div>
      <h5 className="font-semibold text-white">{certification.name}</h5>
      <p className="text-sm text-gray-400">{certification.issuer} • {certification.year}</p>
    </div>
  </div>
);

const About = ({ aboutData }) => {
  if (!aboutData) {
    return <div>Loading...</div>;
  }

  const { 
    bio, 
    short_description, 
    profile_image, 
    experiences, 
    education, 
    testimonials, 
    certifications,
    personal_info = {} 
  } = aboutData;
  
  // Ensure all data structures are arrays even if they come in as something else or undefined
  const experiencesArray = Array.isArray(experiences) ? experiences : [];
  const educationArray = Array.isArray(education) ? education : [];
  const testimonialsArray = Array.isArray(testimonials) ? testimonials : [];
  const certificationsArray = Array.isArray(certifications) ? certifications : [];

  return (
    <Layout>
      <Head title="About Me - Abel Kiptoo" />
      
      <section className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Me"
            subtitle="My Journey & Experience"
            gradient="from-blue-400 via-indigo-500 to-purple-500"
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Profile Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="relative rounded-xl overflow-hidden mb-6 border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                  <img 
                    src={profile_image || '/api/placeholder/400/400'} 
                    alt="Abel Kiptoo" 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Personal Info</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <span className="text-gray-400 block text-sm">Name</span>
                        {personal_info.full_name || 'Not specified'}
                      </div>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <span className="text-gray-400 block text-sm">Email</span>
                        {personal_info.email || 'Not specified'}
                      </div>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <span className="text-gray-400 block text-sm">Location</span>
                        {personal_info.location || 'Not specified'}
                      </div>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      <div>
                        <span className="text-gray-400 block text-sm">Languages</span>
                        {Array.isArray(personal_info.languages) ? personal_info.languages.join(', ') : 'Not specified'}
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="text-white font-medium mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(personal_info.interests) && personal_info.interests.length > 0 ? (
                        personal_info.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 text-sm bg-indigo-500/20 rounded-full text-indigo-300"
                          >
                            {interest}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400">No interests specified</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:col-span-2">
              <AboutSection title="Biography">
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  {bio ? bio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  )) : (
                    <p>No biography available.</p>
                  )}
                </div>
              </AboutSection>
              
              <AboutSection title="Professional Experience">
                {experiencesArray.length > 0 ? (
                  <div className="space-y-2">
                    {experiencesArray.map((exp, index) => (
                      <ExperienceCard key={index} experience={exp} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No professional experience listed.</p>
                )}
              </AboutSection>
              
              <AboutSection title="Education">
                {educationArray.length > 0 ? (
                  <div className="space-y-2">
                    {educationArray.map((edu, index) => (
                      <EducationCard key={index} education={edu} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No education history listed.</p>
                )}
              </AboutSection>
              
              <AboutSection title="Certifications">
                {certificationsArray.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certificationsArray.map((cert, index) => (
                      <CertificationBadge key={index} certification={cert} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No certifications listed.</p>
                )}
              </AboutSection>
              
              <AboutSection title="What People Say" className="mb-0">
                {testimonialsArray.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {testimonialsArray.map((testimonial, index) => (
                      <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No testimonials available.</p>
                )}
              </AboutSection>
            </div>
            </div>
          </div>
      </section>
    </Layout>
  );
};

export default About;