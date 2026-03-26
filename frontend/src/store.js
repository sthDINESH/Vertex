import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './reducers/mapReducer'
import currentNodeReducer from './reducers/currentNode'
import currentQuizReducer from './reducers/currentQuizReducer'

const store = configureStore({
  reducer:{
    map: mapReducer,
    currentNode: currentNodeReducer,
    currentQuiz: currentQuizReducer,
  }
})

export default store