import { useState } from 'react';
import { 
  Box, 
  Input, 
  VStack, 
  Text, 
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';
import { Terminal } from 'lucide-react';

const ConsoleCard = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      setCommands([...commands, currentCommand]);
      setCurrentCommand('');
      // Here you would typically process the command
    }
  };

  return (
    <Box
      bg="gray.800"
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      height="400px"
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Console
      </Text>
      <VStack
        flex={1}
        bg="gray.900"
        borderRadius="md"
        p={4}
        spacing={2}
        align="stretch"
        overflowY="auto"
        mb={4}
        fontFamily="mono"
      >
        {commands.map((cmd, index) => (
          <Text key={index} fontSize="sm" color="gray.300">
            <Text as="span" color="green.400">{'>'}</Text> {cmd}
          </Text>
        ))}
      </VStack>
      <InputGroup>
        <InputLeftElement>
          <Icon as={Terminal} color="gray.500" />
        </InputLeftElement>
        <Input
          placeholder="Enter command..."
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyPress={handleCommand}
          bg="gray.900"
          borderColor="gray.700"
          _hover={{ borderColor: 'gray.600' }}
          _focus={{ borderColor: 'blue.400', boxShadow: 'none' }}
        />
      </InputGroup>
    </Box>
  );
};

export default ConsoleCard;