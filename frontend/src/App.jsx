import { useState } from 'react'
import { Workflow } from 'lucide-react'
import ConceptInputForm from './components/ConceptInputForm'
import MapView from './components/TreeView'
import conceptMapService from './services/conceptMap'

const App = () => {
  const [map, setMap] = useState('')
  const [loading, setLoading] = useState(false)

  const generateMap = async (conceptObj) => {
    console.log('Fetching map for:', conceptObj)
    setLoading(true)
    const map = await conceptMapService.getMap()
    setLoading(false)
    console.log('Map object:', map)
    setMap(map)
  }

  const handleNewConcept = () => {
    setMap('')
  }

  return (
    <>
      <Workflow color='green'/>
      {!map && <ConceptInputForm onGenerate={generateMap}/>}
      {loading && <div>Loading...</div>}
      {map && <MapView map={map} onRestart={handleNewConcept} />}
    </>
  )
}

export default App
