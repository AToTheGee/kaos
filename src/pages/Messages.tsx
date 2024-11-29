import { Box, VStack, HStack, Text, Avatar, Input, InputGroup, InputRightElement, Button, Divider } from '@chakra-ui/react';
import { Send } from 'lucide-react';

const messages = [
  {
    id: 1,
    sender: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    message: 'Hey, hows the new dashboard coming along?',
    time: '10:30 AM',
    isMe: false,
  },
  {
    id: 2,
    sender: 'Me',
    message: 'Making good progress! Just finishing up the analytics section.',
    time: '10:32 AM',
    isMe: true,
  },
  {
    id: 3,
    sender: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    message: 'Great! Can you share a preview when youre done?',
    time: '10:33 AM',
    isMe: false,
  },
  {
    id: 4,
    sender: 'Me',
    message: 'Sure thing! Ill have it ready by EOD.',
    time: '10:35 AM',
    isMe: true,
  },
];

const Messages = () => {
  return (
    <Box height="calc(100vh - 2rem)" maxW="900px" mx="auto">
      <Box bg="gray.800" borderRadius="lg" height="100%" display="flex" flexDirection="column">
        <Box p={4} borderBottom="1px" borderColor="gray.700">
          <HStack>
            <Avatar size="sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold">Alex Johnson</Text>
              <Text fontSize="sm" color="green.400">Online</Text>
            </VStack>
          </HStack>
        </Box>

        <VStack flex={1} p={4} overflowY="auto" spacing={4}>
          {messages.map((message) => (
            <HStack
              key={message.id}
              alignSelf={message.isMe ? 'flex-end' : 'flex-start'}
              maxW="70%"
            >
              {!message.isMe && <Avatar size="sm" src={message.avatar} />}
              <Box>
                <HStack mb={1}>
                  <Text fontSize="sm" color="gray.400">
                    {message.sender}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {message.time}
                  </Text>
                </HStack>
                <Box
                  bg={message.isMe ? 'blue.500' : 'gray.700'}
                  p={3}
                  borderRadius="lg"
                >
                  <Text>{message.message}</Text>
                </Box>
              </Box>
            </HStack>
          ))}
        </VStack>

        <Box p={4} borderTop="1px" borderColor="gray.700">
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              placeholder="Type a message..."
              variant="filled"
              bg="gray.700"
              _hover={{ bg: 'gray.600' }}
              _focus={{ bg: 'gray.600' }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" colorScheme="blue">
                <Send size={20} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;