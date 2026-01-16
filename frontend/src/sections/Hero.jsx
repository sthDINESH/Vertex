import Section from '../components/Section'
import heroSvg from '../assets/hero_mascot.svg'
import '../assets/css/hero.css'

const Hero = () => {
  return (
    <Section>
      <div className="container flex flex-col lg:flex-row justify-center items-center py-4 mt-14">
        <div className='hero-image'>
          <img src={heroSvg} alt="Hero" className=''/>
        </div>
        <div className="hero-content flex flex-col items-center lg:items-start">
          <div className='accent-text hero-title flex flex-col md:flex-row md:gap-1 text-center text-bold text-2xl md:text-3xl'>
            <span className='text-primary tracking-wider'>
                Find what you're missing
            </span>
            <span className='text-secondary tracking-wider'>
                Master what matters
            </span>
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