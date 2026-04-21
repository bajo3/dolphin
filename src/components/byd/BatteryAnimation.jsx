import { useState, useEffect, useRef } from 'react'

function useAnimatedCounter(target, duration, activationKey) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    setValue(0)
    const startTime = performance.now()

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    // Short delay so the scene fade-in finishes first
    const delay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick)
    }, 350)

    return () => {
      clearTimeout(delay)
      cancelAnimationFrame(rafRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activationKey])

  return value
}

export default function BatteryAnimation({ activationKey }) {
  const [fill, setFill] = useState(8)

  useEffect(() => {
    setFill(8)
    const t = setTimeout(() => setFill(95), 380)
    return () => clearTimeout(t)
  }, [activationKey])

  const km = useAnimatedCounter(380, 1800, activationKey)
  const fillColor = fill > 60 ? '#a3e635' : fill > 30 ? '#facc15' : '#ef4444'

  return (
    <div
      style={{
        position: 'absolute',
        top: 'clamp(20px, 5vh, 36px)',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        zIndex: 20,
      }}
    >
      {/* Animated KM counter */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '6px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <span
          style={{
            fontSize: 'clamp(56px, 20vw, 100px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            textShadow: '0 0 60px rgba(255,255,255,0.15)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {km}
        </span>
        <span
          style={{
            fontSize: 'clamp(20px, 6vw, 34px)',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          km
        </span>
      </div>

      {/* Label */}
      <div
        style={{
          color: 'rgba(255,255,255,0.38)',
          fontSize: '10px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          marginBottom: '10px',
        }}
      >
        Autonomía NEDC
      </div>

      {/* Battery bar */}
      <div
        style={{
          width: '88px',
          height: '30px',
          border: '2px solid rgba(255,255,255,0.35)',
          borderRadius: '6px',
          position: 'relative',
          background: 'rgba(0,0,0,0.45)',
        }}
      >
        {/* Positive terminal nub */}
        <div
          style={{
            position: 'absolute',
            right: '-6px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '4px',
            height: '12px',
            background: 'rgba(255,255,255,0.35)',
            borderRadius: '0 3px 3px 0',
          }}
        />
        {/* Fill */}
        <div
          style={{
            position: 'absolute',
            left: '3px',
            top: '3px',
            bottom: '3px',
            width: `calc(${fill}% - 6px)`,
            background: fillColor,
            borderRadius: '3px',
            transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1), background 0.8s ease',
            boxShadow: fill > 60 ? '0 0 8px rgba(163,230,53,0.5)' : 'none',
          }}
        />
      </div>

      {/* Disclaimer */}
      <div
        style={{
          color: 'rgba(255,255,255,0.25)',
          fontSize: '9px',
          textAlign: 'center',
          marginTop: '8px',
          maxWidth: 'min(200px, 60vw)',
          lineHeight: 1.55,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        La autonomía puede variar según uso, manejo y condiciones.
      </div>
    </div>
  )
}
