import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import Header from '../Header/Header';
import Bud from '../Bud/Bud';
import '../Header/Header.css';

const CombinedNode = () => (
  <div>
    <Header className="custom-header" />
    <Bud />
  </div>
);

const nodes = [
  {
    id: '1',
    type: 'default',
    position: { x: 200, y: 200 },
    data: { label: <CombinedNode /> },
  },

];

function Flow() {
  return (

    <ReactFlow nodes={nodes}
      panOnScroll
      selectionOnDrag
      zoomOnPinch
    >
      <Background />
      <Controls />
    </ReactFlow>

  );
}

export default Flow;
