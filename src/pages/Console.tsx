import { Box, VStack, HStack, Text } from '@chakra-ui/react';
import { Terminal } from 'lucide-react';
import ConsoleCard from '../components/ConsoleCard';

const Console = () => {
  return (
    <Box>
      <HStack mb={8}>
        <Terminal size={24} />
        <Text fontSize="2xl" fontWeight="bold">Console</Text>
      </HStack>

      <ConsoleCard />
    </Box>
  );
};

export default Console;