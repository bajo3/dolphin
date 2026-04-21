import { useEffect, useRef, useState } from 'react'
import { bydExperience } from '../../data/bydExperience'
import StickyCarScene from './StickyCarScene'
import FloatingCTA from './FloatingCTA'
import ScrollProgress from './ScrollProgress'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function getStageStyle(mode) {
  const baseStyle = {
    left: 0,
    right: 0,
    height: '100dvh',
    minHeight: '100vh',
    overflow: 'hidden',
  }

  if (mode === 'before') {
    return {
      ...baseStyle,
      position: 'absolute',
      top: 0,
    }
  }

  if (mode === 'after') {
    return {
      ...baseStyle,
      position: 'absolute',
      bottom: 0,
    }
  }

  return {
    ...baseStyle,
    position: 'fixed',
    top: 0,
  }
}

export default function BydScrollExperience() {
  const scenes = bydExperience.escenas
  const [scrollState, setScrollState] = useState({
    activeIndex: 0,
    progress: 0,
    localProgress: 0,
    nextIndex: 0,
    stageMode: 'before',
  })
  const [activationKeys, setActivationKeys] = useState(() =>
    Object.fromEntries(scenes.map((_, index) => [index, index === 0 ? 1 : 0]))
  )
  const containerRef = useRef(null)
  const previousIndexRef = useRef(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    function calculateScrollState() {
      const container = containerRef.current
      if (!container || scenes.length === 0) return

      const viewportHeight = window.innerHeight || 1
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const containerBottom = containerTop + containerHeight
      const currentScroll = window.scrollY
      const maxScroll = Math.max(containerHeight - viewportHeight, 1)
      const relativeScroll = clamp(currentScroll - containerTop, 0, maxScroll)
      const progress = clamp(relativeScroll / maxScroll, 0, 1)
      const sceneFloat = progress * Math.max(scenes.length - 1, 0)
      const baseIndex = Math.floor(sceneFloat)
      const nextIndex = Math.min(baseIndex + 1, scenes.length - 1)
      const localProgress = clamp(sceneFloat - baseIndex, 0, 1)
      const activeIndex = localProgress >= 0.5 ? nextIndex : baseIndex
      const stageMode =
        currentScroll < containerTop
          ? 'before'
          : currentScroll >= containerBottom - viewportHeight
            ? 'after'
            : 'active'

      setScrollState((prev) => {
        if (
          prev.activeIndex === activeIndex &&
          prev.nextIndex === nextIndex &&
          prev.stageMode === stageMode &&
          Math.abs(prev.progress - progress) < 0.001 &&
          Math.abs(prev.localProgress - localProgress) < 0.001
        ) {
          return prev
        }

        return {
          activeIndex,
          progress,
          localProgress,
          nextIndex,
          stageMode,
        }
      })

      if (previousIndexRef.current !== activeIndex) {
        previousIndexRef.current = activeIndex
        setActivationKeys((prev) => ({
          ...prev,
          [activeIndex]: (prev[activeIndex] || 0) + 1,
        }))
      }
    }

    function requestTick() {
      if (tickingRef.current) return

      tickingRef.current = true
      window.requestAnimationFrame(() => {
        tickingRef.current = false
        calculateScrollState()
      })
    }

    calculateScrollState()
    window.addEventListener('scroll', requestTick, { passive: true })
    window.addEventListener('resize', requestTick)

    return () => {
      window.removeEventListener('scroll', requestTick)
      window.removeEventListener('resize', requestTick)
    }
  }, [scenes])

  const activeScene = scenes[scrollState.activeIndex]
  const nextScene = scenes[scrollState.nextIndex]

  useEffect(() => {
    if (!import.meta.env.DEV) return

    console.log('[BYD_SCROLL]', {
      activeIndex: scrollState.activeIndex,
      nextIndex: scrollState.nextIndex,
      stageMode: scrollState.stageMode,
      sceneId: activeScene?.id,
      image: activeScene?.imagen ?? null,
      progress: Number(scrollState.progress.toFixed(3)),
      localProgress: Number(scrollState.localProgress.toFixed(3)),
    })
  }, [
    activeScene,
    scrollState.activeIndex,
    scrollState.localProgress,
    scrollState.nextIndex,
    scrollState.progress,
    scrollState.stageMode,
  ])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: `${scenes.length * 100}dvh`,
        minHeight: `${scenes.length * 100}vh`,
      }}
    >
      <div style={getStageStyle(scrollState.stageMode)}>
        <StickyCarScene
          scenes={scenes}
          activeScene={activeScene}
          nextScene={nextScene}
          activeIndex={scrollState.activeIndex}
          nextIndex={scrollState.nextIndex}
          localProgress={scrollState.localProgress}
          activationKeys={activationKeys}
        />
        <ScrollProgress current={scrollState.activeIndex} total={scenes.length} />
        <FloatingCTA />
      </div>
    </div>
  )
}
