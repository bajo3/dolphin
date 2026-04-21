export default function ScrollProgress({ current, total, accent, onGoToScene }) {
  const activeColor = accent ?? '#a3e635'

  return (
    <div
      style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        alignItems: 'center',
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current
        return (
          <button
            key={i}
            type="button"
            aria-label={`Ir a escena ${i + 1}`}
            onClick={() => onGoToScene?.(i)}
            style={{
              width: '3px',
              height: isActive ? '20px' : '4px',
              borderRadius: '2px',
              background: isActive ? activeColor : 'rgba(255,255,255,0.22)',
              transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1), background 0.4s ease',
              flexShrink: 0,
              boxShadow: isActive ? `0 0 8px ${activeColor}80` : 'none',
              border: 0,
              padding: 0,
              cursor: 'pointer',
              display: 'block',
            }}
          />
        )
      })}
    </div>
  )
}
