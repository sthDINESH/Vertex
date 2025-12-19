const baseUrl = 'http://localhost:3001/conceptTrees'

const getMap = async (conceptObject) => {
  console.log('POST with:', conceptObject)
  const response = await fetch(`${baseUrl}/1`)

  if(!response.ok){
    throw new Error('Internal server error - Could not generate tree')
  }

  // Adding a 2 sec delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  return await response.json()
}

export default { getMap }