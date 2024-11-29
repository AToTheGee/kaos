import { Box, Text, HStack, Icon } from '@chakra-ui/react';
import { Circle } from 'lucide-react';
import { Handle, Position } from 'react-flow-renderer';

interface WorkflowNodeProps {
  data: {
    label: string;
    type?: string;
    status?: 'idle' | 'running' | 'completed' | 'error';
  };
}

const WorkflowNode = ({ data }: WorkflowNodeProps) => {
  const { label, type = 'default', status = 'idle' } = data;

  const statusColors = {
    idle: 'gray',
    running: 'blue',
    completed: 'green',
    error: 'red',
  };

  return (
    <Box
      bg="gray.700"
      p={4}
      borderRadius="lg"
      _hover={{ bg: 'gray.600' }}
    >
      <Handle type="target" position={Position.Top} />
      <HStack>
        <Icon as={Circle} color={`${statusColors[status]}.400`} />
        <Text fontWeight="medium">{label}</Text>
      </HStack>
      <Text fontSize="sm" color="gray.400" mt={1}>
        {type}
      </Text>
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
};

export default WorkflowNode;