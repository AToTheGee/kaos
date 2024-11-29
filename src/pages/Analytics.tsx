import { Box, Grid, GridItem, Text, VStack, HStack, Select } from '@chakra-ui/react';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';

const Analytics = () => {
  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <HStack>
          <BarChart3 size={24} />
          <Text fontSize="2xl" fontWeight="bold">Analytics Overview</Text>
        </HStack>
        <Select maxW="200px" bg="gray.800">
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </Select>
      </HStack>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <Box bg="gray.800" p={6} borderRadius="lg" height="300px">
            <HStack justify="space-between" mb={4}>
              <Text fontSize="lg" fontWeight="bold">Revenue Overview</Text>
              <TrendingUp />
            </HStack>
            <Text color="gray.400" fontSize="sm">
              Chart would go here (using your preferred charting library)
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="gray.800" p={6} borderRadius="lg" height="300px">
            <HStack justify="space-between" mb={4}>
              <Text fontSize="lg" fontWeight="bold">User Demographics</Text>
              <PieChart />
            </HStack>
            <Text color="gray.400" fontSize="sm">
              Pie chart would go here
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="gray.800" p={6} borderRadius="lg" height="300px">
            <HStack justify="space-between" mb={4}>
              <Text fontSize="lg" fontWeight="bold">Active Users</Text>
              <Activity />
            </HStack>
            <Text color="gray.400" fontSize="sm">
              Line chart would go here
            </Text>
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box bg="gray.800" p={6} borderRadius="lg">
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Key Metrics
            </Text>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {['Users', 'Sessions', 'Bounce Rate', 'Avg. Duration'].map((metric, index) => (
                <Box
                  key={index}
                  bg="gray.700"
                  p={4}
                  borderRadius="md"
                >
                  <VStack align="start">
                    <Text color="gray.400" fontSize="sm">{metric}</Text>
                    <Text fontSize="2xl" fontWeight="bold">
                      {index === 2 ? '42%' : index === 3 ? '3m 24s' : (Math.floor(Math.random() * 10000)).toLocaleString()}
                    </Text>
                    <HStack color={Math.random() > 0.5 ? 'green.400' : 'red.400'}>
                      <TrendingUp size={16} />
                      <Text fontSize="sm">{Math.floor(Math.random() * 20)}%</Text>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Analytics;