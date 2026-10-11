import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, ArrowUpRight, MessageSquare, AlertCircle, Linkedin, Github, ExternalLink } from 'lucide-react';
import { DeveloperProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: DeveloperProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSocial, setCopiedSocial] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copySocialLink = (platform: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedSocial(platform);
    setTimeout(() => setCopiedSocial(null), 2000);
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const socialProfiles = [
    {
      name: 'LinkedIn',
      handle: 'joyarnold21',
      url: profile.socialLinks.linkedin,
      icon: <Linkedin className="w-4 h-4 text-[#0A66C2]" />,
      actionText: 'Open LinkedIn Profile',
      tip: 'Professional network & experience',
    },
    {
      name: 'LeetCode',
      handle: 'Joyyy21',
      url: profile.socialLinks.leetcode,
      icon: (
        <span className="font-mono text-xs font-bold leading-none select-none text-amber-400">
          &lt;/&gt;
        </span>
      ),
      actionText: 'Open LeetCode Profile',
      tip: 'Problem solving & algorithms',
    },
    {
      name: 'GitHub',
      handle: 'joyarnold21',
      url: profile.socialLinks.github,
      icon: <Github className="w-4 h-4 text-zinc-300" />,
      actionText: 'Open GitHub Profile',
      tip: 'Repositories & code samples',
    },
  ];

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase mb-2">
            <span>// Contact &amp; Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Feel free to connect directly on LinkedIn, check my code on GitHub, or send me an email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Email & Detailed Social Profiles */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 space-y-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Direct Email
              </span>
              
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs font-semibold text-zinc-200 hover:text-emerald-400 truncate block transition-colors"
                      title={profile.email}
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border border-zinc-800 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <span>Send Email via Client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Profiles Cards with Direct Open and Copy Support */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Social Profiles &amp; Networks
                </span>
                {copiedSocial && (
                  <span className="text-[11px] font-mono text-emerald-400">
                    Copied {copiedSocial}!
                  </span>
                )}
              </div>

              <div className="space-y-2.5">
                {socialProfiles.map((soc) => (
                  <div
                    key={soc.name}
                    className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0">
                        {soc.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{soc.name}</span>
                          <span className="text-[11px] text-zinc-500 font-mono">@{soc.handle}</span>
                        </div>
                        <a
                          href={soc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleOpenLink(soc.url)}
                          className="text-[11px] text-zinc-400 hover:text-emerald-400 truncate block transition-colors"
                        >
                          {soc.url.replace(/^https:\/\/(www\.)?/, '')}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Copy URL button */}
                      <button
                        onClick={() => copySocialLink(soc.name, soc.url)}
                        className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border border-zinc-800 transition-colors"
                        title={`Copy ${soc.name} link to clipboard`}
                        aria-label={`Copy ${soc.name} link`}
                      >
                        {copiedSocial === soc.name ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Direct External Open Link */}
                      <a
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleOpenLink(soc.url)}
                        className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors"
                        title={`Open ${soc.name} in a new tab`}
                        aria-label={`Open ${soc.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Helpful note for iframe preview popup blockers */}
              <p className="text-[11px] text-zinc-500 pt-1 leading-relaxed">
                💡 <em>Note: If your browser's pop-up blocker prevents opening new tabs from the web preview, click the copy icon (<Copy className="w-3 h-3 inline mx-0.5 text-zinc-400" />) and paste directly into your browser or app.</em>
              </p>
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 shadow-xl backdrop-blur-xl">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Ready!</h3>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. You can also send this note directly to{' '}
                    <strong className="text-emerald-400">{profile.email}</strong>.
                  </p>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
                  >
                    <span>Open in Email App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800/80">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Send a Direct Note</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-zinc-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-zinc-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Subject Line
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Inquiry or Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-emerald-500 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Joy Arnold, I'd like to get in touch regarding..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors resize-y ${
                        errors.message ? 'border-rose-500' : 'border-zinc-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
