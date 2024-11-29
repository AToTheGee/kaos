import { Box, VStack, HStack, Text, Badge, Icon } from '@chakra-ui/react';
import { Database, Table } from 'lucide-react';

interface DatabaseCardProps {
  name: string;
  size: string;
  tables: number;
  status: 'healthy' | 'syncing' | 'error';
}

const DatabaseCard = ({ name, size, tables, status }: DatabaseCardProps) => {
  const statusColors = {
    healthy: 'green',
    syncing: 'blue',
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
            <Icon as={Database} boxSize={5} />
            <Text fontSize="lg" fontWeight="bold">{name}</Text>
          </HStack>
          <Badge colorScheme={statusColors[status]}>{status}</Badge>
        </HStack>

        <HStack justify="space-between">
          <Text color="gray.400">Size</Text>
          <Text>{size}</Text>
        </HStack>

        <HStack justify="space-between">
          <HStack>
            <Icon as={Table} boxSize={4} />
            <Text color="gray.400">Tables</Text>
          </HStack>
          <Text>{tables}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DatabaseCard;