import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Sidebar from './components/Sidebar';
import MainHeader from './components/MainHeader';
import Dashboard from './pages/Dashboard';
import Workflows from './pages/Workflows';
import AI from './pages/AI';
import Database from './pages/Database';
import Console from './pages/Console';
import Settings from './pages/Settings';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" bg="gray.900">
          <Sidebar />
          <MainHeader />
          <Box ml="16" pt="16" p={8}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workflows" element={<Workflows />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/database" element={<Database />} />
              <Route path="/console" element={<Console />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;