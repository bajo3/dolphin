import { Icon } from './icons'

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
          boxShadow: active ? `0 0 24px ${accent}55` : `0 0 18px ${accent}30`,
          animation: active ? 'none' : 'hotspotGlow 2.4s ease-in-out infinite',
          transition: 'all 200ms ease',
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={17} />
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
          transition: 'all 200ms ease',
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
