import { Box, Grid, Text, VStack, HStack, Badge } from '@chakra-ui/react';
import { Calendar as CalendarIcon } from 'lucide-react';

const events = [
  {
    title: 'Team Meeting',
    time: '09:00 AM',
    duration: '1h',
    type: 'meeting',
    participants: 5,
  },
  {
    title: 'Project Review',
    time: '11:30 AM',
    duration: '2h',
    type: 'review',
    participants: 3,
  },
  {
    title: 'Client Call',
    time: '02:00 PM',
    duration: '30m',
    type: 'call',
    participants: 2,
  },
  {
    title: 'Sprint Planning',
    time: '04:00 PM',
    duration: '1h 30m',
    type: 'planning',
    participants: 8,
  },
];

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDate = new Date();

  return (
    <Box>
      <HStack mb={8}>
        <CalendarIcon size={24} />
        <Text fontSize="2xl" fontWeight="bold">Calendar</Text>
      </HStack>

      <Grid templateColumns="repeat(7, 1fr)" gap={4} mb={8}>
        {days.map((day) => (
          <Box
            key={day}
            bg="gray.800"
            p={4}
            borderRadius="lg"
            textAlign="center"
          >
            <Text fontWeight="bold">{day}</Text>
          </Box>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const date = new Date(currentDate);
          date.setDate(currentDate.getDate() - currentDate.getDay() + i);
          return (
            <Box
              key={i}
              bg="gray.800"
              p={4}
              borderRadius="lg"
              opacity={date.getMonth() === currentDate.getMonth() ? 1 : 0.5}
              cursor="pointer"
              _hover={{ bg: 'gray.700' }}
            >
              <Text>{date.getDate()}</Text>
            </Box>
          );
        })}
      </Grid>

      <Box bg="gray.800" p={6} borderRadius="lg">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Today's Schedule
        </Text>
        <VStack spacing={4} align="stretch">
          {events.map((event, index) => (
            <HStack
              key={index}
              bg="gray.700"
              p={4}
              borderRadius="md"
              justify="space-between"
            >
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold">{event.title}</Text>
                <HStack>
                  <Text color="gray.400" fontSize="sm">
                    {event.time}
                  </Text>
                  <Text color="gray.400" fontSize="sm">
                    • {event.duration}
                  </Text>
                </HStack>
              </VStack>
              <HStack>
                <Badge colorScheme="blue">
                  {event.participants} participants
                </Badge>
                <Badge
                  colorScheme={
                    event.type === 'meeting'
                      ? 'green'
                      : event.type === 'review'
                      ? 'purple'
                      : event.type === 'call'
                      ? 'orange'
                      : 'blue'
                  }
                >
                  {event.type}
                </Badge>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Calendar;