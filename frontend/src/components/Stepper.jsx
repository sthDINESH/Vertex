import { Children, useState, useImperativeHandle } from 'react'

/**
 * StepConnector - Renders a visual connector line between step circles
 * @param {boolean} isCompleted - Whether the step before this connector is completed
 * @returns {JSX.Element} A horizontal line styled based on completion status
 */
const StepConnector = ({ isCompleted }) => {
  return (
    <div className={`flex-1 h-1 rounded ${isCompleted ? 'bg-secondary' : 'bg-gray-300'}`}></div>
  )
}

/**
 * StepCircle - Renders a single step indicator circle with status
 * @param {number} step - The step index
 * @param {number} currentStep - The current active step index
 * @param {boolean|undefined} isCorrect - Answer correctness (true/false/undefined)
 * @returns {JSX.Element} A circular step indicator with checkmark, cross, dot, or number
 */
const StepCircle = ({ step, currentStep, isCorrect }) => {
  const isCompleted = step < currentStep
  const isCurrent = step === currentStep

  return (
    <div className={`shrink-0 w-8 h-8 rounded-full grid place-items-center font-semibold text-sm ${
      isCompleted
        ? isCorrect === false
          ? 'bg-red-500 text-white'
          : 'bg-secondary text-white'
        : isCurrent
          ? 'bg-secondary text-white border-2 border-gray-300'
          : 'bg-white border-2 border-gray-300 text-gray-600'
    }`}>
      {isCompleted ? (
        isCorrect === false ? (
          <span>✗</span>
        ) : (
          <span>✓</span>
        )
      ) : isCurrent ? (
        <span className="w-2 h-2 bg-white rounded-full"></span>
      ) : (
        <span>{step + 1}</span>
      )}
    </div>
  )
}

/**
 * Step - Wrapper component for step content
 * @param {React.ReactNode} children - The content to display for this step
 * @param {string} className - Additional CSS classes for styling
 * @param {boolean|undefined} isCorrect - Answer correctness (true/false/undefined)
 * @returns {JSX.Element} A div container for step content
 */
const Step = ({ children, className }) => <div className={`step ${className}`}>{children}</div>


/**
 * Stepper - Main stepper component that manages multi-step workflows
 * Renders step indicators with connectors and displays active step content
 * @param {React.ReactNode} children - Array of Step components to render
 * @param {React.Ref} ref - Forwarded ref to access nextStep method
 * @param {Function} onComplete - Callback fired when final step is completed
 * @returns {JSX.Element} Complete stepper UI with indicators and content area
 */
const Stepper = ({ children, ref, onComplete = () => {} }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = Children.toArray(children)
  const totalSteps = steps.length

  const nextStep = () => setCurrentStep((currentStep < totalSteps - 1) ? currentStep + 1 : onComplete())

  useImperativeHandle(ref, () => {
    return { nextStep }
  })

  return (
    <div className="outer-wrapper">
      <div className="step-indicator-wrapper flex items-center justify-center my-6 gap-0">
        {steps.map((step, index) => {
          const isCorrect = step.props.isCorrect
          const isLastStep = index >= totalSteps - 1
          return (
            <div key={index} className={`flex items-center ${isLastStep?'':'flex-1'}`}>
              <StepCircle step={index} currentStep={currentStep} isCorrect={isCorrect} />
              {!isLastStep && <StepConnector isCompleted={index < currentStep} />}
            </div>
          )
        })}
      </div>
      <div className="content-wrapper">
        {steps[currentStep]}
      </div>
    </div>
  )
}

export { Stepper, Step }