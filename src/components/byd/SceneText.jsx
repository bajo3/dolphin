export default function SceneText({ scene, index, total, localProgress = 0 }) {
  if (!scene) return null

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 'clamp(100px, 14vh, 130px)',
        left: 0,
        right: '44px',
        padding: '0 clamp(16px, 5vw, 28px)',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        zIndex: 10,
        animation: 'slideUpFade 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        opacity: 0.82 + localProgress * 0.18,
        transform: `translateY(${(1 - localProgress) * 8}px)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '10px',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            color: 'rgba(163,230,53,0.8)',
            textTransform: 'uppercase',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          style={{
            width: '24px',
            height: '1px',
            background: 'rgba(163,230,53,0.4)',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
          }}
        >
          {String(total).padStart(2, '0')}
        </span>
      </div>

      <h2
        style={{
          fontSize: 'clamp(24px, 7.5vw, 52px)',
          fontWeight: 800,
          margin: 0,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          textShadow: '0 2px 20px rgba(0,0,0,0.85)',
          maxWidth: '12ch',
        }}
      >
        {scene.titulo}
      </h2>

      <p
        style={{
          fontSize: 'clamp(13px, 3.2vw, 17px)',
          fontWeight: 400,
          margin: '10px 0 0',
          opacity: 0.82,
          maxWidth: 'min(360px, 85vw)',
          lineHeight: 1.6,
          textShadow: '0 1px 10px rgba(0,0,0,0.9)',
        }}
      >
        {scene.subtitulo}
      </p>
    </div>
  )
}
