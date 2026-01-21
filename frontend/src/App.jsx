import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Canvas from './components/Canvas'
import Footer from './sections/Footer'

import Home from './views/Home'
import UnderConstruction from './sections/UnderConstruction'

const App = () => {

  return (
    <>
      <div className="background fixed top-0 left-0 w-full h-screen z-[-2]"></div>
      <Canvas />
      <Navbar/>
      <Routes>
        <Route path='/accounts/register' element={<UnderConstruction/>}/>
        <Route path='/accounts/login' element={<UnderConstruction/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <footer className='mt-12'>
        <Footer />
      </footer>
    </>
  )
}

export default App
