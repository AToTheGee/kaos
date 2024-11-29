import { Box, VStack, Icon, Tooltip, Divider } from '@chakra-ui/react';
import { 
  LayoutDashboard, 
  Database, 
  Settings as SettingsIcon, 
  Share2, 
  Bot,
  Terminal
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Share2, label: 'Workflows', path: '/workflows' },
    { icon: Bot, label: 'AI', path: '/ai' },
    { icon: Database, label: 'Database', path: '/database' },
    { icon: Terminal, label: 'Console', path: '/console' },
    { icon: SettingsIcon, label: 'Settings', path: '/settings' },
  ];

  return (
    <Box
      as="nav"
      h="100vh"
      w="16"
      bg="gray.800"
      p={4}
      position="fixed"
      left={0}
      top={0}
    >
      <VStack spacing={6} align="center">
        <Box p={2} cursor="pointer" onClick={() => navigate('/')}>
          <Icon as={LayoutDashboard} boxSize={6} color="blue.400" />
        </Box>
        <Divider />
        <VStack spacing={4}>
          {menuItems.map((item) => (
            <Tooltip key={item.label} label={item.label} placement="right">
              <Box
                p={2}
                borderRadius="lg"
                bg={location.pathname === item.path ? 'gray.700' : 'transparent'}
                color={location.pathname === item.path ? 'blue.400' : 'current'}
                _hover={{ bg: 'gray.700', color: 'blue.400' }}
                cursor="pointer"
                transition="all 0.2s"
                onClick={() => navigate(item.path)}
              >
                <Icon as={item.icon} boxSize={5} />
              </Box>
            </Tooltip>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;