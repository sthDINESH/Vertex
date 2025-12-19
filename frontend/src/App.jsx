import { useState } from 'react'
import { Workflow } from 'lucide-react'
import ConceptInputForm from './components/ConceptInputForm'
import MapView from './components/TreeView'
import LoadingSpinner from './components/LoadingSpinner'
import conceptMapService from './services/conceptMap'

const App = () => {
  const [map, setMap] = useState('')
  const [loading, setLoading] = useState({ state:false })

  const generateMap = async (conceptObj) => {
    console.log('Fetching map for:', conceptObj)
    setLoading({ state: true, type: 'map' })
    const map = await conceptMapService.getMap()
    setLoading({ state:false })
    console.log('Map object:', map)
    setMap(map)
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
