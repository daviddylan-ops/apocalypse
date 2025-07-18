
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #CCFF00 0px,
            #CCFF00 1px,
            transparent 1px,
            transparent 20px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-black text-neon-green-300 mb-6 glitch-text" data-text="MANIFESTO">
            MANIFESTO
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-neon-green-300 to-toxic-purple mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="terminal p-8 pt-12 bg-deep-black-800/50 backdrop-blur-sm">
              <div className="font-cyber text-lg leading-relaxed space-y-4">
                <p className="text-neon-green-300">
                  <span className="text-burn-orange">&gt;</span> In the digital wasteland where pixels bleed and{' '}
                  <span className="text-neon-green-400 font-bold">code screams</span>, we forge beauty from chaos.
                </p>
                <p className="text-neon-green-300/80">
                  <span className="text-cyber-blue">&gt;</span> Every project is a rebellion against the mundane, a{' '}
                  <span className="text-toxic-purple font-bold">violent resurrection</span> of creativity.
                </p>
                <p className="text-neon-green-300">
                  <span className="text-burn-orange">&gt;</span> We are the architects of{' '}
                  <span className="holographic font-bold">digital destruction</span>,{' '}
                  the poets of programmed pandemonium.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '100+', label: 'PROJECTS DESTROYED & REBORN' },
                { number: '50+', label: 'CREATIVE SOULS ENLIGHTENED' },
                { number: '∞', label: 'BOUNDARIES OBLITERATED' }
              ].map((stat, index) => (
                <div key={index} className="text-center brutalist-card p-4">
                  <div className="font-display text-3xl font-black text-neon-green-300 mb-2 chromatic-text">
                    {stat.number}
                  </div>
                  <div className="font-cyber text-xs text-neon-green-300/60 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Philosophy Points */}
          <div className="space-y-6">
            {[
              {
                title: 'CREATIVE ANNIHILATION',
                description: 'We tear down conventional design to rebuild it stronger, stranger, more alive.',
                color: 'text-burn-orange'
              },
              {
                title: 'DIGITAL RESURRECTION',
                description: 'From the ashes of failed projects, we birth experiences that transcend reality.',
                color: 'text-cyber-blue'
              },
              {
                title: 'AESTHETIC WARFARE',
                description: 'Every pixel is a weapon, every line of code a battle cry against mediocrity.',
                color: 'text-toxic-purple'
              },
              {
                title: 'BEAUTY IN CHAOS',
                description: 'Order is death. We find life in the glitches, power in the broken.',
                color: 'text-neon-green-400'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="brutalist-card p-6 vhs-glitch group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className={`font-display text-xl font-bold mb-3 ${item.color} group-hover:animate-glitch`}>
                  [{item.title}]
                </h3>
                <p className="font-cyber text-neon-green-300/80 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="font-display text-2xl md:text-3xl text-neon-green-300 italic max-w-4xl mx-auto">
            "In the space between{' '}
            <span className="text-burn-orange">destruction</span> and{' '}
            <span className="text-cyber-blue">creation</span>, we find our{' '}
            <span className="holographic">truth</span>."
          </blockquote>
          <cite className="font-cyber text-neon-green-300/60 text-sm mt-4 block">
            — THE COLLECTIVE CONSCIOUSNESS
          </cite>
        </div>
      </div>
    </section>
  );
};

export default About;
