import { DotLoader } from 'react-spinners'


const LoadingSpinner = ({ loading }) => {
  if(!loading.state) return null

  const getMessage = () => {
    switch(loading.type){
      case 'map':
        return (
          <div className="spinner-container">
            <div className="tube">
              <p className='loading-message accent-text text-lg md:text-xl animate-pulse'>Analysing dependencies...</p>
            </div>
          </div>
        )
      case 'quiz':
        return (
          <p>'Generating test...'</p>
        )
      default:
        return ''
    }
  }

  return (
    <div className='loading-view flex flex-col items-center justify-center'>
      <div className="loading-view-content w-full min-h-80 p-3 sm:px-4 md:px-6 pt-8 md:pt-14 pb-14 flex flex-col items-center justify-center">
        <div className='flex flex-col items-center justify-center gap-3'>
          <DotLoader loading={loading.state} color='#0891b2' size={80}/>
          {getMessage()}
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner