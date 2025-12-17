import { useState } from 'react'


export const useControlledInput = (type, maxLength) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    const newValue = event.target.value
    if (!maxLength || newValue.length <= maxLength) {
      setValue(newValue)
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