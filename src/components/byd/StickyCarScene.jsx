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

function renderSceneLayer(scene, options) {
  const { opacity, progress, activationKey } = options

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
          transition: 'opacity 180ms linear',
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
        transition: 'opacity 180ms linear',
        willChange: 'opacity',
        overflow: 'hidden',
      }}
    >
      <img
        key={`${scene.id}-${activationKey}`}
        src={scene.imagen}
        alt={scene.titulo}
        fetchPriority={opacity > 0.5 ? 'high' : 'auto'}
        loading="eager"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: scene.visual?.objectPosition ?? 'center',
          transform: getSceneTransform(scene, progress),
          willChange: 'transform',
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
  activationKeys,
}) {
  const scene = activeScene ?? scenes[activeIndex]
  if (!scene) return null

  const sameScene = activeIndex === nextIndex || !nextScene
  const currentOpacity = sameScene ? 1 : 1 - localProgress
  const upcomingOpacity = sameScene ? 0 : localProgress
  const showBattery = scene.id === 'autonomia'
  const showSpecs = scene.id === 'tecnologia'

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100svh',
        background: '#050507',
        overflow: 'hidden',
      }}
    >
      {renderSceneLayer(scene, {
        opacity: currentOpacity,
        progress: localProgress,
        activationKey: activationKeys[activeIndex] || 0,
      })}

      {!sameScene &&
        renderSceneLayer(nextScene, {
          opacity: upcomingOpacity,
          progress: localProgress,
          activationKey: activationKeys[nextIndex] || 0,
        })}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 5,
          background: [
            'radial-gradient(ellipse 110% 80% at 50% 50%, transparent 35%, rgba(0,0,0,0.42) 100%)',
            'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.22) 100%)',
          ].join(', '),
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 6,
          opacity: 0.032,
          backgroundImage: GRAIN_SVG,
          backgroundSize: '180px 180px',
          backgroundRepeat: 'repeat',
        }}
      />

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

      {scene.hotspots?.map((hotspot, index) => (
        <Hotspot
          key={`${scene.id}-${index}`}
          label={hotspot.label}
          x={hotspot.x}
          y={hotspot.y}
        />
      ))}

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
