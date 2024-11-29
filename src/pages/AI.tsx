import { Box, VStack, HStack, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { Bot, Plus } from 'lucide-react';
import AIModelCard from '../components/AIModelCard';
import AIChat from '../components/AIChat';

const AI = () => {
  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <HStack>
          <Bot size={24} />
          <Text fontSize="2xl" fontWeight="bold">AI Hub</Text>
        </HStack>
        <Button leftIcon={<Plus size={16} />} colorScheme="blue">
          New Model
        </Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        <VStack align="stretch" spacing={6}>
          <AIModelCard
            name="GPT-4"
            status="active"
            requests={1234}
            latency="150ms"
          />
          <AIModelCard
            name="DALL-E 3"
            status="active"
            requests={567}
            latency="200ms"
          />
        </VStack>
        <AIChat />
      </SimpleGrid>
    </Box>
  );
};

export default AI;