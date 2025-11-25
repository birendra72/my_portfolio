import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'AI & ML Intern',
    company: 'NIELIT',
    location: 'Online',
    period: 'June 2025 - July 2025',
    type: 'Internship',
    description: 'Completed an intensive online internship focused on Artificial Intelligence and Machine Learning using Python.',
    achievements: [
      'Gained hands-on experience in data preprocessing and analysis',
      'Worked on model training and evaluation using Python libraries',
      'Applied algorithmic problem-solving techniques to real-world scenarios',
      'Mastered core concepts of Machine Learning pipelines'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'AI Algorithms'],
    website: null
  },
  {
    id: 2,
    title: 'AI Intern (Workshop)',
    company: 'AI Academia',
    location: 'Hybrid',
    period: 'May 2025',
    type: 'Internship',
    description: 'Participated in a comprehensive workshop focused on Artificial Intelligence fundamentals and emerging technologies.',
    achievements: [
      'Collaborated on minor projects involving neural network concepts',
      'Studied AI ethics and future implications of artificial intelligence',
      'Explored practical applications of AI in modern software'
    ],
    technologies: ['Artificial Intelligence', 'Neural Networks', 'Deep Learning Concepts'],
    website: null
  }
];

const typeColors = {
  'Internship': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Part-time': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Research': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'Freelance': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
};

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
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
              Experience
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              My professional journey in Artificial Intelligence and Software Development.
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-24 bg-border hidden md:block" />
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  {/* Experience Card */}
                  <div className="md:ml-16 card-interactive p-6 hover:scale-[1.02] transition-all duration-300">
                    {/* Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold">{experience.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${typeColors[experience.type as keyof typeof typeColors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20'}`}>
                            {experience.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                            {experience.website && (
                              <button
                                onClick={() => window.open(experience.website!, '_blank')}
                                className="ml-1 hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Learnings & Contributions:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + achIndex * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="skill-badge text-xs"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="card-interactive p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Looking for New Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in challenging projects and collaborative opportunities. 
                Whether it's a full-time position or internship, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => window.open('/BirendraSinghResume1.pdf', '_blank')}
                  className="btn-secondary"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};