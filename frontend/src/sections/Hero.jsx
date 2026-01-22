import { useRef } from 'react'
// import gsap from 'gsap'
// import { SplitText } from 'gsap/SplitText'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGSAP } from '@gsap/react'
import Section from '../components/Section'
import heroSvg from '../assets/hero_mascot.svg'
import '../assets/css/hero.css'

// gsap.registerPlugin(SplitText, ScrollTrigger)

const Hero = () => {
  const container = useRef()

  // const tl = useRef()

  // useGSAP(() => {
  //   document.fonts.ready.then(() => {
  //     // Create a timeline for animations
  //     tl.current = gsap.timeline({})

  //     tl.current.from('.hero-image img',{
  //       y:'100vh',
  //       opacity:0,
  //       duration:1,
  //       ease:'power1.out',
  //     })

  //     // split hero-title and add animation to timeline
  //     SplitText.create('.hero-title-1', {
  //       type: 'chars',
  //       // mask: 'lines',
  //       autoSplit: true,
  //       onSplit(self){
  //         const t = tl.current.getById('title-1')
  //         t && tl.current.remove(t)
  //         return tl.current.from(self.chars, {
  //           x: '100vw',
  //           opacity:0,
  //           // rotation:'random(-20,20)',
  //           duration:0.9,
  //           stagger: 0.01,
  //           id: 'title-1'
  //         }, 0)
  //       },
  //       onComplete: (self) => self.revert(),
  //     })

  //     SplitText.create('.hero-title-2', {
  //       type: 'lines, words',
  //       mask: 'lines',
  //       autoSplit: true,
  //       onSplit(self){
  //         const t = tl.current.getById('title-2')
  //         t && tl.current.remove(t)
  //         const anim =  tl.current.from(self.words, {
  //           yPercent: 150,
  //           scale:1.5,
  //           duration:0.5,
  //           stagger: 0.15,
  //           id: 'title-2',
  //           onComplete: () => {
  //             console.log('anim complete****')
  //           },
  //         }, '>')
  //         console.log('In onSplit 2****', anim)
  //         return anim
  //       },
  //     })

  //     SplitText.create('.hero-body-text', {
  //       type: 'words, chars',
  //       mask: 'words',
  //       autoSplit: true,
  //       onSplit(self){
  //         return tl.current.from(self.chars, {
  //           // opacity:0,
  //           yPercent: 100,
  //           duration:0.5,
  //           // stagger: 0.01,
  //           ease:'power1.out',
  //           id: 'body-text'
  //         }, '+=0.5')
  //       },
  //       onComplete: (self) => self.revert(),
  //     })

  //     tl.current.from('.hero-cta .btn', {
  //       opacity:0,
  //       duration:1,
  //       yPercent:100,
  //       stagger: 0.1,
  //     },'>')

  //   })
  // },{ dependencies:[], scope:container })

  return (
    <Section>
      <div ref={container} className="container flex flex-col lg:flex-row justify-center items-center py-4 mt-14 overflow-x-hidden">
        <div className='hero-image overflow-hidden'>
          <img src={heroSvg} alt="Hero" className=''/>
        </div>
        <div className="hero-content flex flex-col items-center lg:items-start">
          <div className='accent-text hero-title flex flex-col md:flex-row md:gap-1 text-center text-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl'>
            <div className='hero-title-1 text-secondary tracking-wider'>
                Find what you're missing
            </div>
            <div className='hero-title-2 text-primary tracking-wider'>
                Master what matters
            </div>
          </div>
          <div className="hero-body-text text-gray-200 text-center lg:text-left mt-2">
            <p>
            Identify what you need to learn first.
            Stop struggling with knowledge gaps, unlock your potential with AI-powered learning pathways
            tailored to you.
            </p>
          </div>
          <div className="hero-cta w-full gap-2 flex justify-center mt-6">
            <button className='btn btn-primary w-32'>Get Started</button>
            <button className='btn btn-secondary w-32'>Explore</button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero