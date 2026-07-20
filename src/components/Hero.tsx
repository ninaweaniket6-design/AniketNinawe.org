import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium tracking-wide mb-8">
            Available for new opportunities
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display text-white mb-6 tracking-tight leading-[1.1]"
        >
          Bridging Data & <br className="hidden md:block"/> Software Engineering.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto"
        >
          I'm <span className="text-zinc-200 font-medium">Aniket Ninawe</span>, a Full-Stack Developer & AI Engineer specializing in building intelligent, scalable systems and robust data pipelines.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-lg font-medium transition-all duration-300 hover:bg-zinc-200">
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-6 py-3 bg-transparent text-white rounded-lg font-medium transition-all duration-300 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
