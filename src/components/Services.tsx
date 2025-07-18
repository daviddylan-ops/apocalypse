
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'DIGITAL OBLITERATION',
      subtitle: 'Brand Identity Design',
      description: 'We annihilate bland corporate aesthetics and reconstruct radical visual identities that pierce through the digital noise.',
      features: ['Logo Deconstruction', 'Visual System Architecture', 'Brand Mythology Creation'],
      price: 'FROM $5,000',
      color: 'border-burn-orange text-burn-orange',
      bgGradient: 'from-burn-orange/10 to-transparent'
    },
    {
      title: 'CYBER RENAISSANCE',
      subtitle: 'Web Development',
      description: 'Websites that bleed pixels and breathe code. Interactive experiences that challenge reality and redefine user engagement.',
      features: ['Responsive Destruction', 'Interactive Nightmares', 'Performance Optimization'],
      price: 'FROM $8,000',
      color: 'border-cyber-blue text-cyber-blue',
      bgGradient: 'from-cyber-blue/10 to-transparent'
    },
    {
      title: 'VISUAL WARFARE',
      subtitle: 'UI/UX Design',
      description: 'Interfaces that wage war against convention. User experiences that transform confusion into enlightenment.',
      features: ['Prototype Annihilation', 'User Journey Mapping', 'Accessibility Revolution'],
      price: 'FROM $6,000',
      color: 'border-toxic-purple text-toxic-purple',
      bgGradient: 'from-toxic-purple/10 to-transparent'
    },
    {
      title: 'CONTENT APOCALYPSE',
      subtitle: 'Creative Direction',
      description: 'We orchestrate visual chaos that tells stories, creates movements, and destroys creative barriers.',
      features: ['Campaign Devastation', 'Art Direction', 'Content Strategy'],
      price: 'FROM $4,000',
      color: 'border-neon-green-400 text-neon-green-400',
      bgGradient: 'from-neon-green-400/10 to-transparent'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 border border-neon-green-300/10 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-cyber-blue/5 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-black text-neon-green-300 mb-6">
            <span className="glitch-text" data-text="SERVICES">SERVICES</span>
          </h2>
          <p className="font-cyber text-xl text-neon-green-300/80 max-w-3xl mx-auto">
            Choose your path through the digital wasteland. Each service is a weapon in our arsenal against{' '}
            <span className="text-burn-orange">creative mediocrity</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`brutalist-card p-8 relative overflow-hidden group bg-gradient-to-br ${service.bgGradient}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${service.color.split(' ')[1]} opacity-20 clip-triangle`}></div>
              
              {/* Service Header */}
              <div className="mb-6">
                <h3 className={`font-display text-2xl font-black mb-2 ${service.color.split(' ')[1]} group-hover:animate-glitch`}>
                  [{service.title}]
                </h3>
                <p className="font-cyber text-neon-green-300/60 text-sm tracking-wider">
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="font-cyber text-neon-green-300/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="font-cyber text-sm text-neon-green-300/70 flex items-center">
                    <span className={`mr-3 ${service.color.split(' ')[1]}`}>▶</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div className={`font-display text-lg font-bold ${service.color.split(' ')[1]}`}>
                  {service.price}
                </div>
                <button className={`border ${service.color} px-4 py-2 font-cyber text-sm font-bold hover:bg-current hover:text-deep-black-900 transition-all duration-300 group-hover:animate-neon-pulse`}>
                  [ENGAGE]
                </button>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-current ${service.color.split(' ')[1]} w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="terminal p-8 max-w-2xl mx-auto bg-deep-black-800/50 backdrop-blur-sm">
            <p className="font-cyber text-neon-green-300 mb-6">
              <span className="text-burn-orange">&gt;</span> Ready to obliterate your creative boundaries?
            </p>
            <button className="brutalist-card px-8 py-4 font-cyber text-lg font-bold hover:bg-neon-green-300 hover:text-deep-black-900 transition-all duration-300 neon-glow">
              [INITIATE COLLABORATION]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
