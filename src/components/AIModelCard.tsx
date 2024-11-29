import { Box, VStack, HStack, Text, Badge, Icon } from '@chakra-ui/react';
import { Bot, Activity } from 'lucide-react';

interface AIModelCardProps {
  name: string;
  status: 'active' | 'inactive' | 'error';
  requests: number;
  latency: string;
}

const AIModelCard = ({ name, status, requests, latency }: AIModelCardProps) => {
  const statusColors = {
    active: 'green',
    inactive: 'gray',
    error: 'red',
  };

  return (
    <Box
      bg="gray.800"
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      _hover={{ transform: 'translateY(-2px)', transition: 'all 0.2s' }}
    >
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between">
          <HStack>
            <Icon as={Bot} boxSize={5} />
            <Text fontSize="lg" fontWeight="bold">{name}</Text>
          </HStack>
          <Badge colorScheme={statusColors[status]}>{status}</Badge>
        </HStack>

        <HStack justify="space-between">
          <Text color="gray.400">Total Requests</Text>
          <Text>{requests.toLocaleString()}</Text>
        </HStack>

        <HStack justify="space-between">
          <HStack>
            <Icon as={Activity} boxSize={4} />
            <Text color="gray.400">Avg. Latency</Text>
          </HStack>
          <Text>{latency}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AIModelCard;