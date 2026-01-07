import config from '../utils/config'
import logger from '../utils/logger'

// Base URL for the service
const baseUrl = config.SERVER_URL

/**
 * Fetch concept map from server
 * @param {*} conceptObject
 * @returns { success, map, error }
 */
const getMap = async (conceptObject) => {
  const endpoint = (config.DEV_SERVER) ? '1':'api/generate-map'
  const requestConfig = (config.DEV_SERVER)
    ? { method: 'GET' }
    : {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(conceptObject)
    }

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, requestConfig )

    if(!response.ok){
      logger.error('SERVER ERROR:', response)
      const status = response.status
      let error = ''
      switch(status){
        case 429:
          error = 'Too many requests...Please try again later!'
          break
        case 502:
        case 503:
          error = 'Oops! Could not generate map for the concept! Please try something different.'
          break
        default:
          error = 'Oops! Something went wrong. Please try again.'
      }
      return { success: false, error }
    }

    const map = await response.json()
    return { success: true, map }
  } catch(error){
    logger.info('FETCH ERROR:', error)
    return { success: false, error: 'Oops! Connection failed due to network issue.' }
  }
}

export default { getMap }