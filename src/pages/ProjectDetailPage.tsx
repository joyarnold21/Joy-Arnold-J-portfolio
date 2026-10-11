import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailPageProps {
  projects: Project[];
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-32 text-center">
        <div className="space-y-4 max-w-md">
          <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
            <Cpu className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
          <p className="text-sm text-zinc-400">
            The project you're looking for could not be located in the portfolio dataset.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32 relative">
      {/* Subtle green ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-4 pb-8 border-b border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
              {project.category || 'Featured Project'}
            </span>
            <span className="text-zinc-600 font-mono text-xs">/</span>
            <span className="text-zinc-400 font-mono text-xs">Project Details</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-mono">
            {project.tagline}
          </p>

          {/* Action Links: Live URL & GitHub */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs border border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 flex items-center gap-2 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </header>

        {/* Project Body */}
        <div className="py-10 space-y-10">
          
          {/* Technologies Stack */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Technologies &amp; Libraries
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Project Overview
            </h2>
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 text-sm sm:text-base text-zinc-300 leading-relaxed space-y-4">
              <p>{project.description}</p>
              {project.fullOverview && <p>{project.fullOverview}</p>}
            </div>
          </section>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Key Technical Highlights
              </h2>
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Footer Navigation: Previous / Next Project */}
        <footer className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/project/${prevProject.id}`}
              className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/40 text-left transition-colors group flex-1"
            >
              <span className="text-[11px] font-mono text-zinc-500 block mb-1">
                &larr; Previous Project
              </span>
              <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <Link
              to={`/project/${nextProject.id}`}
              className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/40 text-right transition-colors group flex-1"
            >
              <span className="text-[11px] font-mono text-zinc-500 block mb-1">
                Next Project &rarr;
              </span>
              <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </footer>

      </div>
    </article>
  );
};
