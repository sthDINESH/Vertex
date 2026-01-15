import { ChevronDown, ChevronRight, Zap, Lightbulb, Layers } from 'lucide-react'

/**
 * Card component that displays a concept node with interactive controls
 *
 * Renders a card containing concept information (name, description, level)
 * along with action buttons for:
 * - Testing knowledge via quiz
 * - Toggling visibility of prerequisite nodes
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.node - The concept node data to display
 * @param {number} props.node.id - Unique identifier for the node
 * @param {string} props.node.name - Name of the concept
 * @param {string} props.node.description - Brief description of the concept
 * @param {string} props.node.level - Difficulty level (foundational|intermediate|advanced)
 * @param {Array} props.node.prerequisites - Array of prerequisite node IDs
 * @param {Function} props.handleQuiz - Callback function triggered when "Test knowledge" button is clicked
 * @param {Function} props.handleToggle - Callback function triggered when "Toggle" button is clicked to expand/collapse prerequisites
 *
 * @returns {JSX.Element} Returns a styled card with concept information and action buttons
 *
 * @example
 * // Renders a card for a concept with quiz and toggle functionality
 * <Card
 *   node={conceptNode}
 *   handleQuiz={() => startQuiz(conceptNode)}
 *   handleToggle={() => toggleVisibility(conceptNode.id)}
 * />
 */
const Card = ({ node, subNodeVisible, handleQuiz, handleToggle }) => {
  const iconSize = 24
  const getLevelIcon = (level) => {
    switch(level) {
      case 'foundational':
        return <Lightbulb size={iconSize} className="text-yellow-500" />
      case 'intermediate':
        return <Layers size={iconSize} className="text-blue-500" />
      case 'advanced':
        return <Zap size={iconSize} className="text-purple-500" />
      default:
        return null
    }
  }

  return (
    <div className='card rounded-2xl px-3 py-4 my-1.5 flex items-center gap-3'>
      <div>
        { node.prerequisites.length > 0 &&
            <button onClick={handleToggle}>
              { subNodeVisible ? <ChevronDown /> : <ChevronRight /> }
            </button>
        }
      </div>
      <div className='flex flex-col grow'>
        <div className='text-base font-bold'>
          {node.name}
        </div>
        <div>
          {node.description}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {getLevelIcon(node.level)}
        {node.level}
      </div>
      <button className='btn btn-primary' onClick={handleQuiz}>Test knowledge</button>
    </div>
  )
}

export default Card