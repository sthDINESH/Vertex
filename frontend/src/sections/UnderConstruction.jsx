import { useNavigate } from 'react-router-dom'
import Section from '../components/Section'

const UnderConstruction = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Section className='justify-center grow pt-10'>
      <h1 className='accent-text text-center text-xl md:text-3xl lg:text-5xl'>Oops - We're under construction!!!</h1>
      <button className='btn btn-primary w-40 md:w-80 mt-4' onClick={handleClick}>Back</button>
    </Section>
  )
}

export default UnderConstruction