import { useState } from 'react'
import { useToast } from '../hooks/Toast'
import ConceptInputForm from '../components/ConceptInputForm'
import LoadingSpinner from '../components/LoadingSpinner'
import conceptMapService from '../services/conceptMap'
import TreeView from '../components/TreeView'
import logger from '../utils/logger'

const UserInterface = () => {
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
      {!(map || loading.state) && <ConceptInputForm onGenerate={generateMap}/>}
      <LoadingSpinner loading={loading} />
      { !loading.state && map && <TreeView map={map} onRestart={handleNewConcept} />}
    </>
  )
}

export default UserInterface