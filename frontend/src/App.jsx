import { useState } from 'react'
import { Workflow } from 'lucide-react'
import ConceptInputForm from './components/ConceptInputForm'
import MapView from './components/TreeView'
import LoadingSpinner from './components/LoadingSpinner'
import conceptMapService from './services/conceptMap'
import { useToast } from './hooks/Toast'
import logger from './utils/logger'
import Section from './components/Section'

import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Canvas from './components/Canvas'

const App = () => {
  const [map, setMap] = useState('')
  const [loading, setLoading] = useState({ state:false })

  const toast = useToast()

  const generateMap = async (conceptObj) => {
    setLoading({ state: true, type: 'map' })
    logger.info('Fetching concept map for:', conceptObj)

    const result = await conceptMapService.getMap(conceptObj)
    if(result.success){
      logger.info('Concept map:', result.map)
      setMap(result.map)
    } else {
      logger.error('Failed to generate map for:', conceptObj)
      toast.show(result.error, 'error')
    }
    setLoading({ state:false })
  }

  const handleNewConcept = () => {
    setMap('')
  }

  return (
    <>
      <Canvas />
      <Navbar/>
      <Hero/>
      <Section>
        <div className="container">
          {!(map || loading.state) && <ConceptInputForm onGenerate={generateMap}/>}
          <LoadingSpinner loading={loading} />
        </div>
      </Section>
      { !loading.state && map && <MapView map={map} onRestart={handleNewConcept} />}
    </>
  )
}

export default App
