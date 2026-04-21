export default function ChargingScene({ active }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, #020408 0%, #070d1a 40%, #040b14 70%, #030408 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Glow rings */}
      <div
        style={{
          position: 'absolute',
          width: 'min(340px, 85vw)',
          height: 'min(340px, 85vw)',
          borderRadius: '50%',
          border: '1px solid rgba(163,230,53,0.15)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: active ? 'ringPulse 3s ease-in-out infinite' : 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 'min(220px, 56vw)',
          height: 'min(220px, 56vw)',
          borderRadius: '50%',
          border: '1px solid rgba(163,230,53,0.1)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: active ? 'ringPulse 3s ease-in-out infinite 0.5s' : 'none',
        }}
      />
      {/* Radial glow center */}
      <div
        style={{
          position: 'absolute',
          width: 'min(280px, 72vw)',
          height: 'min(280px, 72vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Lightning bolt */}
      <svg
        width="clamp(52px, 14vw, 80px)"
        height="clamp(72px, 18vw, 110px)"
        viewBox="0 0 24 33"
        fill="none"
        style={{
          filter:
            'drop-shadow(0 0 12px rgba(163,230,53,0.85)) drop-shadow(0 0 28px rgba(163,230,53,0.45))',
          animation: active ? 'boltFlicker 5s ease-in-out infinite' : 'none',
          marginBottom: 'clamp(20px, 5vw, 32px)',
        }}
      >
        <path d="M14 2L3 19h8l-1 12 10-18h-8l2-11z" fill="#a3e635" />
      </svg>

      {/* Main number */}
      <div
        style={{
          fontSize: 'clamp(52px, 16vw, 88px)',
          fontWeight: 800,
          color: '#a3e635',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          animation: active ? 'glowPulse 3.5s ease-in-out infinite' : 'none',
        }}
      >
        85 kW
      </div>

      <div
        style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: 'clamp(10px, 2.5vw, 13px)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          marginTop: '8px',
          marginBottom: '20px',
        }}
      >
        Carga rápida DC
      </div>

      {/* Progress row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: 'clamp(14px, 3.5vw, 18px)',
          color: 'rgba(255,255,255,0.75)',
        }}
      >
        <span>10%</span>
        <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
          <path d="M1 5h22M18 1l5 4-5 4" stroke="rgba(163,230,53,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>80%</span>
        <span
          style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: 'clamp(11px, 2.8vw, 14px)',
            marginLeft: '4px',
          }}
        >
          en ~30 min
        </span>
      </div>
    </div>
  )
}
