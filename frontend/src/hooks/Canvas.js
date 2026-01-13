import { useEffect, useRef } from 'react'

const useCanvas = (draw) => {
  // Ref to canvas in DOM
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if(!canvas) return

    // canvas context
    const context = canvas.getContext('2d')

    const parent = canvas.parentElement
    if(!parent) return

    // Set canvas resolution to match parent dimensions
    const resizeCanvas = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Render call for animation frames
    let animationId = null
    const render = () => {
      draw(context)
      animationId = window.requestAnimationFrame(render)
    }
    render()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.cancelAnimationFrame(animationId)
    }
  },[draw])

  return canvasRef
}

export default useCanvas