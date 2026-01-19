import Section from '../components/Section'
import UserInterface from '../components/UserInterface'

import '../assets/css/userInteraction.css'

const UserInteraction = () => {
  return (
    <Section className="user-interaction">
      <div className="container">
        <div className='ui-container my-12 lg:my-0'>
          <UserInterface />
        </div>
      </div>
    </Section>
  )
}

export default UserInteraction