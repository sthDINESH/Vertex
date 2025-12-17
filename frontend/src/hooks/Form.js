import { useState } from 'react'


export const useControlledInput = (type, maxLength) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    if(maxLength && event.target.value.length <= maxLength){
      setValue(event.target.value)
    }
  }

  const clear = () => {
    setValue('')
  }

  return {
    props: {
      type,
      value,
      onChange
    },
    clear
  }
}