import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Canvas from './components/Canvas'
import UserInteraction from './sections/UserInteraction'
import Features from './sections/Features'
import Footer from './sections/Footer'


const App = () => {

  return (
    <>
      <div className="background fixed top-0 left-0 w-full h-screen z-[-2]"></div>
      <Canvas />
      <Navbar/>
      <header>
        <Hero/>
      </header>
      <main>
        <UserInteraction />
        <Features />
      </main>
      <footer className='mt-12'>
        <Footer />
      </footer>
    </>
  )
}

export default App
