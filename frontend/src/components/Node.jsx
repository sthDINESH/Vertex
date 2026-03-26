import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './NodeCard'
import { generateQuiz } from '../reducers/currentQuizReducer'
import { setCurrentNode } from '../reducers/currentNode'

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
 * @param {Object} props.node - The current node to display
 * @param {number} props.node.id - Unique identifier for the node
 * @param {string} props.node.name - Name of the concept
 * @param {string} props.node.description - Brief description of the concept
 * @param {string} props.node.level - Difficulty level (foundational|intermediate|advanced)
 * @param {Array} props.node.prerequisites - Array of prerequisite node IDs that reference other nodes in the tree
 * @param {Function} props.onTestKnowledge - Callback function invoked when user tests knowledge on a concept
 *
 * @returns {JSX.Element|null} Returns a tree node with a Card component and collapsible prerequisites section,
 *                             or null if node is falsy
 *
 * @redux {Object} map - The complete tree data structure containing all nodes (retrieved via useSelector)
 *
 * @state {boolean} subNodeVisible - Controls visibility of prerequisite nodes (expanded/collapsed)
 *
 * @example
 * // Renders a node with its prerequisite tree
 * <Node node={conceptNode} onTestKnowledge={handleTest} />
 */
const Node = ({ node }) => {
  const map = useSelector(state => state.map)
  const dispatch = useDispatch()

  const [subNodeVisible, setSubNodeVisible] = useState(true)

  const toggleSubNodeVisibility = () => setSubNodeVisible(!subNodeVisible)

  return (
    node && <div className='map-node'>
      <Card
        node={node}
        subNodeVisible={subNodeVisible}
        handleToggle={toggleSubNodeVisibility}
        handleQuiz={() => {
          dispatch(setCurrentNode(node))
          dispatch(generateQuiz())
        }}
      />
      <div className='map-sub-nodes' style={{ display: subNodeVisible?'': 'none' }}>
        {node.prerequisites.map(nodeId => {
          const subNode = map.prerequisites.find(node => node.id === nodeId)
          return <Node key={subNode.id} node={subNode} />
        })}
      </div>
    </div>
  )
}

export default Node