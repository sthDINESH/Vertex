import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// call cleanup after each test to reset jsdom
afterEach(() => cleanup())