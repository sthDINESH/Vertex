import { Children, useState, useImperativeHandle } from 'react'

const StepConnector = ({ isCompleted }) => {
  return (
    <div className={`flex-1 h-1 rounded ${isCompleted ? 'bg-secondary' : 'bg-gray-300'}`}></div>
  )
}

const StepCircle = ({ step, currentStep }) => {
  const isCompleted = step < currentStep
  const isCurrent = step === currentStep

  return (
    <div className={`shrink-0 w-8 h-8 rounded-full grid place-items-center font-semibold text-sm ${
      isCompleted
        ? 'bg-secondary text-white'
        : isCurrent
          ? 'bg-secondary text-white border-2 border-gray-300'
          : 'bg-white border-2 border-gray-300 text-gray-600'
    }`}>
      {isCompleted ? (
        <span>✓</span>
      ) : isCurrent ? (
        <span className="w-2 h-2 bg-white rounded-full"></span>
      ) : (
        <span>{step + 1}</span>
      )}
    </div>
  )
}

const Step = ({ children, className }) => <div className={`step ${className}`}>{children}</div>


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
        {steps.map((_, index) => {
          const isLastStep = index >= totalSteps - 1
          return (
            <div key={index} className={`flex items-center ${isLastStep?'':'flex-1'}`}>
              <StepCircle step={index} currentStep={currentStep} />
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