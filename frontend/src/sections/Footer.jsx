import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import Section from '../components/Section'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mt-12'>
      <Section className="footer bg-linear-to-b from-white/10 backdrop-blur">
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