import { createContext, useState, useRef } from 'react'
import { XIcon } from 'lucide-react'

const ToastContext = createContext()

export const ToastContextProvider = (props) => {
  const [ toasts, setToasts ] = useState([])
  const idCount = useRef(0)

  const show = (message, type, duration=5000) => {
    const id = ++idCount.current

    setToasts([{ id, message, type }, ...toasts])
    setTimeout(() => dismiss(id), duration)
  }

  const dismiss = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ show, dismiss }}>
      <div className='toast-container flex flex-col gap-1'>
        {toasts.map(toast => (
          <div key={toast.id} className='toast p-4 flex items-center border'>
            <div>
              { toast.message }
            </div>
            <button onClick={() => {dismiss(toast.id)}}>
              <XIcon/>
            </button>
          </div>
        ))}
      </div>
      { props.children }
    </ToastContext.Provider>
  )
}

export default ToastContext