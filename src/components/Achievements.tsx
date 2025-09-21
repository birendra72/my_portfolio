import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, Medal, Target, Zap, Users, Code } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Hackathon Winner',
    event: 'TechFest 2023 - 48hr Hackathon',
    date: 'October 2023',
    description: 'Won first place in university hackathon by developing an AI-powered study assistant app that helps students optimize their learning schedule.',
    impact: 'Led a team of 4 developers to victory against 50+ competing teams',
    category: 'Competition',
    icon: Trophy,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20'
  },
  {
    id: 2,
    title: 'Open Source Contributor',
    event: 'Hacktoberfest 2023',
    date: 'October 2023',
    description: 'Successfully contributed to 10+ open source projects during Hacktoberfest, with contributions ranging from bug fixes to feature implementations.',
    impact: 'Merged PRs in popular repositories with 1000+ stars each',
    category: 'Open Source',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20'
  },
  {
    id: 3,
    title: 'Research Publication',
    event: 'Undergraduate Research Symposium',
    date: 'April 2023',
    description: 'Co-authored research paper on "Machine Learning Applications in Web Development" presented at the annual undergraduate research symposium.',
    impact: 'Research viewed by 500+ attendees and featured in university newsletter',
    category: 'Research',
    icon: Star,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    id: 4,
    title: 'Dean\'s List Recognition',
    event: 'Academic Excellence',
    date: '2021 - 2023',
    description: 'Consistently maintained high academic performance, earning Dean\'s List recognition for 4 consecutive semesters.',
    impact: 'Top 10% of students in Computer Science program',
    category: 'Academic',
    icon: Medal,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    id: 5,
    title: 'Startup Project Launch',
    event: 'Personal Project',
    date: 'January 2023',
    description: 'Launched a successful web application that gained 1000+ users in the first month. The project demonstrates full-stack development skills.',
    impact: '1000+ active users, 95% positive feedback rating',
    category: 'Project',
    icon: Target,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    id: 6,
    title: 'Technical Workshop Leader',
    event: 'CS Department Workshop Series',
    date: 'September 2023',
    description: 'Led workshops on React.js and modern web development for 100+ students, helping them learn practical skills for their projects.',
    impact: 'Trained 100+ students, 98% positive feedback score',
    category: 'Teaching',
    icon: Users,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20'
  },
  {
    id: 7,
    title: 'Innovation Challenge Winner',
    event: 'University Innovation Competition',
    date: 'March 2023',
    description: 'Won the innovation challenge by proposing a solution for campus sustainability using IoT and data analytics.',
    impact: 'Solution adopted by university facilities management',
    category: 'Innovation',
    icon: Zap,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20'
  },
  {
    id: 8,
    title: 'Programming Contest Finalist',
    event: 'Regional ACM ICPC',
    date: 'November 2022',
    description: 'Reached regional finals in ACM International Collegiate Programming Contest, demonstrating strong algorithmic problem-solving skills.',
    impact: 'Top 20 teams out of 200+ participating teams',
    category: 'Competition',
    icon: Award,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20'
  }
];

const stats = [
  { label: 'Hackathons Won', value: '', icon: Trophy },
  { label: 'Open Source PRs', value: '25+', icon: Code },
  { label: 'Students Mentored', value: '50+', icon: Users },
  { label: 'Projects Launched', value: '12', icon: Target },
];

export const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20">
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
              Achievements
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Milestones and recognitions that mark my journey in technology and academia
            </motion.p>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-interactive p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="card-interactive p-6 group"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Achievement Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${achievement.bgColor} border ${achievement.borderColor}`}>
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${achievement.bgColor} ${achievement.color} border ${achievement.borderColor}`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Achievement Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {achievement.event}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {achievement.date}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Impact */}
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs font-medium text-primary mb-1">Impact:</p>
                    <p className="text-xs text-muted-foreground">
                      {achievement.impact}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Notable Mentions */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="card-interactive p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">Notable Mentions</h3>
                <p className="text-muted-foreground">
                  Additional recognitions and accomplishments worth highlighting
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Academic Honors</h4>
                  <ul className="space-y-2">
                    {[
                      'Computer Science Department Scholarship (2022-2023)',
                      'Undergraduate Research Grant Recipient',
                      'Teaching Assistant Excellence Award',
                      'Student Leadership Recognition'
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-accent">Community Impact</h4>
                  <ul className="space-y-2">
                    {[
                      'Volunteer coding instructor for local high school',
                      'Organized 3 tech meetups in local community',
                      'Mentored 20+ students in programming fundamentals',
                      'Contributing member of local developer community'
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <p className="text-muted-foreground mb-6">
              These achievements represent my commitment to excellence and continuous growth. 
              I'm always looking for new challenges and opportunities to make an impact.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Let's Create Something Amazing Together
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};