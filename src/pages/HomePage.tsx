import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Mail, GraduationCap, Briefcase, Sparkles, FolderGit2, Code2, Cloud, Palette, ExternalLink, CheckCircle2 } from 'lucide-react';
import { DeveloperProfile, Project } from '../types/portfolio';
import { SocialLinks } from '../components/SocialLinks';
import { ProjectCard } from '../components/ProjectCard';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  profile: DeveloperProfile;
  projects: Project[];
}

export const HomePage: React.FC<HomePageProps> = ({ profile, projects }) => {
  return (
    <div className="space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. HOME (HERO SECTION) */}
      {/* ========================================================================= */}
      <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        {/* Subtle green ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-emerald-500/5 blur-[100px] pointer-events-none -z-10 rounded-full" />

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            
            {/* Current Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Kalvium (B.Tech Applied AI) &bull; Cloud Computing Intern at Persevex</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">{profile.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-300 leading-snug">
                B.Tech CSE Applied AI Student at <span className="text-white">Kalvium</span> &amp; Cloud Computing Intern at{' '}
                <a
                  href={profile.internship.companyUrl || 'https://www.persevex.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>{profile.internship.company}</span>
                  <ExternalLink className="w-4 h-4 inline" />
                </a>.
              </p>
            </div>

            {/* Sub-introduction highlighting user's interests & strengths */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Passionate about <span className="text-zinc-200 font-medium">Web Development</span>, <span className="text-zinc-200 font-medium">UI/UX Design</span>, and <span className="text-zinc-200 font-medium">Cloud Computing</span>. Proficient in Python, React.js, JavaScript, HTML, CSS, and FEWD — with a fast-learning focus on modern backend development.
            </p>

            {/* Action Buttons: "Explore My Projects" & "Contact Me" */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs sm:text-sm border border-zinc-800 transition-all hover:text-emerald-400 hover:border-emerald-500/40 flex items-center gap-2"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Social Links Row: GitHub, LinkedIn, LeetCode */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-zinc-400">
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-500">
                Connect:
              </span>
              <SocialLinks links={profile.socialLinks} />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT ME SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-24 border-t border-zinc-800/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase mb-2">
              <span>// About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education, Internship &amp; Skillset
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Professional Introduction & Skills Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>About My Journey</span>
                </h3>
                
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {profile.about.summary}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {profile.about.appliedAiFocus}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {profile.about.currentWork}
                </p>
              </div>

              {/* Technical Skills Showcase */}
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 space-y-5">
                <h3 className="text-sm font-bold font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Skills &amp; Toolbelt</span>
                </h3>

                {/* Mastered Skills */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-zinc-300 block">
                    Core Technologies &amp; Mastered Tools:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.mastered.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-emerald-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Currently Learning (Speed Learner) */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                  <span className="text-xs font-semibold text-zinc-400 block">
                    Currently Expanding &amp; Fast-Track Learning:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.learning.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Key Facts (Education & Internship & Interests) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Internship Card with Clickable Persevex Link */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                      Current Experience
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {profile.internship.role}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={profile.internship.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 underline underline-offset-2"
                      >
                        <span>{profile.internship.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-zinc-600">·</span>
                      <span className="text-[11px] text-zinc-400">{profile.internship.status}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                      {profile.internship.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                      Education
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {profile.education.degree}
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1 font-semibold">
                      {profile.education.institution}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      {profile.education.currentStatus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Interests Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/90">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-800 text-zinc-300 shrink-0">
                    <Palette className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Core Interests
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {profile.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs text-zinc-300"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROJECTS SECTION */}
      {/* ========================================================================= */}
      <section id="projects" className="py-24 border-t border-zinc-800/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase mb-2">
                <span>// Featured Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Explore my live deployed web applications. Click any card to open the dedicated project overview or launch the live demo directly.
            </p>
          </div>

          {/* Dynamic Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Maintenance helper */}
          <div className="mt-8 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
            <span>
              💡 <strong>Easily add more projects:</strong> Simply add an entry to <code className="text-emerald-400 font-mono">src/data/portfolioData.ts</code> and it will appear here automatically.
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONTACT SECTION */}
      {/* ========================================================================= */}
      <ContactSection profile={profile} />

    </div>
  );
};
