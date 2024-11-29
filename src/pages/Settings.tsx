import { Box, VStack, HStack, Text, Switch, Select, Input, Button, Divider, useColorMode } from '@chakra-ui/react';
import { Settings as SettingsIcon, Bell, Lock, User, Globe } from 'lucide-react';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box maxW="800px">
      <HStack mb={8}>
        <SettingsIcon size={24} />
        <Text fontSize="2xl" fontWeight="bold">Settings</Text>
      </HStack>

      <VStack spacing={8} align="stretch">
        <Box bg="gray.800" p={6} borderRadius="lg">
          <HStack mb={4}>
            <User size={20} />
            <Text fontSize="lg" fontWeight="bold">Profile Settings</Text>
          </HStack>
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Text>Display Name</Text>
              <Input maxW="300px" placeholder="John Doe" />
            </HStack>
            <HStack justify="space-between">
              <Text>Email</Text>
              <Input maxW="300px" placeholder="john@example.com" />
            </HStack>
            <HStack justify="space-between">
              <Text>Time Zone</Text>
              <Select maxW="300px" defaultValue="UTC">
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
              </Select>
            </HStack>
          </VStack>
        </Box>

        <Box bg="gray.800" p={6} borderRadius="lg">
          <HStack mb={4}>
            <Bell size={20} />
            <Text fontSize="lg" fontWeight="bold">Notifications</Text>
          </HStack>
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Text>Email Notifications</Text>
              <Switch defaultChecked />
            </HStack>
            <HStack justify="space-between">
              <Text>Push Notifications</Text>
              <Switch defaultChecked />
            </HStack>
            <HStack justify="space-between">
              <Text>Weekly Digest</Text>
              <Switch />
            </HStack>
          </VStack>
        </Box>

        <Box bg="gray.800" p={6} borderRadius="lg">
          <HStack mb={4}>
            <Globe size={20} />
            <Text fontSize="lg" fontWeight="bold">Appearance</Text>
          </HStack>
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Text>Dark Mode</Text>
              <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
              />
            </HStack>
            <HStack justify="space-between">
              <Text>Compact Mode</Text>
              <Switch />
            </HStack>
          </VStack>
        </Box>

        <Box bg="gray.800" p={6} borderRadius="lg">
          <HStack mb={4}>
            <Lock size={20} />
            <Text fontSize="lg" fontWeight="bold">Security</Text>
          </HStack>
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Text>Two-Factor Authentication</Text>
              <Switch />
            </HStack>
            <Button colorScheme="blue" size="sm" maxW="200px">
              Change Password
            </Button>
          </VStack>
        </Box>

        <HStack justify="flex-end" pt={4}>
          <Button variant="ghost" mr={3}>
            Cancel
          </Button>
          <Button colorScheme="blue">
            Save Changes
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Settings;