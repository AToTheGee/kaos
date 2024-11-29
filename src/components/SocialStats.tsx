import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Icon, HStack } from '@chakra-ui/react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const socialData = [
  { name: 'Jan', facebook: 4000, instagram: 2400, twitter: 2400 },
  { name: 'Feb', facebook: 3000, instagram: 1398, twitter: 2210 },
  { name: 'Mar', facebook: 2000, instagram: 9800, twitter: 2290 },
  { name: 'Apr', facebook: 2780, instagram: 3908, twitter: 2000 },
  { name: 'May', facebook: 1890, instagram: 4800, twitter: 2181 },
  { name: 'Jun', facebook: 2390, instagram: 3800, twitter: 2500 },
];

const SocialStats = () => {
  return (
    <Box bg="gray.800" p={6} borderRadius="lg" mb={6}>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} mb={6}>
        <Box p={4} bg="gray.700" borderRadius="lg">
          <Stat>
            <HStack mb={2}>
              <Icon as={Facebook} color="blue.400" />
              <StatLabel>Facebook</StatLabel>
            </HStack>
            <StatNumber>23.4K</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              8.2%
            </StatHelpText>
          </Stat>
        </Box>
        
        <Box p={4} bg="gray.700" borderRadius="lg">
          <Stat>
            <HStack mb={2}>
              <Icon as={Instagram} color="pink.400" />
              <StatLabel>Instagram</StatLabel>
            </HStack>
            <StatNumber>45.2K</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              12.5%
            </StatHelpText>
          </Stat>
        </Box>
        
        <Box p={4} bg="gray.700" borderRadius="lg">
          <Stat>
            <HStack mb={2}>
              <Icon as={Twitter} color="blue.300" />
              <StatLabel>Twitter</StatLabel>
            </HStack>
            <StatNumber>18.7K</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              3.4%
            </StatHelpText>
          </Stat>
        </Box>
        
        <Box p={4} bg="gray.700" borderRadius="lg">
          <Stat>
            <HStack mb={2}>
              <Icon as={Youtube} color="red.400" />
              <StatLabel>YouTube</StatLabel>
            </HStack>
            <StatNumber>8.2K</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              15.8%
            </StatHelpText>
          </Stat>
        </Box>
      </SimpleGrid>

      <Box height="300px">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={socialData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
            <Area type="monotone" dataKey="facebook" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
            <Area type="monotone" dataKey="instagram" stroke="#EC4899" fill="#EC4899" fillOpacity={0.1} />
            <Area type="monotone" dataKey="twitter" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default SocialStats;