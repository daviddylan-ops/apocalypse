
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-neon-green-300/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-1 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className={`border border-neon-green-300/20 ${Math.random() > 0.9 ? 'bg-neon-green-300/10 animate-neon-pulse' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <div className="glitch-text font-display text-3xl font-black text-neon-green-300 mb-4" data-text="APOCALYPSE & ART">
              APOCALYPSE & ART
            </div>
            <p className="font-cyber text-neon-green-300/70 mb-6 max-w-md">
              Digital destruction and creative resurrection. We are the{' '}
              <span className="text-burn-orange">architects</span> of beautiful{' '}
              <span className="text-cyber-blue">chaos</span>.
            </p>
            <div className="flex space-x-4">
              {['INSTA', 'TWTR', 'BHCE', 'DRBL'].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-12 h-12 border border-neon-green-300/30 flex items-center justify-center font-cyber text-xs text-neon-green-300 hover:border-neon-green-300 hover:bg-neon-green-300 hover:text-deep-black-900 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold text-neon-green-300 mb-4">
              [SERVICES]
            </h4>
            <ul className="space-y-2 font-cyber text-sm">
              {[
                'Digital Obliteration',
                'Cyber Renaissance', 
                'Visual Warfare',
                'Content Apocalypse'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-neon-green-300/70 hover:text-neon-green-300 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-neon-green-300 mb-4">
              [CONTACT]
            </h4>
            <div className="space-y-2 font-cyber text-sm text-neon-green-300/70">
              <p>hello@apocalypseandart.void</p>
              <p>+1 (666) DESTROY</p>
              <p>The Digital Void</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-green-300/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-cyber text-xs text-neon-green-300/60 mb-4 md:mb-0">
            © 2024 APOCALYPSE & ART CLASS. ALL REALITIES OBLITERATED.
          </div>
          <div className="flex space-x-6 font-cyber text-xs">
            <a href="#" className="text-neon-green-300/60 hover:text-neon-green-300 transition-colors duration-300">
              [PRIVACY_VOID]
            </a>
            <a href="#" className="text-neon-green-300/60 hover:text-neon-green-300 transition-colors duration-300">
              [TERMS_DESTRUCTION]
            </a>
            <a href="#" className="text-neon-green-300/60 hover:text-neon-green-300 transition-colors duration-300">
              [COOKIE_APOCALYPSE]
            </a>
          </div>
        </div>

        {/* Final Glitch */}
        <div className="text-center mt-8">
          <div className="font-cyber text-xs text-neon-green-300/40 animate-glitch">
            SYSTEM.ERROR_404.BEAUTY_NOT_FOUND.CREATING_NEW_REALITY...
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
