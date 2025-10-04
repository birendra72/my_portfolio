import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Raja Balwant Singh Engineering Technical Campus Bichpuri, Agra',
    location: 'Agra, Uttar Pradesh, India',
    period: '2023 - 2026 (Expected)',
    gpa: '7.2/10',
    status: 'In Progress',
    description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and system design.',
    coursework: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
      'Machine Learning',
      'Web Development',
      'Mobile App Development',
      'Cybersecurity Fundamentals'
    ],
    achievements: [
      'Dean\'s List for 4 consecutive semesters',
      'Computer Science Department Scholarship recipient',
      'Teaching Assistant for Introduction to Programming',
      'Member of ACM Student Chapter'
    ]
  },
  // {
  //   id: 2,
  //   degree: 'High School Diploma',
  //   institution: 'Your High School Name',
  //   location: 'City, State',
  //   period: '2017 - 2021',
  //   gpa: '3.9/4.0',
  //   status: 'Completed',
  //   description: 'Graduated with honors, focusing on STEM subjects and early computer science exposure.',
  //   coursework: [
  //     'AP Computer Science A',
  //     'AP Calculus BC',
  //     'AP Physics C',
  //     'AP Chemistry',
  //     'Advanced Mathematics',
  //     'Technical Writing'
  //   ],
  //   achievements: [
  //     'Valedictorian (Top 1% of graduating class)',
  //     'National Honor Society member',
  //     'Science Fair Winner - Computer Science Category',
  //     'Robotics Team Captain - State Championship'
  //   ]
  // }
];

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    credentialId: 'AWS-CCP-12345'
  },
  {
    name: 'Google Analytics Certified',
    issuer: 'Google',
    date: '2025',
    credentialId: 'GA-67890'
  },
  {
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2026',
    credentialId: 'AZ-900-54321'
  },
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: '2026',
    credentialId: 'META-REACT-98765'
  }
];

export const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-surface/50 to-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Education
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              My academic journey and continuous learning in computer science
            </motion.p>
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  {/* Timeline Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-32 bg-border hidden md:block" />
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />

                  {/* Education Card */}
                  <div className="md:ml-16 card-interactive p-6 hover:scale-[1.02] transition-all duration-300">
                    {/* Card Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <GraduationCap className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <p className="text-muted-foreground font-medium">{edu.institution}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                          : 'bg-green-500/10 text-green-500 border border-green-500/20'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Coursework */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Relevant Coursework</span>
                        </h4>
                        <div className="space-y-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <motion.div
                              key={course}
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + courseIndex * 0.05 }}
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center space-x-2">
                          <Award className="w-4 h-4" />
                          <span>Achievements</span>
                        </h4>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achievement}
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + achIndex * 0.05 }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
              <p className="text-muted-foreground">
                Professional certifications and continuous learning achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="card-interactive p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mb-2">Earned: {cert.date}</p>
                  <p className="text-muted-foreground text-xs font-mono">
                    ID: {cert.credentialId}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="card-interactive p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className="text-muted-foreground mb-6">
                I believe in lifelong learning and continuously expanding my knowledge. 
                Currently exploring advanced topics in AI/ML, cloud architecture, and DevOps practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Currently Learning', 'AI/ML', 'Cloud Architecture', 'DevOps'].map((item, index) => (
                  <motion.span
                    key={item}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};