
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green-300 font-cyber text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {Math.random().toString(2).substr(2, 8)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-black text-neon-green-300 mb-6">
            <span className="glitch-text" data-text="INITIATE CONTACT">
              INITIATE CONTACT
            </span>
          </h2>
          <p className="font-cyber text-xl text-neon-green-300/80 max-w-3xl mx-auto">
            Ready to{' '}
            <span className="text-burn-orange">destroy</span> your current reality and{' '}
            <span className="text-cyber-blue">reconstruct</span> something extraordinary?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="terminal p-8 pt-12 bg-deep-black-800/50 backdrop-blur-sm">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="font-cyber text-sm text-neon-green-300 mb-2 block tracking-wider">
                  [IDENTIFICATION_STRING]
                </label>
                <input 
                  type="text"
                  className="w-full bg-deep-black-900 border border-neon-green-300/30 px-4 py-3 font-cyber text-neon-green-300 focus:border-neon-green-300 focus:outline-none focus:ring-2 focus:ring-neon-green-300/20 transition-all duration-300"
                  placeholder="Enter your designation..."
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="font-cyber text-sm text-neon-green-300 mb-2 block tracking-wider">
                  [COMMUNICATION_PROTOCOL]
                </label>
                <input 
                  type="email"
                  className="w-full bg-deep-black-900 border border-neon-green-300/30 px-4 py-3 font-cyber text-neon-green-300 focus:border-neon-green-300 focus:outline-none focus:ring-2 focus:ring-neon-green-300/20 transition-all duration-300"
                  placeholder="your.signal@domain.void"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="font-cyber text-sm text-neon-green-300 mb-2 block tracking-wider">
                  [DESTRUCTION_TYPE]
                </label>
                <select className="w-full bg-deep-black-900 border border-neon-green-300/30 px-4 py-3 font-cyber text-neon-green-300 focus:border-neon-green-300 focus:outline-none focus:ring-2 focus:ring-neon-green-300/20 transition-all duration-300">
                  <option>Select your weapon...</option>
                  <option>Digital Obliteration (Brand Identity)</option>
                  <option>Cyber Renaissance (Web Development)</option>
                  <option>Visual Warfare (UI/UX Design)</option>
                  <option>Content Apocalypse (Creative Direction)</option>
                  <option>Complete Annihilation (Full Package)</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="font-cyber text-sm text-neon-green-300 mb-2 block tracking-wider">
                  [RESOURCE_ALLOCATION]
                </label>
                <select className="w-full bg-deep-black-900 border border-neon-green-300/30 px-4 py-3 font-cyber text-neon-green-300 focus:border-neon-green-300 focus:outline-none focus:ring-2 focus:ring-neon-green-300/20 transition-all duration-300">
                  <option>Specify your ammunition...</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000+ (Total Warfare)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="font-cyber text-sm text-neon-green-300 mb-2 block tracking-wider">
                  [TRANSMISSION_DATA]
                </label>
                <textarea 
                  rows={6}
                  className="w-full bg-deep-black-900 border border-neon-green-300/30 px-4 py-3 font-cyber text-neon-green-300 focus:border-neon-green-300 focus:outline-none focus:ring-2 focus:ring-neon-green-300/20 transition-all duration-300 resize-none"
                  placeholder="Describe the reality you wish to obliterate and the vision you want to construct from its ashes..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full brutalist-card py-4 font-cyber text-lg font-bold hover:bg-neon-green-300 hover:text-deep-black-900 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 block transform group-hover:scale-110 transition-transform">
                  [TRANSMIT SIGNAL]
                </span>
                
                {/* Loading Bar Animation on Hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-neon-green-300 w-0 group-hover:w-full transition-all duration-1000"></div>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="brutalist-card p-6 bg-deep-black-800/50">
              <h3 className="font-display text-2xl font-bold text-burn-orange mb-4">
                [DIRECT_LINK]
              </h3>
              <div className="space-y-3 font-cyber">
                <div className="flex items-center">
                  <span className="text-neon-green-300 mr-3">▶</span>
                  <span className="text-neon-green-300/80">hello@apocalypseandart.void</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-green-300 mr-3">▶</span>
                  <span className="text-neon-green-300/80">+1 (666) DESTROY</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-green-300 mr-3">▶</span>
                  <span className="text-neon-green-300/80">Location: The Digital Void</span>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div className="brutalist-card p-6 bg-deep-black-800/50">
              <h3 className="font-display text-2xl font-bold text-cyber-blue mb-4">
                [NETWORK_NODES]
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'INSTAGRAM', handle: '@apocalypse.art' },
                  { name: 'TWITTER', handle: '@apocalypse_art' },
                  { name: 'BEHANCE', handle: '/apocalypseandart' },
                  { name: 'DRIBBBLE', handle: '/apocalypse-art' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="p-3 border border-neon-green-300/30 hover:border-neon-green-300 transition-all duration-300 group"
                  >
                    <div className="font-cyber text-xs text-neon-green-300/60 group-hover:text-neon-green-300">
                      [{social.name}]
                    </div>
                    <div className="font-cyber text-sm text-neon-green-300 mt-1">
                      {social.handle}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="brutalist-card p-6 bg-deep-black-800/50">
              <h3 className="font-display text-2xl font-bold text-toxic-purple mb-4">
                [RESPONSE_PROTOCOL]
              </h3>
              <div className="font-cyber text-neon-green-300/80 space-y-2">
                <p>⚡ Emergency Destruction: &lt; 24 hours</p>
                <p>🔥 Standard Obliteration: 48-72 hours</p>
                <p>💀 Complex Annihilation: 1-2 weeks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="terminal p-6 max-w-2xl mx-auto bg-deep-black-800/50 backdrop-blur-sm">
            <p className="font-cyber text-neon-green-300/80">
              <span className="text-burn-orange">&gt;</span> Remember: In the kingdom of the blind, the{' '}
              <span className="holographic">one-eyed glitch</span> is king.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
