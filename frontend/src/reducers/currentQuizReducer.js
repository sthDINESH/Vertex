import { createSlice } from '@reduxjs/toolkit'
import serverService from '../services/server'
import logger from '../utils/logger'
import toast from '../services/toast'

const currentQuizSlice = createSlice({
  name: 'currentQuiz',
  initialState: '',
  reducers: {
    setQuiz(state, action){
      return action.payload
    },
    clearCurrentQuiz(){
      return ''
    },
  }
})

// Export auto-generated action creators
export const { clearCurrentQuiz } = currentQuizSlice.actions

const { setQuiz } = currentQuizSlice.actions

// Export redux thunk to fetch and set the quiz
export const generateQuiz = () => {
  return async (dispatch, getState) => {
    const node = getState().currentNode
    // setLoading({ state: true, type: 'quiz' })
    logger.info('Fetching quiz for:', node)

    const result = await serverService.generateQuiz({ ...node, numQuestions: 5 })
    if(result.success){
      logger.info('Quiz fetched:', result.quiz)
      dispatch(setQuiz(result.quiz ))
    } else {
      logger.error('Failed to generate quiz for:', node)
      toast.show(result.error, 'error')
    }
    // setLoading({ state:false })

  }
}

export default currentQuizSlice.reducer