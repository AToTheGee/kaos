import { Box, Flex, HStack, Avatar, Text, Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode, Badge } from '@chakra-ui/react';
import { Bell, Sun, Moon, Settings, LogOut } from 'lucide-react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="gray.800" px={8} py={4} mb={8} borderRadius="lg" boxShadow="lg">
      <Flex justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">Welcome back, John</Text>
        
        <HStack spacing={4}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<Bell size={20} />}
              variant="ghost"
              position="relative"
            >
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                colorScheme="red"
                borderRadius="full"
              >
                3
              </Badge>
            </MenuButton>
            <MenuList>
              <MenuItem>New Message from Alex</MenuItem>
              <MenuItem>Project Update: Dashboard</MenuItem>
              <MenuItem>Meeting in 30 minutes</MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            onClick={toggleColorMode}
            variant="ghost"
          />

          <Menu>
            <MenuButton>
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                cursor="pointer"
              />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<Settings size={16} />}>Settings</MenuItem>
              <MenuItem icon={<LogOut size={16} />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;