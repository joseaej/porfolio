import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div 
      className="card group"
      variants={cardVariants}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute top-3 left-3 flex space-x-2">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-dark-800/80 text-white hover:bg-primary-500 transition-colors"
            >
              <ExternalLink size={14} />
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-dark-800/80 text-white hover:bg-primary-500 transition-colors"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-dark-700 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;