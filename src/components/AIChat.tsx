import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! How can I assist you today?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <Box
      bg="gray.800"
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      height="600px"
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        AI Assistant
      </Text>

      <VStack
        flex={1}
        spacing={4}
        overflowY="auto"
        mb={4}
        align="stretch"
      >
        {messages.map((message) => (
          <HStack
            key={message.id}
            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
            spacing={2}
          >
            {message.sender === 'ai' && (
              <Avatar size="sm" name="AI Assistant" bg="blue.500" />
            )}
            <Box
              bg={message.sender === 'user' ? 'blue.500' : 'gray.700'}
              px={4}
              py={2}
              borderRadius="lg"
              maxW="80%"
            >
              <Text>{message.text}</Text>
            </Box>
            {message.sender === 'user' && (
              <Avatar size="sm" name="User" bg="green.500" />
            )}
          </HStack>
        ))}
      </VStack>

      <InputGroup size="lg">
        <Input
          pr="4.5rem"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleSend}>
            <Send size={16} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default AIChat;