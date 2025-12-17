import { useState } from 'react'
import { Workflow } from 'lucide-react'
import ConceptInputForm from './components/ConceptInputForm'
import MapView from './components/MapView'
import conceptMapService from './services/conceptMap'

const App = () => {
  const [map, setMap] = useState('')

  const generateMap = async (conceptObj) => {
    console.log('Fetching map for:', conceptObj)
    const map = await conceptMapService.getMap()
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
      {map && <MapView map={map} onRestart={handleNewConcept} />}
    </>
  )
}

export default App
