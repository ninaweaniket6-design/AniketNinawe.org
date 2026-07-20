export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight mb-4">About Me</h2>
            <p className="text-zinc-400 text-lg font-light">A brief look into my background and what drives my work.</p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-lg leading-relaxed font-light">
            <p>
              I am a dedicated BCA student specializing in building intelligent, end-to-end software solutions. My passion lies at the intersection of modern software engineering and advanced data science, allowing me to conceptualize, design, and deploy robust applications that solve complex real-world problems.
            </p>
            <p>
              With a dual expertise in full-stack development and data analytics, I bring a unique perspective to every project. Whether it's architecting a scalable backend, crafting an intuitive user interface, or implementing cutting-edge Artificial Intelligence models and pipelines, I am driven by a commitment to technical excellence and continuous innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
