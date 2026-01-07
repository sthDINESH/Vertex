// Enable debug mode
const DEBUG = (import.meta.env.VITE_DEBUG_ENABLE === 'true') ? true : false

// Use json-server for development
const DEV_SERVER = (import.meta.env.VITE_DEV_SERVER === 'true') ? true : false

// Backend URL
const SERVER_URL = DEV_SERVER
  ? 'http://localhost:3001/conceptTrees'
  : import.meta.env.VITE_BACKEND_BASE_URL

export default {
  DEBUG,
  DEV_SERVER,
  SERVER_URL,
}