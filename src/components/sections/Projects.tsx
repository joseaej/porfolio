import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects: Project[] = [
    {
      id: 1,
      title: "Dietify",
      description: t.projectsDescription.description1,
      image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
      technologies: ["Flutter", "PostgresSQL", "Java", "Spring Boot", "Docket", "Supabase"],
      demoUrl: "https://github.com/joseaej/Dietify/releases",
      codeUrl: "https://github.com/joseaej/Dietify",
      featured: true
    },
    {
      id: 2,
      title: "Arkanoid",
      description: t.projectsDescription.descriptionArkanoid,
      image: "https://images.pexels.com/photos/7598467/pexels-photo-7598467.jpeg",
      technologies: [".NET"],
      demoUrl: "https://github.com/joseaej/Arkanoid-Game",
      codeUrl: "https://github.com/joseaej/Arkanoid-Game",
      featured: true
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A responsive social media application with features like user profiles, posts, comments, and real-time notifications.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
      featured: true
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "A Kanban-style task management application with drag-and-drop functionality, task assignments, and progress tracking.",
      image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg",
      technologies: ["React", "TypeScript", "DnD Kit", "Express", "PostgreSQL"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Weather Application",
      description: "A weather forecasting app that provides current conditions and 7-day forecasts based on user location or search.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      technologies: ["React", "OpenWeather API", "Geolocation API", "CSS Modules"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com",
      featured: false
    }
  ];

  const filters = [t.projects.tag1, "Flutter", "Java", ".NET", "Supabase", "PostgresSQL", "Spring Boot", "React"];
  const [activeFilter, setActiveFilter] = useState(t.projects.tag1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeFilter === t.projects.tag1
    ? projects
    : projects.filter(project => project.technologies.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t.projects.title}</h2>
        </motion.div>

        <motion.p
          className="text-center text-gray-400 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.projects.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter
                  ? "bg-primary-500 text-white"
                  : "bg-dark-700 text-gray-300 hover:bg-dark-600"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/joseaej"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
          >
            {t.projects.viewMore}<ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
