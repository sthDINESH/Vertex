import { createSlice } from '@reduxjs/toolkit'

const currentNodeSlice = createSlice({
  name: 'currentNode',
  initialState: '',
  reducers: {
    setCurrentNode(state, action){
      return action.payload
    },
    clearCurrentNode(){
      return ''
    },
  }
})

// Export auto-generated action creators
export const { setCurrentNode, clearCurrentNode } = currentNodeSlice.actions

export default currentNodeSlice.reducer