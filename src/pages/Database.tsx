import { Box, VStack, HStack, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { Database as DatabaseIcon, Plus } from 'lucide-react';
import DatabaseCard from '../components/DatabaseCard';

const Database = () => {
  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <HStack>
          <DatabaseIcon size={24} />
          <Text fontSize="2xl" fontWeight="bold">Databases</Text>
        </HStack>
        <Button leftIcon={<Plus size={16} />} colorScheme="blue">
          New Database
        </Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <DatabaseCard
          name="Users"
          size="1.2 GB"
          tables={12}
          status="healthy"
        />
        <DatabaseCard
          name="Products"
          size="800 MB"
          tables={8}
          status="syncing"
        />
        <DatabaseCard
          name="Analytics"
          size="2.1 GB"
          tables={15}
          status="healthy"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Database;