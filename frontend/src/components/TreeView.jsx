import Node from './Node'

import '../assets/css/treeView.css'
import { BookOpenCheck, Goal } from 'lucide-react'

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
    <div className='tree-view relative'>
      <div className="tree-view-content px-3 sm:px-4 md:px-6 pt-14 pb-16">
        <div className='header-content flex flex-col gap-4'>
          <div className='py-4 flex items-center gap-3'>
            <Goal size={60} className='text-secondary'/>
            <div className='header-text flex flex-col gap-1'>
              <h2>Your Learning Map</h2>
              <p className='text-sm md:text-base text-gray-300'>
              Let's validate what you know about <span className='font-semibold text-secondary'>{ map.target }</span>
              </p>
            </div>
          </div>
          <p className='mb-2 text-sm text-gray-400'>
          Click <span className='font-semibold text-white'>"Test Knowledge"</span> on each concept to assess your understanding.
          This will help us understand where you're starting from! <BookOpenCheck className='inline'/>
          </p>
        </div>
        <div className='overflow-x-scroll md:overflow-x-auto'>
          <Node key={rootNode.id} map={map} node={rootNode} />
        </div>
      </div>
      <div className='tree-view-controls absolute top-0 right-0'>
        <button className='btn btn-secondary w-30 md:w-80' onClick={() => {onRestart()}}>Start Over</button>
      </div>
    </div>
  )
}

export default TreeView