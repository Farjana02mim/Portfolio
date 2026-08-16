import { motion } from 'motion/react';
import { Github, Linkedin, ExternalLink, Globe, ArrowUpRight, Sparkles } from 'lucide-react';
import { developerProfiles } from '../data/portfolioData';
import { DeveloperProfile } from '../types';

interface DeveloperProfilesProps {
  isDark: boolean;
}

export function DeveloperProfiles({ isDark }: DeveloperProfilesProps) {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github size={24} />;
      case 'linkedin':
        return <Linkedin size={24} />;
      default:
        return <Globe size={24} />;
    }
  };

  return (
    <section
      id="profiles"
      className={`py-20 lg:py-28 relative ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
            <Globe size={13} className="text-cyan-400" />
            <span>Developer Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Find Me Online
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Connect across developer networks, follow my coding journey, and view active project repositories.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {developerProfiles.map((profile: DeveloperProfile, idx: number) => {
            const isGitHub = profile.platform.toLowerCase() === 'github';

            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-7 sm:p-8 rounded-3xl border backdrop-blur-xl flex flex-col justify-between transition-all group ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800/80 hover:border-cyan-500/40 shadow-xl shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl border ${
                      isGitHub
                        ? isDark
                          ? 'bg-slate-900 text-white border-slate-700'
                          : 'bg-slate-900 text-white border-slate-800'
                        : isDark
                          ? 'bg-blue-600/15 text-blue-400 border-blue-500/30'
                          : 'bg-blue-50 text-blue-600 border-blue-200'
                    }`}>
                      {getIcon(profile.platform)}
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}>
                      @{profile.username}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display tracking-tight mb-2">
                    {profile.platform}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {profile.description}
                  </p>

                  {profile.stats && (
                    <div className="text-xs font-mono text-cyan-500 dark:text-cyan-400 mb-6 font-semibold">
                      {profile.stats}
                    </div>
                  )}
                </div>

                {/* Visit Profile Action Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    id={`profile-${profile.id}-btn`}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Farjana Akter Mim's ${profile.platform} profile`}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isGitHub
                        ? 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 shadow-md group-hover:border-slate-500'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20'
                    }`}
                  >
                    <span>Visit Profile</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
