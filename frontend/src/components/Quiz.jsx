import { useState } from 'react'
import { useToast } from '../hooks/Toast'
import logger from '../utils/logger'
import { Brain } from 'lucide-react'

const Quiz = ({ quiz, onFinish }) => {
  // track index of question to render
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)

  const toast = useToast()

  const nextQuestion = () => {
    setCurrentQuestionIdx(currentQuestionIdx < (quiz.questions.length - 1) ? currentQuestionIdx + 1 : onFinish())
  }

  const checkAnswer = (answer) => {
    logger.info('Quiz: Checks not yet implemented!')
    toast.show(`Quiz: User answered ${answer} Checks not yet implemented!`)
    nextQuestion()
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
          <p>Question {currentQuestionIdx + 1} of {quiz.questions.length} </p>
          <div className='quiz-content flex flex-col gap-6'>
            <div className="quiz-question flex items-center">
              <p className='text-xl font-semibold'>{quiz.questions[currentQuestionIdx].question}</p>
            </div>
            <div className="quiz-options flex flex-wrap justify-between gap-3">
              {quiz.questions[currentQuestionIdx].options.map((option, idx) => (
                <button className='btn btn-options grow text-base font-medium' key={idx} onClick={() => checkAnswer(idx)}>{option}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Quiz