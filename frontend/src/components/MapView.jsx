const MapView = ({ map, onRestart }) => {
  return (
    <div>
        Map View
      <button onClick={() => {onRestart()}}>Start Over</button>
    </div>
  )
}

export default MapView