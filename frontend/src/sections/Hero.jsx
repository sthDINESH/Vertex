import Section from '../components/Section'
import heroSvg from '../assets/hero_mascot.svg'
import './hero.css'

const Hero = () => {
  return (
    <Section>
      <div className="container flex flex-col lg:flex-row justify-center items-center">
        <div className='hero-image'>
          <img src={heroSvg} alt="Hero" className=''/>
        </div>
        <div className="hero-content flex flex-col items-center lg:items-start">
          <div className='accent-heading text-7xl lg:text-8xl'>Vertex</div>
          <div className='hero-title flex flex-col md:flex-row text-center'>
            <span className='text-primary text-bold text-base md:text-xl lg:text-2xl'>
                Find what you're missing
            </span>
            <span className='text-secondary text-bold text-base md:text-xl lg:text-2xl'>
                Master what matters
            </span>
          </div>
          <div className="hero-body-text text-center lg:text-left text-xs md:text-base">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ea velit
            commodi mollitia cumque ipsam culpa e!
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