import { useEffect, useState } from 'react';

export default function GlitchEffect() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    };

    // Random glitch every 10-15 seconds
    const interval = setInterval(() => {
      triggerGlitch();
    }, Math.random() * 5000 + 10000);

    return () => clearInterval(interval);
  }, []);

  if (!glitchActive) return null;

  return (
    <>
      <style>{`
        @keyframes glitch-shift {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch-opacity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .glitch-overlay {
          animation: glitch-shift 0.15s, glitch-opacity 0.15s;
        }
      `}</style>
      
      <div className="glitch-overlay fixed inset-0 z-40 pointer-events-none">
        {/* Red scan lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 51, 0.1) 2px, rgba(255, 0, 51, 0.1) 4px)',
            animation: 'glitch-shift 0.15s',
          }}
        />

        {/* Glitch blocks */}
        <div
          className="absolute top-1/4 left-0 w-1/3 h-16 bg-[#FF0033] opacity-20"
          style={{
            animation: 'glitch-opacity 0.15s',
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-1/4 h-12 bg-[#FF1744] opacity-20"
          style={{
            animation: 'glitch-opacity 0.15s 0.05s',
          }}
        />

        {/* Chromatic aberration effect */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0, 255, 136, 0.05) 10px, rgba(0, 255, 136, 0.05) 20px)',
            animation: 'glitch-shift 0.15s 0.1s',
          }}
        />
      </div>
    </>
  );
}
