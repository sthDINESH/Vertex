import Node from './Node'

import '../assets/css/treeView.css'

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

  const rootNode = map.prerequisites.find(node => isRootNode(node))

  return (
    <div className='tree-view'>
      {/* {renderNode(rootNode, 0)} */}
      <Node key={rootNode.id} map={map} node={rootNode} />
      <div>
        <button onClick={() => {onRestart()}}>Start Over</button>
      </div>
    </div>
  )
}

export default TreeView