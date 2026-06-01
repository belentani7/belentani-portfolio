import { useEffect, useState } from 'react';

interface UserData {
  ip: string;
  browser: string;
  device: string;
  timestamp: string;
}

export default function HackingOverlay() {
  const [userData, setUserData] = useState<UserData>({
    ip: 'XX.XXX.XXX.XX',
    browser: 'UNKNOWN',
    device: 'UNKNOWN',
    timestamp: new Date().toISOString(),
  });
  const [glitch, setGlitch] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // Fetch user IP
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setUserData((prev) => ({ ...prev, ip: data.ip }));
      } catch (error) {
        console.error('Failed to fetch IP:', error);
      }
    };

    // Detect browser
    const detectBrowser = () => {
      const ua = navigator.userAgent;
      let browser = 'UNKNOWN';
      if (ua.includes('Chrome')) browser = 'CHROME';
      else if (ua.includes('Safari')) browser = 'SAFARI';
      else if (ua.includes('Firefox')) browser = 'FIREFOX';
      else if (ua.includes('Edge')) browser = 'EDGE';
      setUserData((prev) => ({ ...prev, browser }));
    };

    // Detect device
    const detectDevice = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const device = isMobile ? 'MOBILE' : 'DESKTOP';
      setUserData((prev) => ({ ...prev, device }));
    };

    fetchIP();
    detectBrowser();
    detectDevice();

    // Glitch effect every 8-12 seconds
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, Math.random() * 4000 + 8000);

    // Increment attempts every 3-5 seconds
    const attemptsInterval = setInterval(() => {
      setAttempts((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.random() * 2000 + 3000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(attemptsInterval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 font-mono text-xs text-[#00FF88] bg-black/80 border border-[#FF0033] p-3 rounded w-72 md:w-80 transition-all duration-200 ${
        glitch ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{
        textShadow: glitch ? '0 0 10px #FF0033' : '0 0 5px #00FF88',
        filter: glitch ? 'brightness(1.5)' : 'brightness(1)',
      }}
    >
      {/* Terminal header */}
      <div className="mb-3 pb-2 border-b border-[#FF0033]">
        <div className="text-[#FF0033] font-bold">SYSTEM.CORE // ONLINE</div>
        <div className="text-[#00FF88]">NAV-SYS // ZION ORBIT</div>
      </div>

      {/* User data */}
      <div className="space-y-1 mb-3">
        <div>
          <span className="text-[#FF0033]">&gt;</span> IP: <span className="text-[#00FF88]">{userData.ip}</span>
        </div>
        <div>
          <span className="text-[#FF0033]">&gt;</span> BROWSER: <span className="text-[#00FF88]">{userData.browser}</span>
        </div>
        <div>
          <span className="text-[#FF0033]">&gt;</span> DEVICE: <span className="text-[#00FF88]">{userData.device}</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-1 mb-3 pb-2 border-b border-[#FF0033]">
        <div>
          <span className="text-[#FF0033]">&gt;</span> CPU: <span className="text-[#00FF88]">{Math.floor(Math.random() * 100)}.{Math.floor(Math.random() * 10)}%</span>
        </div>
        <div>
          <span className="text-[#FF0033]">&gt;</span> RAM: <span className="text-[#00FF88]">{Math.floor(Math.random() * 100)}.{Math.floor(Math.random() * 10)}%</span>
        </div>
      </div>

      {/* Hacking attempts */}
      <div className="space-y-1">
        <div className="text-[#FF1744] font-bold animate-pulse">
          LOCALIZACIÓN INTENTOS: {attempts}
        </div>
        <div className="text-[#FF0033]">
          &gt; REINTENTANDO...
        </div>
        <div className="text-[#00FF88] text-opacity-50">
          &gt; CONEXIÓN INESTABLE
        </div>
      </div>

      {/* Blinking cursor */}
      <div className="mt-2 text-[#FF0033] animate-pulse">
        _
      </div>
    </div>
  );
}
