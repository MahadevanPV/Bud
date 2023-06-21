import { useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

function Node({ data }) {
  const image = data && data.image;
  const label = data && data.label;

  let altText = '';
  if (image) {
    // Extract meaningful text from the image filename or use a specific description
    altText = 'Description for the image'; // Replace with a meaningful description
  }

  return (
    <div>
      {image && <img src={image} alt={altText} />}
      {label && <div>{label}</div>}
    </div>
  );
}
const nodeTypes = {
  'custom-node': Node,
};
function Flow({ nodes, setNodes }) {
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
    <ReactFlow nodes={nodes} onNodesChange={onNodesChange} nodeTypes={nodeTypes}>
      <Background />
      <MiniMap nodeStrokeWidth={3} zoomable pannable />
      <Controls />
    </ReactFlow>
  );
}

export default Flow;
