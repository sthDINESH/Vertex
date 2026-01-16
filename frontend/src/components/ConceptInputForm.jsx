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
      <div className="form-content px-3 sm:px-4 md:px-6 pt-8 md:pt-14 pb-18 relative">
        <FormGroup>
          <FormField>
          What concept do you want to explore?
            <input className='h-16'
              {...concept.props}
              placeholder='eg. Calculus, State Management in React'
              required
            />
            <span className='self-end italic'>{`${concept.props.value.length}/${INPUT_MAX_LENGTH}`}</span>
          </FormField>
        </FormGroup>
        <FormGroup className='grid md:grid-cols-2 gap-2'>
          <FormField>
            Subject(optional)
            <input
              {...subject.props}
              placeholder='eg. Mathematics, Software'
            />
          </FormField>
          <FormField>
          Your Level(optional)
            <select name='level' {...level.props}>
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
        <button type='button' className='btn btn-secondary flex justify-center items-center w-10' onClick={() => clearAll()}>
          <RotateCcwSquare/>
        </button>
        <button type='submit' className='btn btn-primary w-80'>Generate Dependency Map</button>
      </div>
    </form>
  )
}

export default ConceptInputForm