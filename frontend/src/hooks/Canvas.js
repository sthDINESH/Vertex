import { useEffect, useRef } from 'react'

const useCanvas = (draw) => {
  // Ref to canvas in DOM
  const canvasRef = useRef()

  const animateOnRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if(!canvas) return

    // canvas context
    const context = canvas.getContext('2d')

    // get canvas parent ref
    const parent = canvas.parentElement
    if(!parent) return

    let animationId = null

    // Set canvas resolution to match parent dimensions
    const resizeCanvas = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Render call for animation frames
    const render = () => {
      if(animateOnRef.current){
        draw(context)
        animationId = window.requestAnimationFrame(render)
      }
    }
    render()

    // Pause render when document hidden, resume when visible
    const onVisibilityChange = () => {
      if (document.hidden) {
        animateOnRef.current = false
        if (animationId) cancelAnimationFrame(animationId)
        animationId = null
      } else if (!animateOnRef.current) {
        animateOnRef.current = true
        render()
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.cancelAnimationFrame(animationId)
    }
  },[draw])

  return canvasRef
}

export default useCanvas