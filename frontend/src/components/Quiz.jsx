import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addQuizResults } from '../reducers/mapReducer'
import { clearCurrentQuiz } from '../reducers/currentQuizReducer'
import { clearCurrentNode } from '../reducers/currentNode'
import logger from '../utils/logger'
import { Brain } from 'lucide-react'
import { Stepper, Step } from './Stepper'
import toast from '../services/toast'

/**
 * Interactive quiz/assessment component with step-by-step questions
 *
 * Manages quiz state, tracks correct/incorrect answers, displays results in stepper indicators,
 * and updates Redux state with quiz results upon completion.
 *
 * @component
 * @redux {Object} quiz - Quiz data from currentQuiz slice containing questions
 * @redux {Array} quiz.questions - Array of question objects
 * @redux {string} quiz.questions[].question - Question text
 * @redux {Array} quiz.questions[].options - Array of answer options
 * @redux {number} quiz.questions[].correct - Index of the correct option
 * @redux {Object} node - Current node data from currentNode slice
 * @redux {string} node.name - Name of the concept being tested
 * @redux {string} node.description - Description of the concept being tested
 *
 * @returns {JSX.Element|null} Quiz UI with stepper, question options, and navigation buttons,
 *                             or null if quiz data is unavailable
 *
 * @state {Object} isCorrectAnswer - Tracks correctness of each answered question by index
 * @state {boolean} disableNext - Controls whether the Next button is enabled
 * @ref {Stepper} stepperRef - Reference to Stepper component for step navigation
 *
 * @fires addQuizResults - Dispatched on quiz completion with pass/fail status
 * @fires clearCurrentQuiz - Dispatched on quiz completion to clear quiz state
 * @fires clearCurrentNode - Dispatched on quiz completion to clear node selection
 */
const Quiz = () => {
  const quiz = useSelector(state => state.currentQuiz)
  const node = useSelector(state => state.currentNode)
  const dispatch = useDispatch()

  const stepperRef = useRef()

  const [isCorrectAnswer, setIsCorrectAnswer] = useState({})
  const [disableNext, setDisableNext] = useState(true)

  // disable quiz options when next is enabled
  const disableOptions = !disableNext
  // check quiz end condition
  const quizEnd = Object.keys(isCorrectAnswer).length === quiz.questions.length

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

  /**
   * handleQuizEnd - Determines if all answers are correct and calls the onFinish callback
   * Passes true if all answers are correct, false if any are incorrect
   */
  const handleQuizEnd = () => {
    const passed = !Object.values(isCorrectAnswer).some(isCorrect => !isCorrect)

    logger.info('Quiz passed:', passed)
    toast.show(`Quiz ${passed ? 'passed!':'failed!'}`, passed ? 'success': 'error')
    dispatch(addQuizResults(passed))
    dispatch(clearCurrentQuiz())
    dispatch(clearCurrentNode())
  }

  return (quiz &&
    <div className='quiz-view'>
      <div className='quiz-view-content p-3 sm:p-4 md:pd-6'>
        <div className='header-content flex flex-col gap-4'>
          <div className='pt-10 pb-4 flex items-start gap-3 min-h-43.75'>
            <Brain size={60} className='text-primary'/>
            <div className='header-text flex flex-col gap-1'>
              <h2>Assessment: <span className='text-primary'>{node.name}</span></h2>
            </div>
          </div>
          <p className='text-sm md:text-base text-gray-300'>
            Let's check your understanding on:<br/>
            <span className='text-secondary'>{node.description}</span>
          </p>
        </div>
        <div>
          <Stepper ref={stepperRef}>
            {quiz.questions.map((question, questionIndex) => (
              <Step key={questionIndex} className='quiz-content flex flex-col gap-8' isCorrect={isCorrectAnswer?.[questionIndex]}>
                <div className='flex flex-col gap-6 p-6 border border-gray-300/20 bg-black/10 backdrop-blur rounded-2xl'>
                  <div className="quiz-question flex items-center">
                    <p className='text-base md:text-lg font-bold'>{question.question}</p>
                  </div>
                  <div className="quiz-options flex flex-wrap justify-between gap-3">
                    {question.options.map((option, optionIndex) => (
                      <button className='btn btn-options grow text-sm md:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                        key={optionIndex}
                        onClick={() => checkAnswer(questionIndex, optionIndex)}
                        disabled={disableOptions}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className='btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400'
                  disabled={disableNext}
                  onClick={() => {
                    setDisableNext(true)
                    quizEnd ? handleQuizEnd() : stepperRef.current.nextStep()
                  }}
                >
                  {quizEnd ? 'Finish':'Next'}
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