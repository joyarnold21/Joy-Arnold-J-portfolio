import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-emerald-500/40 p-6 sm:p-7 transition-all duration-300 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1">
      {/* Subtle green ambient accent on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono text-emerald-400 font-semibold tracking-wide uppercase">
            {project.category || 'Featured Project'}
          </span>
          <span className="text-zinc-600 font-mono text-xs">/0{project.id ? '' : '1'}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight">
          <Link to={`/project/${project.id}`} className="focus:outline-none focus-visible:underline">
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="text-xs text-zinc-400 mt-1 line-clamp-1 font-mono">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-zinc-300 mt-3.5 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies as clean unboxed typographic chips */}
        <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-zinc-950/70 border border-zinc-800/80 text-[11px] font-mono text-zinc-300 group-hover:border-zinc-700/80 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
        {/* Dedicated Details Page Link */}
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-0.5 duration-200"
        >
          <span>View Details Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* External Links */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border border-zinc-800 transition-colors"
              title="GitHub Repository"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 transition-colors"
              title="Live Project URL"
              aria-label={`Open live URL for ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
