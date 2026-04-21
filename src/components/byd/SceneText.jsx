function FeatureIcon({ icon, accent }) {
  return (
    <span
      style={{
        width: '28px',
        height: '28px',
        borderRadius: '999px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `${accent}22`,
        border: `1px solid ${accent}44`,
        color: accent,
        fontSize: '11px',
        fontWeight: 800,
        letterSpacing: '0.04em',
        flexShrink: 0,
      }}
    >
      {icon?.slice(0, 2).toUpperCase() ?? 'BY'}
    </span>
  )
}

export default function SceneText({ scene, index, total, localProgress = 0 }) {
  if (!scene) return null

  const accent = scene.accent ?? '#c7ff41'

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 'clamp(86px, 12vh, 120px)',
        left: 0,
        right: '44px',
        padding: '0 clamp(16px, 5vw, 30px)',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        zIndex: 12,
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
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            color: accent,
            textTransform: 'uppercase',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          style={{
            width: '28px',
            height: '1px',
            background: `${accent}80`,
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.34)',
            textTransform: 'uppercase',
          }}
        >
          {String(total).padStart(2, '0')}
        </span>
      </div>

      <h2
        style={{
          fontSize: 'clamp(28px, 8vw, 58px)',
          fontWeight: 900,
          margin: 0,
          lineHeight: 0.98,
          letterSpacing: '-0.04em',
          textShadow: '0 2px 24px rgba(0,0,0,0.8)',
          maxWidth: '11ch',
        }}
      >
        {scene.titulo}
      </h2>

      <p
        style={{
          fontSize: 'clamp(14px, 3.5vw, 18px)',
          fontWeight: 400,
          margin: '12px 0 0',
          opacity: 0.88,
          maxWidth: 'min(420px, 88vw)',
          lineHeight: 1.55,
          textShadow: '0 1px 12px rgba(0,0,0,0.9)',
        }}
      >
        {scene.subtitulo}
      </p>

      {scene.features?.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(148px, 1fr))',
            gap: '10px',
            marginTop: '18px',
            maxWidth: 'min(560px, 92vw)',
          }}
        >
          {scene.features.map((feature) => (
            <div
              key={`${scene.id}-${feature.label}`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '12px 12px 13px',
                borderRadius: '16px',
                background: 'rgba(4, 8, 18, 0.52)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: `1px solid ${accent}2d`,
                boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
              }}
            >
              <FeatureIcon icon={feature.icon} accent={accent} />
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: accent,
                  }}
                >
                  {feature.label}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    marginTop: '3px',
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.45,
                  }}
                >
                  {feature.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
