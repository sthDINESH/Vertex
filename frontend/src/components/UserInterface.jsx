import { useState } from 'react'
import { useToast } from '../hooks/Toast'
import LoadingSpinner from '../components/LoadingSpinner'
import ConceptInputForm from '../components/ConceptInputForm'
import serverService from '../services/server'
import TreeView from '../components/TreeView'
import Quiz from '../components/Quiz'
import logger from '../utils/logger'

const UserInterface = () => {
  const [map, setMap] = useState('')
  const [quiz, setQuiz] = useState()
  const [loading, setLoading] = useState({ state:false })

  const toast = useToast()

  const generateMap = async (conceptObj) => {
    setLoading({ state: true, type: 'map' })
    logger.info('Fetching concept map for:', conceptObj)

    const result = await serverService.getMap(conceptObj)
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
    setQuiz()
  }

  const generateQuiz = async (node) => {
    setLoading({ state: true, type: 'quiz' })
    logger.info('Fetching quiz for:', node)

    const result = await serverService.generateQuiz({ ...node, numQuestions: 5 })
    if(result.success){
      logger.info('Quiz fetched:', result.quiz)
      setQuiz({ node, ...result.quiz })
    } else {
      logger.error('Failed to generate quiz for:', node)
      toast.show(result.error, 'error')
    }
    setLoading({ state:false })
  }

  const endQuiz = (node, passed) => {
    logger.info('Quiz passed:', passed)
    toast.show(`Quiz ${passed ? 'passed!':'failed!'}`, passed ? 'success': 'error')
    setQuiz()
    // Add quiz results to map
    const prerequisitesWithResult = map.prerequisites.map(req => req.id===node.id ? { ...req, test_finished:true, passed: passed }: req)
    setMap({ ...map, prerequisites: prerequisitesWithResult })
  }

  const generateLearningResources = () => {
    logger.info('Generate Resources - not yet implemented!')
    toast.show('Generate resources - Not yet implemented!', 'info')
  }

  return (
    <>
      <LoadingSpinner loading={loading} />
      {!(loading.state || map || quiz) && <ConceptInputForm onGenerate={generateMap}/>}
      {!(loading.state || quiz) && map && <TreeView map={map} onRestart={handleNewConcept} onTestKnowledge={generateQuiz} onLearningPath={generateLearningResources}/>}
      {!loading.state && quiz && <Quiz quiz={quiz} onFinish={endQuiz}/>}
    </>
  )
}

export default UserInterface