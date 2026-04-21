import { bydExperience } from '../../data/bydExperience'

const ITEMS = [
  { label: 'Motor', key: 'motor' },
  { label: 'Torque', key: 'torque' },
  { label: 'Batería', key: 'bateria' },
  { label: 'Plataforma', key: 'plataforma' },
  { label: 'Vel. máx.', key: 'velocidadMaxima' },
  { label: 'Airbags', key: 'airbags' },
]

export default function SpecOverlay() {
  const { confirmadas } = bydExperience.specs

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 20,
        background: 'rgba(0,0,0,0.68)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '14px 16px',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minWidth: '190px',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          opacity: 0.55,
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
      >
        Ficha Técnica — GS
      </div>
      {ITEMS.map(({ label, key }) => (
        <div
          key={key}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '12px',
            marginBottom: '7px',
            fontSize: '13px',
          }}
        >
          <span style={{ opacity: 0.65, flexShrink: 0 }}>{label}</span>
          <span style={{ fontWeight: 600, textAlign: 'right', fontSize: '12px' }}>
            {confirmadas[key]}
          </span>
        </div>
      ))}
    </div>
  )
}
