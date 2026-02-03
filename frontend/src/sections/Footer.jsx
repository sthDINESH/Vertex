import { useRef } from 'react'

import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import Section from '../components/Section'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerRef = useRef()

  // GSAP for footer animations
  useGSAP(() => {
    const down = 'M0,-0.3C0,-0.3,30,20,50,20S100,-0.3,100,-0.3V100H0V-0.3z'
    const center = 'M0,0C0,0,30,0,50,0S100,0,100,0V100H0V0z'

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      toggleActions: 'play pause resume reverse',
      // markers: true,
      scrub:1,
      onEnter: self => {
        const velocity = self.getVelocity()
        const variation = velocity / 10000

        gsap.fromTo('#bouncy-path', {
          morphSVG: down
        }, {
          duration: 2,
          morphSVG: center,
          ease: `elastic.out(${1 + variation}, ${1 - variation})`,
          overwrite: 'true'
        })
      }
    })
  }, { dependencies: [], scope:containerRef })

  return (
    <footer className='mt-12 relative' ref={containerRef}>
      <svg
        preserveAspectRatio="none"
        id="footer-img"
        viewBox="0 0 100 100"
        className='absolute top-0 left-0 w-full h-full backdrop-blur -z-1'
      >
        <defs>
          <linearGradient id='grad-2' x1='50%' y1='0' x2='50%' y2='100%' gradientUnits='objectBoundingBox'>
            <stop offset="0" stopColor="white" stopOpacity="0.1"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        {/* Path normalized to 0-100 scale */}
        <path
          className="footer-svg"
          id="bouncy-path"
          fill="url(#grad-2)"
          d="M0,0C0,0,30,0,50,0S100,0,100,0V100H0V0z"
        />
      </svg>
      <Section>
        <div className="container">
          <div className="footer-content pt-10 md:pt-16 pb-4 flex flex-col md:flex-row justify-end gap-1">
            <div className='md:w-1/2 flex flex-col gap-6'>
              <div className='flex flex-col gap-2 text-center md:text-left'>
                <div className="accent-text text-3xl">Vertex</div>
                <div>
                  <div className='mb-2'>Ever felt lost trying to learn something new?</div>
                Vertex uses AI to identify knowledge gaps and generate personalized learning plans,
                so you can master concepts efficiently and in the right order.
                </div>
              </div>
              <div className="socials flex justify-center md:justify-start md:items-end gap-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <FaInstagram size={22} className="text-cyan-500 hover:text-cyan-400" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <FaTwitter size={22} className="text-cyan-500 hover:text-cyan-400" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <FaFacebook size={22} className="text-cyan-500 hover:text-cyan-400" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  <FaYoutube size={22} className="text-cyan-500 hover:text-cyan-400" />
                </a>
              </div>
            </div>
            <div className='links md:w-1/2 pt-8 pb-6 flex md:flex-col items-end justify-around md:justify-between'>
              <a href="#features" className="hover:text-cyan-400 transition">Features</a>
              <a href="#how-it-works" className="hover:text-cyan-400 transition">How It Works</a>
              <a href="#about" className="hover:text-cyan-400 transition">About</a>
              <a href="mailto:contact@vertex.com" className="hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>
          <hr />
          <div className="copyright py-4 flex justify-center items-center">
            <p>© {currentYear} Vertex | All rights reserved.</p>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer