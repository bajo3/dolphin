export default function ScrollProgress({ current, total }) {
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
          <div
            key={i}
            style={{
              width: isActive ? '3px' : '3px',
              height: isActive ? '20px' : '4px',
              borderRadius: '2px',
              background: isActive ? '#a3e635' : 'rgba(255,255,255,0.22)',
              transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s ease',
              flexShrink: 0,
              boxShadow: isActive ? '0 0 6px rgba(163,230,53,0.6)' : 'none',
            }}
          />
        )
      })}
    </div>
  )
}
