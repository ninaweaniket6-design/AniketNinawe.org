import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI Data Pipeline & RAG System",
      description: "An advanced architecture leveraging Large Language Models (LLMs) and Retrieval-Augmented Generation to process, index, and query intelligent data efficiently.",
      tags: ["Python", "LLMs", "Vector DB", "RAG"]
    },
    {
      title: "Full-Stack Web Application",
      description: "A highly scalable software solution featuring a dynamic, responsive front-end and a secure, high-performance back-end architecture.",
      tags: ["React", "Node.js", "TypeScript", "Tailwind"]
    },
    {
      title: "Advanced Data Analytics Dashboard",
      description: "A comprehensive data science project that extracts actionable insights from complex datasets, utilizing predictive modeling and rich visualizations.",
      tags: ["Data Science", "D3.js", "Python", "Analytics"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Selected Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full cursor-pointer">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-medium text-zinc-100 font-display group-hover:text-white transition-colors">{project.title}</h3>
                <div className="text-zinc-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1 font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-zinc-950 text-zinc-400 rounded-md border border-zinc-800/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
