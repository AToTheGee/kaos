import { Box, SimpleGrid, Container } from '@chakra-ui/react';
import { Activity, Database, Bot, Terminal } from 'lucide-react';
import StatCard from '../components/StatCard';
import ConsoleCard from '../components/ConsoleCard';
import RecentActivity from '../components/RecentActivity';

const Dashboard = () => {
  const stats = [
    { icon: Activity, label: 'Active Workflows', value: '12', change: 2 },
    { icon: Database, label: 'Database Size', value: '1.2 GB', change: 5 },
    { icon: Bot, label: 'AI Tasks', value: '156', change: 8 },
    { icon: Terminal, label: 'Commands Run', value: '2,847', change: 12 },
  ];

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={6}>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <ConsoleCard />
        <RecentActivity />
      </SimpleGrid>
    </Container>
  );
}

export default Dashboard;