import { useCallback,useState } from 'react';
import ReactFlow, { Background, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import '../Canvas/Canvas.css';

function Node({ data }) {
  const image = data && data.image;
  const label = data && data.label;

  let altText = '';
  if (image) {
    // Extract meaningful text from the image filename or use a specific description
    altText = 'Description for the image'; // Replace with a meaningful description
  }

  return (
    <div className="node-container">
      {image && <img src={image} alt={altText} className="node-image" />}
      {label && <div className="node-label">{label}</div>}
    </div>
  );
}

const nodeTypes = {
  'custom-node': Node,
};
function Flow({ nodes, setNodes, onAddNode, description }) {

  const [showTextarea, setShowTextarea] = useState(false);
  const [, onChange] = useState('');

  const onNodeClick = useCallback((event, node) => {
    if (node.id === 'B') {
      setShowTextarea(true);
    }
    else if (node.id === 'H') {
      setShowTextarea(false);
      onAddNode(); // Call the onAddNode function when H node is clicked
    }
  }, [onAddNode]);

  
  const onNodesChange = useCallback(
    (changes) => {
      const filteredChanges = changes.filter(
        (change) => change.node && !['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].includes(change.node.id)
      );
      setNodes((nds) => applyNodeChanges(filteredChanges, nds));
    },
    [setNodes]
  );

  return (
      <ReactFlow nodes={nodes} onNodeClick={onNodeClick} onNodesChange={onNodesChange} nodeTypes={nodeTypes}>
      <div>{showTextarea && <div className='textBox'><span className='sideBorder'></span><textarea className='canvasText' defaultValue={description} onChange={(event) => onChange(event.target.value)} /></div>}</div>
        <Background />
      </ReactFlow>
  );
}

export default Flow;
