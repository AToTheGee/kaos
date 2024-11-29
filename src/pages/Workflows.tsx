import { Box, VStack, HStack, Text, Button } from '@chakra-ui/react';
import { Share2, Plus } from 'lucide-react';
import WorkflowBuilder from '../components/WorkflowBuilder';

const Workflows = () => {
  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <HStack>
          <Share2 size={24} />
          <Text fontSize="2xl" fontWeight="bold">Workflow Builder</Text>
        </HStack>
        <Button leftIcon={<Plus size={16} />} colorScheme="blue">
          New Workflow
        </Button>
      </HStack>
      
      <WorkflowBuilder />
    </Box>
  );
};

export default Workflows;