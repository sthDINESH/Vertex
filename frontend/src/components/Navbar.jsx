import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {

  useGSAP(() => {
    gsap.from('nav',{
      yPercent: -100,
      duration:1,
      ease:'power2.out'
    })

  },{ dependencies:[] })

  return (
    <nav className="fixed top-0 left-0 z-10 flex justify-center w-full bg-linear-to-b to-white/10 backdrop-blur">
      <div className="container w-full">
        <div className="flex items-center py-2 border-b-2 border-white">
          <div className="nav-brand-container">
            <Link to='/' className="accent-text text-white text-xl md:text-2xl lg:text-3xl hover:opacity-80 transition">
              Vertex
            </Link>
          </div>
          <div className="nav-link-container ml-auto">
            <ul className='flex gap-3'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/accounts/login'>Login</Link>
              </li>
              <li>
                <Link to='/accounts/register'>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar