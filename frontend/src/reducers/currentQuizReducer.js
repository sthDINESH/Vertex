import { createSlice } from '@reduxjs/toolkit'
import serverService from '../services/server'
import logger from '../utils/logger'
import toast from '../services/toast'

const currentQuizSlice = createSlice({
  name: 'currentQuiz',
  initialState: {
    status: '',
    data: '',
  },
  reducers: {
    setQuiz(state, action){
      state.status = 'success'
      state.data = action.payload
    },
    setQuizLoading(state){
      state.status = 'loading'
    },
    setQuizError(state, action){
      state.status = 'error'
      state.data = action.payload
    },
    clearCurrentQuiz(state){
      state.status = ''
      state.data = ''
    },
  }
})

// Export auto-generated action creators
export const { clearCurrentQuiz } = currentQuizSlice.actions

const { setQuiz, setQuizLoading, setQuizError } = currentQuizSlice.actions

// Export redux thunk to fetch and set the quiz
export const generateQuiz = () => {
  return async (dispatch, getState) => {
    const node = getState().currentNode
    dispatch(setQuizLoading())
    logger.info('Fetching quiz for:', node)

    const result = await serverService.generateQuiz({ ...node, numQuestions: 5 })
    if(result.success){
      logger.info('Quiz fetched:', result.quiz)
      dispatch(setQuiz(result.quiz ))
    } else {
      logger.error('Failed to generate quiz for:', node)
      dispatch(setQuizError(result.error))
      toast.show(result.error, 'error')
    }
  }
}

export default currentQuizSlice.reducer