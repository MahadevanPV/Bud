import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Bud from './components/Bud/Bud';
import Flow from './components/Flow/Flow';
import Squishy from './images/Squishy.svg';
import Squishy1 from './images/Squishy1.svg';
import Squishy2 from './images/Squishy2.svg';
import Squishy3 from './images/Squishy3.svg';
import Squishy4 from './images/Squishy4.svg';
import Squishy5 from './images/Squishy5.svg';
import Squishy6 from './images/Squishy6.svg';
import Generate from './images/Generate.svg';
import TextStar from './images/textStar.svg';
import Back from './images/Back.svg';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [nodes, setNodes] = useState([]);
  const flowRef = useRef(null);
  const [, setShowTextarea] = useState(false);
  const [description, setDescription] = useState(false);
  const [selectedModel,] = useState(false);


  const handleEnterClick = (description,output) => {

    const trimmedDescription = description.trim();
    const words = trimmedDescription.split(' ');
    const limitedDescription = words.slice(0, 8).join(' ');

    const newNodes = [
      {
        id: 'A',
        type: 'custom-node',
        position: {
          x: 240,
          y: 100,
        },
        data: { label: '' },
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
        data: { label: limitedDescription, image: TextStar },
        type: 'custom-node',
        position: {
          x: 246,
          y: 108,
        },
        style: {
          position: 'absolute',
          width: 294,
          height: 25,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
          fontFamily: "'Roboto Mono',monospace",
          fontWeight: 400,
          fontSize: '10px',
          color: '#959595',
          padding: '5px',
        }
      },
      {
        id: 'C',
        data: { label: selectedModel },
        type: 'custom-node',
        position: {
          x: 655,
          y: 108,
        },
        style: {
          width: 66,
          height: 25,
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
          fontFamily: "'Roboto Mono',monospace",
          fontWeight: 400,
          fontSize: '10px',
          color: '#959595',
          padding: '5px'
        }
      },
      {
        id: 'D',
        type: 'custom-node',
        data:{ image: Squishy },
        position: {
          x: 249,
          y: 142,
        },
        style: {
          position: 'absolute',
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
          x: 247,
          y: 399,
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
          x: 353,
          y: 399,
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
          x: 457,
          y: 399,
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
          x: 561,
          y: 399,
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
          x: 667,
          y: 399,
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
    setDescription(description);
    setShowTextarea(false);
  };

  const handleAddNode = () => {

    const trimmedDescription = description.trim();
    const words = trimmedDescription.split(' ');
    const limitedDescription = words.slice(0, 8).join(' ');

    const newNodes = [
      {
        id: 'NewNode1', // Replace with a unique identifier for the new node
        type: 'custom-node',
        data: { label: '' }, // Replace with the desired data for the new node
        position: {
          x: 900, // Replace with the desired x position for the new node
          y: 100, // Replace with the desired y position for the new node
        },
        style: {
          position: 'absolute',
          width: '488px',
          height: '363px',
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '13px',
        }
      },
      {
        id: 'NewNode2',
        data: { label: limitedDescription, image: TextStar },
        type: 'custom-node',
        position: {
          x: 907,
          y: 108,
        },
        style: {
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
          fontFamily: "'Roboto Mono',monospace",
          fontWeight: 400,
          fontSize: '10px',
          color: '#959595',
          padding: '5px',
          width: 294,
          height: 25,
        }
      },
      {
        id: 'NewNode3',
        type: 'custom-node',
        data: { image: Squishy5 },
        position: {
          x: 908,
          y: 142,
        },
        style: {
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        },
      },
      // Add more nodes as needed
    ];

    setNodes((prevNodes) => [...prevNodes, ...newNodes]);
    setShowTextarea(false);
  };

  const handleEditNode = () => {

    const trimmedDescription = description.trim();
    const words = trimmedDescription.split(' ');
    const limitedDescription = words.slice(0, 8).join(' ');

    const newNodes = [
      {
        id: 'EditNode1',
        data: { label: limitedDescription, image: TextStar },
        type: 'custom-node',
        position: {
          x: 45,
          y: 16,
        },
        style: {
          background: '#111111',
          border: '1px solid #2E2E2E',
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
          fontFamily: "'Roboto Mono',monospace",
          fontWeight: 400,
          fontSize: '10px',
          color: '#959595',
          padding: '5px',
          width: 294,
          height: 25,
        }
      },
      {
        id: 'EditNode2',
        type: 'custom-node',
        data: { image: Squishy6 },
        position: {
          x: 444,
          y: 99,
        },
        style: {
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        },
      },
      {
        id: 'EditNode3',
        type: 'custom-node',
        data: { image: Back },
        position: {
          x: 10,
          y: 12,
        },
        style: {
          backdropFilter: 'blur(13.5px)',
          borderRadius: '5px',
        },
      },
      // Add more nodes as needed
    ];

    setNodes((prevNodes) => [...prevNodes, ...newNodes]);
    setShowTextarea(false);
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
      <BrowserRouter>
        <div ref={flowRef}>
          <Flow nodes={nodes} setNodes={setNodes} setShowTextarea={setShowTextarea} onAddNode={handleAddNode} onEditNode={handleEditNode} description={description} {...selectedModel} />
        </div>
      </BrowserRouter>
      <Bud handleEnterClick={handleEnterClick} setDescription={setDescription} description={description} />
    </div>
  );
}

export default App;
