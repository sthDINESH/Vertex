import { RotateCcwSquare } from 'lucide-react'
import { useControlledInput } from '../hooks/Form'
import FormField from './FormField'
import FormGroup from './FormGroup'

const ConceptInputForm = ({ onGenerate }) => {
  const INPUT_MAX_LENGTH = 100

  const concept = useControlledInput('text', INPUT_MAX_LENGTH)
  const subject = useControlledInput('text')
  const level = useControlledInput('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    onGenerate({
      concept: concept.props.value,
      subject: subject.props.value,
      level: level.props.value,
    })
  }

  const clearAll = () => {
    concept.clear()
    subject.clear()
    level.clear()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full h-full relative'>

      <div className="form-content px-3 sm:px-4 md:px-6 pt-8 md:pt-14 pb-14 relative">
        <div className="heading-content mb-5">
          <h2 className="accent-text text-xl md:text-2xl font-bold text-white mb-2">
          Build Your Learning Roadmap
          </h2>
          <p className="text-sm md:text-base text-gray-300">
          Tell us what you want to learn, and we'll create a personalized path showing you exactly where to start.
          </p>
        </div>
        <FormGroup>
          <FormField htmlFor='concept-input'>
          What concept do you want to explore today?
            <input className='h-12 mt-1'
              {...concept.props}
              id='concept-input'
              placeholder='eg. Calculus, State Management in React'
              required
            />
            <span className='self-end italic text-gray-400'>{`${concept.props.value.length}/${INPUT_MAX_LENGTH}`}</span>
          </FormField>
        </FormGroup>
        <FormGroup className='grid md:grid-cols-2 gap-2'>
          <FormField htmlFor='subject'>
            Subject(optional)
            <input className='mt-1'
              {...subject.props}
              id='subject'
              placeholder='eg. Mathematics, Software'
            />
          </FormField>
          <FormField htmlFor='level'>
          Your Level(optional)
            <select name='level' {...level.props} className='mt-1' id='level'>
              <option value=''>Please choose a level</option>
              <option value='high school'>High School</option>
              <option value='undergraduate'>Undergraduate</option>
              <option value='graduate'>Graduate</option>
              <option value='post-graduate'>Post-graduate</option>
              <option value='other'>Other</option>
            </select>
          </FormField>
        </FormGroup>
      </div>
      <div className="form-controls absolute left-0 right-0 bottom-0 flex items-end justify-between">
        <button type='button' aria-label='Reset form' className='btn btn-secondary flex justify-center items-center w-10' onClick={() => clearAll()}>
          <RotateCcwSquare/>
        </button>
        <button type='submit' className='btn btn-primary w-40 md:w-80'>Generate Concept Map</button>
      </div>
    </form>
  )
}

export default ConceptInputForm