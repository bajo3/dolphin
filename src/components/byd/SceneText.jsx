import { Icon } from './icons'

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function FeatureCard({ feature, accent }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        padding: '11px 12px 12px',
        borderRadius: '14px',
        background: 'rgba(4, 8, 18, 0.52)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: `1px solid ${accent}2d`,
        boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
      }}
    >
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
          flexShrink: 0,
        }}
      >
        <Icon name={feature.icon} size={15} />
      </span>
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
            marginTop: '2px',
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.4,
          }}
        >
          {feature.value}
        </div>
      </div>
    </div>
  )
}

export default function SceneText({ scene, index, total, localProgress = 0, heroCta = null }) {
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
      {/* Scene counter */}
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

      {/* Title */}
      <h2
        style={{
          fontSize: 'clamp(28px, 8vw, 58px)',
          fontWeight: 900,
          margin: 0,
          lineHeight: 0.98,
          letterSpacing: '-0.04em',
          textShadow: '0 2px 24px rgba(0,0,0,0.8)',
          maxWidth: '12ch',
        }}
      >
        {scene.titulo}
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 'clamp(13px, 3.2vw, 17px)',
          fontWeight: 400,
          margin: '10px 0 0',
          opacity: 0.78,
          maxWidth: 'min(400px, 86vw)',
          lineHeight: 1.55,
          textShadow: '0 1px 12px rgba(0,0,0,0.9)',
        }}
      >
        {scene.subtitulo}
      </p>

      {/* Feature cards */}
      {scene.features?.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '8px',
            marginTop: '14px',
            maxWidth: 'min(520px, 90vw)',
          }}
        >
          {scene.features.map((feature) => (
            <FeatureCard
              key={`${scene.id}-${feature.label}`}
              feature={feature}
              accent={accent}
            />
          ))}
        </div>
      )}

      {/* Hero CTA — only on first scene */}
      {heroCta && (
        <div
          style={{
            marginTop: '18px',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a
            href={heroCta.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 22px',
              borderRadius: '50px',
              background: '#25D366',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.01em',
              boxShadow: '0 6px 28px rgba(37,211,102,0.35)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 36px rgba(37,211,102,0.55)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.35)'
            }}
          >
            {WA_ICON}
            Coordinar test drive
          </a>

          <button
            type="button"
            onClick={heroCta.onAutoPlay}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 20px',
              borderRadius: '50px',
              background: 'rgba(4,8,18,0.62)',
              color: '#fff',
              border: `1px solid ${accent}55`,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, background 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = accent
              e.currentTarget.style.background = `rgba(4,8,18,0.82)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${accent}55`
              e.currentTarget.style.background = 'rgba(4,8,18,0.62)'
            }}
          >
            <Icon name={heroCta.isAutoPlaying ? 'pause' : 'play'} size={15} />
            {heroCta.isAutoPlaying ? 'Pausar' : 'Recorrido guiado'}
          </button>
        </div>
      )}
    </div>
  )
}
