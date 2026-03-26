import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, vi } from 'vitest'

vi.mock('../services/server', () => ({
  default: {
    getMap: vi.fn(),
  }
}))

import { Provider } from 'react-redux'
import store from '../store'
import ConceptInputForm from '../components/ConceptInputForm'
import serverService from '../services/server'

describe('< ConceptInputForm />', () => {
  let user
  let conceptInput
  let generateConceptMapButton

  beforeEach(() => {
    vi.clearAllMocks()
    serverService.getMap.mockResolvedValue({ success: true, data: {} })
    user = userEvent.setup()

    render(<Provider store={store}><ConceptInputForm /></Provider>)
    conceptInput = screen.getByLabelText(/What concept do you want to explore today?/)
    generateConceptMapButton = screen.getByText('Generate Concept Map')
  })

  test('submit fails without concept input', async () => {
    // try to submit form without concept input
    await user.click(generateConceptMapButton)

    expect(serverService.getMap).not.toHaveBeenCalled()
  })

  test('submits with provided concept input', async () => {
    // provide the required concept-input
    await user.type(conceptInput, 'test concept')

    // submit the form
    await user.click(generateConceptMapButton)

    expect(serverService.getMap).toHaveBeenCalledTimes(1)
    expect(serverService.getMap).toHaveBeenCalledWith({
      concept: 'test concept',
      subject: '',
      level: ''
    })
  })

  test('truncates concept input to 100 chars', async () => {
    const longString = (new Array(101).fill('a')).join('')

    // try to enter a long string that exceeds character length
    await user.type(conceptInput, longString)

    expect(conceptInput.value).toHaveLength(100)
  })

  test('subject is optional and submits with default value if not provided', async () => {
    const subject = screen.getByLabelText(/Subject/)

    // input required concept field
    await user.type(conceptInput,'test concept')

    // submit without subject
    expect(subject).toHaveValue('')
    await user.click(generateConceptMapButton)

    expect(serverService.getMap).toHaveBeenCalledTimes(1)
    expect(serverService.getMap).toHaveBeenCalledWith({
      concept: 'test concept',
      subject: '',
      level: ''
    })
  })

  test('submits with subject when provided', async () => {
    const subject = screen.getByLabelText(/Subject/)

    // input required concept field
    await user.type(conceptInput,'test concept')

    // submit with subject
    await user.type(subject,'test subject')
    await user.click(generateConceptMapButton)

    expect(serverService.getMap).toHaveBeenCalledTimes(1)
    expect(serverService.getMap).toHaveBeenCalledWith({
      concept: 'test concept',
      subject: 'test subject',
      level: ''
    })
  })

  test('level is optional and submits with default value if not provided', async () => {
    const level = screen.getByLabelText(/Your Level/)

    // input required concept field
    await user.type(conceptInput,'test concept')

    // submit without subject
    expect(level).toHaveValue('')
    await user.click(generateConceptMapButton)

    expect(serverService.getMap).toHaveBeenCalledTimes(1)
    expect(serverService.getMap).toHaveBeenCalledWith({
      concept: 'test concept',
      subject: '',
      level: ''
    })
  })

  test('submits with level when provided', async () => {
    const level = screen.getByLabelText(/Your Level/)

    // input required concept field
    await user.type(conceptInput, 'test concept')

    // submit with level
    await user.selectOptions(level, 'undergraduate')
    await user.click(generateConceptMapButton)

    expect(serverService.getMap).toHaveBeenCalledTimes(1)
    expect(serverService.getMap).toHaveBeenCalledWith({
      concept: 'test concept',
      subject: '',
      level: 'undergraduate'
    })
  })

  test('clears input fields on reset', async () => {
    const level = screen.getByLabelText(/Your Level/)
    const subject = screen.getByLabelText(/Subject/)

    const resetButton = screen.getByRole('button', { name: /reset/i })

    await user.type(conceptInput, 'test concept')
    await user.type(subject,'test subject')
    await user.selectOptions(level, 'undergraduate')

    expect(conceptInput).toHaveValue('test concept')
    expect(subject).toHaveValue('test subject')
    expect(level).toHaveValue('undergraduate')

    // reset the form
    await user.click(resetButton)

    expect(conceptInput).toHaveValue('')
    expect(subject).toHaveValue('')
    expect(level).toHaveValue('')
  })
})

