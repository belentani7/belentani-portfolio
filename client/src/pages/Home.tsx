import { useState } from 'react';
import PlanetScene from '@/components/PlanetScene';
import HackingOverlay from '@/components/HackingOverlay';
import GlitchEffect from '@/components/GlitchEffect';
import { Button } from '@/components/ui/button';

type Section = 'home' | 'artist' | 'music' | 'studio' | 'judas' | 'contact';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [showContent, setShowContent] = useState(false);

  const handleNavigate = (section: Section) => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentSection(section);
      setShowContent(true);
    }, 800);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return (
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-[#FF0033]">BELENTANI</h1>
            <p className="text-2xl text-[#00FF88] mb-8">Symphony of Vines</p>
            <p className="text-lg text-[#E0E0E0] mb-8 max-w-2xl mx-auto">
              Next Release: <span className="text-[#FF0033] font-bold">JUDAS</span>
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => handleNavigate('artist')}
                className="bg-[#FF0033] hover:bg-[#FF1744] text-white"
              >
                The Artist
              </Button>
              <Button
                onClick={() => handleNavigate('music')}
                className="border border-[#FF0033] text-[#FF0033] hover:bg-[#FF0033] hover:text-white"
              >
                Music
              </Button>
            </div>
          </div>
        );

      case 'artist':
        return (
          <div>
            <h2 className="text-5xl font-bold mb-6 text-[#FF0033]">The Artist</h2>
            <div className="space-y-4 text-[#E0E0E0] max-w-3xl">
              <p>
                Emerging from the concrete arteries of São Paulo and forged in the shadows of Barcelona, Pedro Belentani is not merely a creator, but the bearer of an anomalous resonance.
              </p>
              <p>
                A sonic architect wandering through the neon echoes of a fractured reality. His career didn't just launch; it detonated at 21 in the closed circuits of electronic music.
              </p>
              <p>
                Since then, he has mutated into a hybrid, hypnotic sound—an amalgam of dark pop, visceral R&B, and synthetic electronic pulses that he uses not as art, but as an existential survival mechanism.
              </p>
              <p className="text-[#00FF88] pt-4">
                Operating from Barcelona, Belentani has established himself as one of the most lethal, inescapable, and fascinating voices of the Luso-Spanish hybrid scene.
              </p>
            </div>
            <Button
              onClick={() => handleNavigate('home')}
              className="mt-8 bg-[#FF0033] hover:bg-[#FF1744] text-white"
            >
              Back to Home
            </Button>
          </div>
        );

      case 'music':
        return (
          <div>
            <h2 className="text-5xl font-bold mb-6 text-[#FF0033]">Music</h2>
            <div className="space-y-6 text-[#E0E0E0] max-w-3xl">
              <div className="border-l-2 border-[#FF0033] pl-4">
                <h3 className="text-2xl font-bold text-[#00FF88] mb-2">Judas (2026)</h3>
                <p>The most dangerous and definitive manifesto. A sonic journey through betrayal and redemption.</p>
              </div>
              <div className="border-l-2 border-[#FF0033] pl-4">
                <h3 className="text-2xl font-bold text-[#00FF88] mb-2">Mon Amour (2025)</h3>
                <p>An auditory anomaly born from the alliance with producer Duck.</p>
              </div>
              <div className="border-l-2 border-[#FF0033] pl-4">
                <h3 className="text-2xl font-bold text-[#00FF88] mb-2">Therapist & I Wrote a Song</h3>
                <p>High-frequency transmissions exploring the depths of human consciousness.</p>
              </div>
            </div>
            <Button
              onClick={() => handleNavigate('home')}
              className="mt-8 bg-[#FF0033] hover:bg-[#FF1744] text-white"
            >
              Back to Home
            </Button>
          </div>
        );

      case 'studio':
        return (
          <div>
            <h2 className="text-5xl font-bold mb-6 text-[#FF0033]">Studio</h2>
            <div className="space-y-4 text-[#E0E0E0] max-w-3xl">
              <p>
                Collaborating with producer <span className="text-[#00FF88] font-bold">Duck Prod</span>, Belentani creates in Barcelona.
              </p>
              <p>
                The studio is not just a space—it's a frequency. Where technology meets soul, where code becomes song.
              </p>
              <p className="text-[#FF0033]">
                3000 particles in motion. Infinite possibilities.
              </p>
            </div>
            <Button
              onClick={() => handleNavigate('home')}
              className="mt-8 bg-[#FF0033] hover:bg-[#FF1744] text-white"
            >
              Back to Home
            </Button>
          </div>
        );

      case 'judas':
        return (
          <div>
            <h2 className="text-5xl font-bold mb-6 text-[#FF0033]">JUDAS</h2>
            <div className="space-y-4 text-[#E0E0E0] max-w-3xl">
              <p>
                A sci-fi messianic narrative. Judas and St. Peter—once inseparable brothers—now locked in an eternal dance of betrayal and redemption.
              </p>
              <p>
                This is not a song. This is a frequency. A transmission from another dimension.
              </p>
              <p className="text-[#00FF88] font-bold">
                Coming 2026
              </p>
            </div>
            <Button
              onClick={() => handleNavigate('home')}
              className="mt-8 bg-[#FF0033] hover:bg-[#FF1744] text-white"
            >
              Back to Home
            </Button>
          </div>
        );

      case 'contact':
        return (
          <div>
            <h2 className="text-5xl font-bold mb-6 text-[#FF0033]">Contact</h2>
            <form className="space-y-4 max-w-2xl">
              <div>
                <label className="block text-[#00FF88] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-[#0A0E27] border border-[#FF0033] text-white p-2 rounded"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#00FF88] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#0A0E27] border border-[#FF0033] text-white p-2 rounded"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[#00FF88] mb-2">Message</label>
                <textarea
                  className="w-full bg-[#0A0E27] border border-[#FF0033] text-white p-2 rounded h-32"
                  placeholder="Your message..."
                />
              </div>
              <Button className="bg-[#FF0033] hover:bg-[#FF1744] text-white">
                Send
              </Button>
            </form>
            <Button
              onClick={() => handleNavigate('home')}
              className="mt-8 bg-[#FF0033] hover:bg-[#FF1744] text-white"
            >
              Back to Home
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      {/* 3D Planet Scene */}
      <PlanetScene onNavigate={handleNavigate} />

      {/* Navigation Menu */}
      <nav className="fixed top-8 left-4 md:left-8 z-40 space-y-2">
        <div className="text-[#FF0033] font-bold text-sm md:text-lg mb-4">BELENTANI</div>
        <button
          onClick={() => handleNavigate('home')}
          className={`block text-xs md:text-sm font-mono transition-colors ${
            currentSection === 'home' ? 'text-[#FF0033]' : 'text-[#E0E0E0] hover:text-[#00FF88]'
          }`}
        >
          &gt; Home
        </button>
        <button
          onClick={() => handleNavigate('artist')}
          className={`block text-sm font-mono transition-colors ${
            currentSection === 'artist' ? 'text-[#FF0033]' : 'text-[#E0E0E0] hover:text-[#00FF88]'
          }`}
        >
          &gt; The Artist
        </button>
        <button
          onClick={() => handleNavigate('music')}
          className={`block text-sm font-mono transition-colors ${
            currentSection === 'music' ? 'text-[#FF0033]' : 'text-[#E0E0E0] hover:text-[#00FF88]'
          }`}
        >
          &gt; Music
        </button>
        <button
          onClick={() => handleNavigate('studio')}
          className={`block text-sm font-mono transition-colors ${
            currentSection === 'studio' ? 'text-[#FF0033]' : 'text-[#E0E0E0] hover:text-[#00FF88]'
          }`}
        >
          &gt; Studio
        </button>
        <button
          onClick={() => handleNavigate('judas')}
          className={`block text-sm font-mono transition-colors ${
            currentSection === 'judas' ? 'text-[#FF0033]' : 'text-[#E0E0E0] hover:text-[#00FF88]'
          }`}
        >
          &gt; Judas
        </button>
        <button
          onClick={() => handleNavigate('contact')}
          className={`block text-sm font-mono transition-colors ${
            currentSection === 'contact' ? 'text-[#FF0033]' : 'text-[#E0E0E0] hover:text-[#00FF88]'
          }`}
        >
          &gt; Contact
        </button>
      </nav>

      {/* Content Overlay */}
      {showContent && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div
            className={`bg-[#0A0E27] border-2 border-[#FF0033] p-6 md:p-12 rounded max-w-4xl max-h-[80vh] overflow-y-auto transition-all duration-500 ${
              showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              boxShadow: '0 0 20px rgba(255, 0, 51, 0.3)',
            }}
          >
            {renderContent()}
          </div>
        </div>
      )}

      {/* Hacking Overlay */}
      <HackingOverlay />

      {/* Glitch Effect */}
      <GlitchEffect />

      {/* Language selector */}
      <div className="fixed top-8 right-8 z-40 text-[#E0E0E0] text-xs font-mono">
        <span className="text-[#FF0033]">EN</span> | ES
      </div>
    </div>
  );
}
