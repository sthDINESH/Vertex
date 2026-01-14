import Section from '../components/Section'
import UserInterface from '../components/UserInterface'

import './userInteraction.css'

const UserInteraction = () => {
  return (
    <Section>
      {/* <svg viewBox="0 0 1 1" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="lg_ui_mask">
            <path d="M.733.95a.05.05 0 0 1-.05.05H.116a.05.05 0 0 1-.05-.05V.833A.033.033 0 0 0 .033.8.033.033 0 0 1 0 .767V.05A.05.05 0 0 1 .05 0h.2A.05.05 0 0 1 .3.05C.3.077.322.1.35.1h.6A.05.05 0 0 1 1 .15v.6A.05.05 0 0 1 .95.8H.783a.05.05 0 0 0-.05.05v.1Z"/>
          </clipPath>
        </defs>
      </svg> */}
      <div className="container">
        <div className='ui-container'>
          <UserInterface />
        </div>
      </div>
    </Section>
  )
}

export default UserInteraction