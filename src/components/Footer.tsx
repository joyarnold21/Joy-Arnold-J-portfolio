import React from 'react';
import { ArrowUp } from 'lucide-react';
import { DeveloperProfile } from '../types/portfolio';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  profile: DeveloperProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400">
              JA
            </div>
            <div>
              <p className="font-bold text-zinc-200">{profile.name}</p>
              <p className="text-[11px] text-zinc-500 font-mono">
                {profile.education.degree} · {profile.internship.company} Intern
              </p>
            </div>
          </div>

          {/* Social Profiles */}
          <SocialLinks links={profile.socialLinks} />

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-emerald-400 border border-zinc-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Kalvium · PerseverX Internship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
