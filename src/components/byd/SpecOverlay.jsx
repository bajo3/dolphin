import { bydExperience } from '../../data/bydExperience'

const ITEMS = [
  { label: 'Pantalla', key: 'pantalla' },
  { label: 'Conectividad', key: 'conectividad' },
  { label: 'Batería', key: 'bateria' },
  { label: 'Autonomía', key: 'autonomia' },
  { label: 'Ruedas', key: 'ruedas' },
  { label: 'Airbags', key: 'airbags' },
]

export default function SpecOverlay({ accent = 'rgba(95,215,255,0.92)' }) {
  const { confirmadas } = bydExperience.specs

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 20,
        background: 'rgba(4,8,18,0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderRadius: '18px',
        padding: '16px 18px',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minWidth: 'min(300px, 76vw)',
        border: `1px solid ${accent}44`,
        boxShadow: `0 16px 48px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.04)`,
      }}
    >
      <div
        style={{
          fontSize: '10px',
          fontWeight: 800,
          letterSpacing: '0.14em',
          color: accent,
          marginBottom: '12px',
          textTransform: 'uppercase',
        }}
      >
        Datos destacados GS
      </div>
      {ITEMS.map(({ label, key }) => (
        <div
          key={key}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '12px',
            marginBottom: '9px',
            fontSize: '13px',
          }}
        >
          <span style={{ opacity: 0.5, flexShrink: 0 }}>{label}</span>
          <span style={{ fontWeight: 600, textAlign: 'right', fontSize: '12px', color: 'rgba(255,255,255,0.9)' }}>
            {confirmadas[key]}
          </span>
        </div>
      ))}
    </div>
  )
}
