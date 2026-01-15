import Section from '../components/Section'
import UserInterface from '../components/UserInterface'

import '../assets/css/userInteraction.css'

const UserInteraction = () => {
  return (
    <Section>
      <div className="container">
        <div className='ui-container'>
          <UserInterface />
        </div>
      </div>
    </Section>
  )
}

export default UserInteraction