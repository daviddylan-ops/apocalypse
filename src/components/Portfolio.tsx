
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'NEURAL DECAY',
      category: 'Brand Identity',
      description: 'A complete visual overhaul for a cybersecurity firm, featuring glitched typography and corrupted data aesthetics.',
      color: 'text-burn-orange',
      bgColor: 'bg-burn-orange/20'
    },
    {
      title: 'DIGITAL WASTELAND',
      category: 'Web Platform',
      description: 'An e-commerce experience that transforms shopping into a post-apocalyptic survival game.',
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/20'
    },
    {
      title: 'SYNTHETIC DREAMS',
      category: 'Mobile App',
      description: 'A meditation app interface that combines zen philosophy with cyberpunk aesthetics.',
      color: 'text-toxic-purple',
      bgColor: 'bg-toxic-purple/20'
    },
    {
      title: 'CHAOS PROTOCOL',
      category: 'Interactive Installation',
      description: 'A physical-digital hybrid art piece responding to urban noise with visual mutations.',
      color: 'text-neon-green-400',
      bgColor: 'bg-neon-green-400/20'
    },
    {
      title: 'CORRUPTED EDEN',
      category: 'Editorial Design',
      description: 'Magazine layout exploring the intersection of nature and technology through destructive beauty.',
      color: 'text-burn-orange',
      bgColor: 'bg-burn-orange/20'
    },
    {
      title: 'VOID INTERFACE',
      category: 'Dashboard Design',
      description: 'A data visualization platform that makes complex information beautiful through controlled chaos.',
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/20'
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className={`border border-neon-green-300/20 ${Math.random() > 0.8 ? 'bg-neon-green-300/5' : ''}`}
              style={{ 
                animationDelay: `${Math.random() * 5}s`,
                animation: Math.random() > 0.9 ? 'neon-pulse 3s infinite' : 'none'
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-black text-neon-green-300 mb-6">
            <span className="glitch-text chromatic-text" data-text="DESTRUCTION GALLERY">
              DESTRUCTION GALLERY
            </span>
          </h2>
          <p className="font-cyber text-xl text-neon-green-300/80 max-w-3xl mx-auto">
            Witness the beautiful carnage of our creative process. Each project a{' '}
            <span className="holographic">digital phoenix</span> rising from conventional ashes.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="brutalist-card p-0 overflow-hidden group vhs-glitch relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-64 ${project.bgColor} relative overflow-hidden`}>
                {/* Scanline Effect */}
                <div className="absolute inset-0 scanlines opacity-30"></div>
                
                {/* Noise Pattern */}
                <div className="absolute inset-0 screen-noise opacity-20"></div>
                
                {/* Center Logo/Symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 border-2 ${project.color.replace('text-', 'border-')} rotate-45 animate-float`}>
                    <div className="w-full h-full border border-current rotate-45 scale-75"></div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-deep-black-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className={`border ${project.color.replace('text-', 'border-')} ${project.color} px-6 py-3 font-cyber font-bold hover:bg-current hover:text-deep-black-900 transition-all duration-300`}>
                    [VIEW PROJECT]
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-deep-black-800/50">
                <div className="mb-3">
                  <span className={`font-cyber text-xs ${project.color} tracking-wider`}>
                    [{project.category.toUpperCase()}]
                  </span>
                </div>
                
                <h3 className={`font-display text-xl font-bold mb-3 ${project.color} group-hover:animate-glitch`}>
                  {project.title}
                </h3>
                
                <p className="font-cyber text-sm text-neon-green-300/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-deep-black-700 overflow-hidden">
                  <div 
                    className={`h-full bg-current ${project.color} w-0 group-hover:w-full transition-all duration-1000`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  ></div>
                </div>
              </div>

              {/* Corner Glitch Effect */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 ${project.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity duration-300 clip-diagonal`}></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <div className="terminal p-8 max-w-lg mx-auto bg-deep-black-800/50 backdrop-blur-sm">
            <p className="font-cyber text-neon-green-300 mb-6">
              <span className="text-cyber-blue">&gt;</span> This is only the beginning of the end...
            </p>
            <button className="brutalist-card px-8 py-4 font-cyber text-lg font-bold hover:bg-neon-green-300 hover:text-deep-black-900 transition-all duration-300 group">
              <span className="block transform group-hover:scale-110 transition-transform">
                [EXPLORE FULL ARCHIVE]
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
