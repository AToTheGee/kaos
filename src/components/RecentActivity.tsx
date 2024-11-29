import { Box, VStack, Text, HStack, Avatar, Badge } from '@chakra-ui/react';

const activities = [
  {
    user: 'Sarah Chen',
    action: 'Completed task',
    item: 'Dashboard redesign',
    time: '2m ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    status: 'success',
  },
  {
    user: 'Michael Torres',
    action: 'Commented on',
    item: 'Project timeline',
    time: '15m ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    status: 'info',
  },
  {
    user: 'Emma Wilson',
    action: 'Created',
    item: 'New project proposal',
    time: '1h ago',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    status: 'warning',
  },
];

const RecentActivity = () => {
  return (
    <Box bg="gray.800" p={6} borderRadius="lg" boxShadow="lg">
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Recent Activity
      </Text>
      <VStack spacing={4} align="stretch">
        {activities.map((activity, index) => (
          <HStack key={index} spacing={4}>
            <Avatar size="sm" src={activity.avatar} />
            <Box flex={1}>
              <HStack>
                <Text fontWeight="medium">{activity.user}</Text>
                <Text color="gray.500">{activity.action}</Text>
                <Text color="blue.400">{activity.item}</Text>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                {activity.time}
              </Text>
            </Box>
            <Badge colorScheme={activity.status}>{activity.status}</Badge>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default RecentActivity;