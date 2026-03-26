import { useSelector } from 'react-redux'
import Hero from '../sections/Hero'
import UserInteraction from '../sections/UserInteraction'
import Features from '../sections/Features'

const Home = () => {
  const mapAvailable = useSelector(state => state.map.status === 'success')
  const quizAvailable = useSelector(state => state.currentQuiz.status === 'success')

  const showFeaturesSection = !(mapAvailable || quizAvailable)
  return (
    <>
      <header>
        <Hero/>
      </header>
      <main>
        <UserInteraction />
        {showFeaturesSection && <Features />}
      </main>
    </>
  )
}

export default Home