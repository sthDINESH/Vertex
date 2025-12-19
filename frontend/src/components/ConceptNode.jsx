import { Handle, Position } from '@xyflow/react'

const ConceptNode = ({ data }) => {
  return (
    <div style={{
      width: 120,
      height: 120,
      borderRadius: '50%',
      //   background: data.level === 'foundational' ? '#0891b2' :
      //     data.level === 'intermediate' ? '#4f46e5' : '#ec4899',
      // color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '3px solid black',
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
      padding: '8px',
    }}>
      <div>{data.label}</div>
      <div style={{ fontSize: '10px', opacity: 0.8 }}>{data.level}</div>
      <Handle type="target" position={Position.Bottom}/>
      <Handle type="source" position={Position.Top}/>
    </div>
  )
}

export default ConceptNode