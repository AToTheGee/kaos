import { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  HStack,
  VStack,
  Text,
  Badge,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  IconButton,
} from '@chakra-ui/react';
import { Edit2, Trash2, Plus, Filter } from 'lucide-react';

const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    segment: 'Premium',
    status: 'Active',
    lastPurchase: '2024-02-15',
    changelog: [
      { date: '2024-02-15', action: 'Purchase', details: 'Premium plan subscription' },
      { date: '2024-02-01', action: 'Status Update', details: 'Changed from Trial to Active' },
      { date: '2024-01-15', action: 'Sign Up', details: 'Created account' },
    ],
  },
  // Add more customer data as needed
];

const CustomerSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [view, setView] = useState('table'); // 'table' or 'cards'

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    onOpen();
  };

  return (
    <Box bg="gray.800" p={6} borderRadius="lg">
      <HStack justify="space-between" mb={6}>
        <Text fontSize="xl" fontWeight="bold">Customers</Text>
        <HStack>
          <Button leftIcon={<Filter />} variant="ghost">
            Filter
          </Button>
          <Button leftIcon={<Plus />} colorScheme="blue">
            Add Customer
          </Button>
        </HStack>
      </HStack>

      <Tabs variant="soft-rounded" colorScheme="blue" mb={6}>
        <TabList>
          <Tab>All Customers</Tab>
          <Tab>Premium</Tab>
          <Tab>Basic</Tab>
          <Tab>Trial</Tab>
        </TabList>
      </Tabs>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Segment</Th>
            <Th>Status</Th>
            <Th>Last Purchase</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.name}</Td>
              <Td>{customer.email}</Td>
              <Td>
                <Badge colorScheme="purple">{customer.segment}</Badge>
              </Td>
              <Td>
                <Badge colorScheme="green">{customer.status}</Badge>
              </Td>
              <Td>{customer.lastPurchase}</Td>
              <Td>
                <HStack>
                  <IconButton
                    aria-label="Edit customer"
                    icon={<Edit2 size={16} />}
                    size="sm"
                    onClick={() => handleEdit(customer)}
                  />
                  <IconButton
                    aria-label="Delete customer"
                    icon={<Trash2 size={16} />}
                    size="sm"
                    colorScheme="red"
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Customer</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Select placeholder="Segment">
                <option value="premium">Premium</option>
                <option value="basic">Basic</option>
                <option value="trial">Trial</option>
              </Select>
              
              <Box w="100%">
                <Text fontWeight="bold" mb={2}>Change Log</Text>
                <VStack align="stretch" spacing={3}>
                  {selectedCustomer?.changelog.map((log, index) => (
                    <Box key={index} p={3} bg="gray.700" borderRadius="md">
                      <Text fontWeight="bold">{log.action}</Text>
                      <Text fontSize="sm" color="gray.400">{log.date}</Text>
                      <Text mt={1}>{log.details}</Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save Changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CustomerSection;