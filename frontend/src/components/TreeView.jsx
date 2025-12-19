import Concept from './ConceptNode'

const TreeView = ({ map, onRestart }) => {

  /**
   * Checks if a node is the root node of the concept map
   * - prerequisites array is not empty
   * - node is not a prerequisite for other nodes
   * @param {*} node : Node to check
   * @returns boolean
   */
  const isRootNode = (node) => (
    node.prerequisites.length > 0 &&
        !map.prerequisites.some(n => n.prerequisites.includes(node.id))
  )

  const renderNode = (node, depth) => {
    console.log('Current Node', depth , node)
    return (node &&
        <div key={node.id} className='ml-8 my-3'>
          <div className='border rounded p-2 bg-blue-50'>
            <div>
              {node.name}
            </div>
            <div>
              {node.description}
            </div>
            <div>
              {node.level}
            </div>
            <button className='btn btn-primary'>Test knowledge</button>
          </div>
          {node.prerequisites.map(nodeId =>
            renderNode(map.prerequisites.find(node => node.id === nodeId), depth + 1)
          )}
        </div>
    )
  }

  const rootNode = map.prerequisites.find(node => isRootNode(node))

  return (
    <div>
      {renderNode(rootNode, 0)}
      <div>
        <button onClick={() => {onRestart()}}>Start Over</button>
      </div>
    </div>
  )
}

export default TreeView