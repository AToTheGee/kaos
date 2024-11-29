import { Box, SimpleGrid, VStack, Text, HStack } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from 'react-flow-renderer';
import WorkflowNode from './WorkflowNode';

const nodeTypes = {
  trigger: 'trigger',
  action: 'action',
  condition: 'condition',
  output: 'output',
};

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 25 },
  },
];

const WorkflowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const position = {
        x: event.clientX - event.currentTarget.getBoundingClientRect().left,
        y: event.clientY - event.currentTarget.getBoundingClientRect().top,
      };

      const newNode = {
        id: String(nodes.length + 1),
        type,
        position,
        data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [nodes, setNodes]
  );

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box display="flex" gap={6}>
      <VStack
        bg="gray.800"
        p={4}
        borderRadius="lg"
        spacing={4}
        align="stretch"
        minW="200px"
      >
        <Text fontWeight="bold" mb={2}>Nodes</Text>
        {Object.entries(nodeTypes).map(([type, label]) => (
          <Box
            key={type}
            draggable
            onDragStart={(e) => onDragStart(e, type)}
            bg="gray.700"
            p={3}
            borderRadius="md"
            cursor="grab"
            _hover={{ bg: 'gray.600' }}
          >
            <Text>{label}</Text>
          </Box>
        ))}
      </VStack>

      <Box
        flex={1}
        bg="gray.800"
        borderRadius="lg"
        h="600px"
        position="relative"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </Box>
    </Box>
  );
};

export default WorkflowBuilder;