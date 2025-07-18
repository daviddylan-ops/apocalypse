
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'WHERE CHAOS MEETS CREATION';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black-900 via-deep-black-800 to-deep-black-700">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-neon-green-300/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-cyber-blue/30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-toxic-purple/30 rotate-12 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-burn-orange/30 animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* Screen Noise Overlay */}
        <div className="absolute inset-0 screen-noise opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-4 text-stroke">
            <span className="glitch-text chromatic-text" data-text="APOCALYPSE">
              APOCALYPSE
            </span>
          </h1>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-neon-green-300 neon-glow">
            & ART CLASS
          </h1>
        </div>

        {/* Typewriter Subtitle */}
        <div className="mb-12 font-cyber text-xl md:text-2xl">
          <span className="text-neon-green-400">
            &gt; {typedText}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-neon-green-300/80 mb-12 max-w-3xl mx-auto font-cyber leading-relaxed">
          A creative design agency embodying the intersection of{' '}
          <span className="text-burn-orange">destruction</span> and{' '}
          <span className="text-cyber-blue">creation</span>,{' '}
          <span className="text-toxic-purple">chaos</span> and{' '}
          <span className="text-neon-green-400">beauty</span>.
          <br />
          <span className="holographic">Rebirth through artistic expression.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="brutalist-card px-8 py-4 font-cyber text-lg font-bold hover:bg-neon-green-300 hover:text-deep-black-900 transition-all duration-300 group">
            <span className="block transform group-hover:scale-110 transition-transform">
              [ENTER THE VOID]
            </span>
          </button>
          <button className="border-2 border-cyber-blue text-cyber-blue px-8 py-4 font-cyber text-lg font-bold hover:bg-cyber-blue hover:text-deep-black-900 transition-all duration-300 group terminal">
            <span className="block transform group-hover:scale-110 transition-transform">
              [VIEW WORK]
            </span>
          </button>
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green-300/20 font-cyber text-sm animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            01010101<br />11001100<br />10101010<br />00110011
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
