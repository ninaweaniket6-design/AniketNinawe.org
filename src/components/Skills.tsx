import { motion } from 'motion/react';
import { Code2, BrainCircuit, Database, Layout } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-cyan-500 mb-4" size={32} strokeWidth={1.5} />,
      description: "Building responsive, accessible, and dynamic user interfaces.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"]
    },
    {
      title: "Backend & Systems",
      icon: <Code2 className="text-cyan-500 mb-4" size={32} strokeWidth={1.5} />,
      description: "Architecting scalable and secure server-side applications.",
      skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Docker"]
    },
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit className="text-cyan-500 mb-4" size={32} strokeWidth={1.5} />,
      description: "Integrating and fine-tuning advanced machine learning models.",
      skills: ["LLMs", "RAG Systems", "AI Data Pipelines", "LangChain", "Prompt Engineering"]
    },
    {
      title: "Data Science",
      icon: <Database className="text-cyan-500 mb-4" size={32} strokeWidth={1.5} />,
      description: "Extracting actionable insights from complex datasets.",
      skills: ["Python", "Data Analytics", "Pandas", "Scikit-Learn", "D3.js"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg font-light max-w-2xl mx-auto"
          >
            A comprehensive overview of the tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl hover:bg-zinc-900 transition-colors duration-500 group relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-transparent group-hover:from-cyan-900/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-display font-medium text-zinc-100 mb-2">{category.title}</h3>
                <p className="text-zinc-400 text-sm font-light mb-8 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3.5 py-1.5 bg-zinc-950/80 border border-zinc-800 text-zinc-300 rounded-full text-xs font-medium tracking-wide hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
