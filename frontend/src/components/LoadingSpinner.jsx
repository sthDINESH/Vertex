import { GridLoader, DotLoader } from 'react-spinners'

const LoadingSpinner = ({ loading }) => {
  if(!loading.state) return null

  const getSpinner = () => {
    switch(loading.type){
      case 'map':
        return (
          <>
            <GridLoader loading={loading.state} />
            <p>'Analysing concept dependencies...'</p>
          </>
        )
      case 'quiz':
        return (
          <>
            <DotLoader loading={loading.state} />
            <p>'Generating test...'</p>
          </>
        )
      default:
        return ''
    }
  }

  return (
    <div className='flex flex-col items-center'>
      {getSpinner()}
    </div>
  )
}

export default LoadingSpinner