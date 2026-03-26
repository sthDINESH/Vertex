// import { useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import ConceptInputForm from '../components/ConceptInputForm'
import TreeView from '../components/TreeView'
import Quiz from '../components/Quiz'

const UserInterface = () => {
  // const [map, setMap] = useState('')
  const map = useSelector(state => state.map)
  const quiz = useSelector(state => state.currentQuiz)
  // const [loading, setLoading] = useState({ state:false })
  const loading = { state:false }

  return (
    <>
      <LoadingSpinner loading={loading} />
      {!(loading.state || map || quiz) && <ConceptInputForm />}
      {!(loading.state || quiz) && map && <TreeView />}
      {!loading.state && quiz && <Quiz />}
    </>
  )
}

export default UserInterface