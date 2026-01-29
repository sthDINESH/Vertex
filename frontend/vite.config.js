import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    // Use jsdom as the test environment (simulates DOM API like a real browser)
    // Allows testing React components with DOM queries and interactions
    environment: 'jsdom',

    // Makes test globals available without explicit imports (describe, test, expect, etc.)
    // Reduces boilerplate in test files - can write tests without "import { describe, test, expect }"
    globals: true,

    // Runs setup file before all tests (good for test utilities, mocks, or global test configuration)
    // Helpful for configuring testing library, setting up mocks, or initializing test helpers
    setupFiles: './testSetup.js'
  }
})
