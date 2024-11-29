import { Box, Grid, Text, Avatar, VStack, HStack, Badge, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Senior Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    status: 'online',
    project: 'Dashboard 2.0',
  },
  {
    name: 'Sarah Wilson',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    status: 'offline',
    project: 'Mobile App',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    status: 'online',
    project: 'Analytics Platform',
  },
  {
    name: 'Emily Davis',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    status: 'busy',
    project: 'Client Portal',
  },
];

const Team = () => {
  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <HStack>
          <Users size={24} />
          <Text fontSize="2xl" fontWeight="bold">Team Members</Text>
        </HStack>
        <InputGroup maxW="300px">
          <InputLeftElement>
            <Search size={20} />
          </InputLeftElement>
          <Input placeholder="Search team members..." />
        </InputGroup>
      </HStack>

      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            bg="gray.800"
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            _hover={{ transform: 'translateY(-2px)', transition: 'all 0.2s' }}
          >
            <VStack align="start" spacing={4}>
              <HStack spacing={4} width="100%">
                <Avatar size="lg" src={member.avatar} />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold">{member.name}</Text>
                  <Text color="gray.400" fontSize="sm">{member.role}</Text>
                  <Badge
                    colorScheme={
                      member.status === 'online'
                        ? 'green'
                        : member.status === 'busy'
                        ? 'red'
                        : 'gray'
                    }
                  >
                    {member.status}
                  </Badge>
                </VStack>
              </HStack>
              <Box>
                <Text color="gray.400" fontSize="sm">Current Project</Text>
                <Text>{member.project}</Text>
              </Box>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;