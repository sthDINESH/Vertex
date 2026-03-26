import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe } from 'vitest'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import mapReducer from '../reducers/mapReducer'

import TreeView from '../components/TreeView'

describe('<Treeview />', () => {
  let user, testStore

  beforeEach(() => {
    user = userEvent.setup()
    testStore = configureStore({
      preloadedState: {
        map: {
          status: 'success',
          data: generateValidMockMap('test concept')
        }
      },
      reducer: {
        map: mapReducer,
      }
    })
  })

  test('Start Over button clears map', async () => {
    render(<Provider store={testStore}><TreeView /></Provider>)

    const startOverButton = screen.getByRole('button',{ name:/start over/i })
    await user.click(startOverButton)

    expect(testStore.getState().map.data).toBe('')
    expect(testStore.getState().map.status).toBe('')
  })

  test('renders with custom concept name', async () => {
    render(<Provider store={testStore} ><TreeView /></Provider>)

    const headingContainer = await screen.findByText(/Let's validate what you know about/)

    expect(within(headingContainer).getByText('test concept')).toBeDefined()
  })
})

/*
Helper functions
*/
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
