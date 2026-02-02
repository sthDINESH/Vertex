import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, vi } from 'vitest'

import TreeView from '../components/TreeView'
import { ToastContextProvider } from '../ToastContext'

describe('<Treeview />', () => {
  let user

  beforeEach(() => {
    user = userEvent.setup()
  })

  test('Start Over button calls onRestart', async () => {
    const mockStartOver = vi.fn()
    const map = generateValidMockMap()

    renderWithToastProvider(<TreeView map={map} onRestart={mockStartOver} />)

    const startOverButton = screen.getByText('Start Over')
    await user.click(startOverButton)

    expect(mockStartOver).toHaveBeenCalledTimes(1)
  })

  test('renders with custom concept name', async () => {
    const mockStartOver = vi.fn()
    const map = generateValidMockMap('test concept')

    renderWithToastProvider(<TreeView map={map} onRestart={mockStartOver} />)

    const headingContainer = await screen.findByText(/Let's validate what you know about/)

    expect(within(headingContainer).getByText('test concept')).toBeDefined()
  })
})

/*
Helper functions
*/
const renderWithToastProvider = (component) => {
  return render(
    <ToastContextProvider>
      {component}
    </ToastContextProvider>
  )
}

const generateValidMockMap = (targetConcept = 'Test Concept') => ({
  id: 1,
  target: targetConcept,
  subject: 'Test Subject',
  level: 'intermediate',
  createdAt: '2025-01-15T10:30:00Z',
  prerequisites: [
    {
      id: 1,
      name: 'Fundamentals',
      description: 'Basic concepts and foundational knowledge',
      prerequisites: [],
      level: 'foundational'
    },
    {
      id: 2,
      name: 'Core Concepts',
      description: 'Building on fundamentals with core principles',
      prerequisites: [1],
      level: 'foundational'
    },
    {
      id: 3,
      name: 'Intermediate Application',
      description: 'Applying concepts in practical scenarios',
      prerequisites: [2],
      level: 'intermediate'
    },
    {
      id: 4,
      name: 'Advanced Techniques',
      description: 'Advanced strategies and best practices',
      prerequisites: [3],
      level: 'advanced'
    },
    {
      id: 5,
      name: targetConcept,
      description: `Complete mastery of ${targetConcept}`,
      prerequisites: [4],
      level: 'advanced'
    }
  ]
})
