import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Software Development Intern',
    company: 'Tech Innovation Labs',
    location: 'San Francisco, CA (Remote)',
    period: 'June 2023 - August 2023',
    type: 'Internship',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and code reviews.',
    achievements: [
      'Built a customer dashboard that improved user engagement by 25%',
      'Optimized database queries resulting in 40% faster load times',
      'Participated in agile development processes and daily standups',
      'Contributed to open-source projects and documented best practices'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Git'],
    website: 'https://example.com'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX (Hybrid)',
    period: 'September 2023 - Present',
    type: 'Part-time',
    description: 'Leading frontend development for a fintech startup. Responsible for creating responsive web applications and implementing new features.',
    achievements: [
      'Developed the main product dashboard from scratch',
      'Implemented secure payment processing integration',
      'Reduced application bundle size by 30% through optimization',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Vercel'],
    website: 'https://example.com'
  },
  {
    id: 3,
    title: 'Research Assistant',
    company: 'University Computer Science Department',
    location: 'Local Campus',
    period: 'January 2023 - May 2023',
    type: 'Research',
    description: 'Assisted in machine learning research project focused on natural language processing and data analysis.',
    achievements: [
      'Contributed to research paper on sentiment analysis algorithms',
      'Developed data preprocessing pipelines using Python',
      'Presented findings at undergraduate research symposium',
      'Collaborated with PhD students on experimental design'
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Jupyter', 'NLTK'],
    website: 'https://example.com'
  },
  {
    id: 4,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'March 2022 - December 2022',
    type: 'Freelance',
    description: 'Provided web development services to small businesses and startups. Created custom websites and web applications.',
    achievements: [
      'Delivered 8+ successful projects for various clients',
      'Maintained 100% client satisfaction rate',
      'Developed e-commerce solutions increasing client sales by 60%',
      'Built long-term relationships with repeat clients'
    ],
    technologies: ['WordPress', 'Shopify', 'React', 'PHP', 'MySQL'],
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
              My journey through various roles and the impact I've made along the way
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
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${typeColors[experience.type as keyof typeof typeColors]}`}>
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
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
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
                Whether it's a full-time position, internship, or freelance project, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => window.open('/resume.pdf', '_blank')}
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