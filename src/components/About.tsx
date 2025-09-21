import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Target, Lightbulb, Heart } from 'lucide-react';

const stats = [
  { label: 'Years of Learning', value: '3+', icon: BookOpen },
  { label: 'Projects Completed', value: '15+', icon: Target },
  { label: 'Technologies Explored', value: '20+', icon: Lightbulb },
  { label: 'Coffee Cups', value: '∞', icon: Heart },
];

const interests = [
  'Full-Stack Development',
  'Machine Learning',
  'Cloud Computing',
  'Mobile Development',
  'DevOps & Automation',
  'Open Source Contributing',
];

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-surface/50 to-background">
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
              About Me
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Passionate Computer Science student with a vision for creative technology solutions
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a Computer Science student, I'm passionate about exploring the endless 
                  possibilities that technology offers. My journey began with curiosity about 
                  how things work and evolved into a deep love for creating innovative solutions 
                  by combining different technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that the true power of technology lies not just in using individual 
                  tools, but in creatively connecting them to solve real-world problems. This 
                  philosophy drives me to constantly explore new tech stacks and experiment 
                  with different approaches to development.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Vision</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  "Technology is not just about using tools, but about connecting them 
                  creatively to solve problems."
                </blockquote>
                <p className="text-muted-foreground leading-relaxed">
                  This vision guides everything I do - from learning new programming languages 
                  to architecting complex systems. I'm always looking for ways to bridge 
                  different technologies and create something greater than the sum of its parts.
                </p>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Column */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="card-interactive p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};