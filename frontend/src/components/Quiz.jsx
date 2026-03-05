import { useState } from 'react'
import { useToast } from '../hooks/Toast'
import logger from '../utils/logger'

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

  return (
    <>
      <h2>{quiz.node.name}</h2>
      <p>{quiz.node.description}</p>
      <p>Question {currentQuestionIdx + 1} of {quiz.questions.length} </p>
      <h2>{quiz.questions[currentQuestionIdx].question}</h2>
      {quiz.questions[currentQuestionIdx].options.map((option, idx) => (
        <button className='btn' key={idx} onClick={() => checkAnswer(idx)}>{option}</button>
      ))}
    </>

  )
}

export default Quiz