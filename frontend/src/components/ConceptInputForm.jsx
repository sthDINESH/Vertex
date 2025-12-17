import { useControlledInput } from '../hooks/Form'
import FormField from './FormField'
import FormGroup from './FormGroup'

const ConceptInputForm = () => {
  const INPUT_MAX_LENGTH = 100

  const concept = useControlledInput('text', INPUT_MAX_LENGTH)
  const subject = useControlledInput('text')
  const level = useControlledInput('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Generating map for:', concept.value, subject, level)
  }

  const clearAll = () => {
    concept.clear()
    subject.clear()
    level.clear()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
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
      <FormGroup className='grid md:grid-cols-2'>
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
      <button type='submit' className='btn btn-primary'>Generate Dependency Map</button>
      <button type='button' onClick={() => clearAll()}>Clear</button>
    </form>
  )
}

export default ConceptInputForm