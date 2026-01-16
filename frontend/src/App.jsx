import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Canvas from './components/Canvas'
import UserInteraction from './sections/UserInteraction'

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
      </main>
    </>
  )
}

export default App
