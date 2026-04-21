import { useEffect, useMemo, useState } from 'react'
import SceneText from './SceneText'
import Hotspot from './Hotspot'
import BatteryAnimation from './BatteryAnimation'
import SpecOverlay from './SpecOverlay'
import ChargingScene from './ChargingScene'

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
}) {
  const scene = activeScene ?? scenes[activeIndex]
  const [selectedHotspot, setSelectedHotspot] = useState(null)

  useEffect(() => {
    setSelectedHotspot(null)
  }, [scene?.id])

  const sceneIsLoaded = useMemo(
    () => (url) => !url || loadedImages.has(url),
    [loadedImages]
  )

  if (!scene) return null

  const sameScene = activeIndex === nextIndex || !nextScene
  const currentOpacity = sameScene ? 1 : 1 - localProgress
  const upcomingOpacity = sameScene ? 0 : localProgress
  const showBattery = scene.id === 'ev-mobility'
  const showSpecs = scene.id === 'infotainment' || scene.id === 'dashboard-front'
  const accent = scene.accent ?? '#c7ff41'

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

      <div
        style={{
          position: 'absolute',
          inset: '-20%',
          zIndex: 2,
          pointerEvents: 'none',
          background: `radial-gradient(circle at 80% 18%, ${accent}38 0%, transparent 26%), radial-gradient(circle at 18% 80%, ${accent}20 0%, transparent 24%)`,
          filter: 'blur(34px)',
          opacity: 0.95,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '4px',
          zIndex: 14,
          background: 'rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            width: `${Math.max(4, globalProgress * 100)}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.95))`,
            boxShadow: `0 0 24px ${accent}`,
            transition: 'width 120ms linear',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 5,
          background: [
            'radial-gradient(ellipse 110% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.46) 100%)',
            'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.24) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.18) 100%)',
          ].join(', '),
        }}
      />

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

      <div
        style={{
          position: 'absolute',
          top: '18px',
          left: '18px',
          zIndex: 16,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: '999px',
          background: 'rgba(4, 8, 18, 0.5)',
          border: `1px solid ${accent}40`,
          color: '#fff',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 14px 40px rgba(0,0,0,0.22)',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '999px',
            background: accent,
            boxShadow: `0 0 16px ${accent}`,
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
          boxShadow: '0 14px 40px rgba(0,0,0,0.18)',
          maxWidth: 'min(220px, 42vw)',
        }}
      >
        <div
          style={{
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: accent,
            fontWeight: 800,
          }}
        >
          Interactivo
        </div>
        <div
          style={{
            marginTop: '5px',
            fontSize: '12px',
            lineHeight: 1.45,
            color: 'rgba(255,255,255,0.72)',
          }}
        >
          Toca los iconos para abrir info puntual de luces, pantalla, bateria, llantas y confort.
        </div>
      </div>

      {showBattery && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 15 }}>
          <BatteryAnimation activationKey={activationKeys[activeIndex]} />
        </div>
      )}

      {showSpecs && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 15 }}>
          <SpecOverlay />
        </div>
      )}

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
            onToggle={() => setSelectedHotspot((prev) => (prev === hotspotKey ? null : hotspotKey))}
          />
        )
      })}

      <SceneText
        key={scene.id}
        scene={scene}
        index={activeIndex}
        total={scenes.length}
        localProgress={localProgress}
      />
    </div>
  )
}
