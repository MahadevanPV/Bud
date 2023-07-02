import { useCallback, useState } from 'react';
import ReactFlow, { Background, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import '../Flow/Flow.css';
import Group from '../../images/Group.png';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Node from '../Node/Node';
import Search from '../Search/Search';
import CustomTextarea from '../CustomTextarea/CustomTextarea';


const nodeTypes = {
  'custom-node': Node,
};

const Flow = ({ nodes, setNodes, onAddNode, description, onEditNode }) => {

  const [showTextarea, setShowTextarea] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Model 1');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditComponent, setShowEditComponent] = useState(false);
  const [showReactFlow, setShowReactFlow] = useState(true);

  const handleNodeClick = useCallback((event, node) => {
    if (node.id === 'B' || node.id === 'NewNode2') {
      setShowTextarea(true);
      setShowDropdown(false);
    } else if (node.id === 'H') {
      onAddNode();
      setShowTextarea(false);
      setShowDropdown(false);
    } else if (node.id === 'C') {
      setShowDropdown(true);
      setShowTextarea(false);
    }
    else if (node.id === 'D') {
      const updatedNodes = nodes.map((n) => {
        if (n.id === 'D') {
          return {
            ...n,
            style: {
              ...n.style,
              // transform: 'scale(1.2)', // Apply zoom effect to node 'D'
              //transition: 'transform 0.3s', // Add transition property to animate the zoom effect
            },
          };
        }
        return n;
      });
      
      setNodes(updatedNodes);
      onEditNode();
      setShowEditComponent(true);
      setShowTextarea(false);
      setShowDropdown(false);
      setShowReactFlow(false); // Hide ReactFlow if node 'D' is clicked
    }
    else if(node.id === 'EditNode1'){
      setShowDropdown(false);
      setShowTextarea(true);
    }
    else if(node.id === 'EditNode3') {
      setShowTextarea(false);
      setShowDropdown(false);
      setShowEditComponent(false);
      setShowReactFlow(true); // Hide ReactFlow for other nodes
    }

  }, [onAddNode, onEditNode, nodes, setNodes]);

  const handleImageClick = () => {
    const textareaValue = document.querySelector('.canvasText').value;
    console.log('Textarea value:', textareaValue);
  };

  const handleModelChange = useCallback((event) => {
    setSelectedModel(event.target.value);
  }, []);

  const handleNodesChange = useCallback((changes) => {
    const filteredChanges = changes.filter(
      (change) => change.node && !['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].includes(change.node.id)
    );
    setNodes((prevNodes) => applyNodeChanges(filteredChanges, prevNodes));
  }, [setNodes]);

  const options = [
    { value: 'Model 1', label: 'Model 1', image: Group },
    { value: 'Model 2', label: 'Model 2', image: Group },
    { value: 'Model 3', label: 'Model 3', image: Group },
  ];

  return (
    <>
      {showReactFlow && (
        <ReactFlow
          nodes={nodes.filter(node => node.id === 'A' || node.id === 'B' || node.id === 'C' || node.id === 'D'|| node.id === 'E'|| node.id === 'F'|| node.id === 'G'|| node.id === 'H'|| node.id === 'I' || node.id === 'NewNode1' || node.id === 'NewNode2'|| node.id === 'NewNode3')}
          onNodeClick={handleNodeClick}
          onNodesChange={handleNodesChange}
          nodeTypes={nodeTypes}
        >
          <Background />
            {showTextarea && (
              <CustomTextarea description={description} handleImageClick={handleImageClick} />
            )}
            {showDropdown && (
              <CustomDropdown
                options={options}
                selectedValue={selectedModel}
                onChange={handleModelChange}
              />
            )}
        </ReactFlow>
      )}
      {showEditComponent && (
        <ReactFlow nodes={nodes.filter(node => node.id === 'EditNode1' || node.id === 'EditNode2' || node.id === 'EditNode3')} onNodeClick={handleNodeClick}
          onNodesChange={handleNodesChange}
          nodeTypes={nodeTypes}>
          <Background />
          <Search />
          {showTextarea && (
            <CustomTextarea description={description} handleImageClick={handleImageClick} />
          )}
        </ReactFlow>
      )}
    </>
  );
};

export default Flow;