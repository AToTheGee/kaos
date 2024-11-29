import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  type?: 'increase' | 'decrease';
}

const StatCard = ({ label, value, change, type }: StatCardProps) => {
  return (
    <Box p={5} bg="gray.800" borderRadius="lg" boxShadow="lg">
      <Stat>
        <StatLabel color="gray.400">{label}</StatLabel>
        <StatNumber fontSize="2xl" fontWeight="bold">
          {value}
        </StatNumber>
        {change && (
          <StatHelpText>
            <StatArrow type={type || 'increase'} />
            {change}%
          </StatHelpText>
        )}
      </Stat>
    </Box>
  );
};

export default StatCard;