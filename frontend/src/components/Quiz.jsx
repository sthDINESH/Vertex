import { useRef, useState } from 'react'
import logger from '../utils/logger'
import { Brain } from 'lucide-react'
import { Stepper, Step } from './Stepper'

/**
 * Quiz - Interactive quiz/assessment component with step-by-step questions
 * Manages quiz state, tracks correct/incorrect answers, and displays results in stepper indicators
 * @param {Object} quiz - Quiz data object
 * @param {Object} quiz.node - Node information with name and description
 * @param {string} quiz.node.name - Title of the quiz
 * @param {string} quiz.node.description - Description of the quiz
 * @param {Array} quiz.questions - Array of question objects
 * @param {string} quiz.questions[].question - Question text
 * @param {Array} quiz.questions[].options - Array of answer options
 * @param {number} quiz.questions[].correct - Index of the correct option
 * @param {Function} onFinish - Callback fired when all questions are answered
 * @returns {JSX.Element} Quiz UI with stepper and answer options
 */
const Quiz = ({ quiz, onFinish }) => {
  // ref to access Stepper nextStep method
  const stepperRef = useRef()
  // hold results for answered questions in state
  const [isCorrectAnswer, setIsCorrectAnswer] = useState({})
  const [disableNext, setDisableNext] = useState(true)
  // disable quiz options when next is enabled
  const disableOptions = !disableNext

  /**
   * checkAnswer - Validates user's answer and advances to next question
   * @param {number} questionIndex - Index of the current question
   * @param {number} optionIndex - Index of the selected option
   */
  const checkAnswer = (questionIndex, optionIndex) => {
    const correctOption = quiz.questions[questionIndex].correct
    const isCorrect = optionIndex === correctOption
    logger.info(`${isCorrect?'Quiz: Correct answer!':`Quiz: Incorrect answer. Correct option: ${correctOption}`}`)
    setIsCorrectAnswer({ ...isCorrectAnswer, [questionIndex]: isCorrect })
    setDisableNext(false)
  }

  return (quiz &&
    <div className='quiz-view'>
      <div className='quiz-view-content p-3 sm:p-4 md:pd-6'>
        <div className='header-content flex flex-col gap-4'>
          <div className='pt-10 pb-4 flex items-start gap-3 min-h-43.75'>
            <Brain size={60} className='text-primary'/>
            <div className='header-text flex flex-col gap-1'>
              <h2>Assessment: <span className='font-semibold text-secondary'>{quiz.node.name}</span></h2>
              <p className='text-sm md:text-base text-gray-300'>
                {quiz.node.description}
              </p>
            </div>
          </div>
          <Stepper ref={stepperRef} onComplete={onFinish}>
            {quiz.questions.map((question, questionIndex) => (
              <Step key={questionIndex} className='quiz-content flex flex-col gap-6' isCorrect={isCorrectAnswer?.[questionIndex]}>
                <div className="quiz-question flex items-center">
                  <p className='text-xl font-semibold'>{question.question}</p>
                </div>
                <div className="quiz-options flex flex-wrap justify-between gap-3">
                  {question.options.map((option, optionIndex) => (
                    <button className='btn btn-options grow text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                      key={optionIndex}
                      onClick={() => checkAnswer(questionIndex, optionIndex)}
                      disabled={disableOptions}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  className='btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400'
                  disabled={disableNext}
                  onClick={() => {
                    setDisableNext(true)
                    stepperRef.current.nextStep()
                  }}
                >
                  Next
                </button>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>

    </div>

  )
}

export default Quiz