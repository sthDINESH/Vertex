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
  const getLevelIcon = (level) => {
    switch(level) {
      case 'foundational':
        return <Lightbulb size={18} className="text-yellow-500" />
      case 'intermediate':
        return <Layers size={18} className="text-blue-500" />
      case 'advanced':
        return <Zap size={18} className="text-purple-500" />
      default:
        return null
    }
  }

  return (
    <div className='card min-w-[280px] border-gray-400 rounded-2xl px-2 md:px-3 py-2 md:py-4 my-1.5 flex md:flex-nowrap items-center gap-1.5 md:gap-3'>
      <div>
        { node.prerequisites.length > 0 &&
            <button onClick={handleToggle} className='hover:border-white hover:border hover:rounded-md'>
              {
                subNodeVisible
                  ? <ChevronDown />
                  : <ChevronRight />
              }
            </button>
        }
      </div>
      <div className='flex flex-wrap lg:flex-nowrap items-center grow gap-1 md:gap-3'>
        <div className='flex flex-col grow shrink gap-1 lg:gap-2'>
          <div className='text-sm md:text-base font-bold'>
            {node.name}
          </div>
          <div className='text-xs md:text-sm text-gray-300'>
            {node.description}
          </div>
        </div>
        <div className='flex items-center justify-between lg:justify-start grow lg:grow-0 md:min-w-52'>
          <div className='flex lg:flex-col items-center justify-center gap-0.5 md:gap-0 min-w-20'>
            {getLevelIcon(node.level)}
            <span className='text-xs'>{node.level}</span>
          </div>
          <button className='btn btn-primary' onClick={handleQuiz}>Test knowledge</button>
        </div>
      </div>

    </div>
  )
}

export default Card