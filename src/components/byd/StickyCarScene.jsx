import { useEffect, useMemo, useRef, useState } from 'react'
import { bydExperience } from '../../data/bydExperience'
import SceneText from './SceneText'
import Hotspot from './Hotspot'
import BatteryAnimation from './BatteryAnimation'
import SpecOverlay from './SpecOverlay'
import ChargingScene from './ChargingScene'
import { Icon } from './icons'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function getSceneTransform(scene, progress) {
  const startScale = scene?.visual?.startScale ?? 1
  const endScale = scene?.visual?.endScale ?? 1.08
  const startX = scene?.visual?.startX ?? 0
  const endX = scene?.visual?.endX ?? 0
  const startY = scene?.visual?.startY ?? 0
  const endY = scene?.visual?.endY ?? 0

  const scale = startScale + (endScale - startScale) * progress
  const x = startX + (endX - startX) * progress
  const y = startY + (endY - startY) * progress

  return `translate3d(${x}px, ${y}px, 0) scale(${scale})`
}

function SceneLoadingState({ scene, accent, isLoaded }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: isLoaded ? 0 : 1,
        transition: 'opacity 240ms ease',
        pointerEvents: 'none',
        zIndex: 4,
        background: [
          `radial-gradient(circle at 20% 20%, ${accent}22 0%, transparent 20%)`,
          'linear-gradient(180deg, rgba(4,8,18,0.7) 0%, rgba(2,3,8,0.9) 100%)',
        ].join(', '),
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: scene?.thumb ? `url(${scene.thumb})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: scene?.visual?.objectPosition ?? 'center',
          filter: 'blur(24px)',
          transform: 'scale(1.12)',
          opacity: 0.45,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: `1px solid ${accent}80`,
            borderTopColor: 'transparent',
            animation: 'bydSpin 0.9s linear infinite',
            boxShadow: `0 0 30px ${accent}33`,
          }}
        />
        <div
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Cargando escena
        </div>
      </div>
    </div>
  )
}

function renderSceneLayer(scene, options) {
  const { opacity, progress, activationKey, isLoaded, accent } = options

  if (!scene) return null

  if (scene.imagen === null) {
    return (
      <div
        key={`${scene.id}-placeholder`}
        style={{
          position: 'absolute',
          inset: 0,
          opacity,
          zIndex: opacity > 0 ? 3 : 1,
          pointerEvents: 'none',
          transition: 'opacity 240ms linear',
          willChange: 'opacity',
        }}
      >
        <ChargingScene active={opacity > 0.2} />
      </div>
    )
  }

  if (!scene.imagen) return null

  return (
    <div
      key={`${scene.id}-image`}
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        zIndex: opacity > 0 ? 3 : 1,
        pointerEvents: 'none',
        transition: 'opacity 240ms linear',
        willChange: 'opacity',
        overflow: 'hidden',
      }}
    >
      {scene.thumb && (
        <img
          src={scene.thumb}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: scene.visual?.objectPosition ?? 'center',
            filter: 'blur(18px)',
            transform: 'scale(1.08)',
            opacity: isLoaded ? 0 : 0.65,
            transition: 'opacity 280ms ease',
          }}
        />
      )}
      <img
        key={`${scene.id}-${activationKey}`}
        src={scene.imagen}
        alt={scene.titulo}
        decoding="async"
        fetchPriority={opacity > 0.5 ? 'high' : 'auto'}
        loading={opacity > 0.5 ? 'eager' : 'lazy'}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: scene.visual?.objectPosition ?? 'center',
          transform: getSceneTransform(scene, progress),
          willChange: 'transform',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      />
      {scene.visual?.overlay && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: scene.visual.overlay,
            mixBlendMode: scene.visual.blendMode ?? 'normal',
            opacity: scene.visual.overlayOpacity ?? 1,
            pointerEvents: 'none',
          }}
        />
      )}
      <SceneLoadingState scene={scene} accent={accent} isLoaded={isLoaded} />
    </div>
  )
}

export default function StickyCarScene({
  scenes,
  activeScene,
  nextScene,
  activeIndex,
  nextIndex,
  localProgress,
  globalProgress,
  activationKeys,
  loadedImages,
  isAutoPlaying,
  onToggleAutoPlay,
}) {
  const scene = activeScene ?? scenes[activeIndex]
  const [selectedHotspot, setSelectedHotspot] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const hasInteractedRef = useRef(false)

  useEffect(() => {
    setSelectedHotspot(null)
  }, [scene?.id])

  // Show/hide "Interactivo" hint per scene
  useEffect(() => {
    const hasHotspots = (scene?.hotspots?.length ?? 0) > 0
    if (!hasInteractedRef.current && hasHotspots && !isAutoPlaying) {
      setShowHint(true)
      const t = setTimeout(() => setShowHint(false), 5000)
      return () => clearTimeout(t)
    } else {
      setShowHint(false)
    }
  }, [scene?.id, isAutoPlaying])

  const sceneIsLoaded = useMemo(
    () => (url) => !url || loadedImages.has(url),
    [loadedImages]
  )

  function handleHotspotToggle(hotspotKey) {
    hasInteractedRef.current = true
    setShowHint(false)
    setSelectedHotspot((prev) => (prev === hotspotKey ? null : hotspotKey))
  }

  if (!scene) return null

  const sameScene = activeIndex === nextIndex || !nextScene
  const currentOpacity = sameScene ? 1 : 1 - localProgress
  const upcomingOpacity = sameScene ? 0 : localProgress
  const showBattery = scene.id === 'ev-mobility'
  const showSpecs = scene.id === 'infotainment' || scene.id === 'dashboard-front'
  const accent = scene.accent ?? '#c7ff41'
  const isHero = activeIndex === 0

  const { auto } = bydExperience
  const waUrl = `https://wa.me/${auto.whatsapp}?text=${encodeURIComponent(auto.whatsappMensaje)}`

  const heroCta = isHero
    ? { waUrl, onAutoPlay: onToggleAutoPlay, isAutoPlaying }
    : null

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100dvh',
        minHeight: '100vh',
        background: '#050507',
        overflow: 'hidden',
      }}
    >
      {/* Scene images */}
      {renderSceneLayer(scene, {
        opacity: currentOpacity,
        progress: localProgress,
        activationKey: activationKeys[activeIndex] || 0,
        isLoaded: sceneIsLoaded(scene.imagen),
        accent,
      })}

      {!sameScene &&
        renderSceneLayer(nextScene, {
          opacity: upcomingOpacity,
          progress: localProgress,
          activationKey: activationKeys[nextIndex] || 0,
          isLoaded: sceneIsLoaded(nextScene?.imagen),
          accent: nextScene?.accent ?? accent,
        })}

      {/* Radial glow matching scene accent */}
      <div
        style={{
          position: 'absolute',
          inset: '-20%',
          zIndex: 2,
          pointerEvents: 'none',
          background: `radial-gradient(circle at 80% 18%, ${accent}38 0%, transparent 26%), radial-gradient(circle at 18% 80%, ${accent}20 0%, transparent 24%)`,
          filter: 'blur(34px)',
          opacity: 0.95,
          transition: 'background 0.6s ease',
        }}
      />

      {/* Scroll progress bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '3px',
          zIndex: 14,
          background: 'rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            width: `${Math.max(2, globalProgress * 100)}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.92))`,
            boxShadow: `0 0 20px ${accent}`,
            transition: 'width 120ms linear, background 0.5s ease',
          }}
        />
      </div>

      {/* Vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 5,
          background: [
            'radial-gradient(ellipse 110% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.44) 100%)',
            'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.22) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.18) 100%)',
          ].join(', '),
        }}
      />

      {/* Grain texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 6,
          opacity: 0.03,
          backgroundImage: GRAIN_SVG,
          backgroundSize: '180px 180px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Top-left: brand pill */}
      <div
        style={{
          position: 'absolute',
          top: '18px',
          left: '18px',
          zIndex: 16,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '9px 14px',
          borderRadius: '999px',
          background: 'rgba(4, 8, 18, 0.5)',
          border: `1px solid ${accent}40`,
          color: '#fff',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          transition: 'border-color 0.5s ease',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '999px',
            background: accent,
            boxShadow: `0 0 14px ${accent}`,
            flexShrink: 0,
            transition: 'background 0.5s ease, box-shadow 0.5s ease',
          }}
        />
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.72)',
          }}
        >
          BYD Dolphin Mini EV GS
        </span>
      </div>

      {/* Top-right: autoplay indicator OR "Interactivo" hint */}
      {isAutoPlaying ? (
        <button
          type="button"
          onClick={onToggleAutoPlay}
          aria-label="Pausar presentación"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 16,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 14px',
            borderRadius: '999px',
            background: 'rgba(4, 8, 18, 0.55)',
            border: `1px solid ${accent}55`,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            color: '#fff',
            fontSize: '12px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: accent,
              boxShadow: `0 0 10px ${accent}`,
              animation: 'hotspotGlow 1.8s ease-in-out infinite',
              flexShrink: 0,
            }}
          />
          <span style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>
            Presentación
          </span>
          <span style={{ color: accent }}>
            <Icon name="pause" size={12} />
          </span>
        </button>
      ) : showHint ? (
        <div
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 16,
            padding: '10px 12px',
            borderRadius: '14px',
            background: 'rgba(4, 8, 18, 0.48)',
            border: `1px solid ${accent}35`,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
            maxWidth: 'min(200px, 40vw)',
            animation: 'slideUpFade 0.4s ease both',
          }}
        >
          <div
            style={{
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: accent,
              fontWeight: 800,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Interactivo
          </div>
          <div
            style={{
              marginTop: '4px',
              fontSize: '11px',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.65)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Tocá los puntos para ver información del auto.
          </div>
        </div>
      ) : null}

      {/* Battery animation overlay */}
      {showBattery && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 15,
            animation: 'fadeIn 0.4s ease both',
          }}
        >
          <BatteryAnimation activationKey={activationKeys[activeIndex]} />
        </div>
      )}

      {/* Spec overlay */}
      {showSpecs && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 15,
            animation: 'specSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
        >
          <SpecOverlay accent={accent} />
        </div>
      )}

      {/* Hotspots */}
      {scene.hotspots?.map((hotspot, index) => {
        const hotspotKey = `${scene.id}-${index}`
        const active = selectedHotspot === hotspotKey

        return (
          <Hotspot
            key={hotspotKey}
            label={hotspot.label}
            title={hotspot.title}
            detail={hotspot.detail}
            icon={hotspot.icon}
            x={hotspot.x}
            y={hotspot.y}
            active={active}
            accent={accent}
            onToggle={() => handleHotspotToggle(hotspotKey)}
          />
        )
      })}

      {/* Scene text */}
      <SceneText
        key={scene.id}
        scene={scene}
        index={activeIndex}
        total={scenes.length}
        localProgress={localProgress}
        heroCta={heroCta}
      />
    </div>
  )
}
