import { useState } from 'react'
import logger from '../utils/logger'
import Card from './NodeCard'

/**
 * Recursive tree node component that renders a concept and its prerequisites
 *
 * Displays a single node in the concept dependency tree with the ability to:
 * - Toggle visibility of prerequisite nodes (collapse/expand)
 * - Display concept information via Card component
 * - Recursively render child prerequisite nodes with indentation
 * - Handle quiz interactions for each concept
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.map - The complete tree data structure containing all nodes
 * @param {Array} props.map.prerequisites - Array of all concept nodes in the tree
 * @param {Object} props.node - The current node to display
 * @param {number} props.node.id - Unique identifier for the node
 * @param {string} props.node.name - Name of the concept
 * @param {string} props.node.description - Brief description of the concept
 * @param {string} props.node.level - Difficulty level (foundational|intermediate|advanced)
 * @param {Array} props.node.prerequisites - Array of prerequisite node IDs that reference other nodes in the tree
 *
 * @returns {JSX.Element|null} Returns a tree node with a Card component and collapsible prerequisites section,
 *                             or null if node is falsy
 *
 * @example
 * // Renders a node with its prerequisite tree
 * <Node map={treeData} node={conceptNode} />
 *
 * @state {boolean} subNodeVisible - Controls visibility of prerequisite nodes (expanded/collapsed)
 */
const Node = ({ map, node }) => {
  const [subNodeVisible, setSubNodeVisible] = useState(true)

  const toggleSubNodeVisibility = () => setSubNodeVisible(!subNodeVisible)

  return (
    node && <div className='map-node'>
      <Card
        node={node}
        subNodeVisible={subNodeVisible}
        handleToggle={toggleSubNodeVisibility}
        handleQuiz={() => logger.info('Quiz: Not yet implemented!')}
      />
      <div className='map-sub-nodes' style={{ display: subNodeVisible?'': 'none' }}>
        {node.prerequisites.map(nodeId => {
          const subNode = map.prerequisites.find(node => node.id === nodeId)
          return <Node key={subNode.id} map={map} node={subNode} />
        })}
      </div>
    </div>
  )
}

export default Node