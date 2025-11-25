import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Smartphone, Globe, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'C++', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'Java', level: 70 },
      // { name: 'Go', level: 60 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SASS/SCSS', level: 80 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Express.js', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 60 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux', level: 85 },
      { name: 'Nginx', level: 70 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 70 },
      { name: 'iOS (Swift)', level: 60 },
      { name: 'Android (Kotlin)', level: 65 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: GitBranch,
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Jira', level: 75 },
      { name: 'Slack', level: 90 },
    ],
  },
];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
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
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A comprehensive overview of my technical skills and the technologies I work with
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="card-interactive p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.2, 
                            delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="card-interactive p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends and best practices. I regularly explore new frameworks, attend workshops, 
                and contribute to open-source projects to expand my skill set.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Learning', 'Experimenting', 'Building', 'Sharing'].map((action, index) => (
                  <motion.span
                    key={action}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  >
                    {action}
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