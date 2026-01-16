import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="footer flex justify-center bg-linear-to-b from-white/10 backdrop-blur">
      <div className="container">
        <div className="footer-content pt-16 pb-4 flex justify-end gap-1">
          <div className='w-1/2 flex flex-col gap-6'>
            <div className="flex flex-col gap-2">
              <div className="accent-text text-3xl">Vertex</div>
              <div>
                <div className='mb-2'>Ever felt lost trying to learn something new?</div>
                Vertex uses AI to identify knowledge gaps and generate personalized learning plans,
                so you can master concepts efficiently and in the right order.
              </div>
            </div>
            <div className="socials flex md:items-end gap-8">
              <FaInstagram size={22} className="text-cyan-500 hover:text-cyan-400" />
              <FaTwitter size={22} className="text-cyan-500 hover:text-cyan-400" />
              <FaFacebook size={22} className="text-cyan-500 hover:text-cyan-400" />
              <FaYoutube size={22} className="text-cyan-500 hover:text-cyan-400" />
            </div>
          </div>
          <div className='links w-1/2 pt-8 pb-6 flex flex-col items-end justify-between'>
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
    </section>
  )
}

export default Footer