import Hero from '../sections/Hero'
import UserInteraction from '../sections/UserInteraction'
import Features from '../sections/Features'

const Home = () => {
  return (
    <>
      <header>
        <Hero/>
      </header>
      <main>
        <UserInteraction />
        <Features />
      </main>
    </>
  )
}

export default Home