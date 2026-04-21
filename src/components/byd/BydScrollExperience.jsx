import { useEffect, useMemo, useRef, useState } from 'react'
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
    return { ...baseStyle, position: 'absolute', top: 0 }
  }

  if (mode === 'after') {
    return { ...baseStyle, position: 'absolute', bottom: 0 }
  }

  return { ...baseStyle, position: 'fixed', top: 0 }
}

function preloadImage(url, onComplete) {
  if (!url) return () => {}

  const img = new Image()
  img.decoding = 'async'

  const handleComplete = () => onComplete(url)
  img.addEventListener('load', handleComplete, { once: true })
  img.addEventListener('error', handleComplete, { once: true })
  img.src = url

  return () => {
    img.removeEventListener('load', handleComplete)
    img.removeEventListener('error', handleComplete)
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
  const [loadedImages, setLoadedImages] = useState(() => new Set())
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  const containerRef = useRef(null)
  const previousIndexRef = useRef(0)
  const tickingRef = useRef(false)
  const autoPlayTimerRef = useRef(null)
  const autoPlayIndexRef = useRef(0)

  const sceneImageUrls = useMemo(
    () => scenes.flatMap((scene) => [scene.thumb, scene.imagen].filter(Boolean)),
    [scenes]
  )

  // Preload first 3 scenes on mount
  useEffect(() => {
    const initialUrls = scenes
      .slice(0, 3)
      .flatMap((scene) => [scene.thumb, scene.imagen].filter(Boolean))

    const cleanups = initialUrls.map((url) =>
      preloadImage(url, (loadedUrl) => {
        setLoadedImages((prev) => {
          if (prev.has(loadedUrl)) return prev
          const next = new Set(prev)
          next.add(loadedUrl)
          return next
        })
      })
    )

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [scenes])

  // Rolling preload ahead of active scene
  useEffect(() => {
    const preloadTargets = [
      scenes[scrollState.activeIndex],
      scenes[scrollState.nextIndex],
      scenes[Math.min(scrollState.nextIndex + 1, scenes.length - 1)],
    ]
      .filter(Boolean)
      .flatMap((scene) => [scene.thumb, scene.imagen].filter(Boolean))

    const cleanups = preloadTargets.map((url) =>
      preloadImage(url, (loadedUrl) => {
        setLoadedImages((prev) => {
          if (prev.has(loadedUrl)) return prev
          const next = new Set(prev)
          next.add(loadedUrl)
          return next
        })
      })
    )

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [scenes, scrollState.activeIndex, scrollState.nextIndex])

  // Scroll engine
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

        return { activeIndex, progress, localProgress, nextIndex, stageMode }
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

  // Smooth scroll to a scene index with RAF animation
  function scrollToScene(index) {
    const container = containerRef.current
    if (!container) return

    const viewportHeight = window.innerHeight
    const containerTop = container.offsetTop
    const containerHeight = container.offsetHeight
    const maxScroll = Math.max(containerHeight - viewportHeight, 1)
    const progress = index / Math.max(scenes.length - 1, 1)
    const targetY = containerTop + progress * maxScroll

    const startY = window.scrollY
    const distance = targetY - startY
    const duration = 900
    const startTime = performance.now()

    function step(now) {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      window.scrollTo(0, startY + distance * eased)
      if (t < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  // Autoplay: advance scenes on a timer
  useEffect(() => {
    if (!isAutoPlaying) return

    autoPlayTimerRef.current = setInterval(() => {
      const nextIndex = autoPlayIndexRef.current + 1

      if (nextIndex >= scenes.length) {
        setIsAutoPlaying(false)
        return
      }

      autoPlayIndexRef.current = nextIndex
      scrollToScene(nextIndex)
    }, 4800)

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
        autoPlayTimerRef.current = null
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, scenes.length])

  // Cancel autoplay on user wheel/touch interaction
  useEffect(() => {
    if (!isAutoPlaying) return

    function handleUserInput() {
      setIsAutoPlaying(false)
    }

    window.addEventListener('wheel', handleUserInput, { passive: true, once: true })
    window.addEventListener('touchstart', handleUserInput, { passive: true, once: true })

    return () => {
      window.removeEventListener('wheel', handleUserInput)
      window.removeEventListener('touchstart', handleUserInput)
    }
  }, [isAutoPlaying])

  function toggleAutoPlay() {
    if (isAutoPlaying) {
      setIsAutoPlaying(false)
    } else {
      autoPlayIndexRef.current = 0
      scrollToScene(0)
      setIsAutoPlaying(true)
    }
  }

  const activeScene = scenes[scrollState.activeIndex]
  const nextScene = scenes[scrollState.nextIndex]

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
          globalProgress={scrollState.progress}
          activationKeys={activationKeys}
          loadedImages={loadedImages}
          totalImageCount={sceneImageUrls.length}
          isAutoPlaying={isAutoPlaying}
          onToggleAutoPlay={toggleAutoPlay}
          onGoToScene={scrollToScene}
        />
        <ScrollProgress
          current={scrollState.activeIndex}
          total={scenes.length}
          accent={activeScene?.accent}
          onGoToScene={scrollToScene}
        />
        <FloatingCTA isHero={scrollState.activeIndex === 0} />
      </div>
    </div>
  )
}
