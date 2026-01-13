import Section from '../components/Section'
import heroSvg from '../assets/hero_mascot.svg'
import './hero.css'

const Hero = () => {
  return (
    <Section>
      <div className="container flex flex-col lg:flex-row justify-center items-center mt-20">
        <div className='hero-image'>
          <img src={heroSvg} alt="Hero" className=''/>
        </div>
        <div className="hero-content flex flex-col items-center lg:items-start">
          {/* <div className='accent-heading text-white text-7xl lg:text-8xl'>Vertex</div> */}
          <div className='accent-text hero-title flex flex-col md:flex-row text-center text-bold text-2xl md:text-3xl'>
            <span className='text-primary'>
                Find what you're missing
            </span>
            <span className='text-secondary'>
                Master what matters
            </span>
          </div>
          <div className="hero-body-text text-white text-center lg:text-left text-xs md:text-base">
            <p>
            Identify what you need to learn first.
            Stop struggling with knowledge gaps, unlock your potential with AI-powered learning pathways
            tailored to you.
            </p>
          </div>
          <div className="hero-cta w-full gap-2 flex justify-center">
            <button className='btn btn-primary'>Get Started</button>
            <button className='btn btn-secondary'>Explore</button>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Hero