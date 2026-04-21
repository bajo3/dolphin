export default function Hotspot({ label, x, y }) {
  return (
    // className used to hide hotspots on narrow mobile via global CSS
    <div
      className="byd-hotspot"
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'none',
      }}
    >
      {/* Electric pulse dot */}
      <div
        style={{
          width: '11px',
          height: '11px',
          borderRadius: '50%',
          background: '#a3e635',
          flexShrink: 0,
          animation: 'hotspotGlow 2.4s ease-in-out infinite',
          willChange: 'transform, box-shadow',
        }}
      />
      {/* Label */}
      <span
        style={{
          background: 'rgba(5, 5, 7, 0.72)',
          color: 'rgba(255,255,255,0.92)',
          fontSize: '11px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 500,
          padding: '4px 9px',
          borderRadius: '5px',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          letterSpacing: '0.025em',
          border: '1px solid rgba(163,230,53,0.22)',
        }}
      >
        {label}
      </span>
    </div>
  )
}
