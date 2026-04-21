const ICONS = {
  spark: (
    <path
      d="M12 2.5L7.5 9H11l-1 6.5L16.5 8H13l1-5.5z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  ),
  battery: (
    <>
      <rect x="3" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <rect x="19" y="10" width="2" height="4" rx="1" fill="currentColor" />
      <rect x="5.5" y="9.5" width="9" height="5" rx="1" fill="currentColor" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <path d="M12 4v6M12 14v6M4 12h6M14 12h6M6.8 6.8l4 4M13.2 13.2l4 4M17.2 6.8l-4 4M10.8 13.2l-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <path d="M9 19h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  voice: (
    <>
      <rect x="9" y="4" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <path d="M6.5 11.5A5.5 5.5 0 0012 17a5.5 5.5 0 005.5-5.5M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  safety: (
    <path d="M12 3l7 3v5c0 4.4-2.8 8.2-7 10-4.2-1.8-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" fill="none" />
  ),
  shield: (
    <path d="M12 3l7 3v5c0 4.4-2.8 8.2-7 10-4.2-1.8-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" fill="none" />
  ),
  seat: (
    <path d="M7 5.5v4.5a2 2 0 002 2h2.2a3 3 0 012.6 1.5l1.2 2H19M7 16.5V12M5 16.5h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  adjust: (
    <path d="M5 12h10M11 8l4 4-4 4M5 6h5M5 18h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  storage: (
    <path d="M5 6.5h14l-1.2 11H6.2L5 6.5zM8.5 10.5h7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />
  ),
  switch: (
    <path d="M5 8h14M8 12h8M10 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  ),
  wave: (
    <path d="M3 14c2.2 0 2.2-4 4.4-4 2.2 0 2.2 4 4.4 4 2.2 0 2.2-4 4.4-4 2.2 0 2.2 4 4.4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
  ),
  measure: (
    <path d="M4 16h16M4 8h16M6 6l-2 2 2 2M18 6l2 2-2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  range: (
    <path d="M12 5a7 7 0 107 7M12 12l4.5-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
  ),
  charge: (
    <path d="M9.5 3v4.5H6v9h12v-9h-3.5V3M12 8.5V14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  design: (
    <path d="M5 16l5-8 3 4 2-3 4 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  city: (
    <path d="M5 18V9l4-2v11M11 18V5l4-2v15M17 18v-7l2-1v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  door: (
    <path d="M7 5l8-2v16l-8-2V5zM9 12h1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  comfort: (
    <path d="M6 15c1.5-1.5 3-2.2 6-2.2s4.5.7 6 2.2M7 9.5A5.5 5.5 0 0112 6a5.5 5.5 0 015 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
  ),
  carplay: (
    <path d="M7.5 9.5c0-2.4 2-4.5 4.5-4.5 1.3 0 2.5.5 3.3 1.4M16.5 14.5c0 2.4-2 4.5-4.5 4.5-1.3 0-2.5-.5-3.3-1.4M5.5 12h13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
  ),
  android: (
    <path d="M8 9h8a2 2 0 012 2v3.5H6V11a2 2 0 012-2zm1-2.5l-1.5-2m7 2l1.5-2M9 14.5v2.5M15 14.5v2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  test: (
    <path d="M7 7.5h10M7 12h10M7 16.5h6M5 4.5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  platform: (
    <path d="M4 15l8 4 8-4-8-4-8 4zm0-6l8 4 8-4-8-4-8 4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />
  ),
  bolt: (
    <path d="M13.5 2.5L7.8 11H12l-1 10 5.8-8.5H12.5l1-10z" fill="currentColor" />
  ),
  space: (
    <path d="M4 12h16M7 9l-3 3 3 3M17 9l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
}

function HotspotIcon({ icon }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {ICONS[icon] ?? ICONS.spark}
    </svg>
  )
}

export default function Hotspot({
  label,
  x,
  y,
  title,
  detail,
  icon = 'spark',
  active = false,
  accent = '#c7ff41',
  onToggle,
}) {
  return (
    <button
      type="button"
      className="byd-hotspot"
      onClick={onToggle}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: active ? 24 : 20,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'transparent',
        border: 0,
        padding: 0,
        textAlign: 'left',
        cursor: 'pointer',
        maxWidth: 'min(240px, 62vw)',
      }}
    >
      <span
        style={{
          width: active ? '42px' : '34px',
          height: active ? '42px' : '34px',
          borderRadius: '50%',
          background: active
            ? `radial-gradient(circle, ${accent} 0%, rgba(5,5,7,0.96) 72%)`
            : 'rgba(5, 5, 7, 0.88)',
          color: active ? '#071015' : accent,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${active ? accent : 'rgba(255,255,255,0.18)'}`,
          boxShadow: active
            ? `0 0 24px ${accent}55`
            : `0 0 18px ${accent}30`,
          animation: active ? 'none' : 'hotspotGlow 2.4s ease-in-out infinite',
          transition: 'all 180ms ease',
          flexShrink: 0,
        }}
      >
        <HotspotIcon icon={icon} />
      </span>

      <span
        style={{
          background: active ? 'rgba(4, 8, 18, 0.9)' : 'rgba(5, 5, 7, 0.72)',
          color: 'rgba(255,255,255,0.96)',
          fontSize: active ? '12px' : '11px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 500,
          padding: active ? '10px 12px' : '6px 10px',
          borderRadius: '12px',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          letterSpacing: '0.015em',
          border: `1px solid ${active ? `${accent}66` : 'rgba(255,255,255,0.12)'}`,
          boxShadow: active ? '0 14px 40px rgba(0,0,0,0.32)' : 'none',
          transition: 'all 180ms ease',
          lineHeight: 1.45,
        }}
      >
        <strong style={{ display: 'block', fontSize: active ? '12px' : '11px' }}>{label}</strong>
        {active && (
          <>
            <span style={{ display: 'block', marginTop: '3px', color: accent, fontWeight: 700 }}>
              {title}
            </span>
            <span style={{ display: 'block', marginTop: '5px', color: 'rgba(255,255,255,0.78)' }}>
              {detail}
            </span>
          </>
        )}
      </span>
    </button>
  )
}
