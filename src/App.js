import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Bud from './components/Bud/Bud';
import Flow from './components/Canvas/Canvas';
import Squishy from './images/Squishy.svg';
import Squishy1 from './images/Squishy1.svg';
import Squishy2 from './images/Squishy2.svg';
import Squishy3 from './images/Squishy3.svg';
import Squishy4 from './images/Squishy4.svg';
import Head from './images/Head.svg';
import Generate from './images/Generate.svg';


function App() {
  const [nodes, setNodes] = useState([]);
  const flowRef = useRef(null);

  const handleEnterClick = () => {

    const newNodes = [
      {
        id: 'A',
        type: 'custom-node',
        position: {
          x:  520, 
          y:  100,
        },
        data: { label:'' },
        style: {
          position: 'absolute',
          width: '488px',
          height: '376px',
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '13px',
        }
      },
      {
        id: 'B',
        data: { label: '',image: Head },
        type: 'custom-node',
        position: {
          x:  527, 
          y:  108,
        },
        style: {
          position:'absolute',
          width: 294,
          height: 25,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        }
      },
      {
        id: 'C',
        data: { label: '' },
        type: 'custom-node',
        position: {
          x:  934, 
          y:  108,
        },
        style: {
          width: 66,
          height: 25,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        }
      },
      {
        id: 'D',
        type: 'custom-node',
        data: { image: Squishy },
        position: {
          x:  528, 
          y:  142,
        },
        style: {
          position:'absolute',
          width: 471,
          height: 254,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        },
      },
      {
        id: 'E',
        type: 'custom-node',
        data: { image: Squishy1 },
        position: {
          x:  527, 
          y:  399,
        },
        style: {
          width: 99,
          height: 73,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        }
      },
      {
        id: 'F',
        type: 'custom-node',
        data: { image: Squishy2 },
        position: {
          x:  632, 
          y:  399,
        },
        style: {
          width: 99,
          height: 73,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        },
      },
      {
        id: 'G',
        type: 'custom-node',
        data: { image: Squishy3 },
        position: {
          x:  737, 
          y:  399,
        },
        style: {
          width: 99,
          height: 73,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        }
      },
      {
        id: 'H',
        type: 'custom-node',
        data: { image: Squishy4 },
        position: {
          x:  842, 
          y:  399,
        },
        style: {
          width: 99,
          height: 73,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        }
      },
      {
        id: 'I',
        type: 'custom-node',
        data: { image: Generate },
        position: {
          x:  948, 
          y:  399,
        },
        style: {
          width: 53,
          height: 73,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        },
      },

    ];

  setNodes(newNodes);
  };

  useEffect(() => {
    const handleResize = () => {
      const flowDimensions = flowRef.current.getBoundingClientRect();
      // Update the position of existing nodes when the window is resized
      const updatedNodes = nodes.map((node) => ({
        ...node,
        position: {
          x: node.position.x + (flowDimensions.width / 2 - flowDimensions.width / 2),
          y: node.position.y + (flowDimensions.height / 2 - flowDimensions.height / 2),
        },
      }));
      setNodes(updatedNodes);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nodes]);

  return (
    <div className="App">
      <Header />
      <div ref={flowRef}>
        <Flow nodes={nodes} setNodes={setNodes} />
      </div>
      <Bud handleEnterClick={handleEnterClick} />
    </div>
  );
}

export default App;
