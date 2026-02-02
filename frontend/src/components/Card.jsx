import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Card = ({ title, description, image, className='' }) => {
  const containerRef = useRef()

  /** GSAP hook for animations */
  useGSAP(() => {
    // animation timeline: paused initially, started by scroll trigger
    const timeline = gsap.timeline({
      paused: true,
    })

    // ScrollTrigger to trigger animation start
    ScrollTrigger.create({
      trigger: containerRef.current,
      onEnter: () => {
        timeline.restart()
      },
      onEnterBack: () => {
        timeline.reverse()
      },
      start: 'top 80%',
      end: 'top 80%',
      // markers: true,
      scrub: 1,
    })

    // add tween to timeline
    timeline
      .addLabel('start')
      .from(containerRef.current, {
        opacity:0,
        scale:0.8,
        duration: 0.5,
      })
  }, { dependencies: [], scope: containerRef })

  return (
    <div
      className={`
        flex 
        gap-3
        items-center justify-center 
        p-6 lg:p-8 
        border border-gray-400 rounded-2xl
        bg-white/5 
        backdrop-blur 
        hover:bg-white/10 
        transition-colors
        ${className}
    `}
      ref={containerRef}
    >
      <div className="card-image">
        {image && (
          <img src={image} alt={title} className="w-full max-w-50 md:max-w-xs md:min-w-40" />
          // <img src={image} alt={title} className="w-full" />
        )}
      </div>
      <div className="card-body text-center md:text-left">
        <h3 className="accent-text text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  )
}

export default Card