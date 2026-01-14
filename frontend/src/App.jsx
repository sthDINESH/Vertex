import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Canvas from './components/Canvas'
import UserInteraction from './sections/UserInteraction'

const App = () => {

  return (
    <>
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
