import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import ConceptInputForm from '../components/ConceptInputForm'
import TreeView from '../components/TreeView'
import Quiz from '../components/Quiz'

const UserInterface = () => {
  const mapAvailable = useSelector(state => state.map.status === 'success')
  const quizAvailable = useSelector(state => state.currentQuiz.status === 'success')

  // Check if loading spinner should be rendered
  const mapLoading = useSelector(state => state.map.status === 'loading' )
  const quizLoading = useSelector(state => state.currentQuiz.status === 'loading')
  const showLoading = {
    state: mapLoading || quizLoading,
    type: '',
  }
  if(mapLoading) showLoading.type = 'map'
  if(quizLoading) showLoading.type = 'quiz'

  return (
    <>
      <LoadingSpinner loading={showLoading} />
      {!(showLoading.state || mapAvailable || quizAvailable) && <ConceptInputForm />}
      {!(showLoading.state || quizAvailable) && mapAvailable && <TreeView />}
      {!showLoading.state && quizAvailable && <Quiz />}
    </>
  )
}

export default UserInterface