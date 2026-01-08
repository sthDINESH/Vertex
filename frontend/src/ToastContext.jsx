import { createContext, useState, useRef } from 'react'
import { XIcon, CheckCircleIcon, AlertCircleIcon, InfoIcon, XCircleIcon, XSquareIcon } from 'lucide-react'

import './toast.css'

const ToastContext = createContext()

const getToastConfig = (type) => {
  const configs = {
    success: {
      icon: CheckCircleIcon,
      color: 'bg-green-50',
      barColor: 'before:bg-green-400',
      textColor: 'text-green-400'
    },
    error: {
      icon: XCircleIcon,
      color: 'bg-red-50',
      barColor: 'before:bg-red-400',
      textColor: 'text-red-400'
    },
    warning: {
      icon: AlertCircleIcon,
      color: 'bg-amber-50',
      barColor: 'before:bg-amber-400',
      textColor: 'text-amber-400'
    },
    info: {
      icon: InfoIcon,
      color: 'bg-blue-50',
      barColor: 'before:bg-blue-400',
      textColor: 'text-blue-400'
    }
  }
  return configs[type] || configs.info
}

export const ToastContextProvider = (props) => {
  const [ toasts, setToasts ] = useState([])
  const idCounterRef = useRef(0)

  const show = (message, type = 'info', duration = 3000) => {
    const id = ++idCounterRef.current
    setToasts([{ id, message, type }, ...toasts])
    setTimeout(() => dismiss(id), duration)
  }

  const dismiss = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ show, dismiss }}>
      <div className="toast-container">
        {toasts.map(toast => {
          const { icon: Icon, barColor, textColor } = getToastConfig(toast.type)
          return (
            <div key={toast.id} className={`toast ${barColor}`}>
              <div className='flex items-center gap-3'>
                <Icon className={`w-16 h-16 ${textColor}`} />
                <span>{toast.message}</span>
              </div>
              <div className='toast-button'>
                <button onClick={() => dismiss(toast.id)} className={textColor}>
                  <XSquareIcon className={`w-6 h-6 ${textColor}`} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      {props.children}
    </ToastContext.Provider>
  )
}

export default ToastContext