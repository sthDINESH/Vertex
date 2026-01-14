import { useRef } from 'react'
import useCanvas from '../hooks/Canvas'
import Particle from '../utils/particle'

const Canvas = (props) => {
  // Ref for canvas particles
  const particlesRef = useRef([])
  const particleCount = 40

  const draw = (context) => {
    if(!particlesRef.current.length){
      for(let idx = 0; idx < particleCount; idx++){
        particlesRef.current.push(new Particle(context))
      }
    }
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    particlesRef.current.forEach(particle => {
      particle.update()
      particle.draw()
    })
  }

  // Ref to rendered canvas
  const canvasRef = useCanvas(draw)

  // canvas fills the parent container
  const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  }

  return (
    <canvas ref={canvasRef} {...props} style={canvasStyle}/>
  )
}

export default Canvas