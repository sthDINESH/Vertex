const FormField = ({ children, className }) => {
  return <label className={`flex flex-col py-1 ${className || ''}`}>
    { children }
  </label>
}

export default FormField
