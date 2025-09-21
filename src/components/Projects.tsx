import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter, Code, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    image: '/api/placeholder/600/400',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration using OpenAI API. Built with Next.js and Socket.io for seamless communication.',
    image: '/api/placeholder/600/400',
    category: 'AI/ML',
    technologies: ['Next.js', 'OpenAI API', 'Socket.io', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management Mobile App',
    description: 'Cross-platform mobile app for task management built with React Native. Features offline sync and push notifications.',
    image: '/api/placeholder/600/400',
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'Firebase', 'AsyncStorage'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with data visualization using Chart.js and weather API integration.',
    image: '/api/placeholder/600/400',
    category: 'Frontend',
    technologies: ['Vue.js', 'Chart.js', 'Weather API', 'SCSS'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: false,
  },
  {
    id: 5,
    title: 'DevOps Automation Tool',
    description: 'Docker-based automation tool for CI/CD pipelines with monitoring and alerting capabilities.',
    image: '/api/placeholder/600/400',
    category: 'DevOps',
    technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins', 'Grafana'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Personal Finance Tracker',
    description: 'Web application for tracking personal finances with data visualization and budget planning features.',
    image: '/api/placeholder/600/400',
    category: 'Full Stack',
    technologies: ['Django', 'PostgreSQL', 'D3.js', 'Bootstrap'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Mobile', 'AI/ML', 'DevOps'];

const categoryIcons = {
  'All': Filter,
  'Full Stack': Code,
  'Frontend': Globe,
  'Mobile': Smartphone,
  'AI/ML': Code,
  'DevOps': Code,
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-surface/50 to-background">
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
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A showcase of my recent work and the technologies I've been exploring
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card-interactive overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="flex items-center space-x-2"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{category}</span>
                </Button>
              );
            })}
          </motion.div>

          {/* All Projects Grid */}
          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card-interactive overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold truncate">{project.title}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="skill-badge text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center space-x-1 flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-3 h-3" />
                        <span className="text-xs">Code</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center space-x-1 flex-1"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="text-xs">Demo</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-muted-foreground mb-6">
              Want to see more of my work or collaborate on a project?
            </p>
            <Button
              className="btn-primary"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};