/**
 * Toast notification service
 *
 * Provides a way to trigger toast notifications from anywhere in the application,
 * including Redux thunks and other non-React code. The service must be initialized
 * by the ToastContextProvider with the actual show/dismiss functions.
 *
 * @module services/toast
 *
 */

let toastState = {
  show: null,
  dismiss: null,
}

/**
 * Initializes the toast service with the show and dismiss functions from ToastContextProvider
 * Must be called once during app initialization
 *
 * @param {Function} showFn - Function to display a toast: (message, type, duration) => void
 * @param {Function} dismissFn - Function to dismiss a toast by ID: (id) => void
 */
export const initializeToastService = (showFn, dismissFn) => {
  toastState.show = showFn
  toastState.dismiss = dismissFn
}

/**
 * Toast notification API for use outside React components
 *
 * @typedef {Object} Toast
 * @property {Function} show - Display a toast notification
 * @property {Function} dismiss - Dismiss a specific toast by ID
 */
const toast = {
  /**
   * Display a toast notification
   *
   * @param {string} message - The message to display
   * @param {('info'|'success'|'error'|'warning')} [type='info'] - Toast type/severity
   * @param {number} [duration=3000] - Auto-dismiss duration in milliseconds
   */
  show: (message, type='info', duration = 3000) => {
    if(toastState.show){
      toastState.show(message, type, duration)
    }
  },
  /**
   * Dismiss a specific toast notification
   *
   * @param {number} id - The ID of the toast to dismiss
   */
  dismiss:(id) => {
    if(toastState.dismiss) {
      toastState.dismiss(id)
    }
  },
}

export default toast