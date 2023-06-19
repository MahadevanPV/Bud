import React from 'react';
import '../Header/Header.css';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

function Flow() {

  return (
    <>
      <ReactFlow panOnScroll selectionOnDrag zoomOnPinch zoomOnDoubleClick 
        fitView
        attributionPosition="top-right">
        <Background />
      </ReactFlow>
    </>
  );
}

export default Flow;
