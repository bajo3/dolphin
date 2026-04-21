import BydScrollExperience from '../components/byd/BydScrollExperience'
import FinalCTA from '../components/byd/FinalCTA'
import { bydExperience } from '../data/bydExperience'

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  html, body {
    background: #050507;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Text entry — keyed component triggers this on each scene */
  @keyframes slideUpFade {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Subtle zoom on scene image */
  @keyframes subtleZoom {
    from { transform: scale(1); }
    to   { transform: scale(1.07); }
  }

  /* Electric hotspot pulse */
  @keyframes hotspotGlow {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(163, 230, 53, 0.55);
    }
    50% {
      transform: scale(1.3);
      box-shadow: 0 0 0 9px rgba(163, 230, 53, 0);
    }
  }

  /* WhatsApp CTA pulse */
  @keyframes ctaPulse {
    0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
    50%       { box-shadow: 0 4px 32px rgba(37,211,102,0.7), 0 0 0 5px rgba(37,211,102,0.08); }
  }

  /* Lightning bolt for charging scene */
  @keyframes boltFlicker {
    0%, 88%, 100% { opacity: 1; }
    90%  { opacity: 0.55; }
    92%  { opacity: 1; }
    94%  { opacity: 0.65; }
    96%  { opacity: 1; }
  }

  /* Glow text pulse */
  @keyframes glowPulse {
    0%, 100% { text-shadow: 0 0 20px rgba(163,230,53,0.5), 0 0 40px rgba(163,230,53,0.2); }
    50%       { text-shadow: 0 0 30px rgba(163,230,53,0.9), 0 0 60px rgba(163,230,53,0.45), 0 0 80px rgba(163,230,53,0.15); }
  }

  /* Charging ring pulse */
  @keyframes ringPulse {
    0%, 100% { opacity: 0.12; transform: translate(-50%, -50%) scale(1); }
    50%       { opacity: 0.25; transform: translate(-50%, -50%) scale(1.04); }
  }

  /* Hide hotspots on narrow mobile to avoid covering the car */
  @media (max-width: 430px) {
    .byd-hotspot { display: none !important; }
  }
`

export default function BydDolphinExperience() {
  const { auto } = bydExperience

  return (
    <>
      <style>{globalStyles}</style>
      <BydScrollExperience />
      <FinalCTA />
      <footer
        style={{
          background: '#050507',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '24px',
          textAlign: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <p
          style={{
            color: 'rgba(255,255,255,0.28)',
            fontSize: '10px',
            lineHeight: 1.7,
            maxWidth: '460px',
            margin: '0 auto',
          }}
        >
          {auto.autonomiaDisclaimer}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '10px', marginTop: '6px' }}>
          {auto.agencia} · {auto.ciudad}
        </p>
      </footer>
    </>
  )
}
