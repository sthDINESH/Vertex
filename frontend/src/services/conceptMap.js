const baseUrl = 'http://localhost:3001/conceptTrees'

const getMap = async (conceptObject) => {
  const response = await fetch(`${baseUrl}/1`)

  if(!response.ok){
    throw new Error('Internal server error - Could not generate tree')
  }

  return await response.json()
}

export default { getMap }