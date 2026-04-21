import { bydExperience } from '../../data/bydExperience'

const ITEMS = [
  { label: 'Pantalla', key: 'pantalla' },
  { label: 'Conectividad', key: 'conectividad' },
  { label: 'Bateria', key: 'bateria' },
  { label: 'Autonomia', key: 'autonomia' },
  { label: 'Ruedas', key: 'ruedas' },
  { label: 'Airbags', key: 'airbags' },
]

export default function SpecOverlay() {
  const { confirmadas } = bydExperience.specs

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 20,
        background: 'rgba(4,8,18,0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '18px',
        padding: '16px 18px',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minWidth: 'min(300px, 76vw)',
        border: '1px solid rgba(95,215,255,0.28)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.22)',
      }}
    >
      <div
        style={{
          fontSize: '10px',
          fontWeight: 800,
          letterSpacing: '0.14em',
          color: 'rgba(95,215,255,0.92)',
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
            marginBottom: '8px',
            fontSize: '13px',
          }}
        >
          <span style={{ opacity: 0.6, flexShrink: 0 }}>{label}</span>
          <span style={{ fontWeight: 600, textAlign: 'right', fontSize: '12px' }}>
            {confirmadas[key]}
          </span>
        </div>
      ))}
    </div>
  )
}
