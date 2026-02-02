const FormField = ({ children, className, htmlFor }) => {
  return <label className={`flex flex-col py-1 ${className || ''}`} htmlFor={htmlFor}>
    { children }
  </label>
}

export default FormField
