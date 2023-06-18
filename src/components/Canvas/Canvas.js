import React, { useCallback, useState } from 'react';
import Header from '../Header/Header';
import Bud from '../Bud/Bud';
import '../Header/Header.css';
import ReactFlow, { applyNodeChanges, Background } from 'reactflow';
import 'reactflow/dist/style.css';


const CombinedNode = ({ handleNewNodeClick }) => (
  <div>
    <Header className="custom-header" handleNewButtonClick={handleNewNodeClick} />
    <Bud />
  </div>
);

function Flow() {

  const handleNewNodeClick = () => {
    const newNode = {
      id: Date.now().toString(),
      type: 'default',
      position: { x: 0, y: 0 },
      data: { label: <CombinedNode handleNewNodeClick={handleNewNodeClick} /> },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const [nodes, setNodes] = useState([
    {
      id: '1',
      type: 'default',
      position: { x: 200, y: 200 },
      data: { label: <CombinedNode handleNewNodeClick={handleNewNodeClick} /> },
    },

  ]);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  return (
    <>
      <ReactFlow nodes={nodes} panOnScroll selectionOnDrag zoomOnPinch zoomOnDoubleClick onNodesChange={onNodesChange}
        fitView
        attributionPosition="top-right">
        <Background />
      </ReactFlow>
    </>
  );
}

export default Flow;
