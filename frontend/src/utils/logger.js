import config from './config'

const info = (...params) => {
  if(config.DEBUG){
    console.log(...params)
  }
}

const error = (...params) => {
  if(config.DEBUG){
    console.error(...params)
  }
}

export default {
  info,
  error,
}