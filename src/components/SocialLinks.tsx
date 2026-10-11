import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { SocialLinks as SocialLinksType } from '../types/portfolio';

interface SocialLinksProps {
  links: SocialLinksType;
  className?: string;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className = '',
  showLabels = false,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const items = [
    {
      name: 'LinkedIn',
      url: links.linkedin,
      icon: <Linkedin className="w-4 h-4 text-[#0A66C2]" />,
      label: 'linkedin.com/in/joyarnold21',
      color: 'hover:text-[#0A66C2]',
    },
    {
      name: 'GitHub',
      url: links.github,
      icon: <Github className="w-4 h-4" />,
      label: 'github.com/joyarnold21',
      color: 'hover:text-emerald-400',
    },
    {
      name: 'LeetCode',
      url: links.leetcode,
      icon: (
        <span className="font-mono text-xs font-bold leading-none select-none text-amber-400">
          &lt;/&gt;
        </span>
      ),
      label: 'leetcode.com/u/Joyyy21',
      color: 'hover:text-amber-400',
    },
  ];

  const handleCopy = (e: React.MouseEvent, name: string, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedKey(name);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleOpenLink = (url: string) => {
    // Attempt standard navigation, if blocked by iframe, fallback is provided via copy
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {items.map((item) => {
        const isCopied = copiedKey === item.name;

        return (
          <div
            key={item.name}
            className="flex items-center rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors shadow-sm"
          >
            {/* Primary link button */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOpenLink(item.url)}
              aria-label={`Visit Joy Arnold J's ${item.name} profile at ${item.url}`}
              className={`flex items-center gap-2 px-3 py-2 text-zinc-300 ${item.color} transition-colors`}
              title={`Open ${item.name}: ${item.url}`}
            >
              <span>{item.icon}</span>
              <span className="text-xs font-medium font-sans">
                {showLabels ? item.label : item.name}
              </span>
              <ExternalLink className="w-3 h-3 text-zinc-500 opacity-70" />
            </a>

            {/* Quick copy URL button */}
            <button
              onClick={(e) => handleCopy(e, item.name, item.url)}
              className="p-2 border-l border-zinc-800/80 text-zinc-500 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-r-xl transition-colors"
              title={`Copy ${item.name} URL (${item.url})`}
              aria-label={`Copy ${item.name} URL`}
            >
              {isCopied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        );
      })}

      {copiedKey && (
        <span className="text-[11px] font-mono text-emerald-400 animate-in fade-in duration-200">
          Copied {copiedKey} URL to clipboard!
        </span>
      )}
    </div>
  );
};
