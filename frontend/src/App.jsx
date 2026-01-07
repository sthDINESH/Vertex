import { useState } from 'react'
import { Workflow } from 'lucide-react'
import ConceptInputForm from './components/ConceptInputForm'
import MapView from './components/TreeView'
import LoadingSpinner from './components/LoadingSpinner'
import conceptMapService from './services/conceptMap'
import logger from './utils/logger'

const App = () => {
  const [map, setMap] = useState('')
  const [loading, setLoading] = useState({ state:false })

  const generateMap = async (conceptObj) => {
    setLoading({ state: true, type: 'map' })
    logger.info('Fetching concept map for:', conceptObj)
    const result = await conceptMapService.getMap(conceptObj)
    if(result.success){
      logger.info('Concept map:', result.map)
      setMap(result.map)
    } else {
      logger.error('Failed to generate map for:', conceptObj)
    }
    setLoading({ state:false })
  }

  const handleNewConcept = () => {
    setMap('')
  }

  return (
    <>
      <Workflow color='green'/>
      {!(map || loading.state) && <ConceptInputForm onGenerate={generateMap}/>}
      <LoadingSpinner loading={loading} />
      { !loading.state && map && <MapView map={map} onRestart={handleNewConcept} />}
    </>
  )
}

export default App
