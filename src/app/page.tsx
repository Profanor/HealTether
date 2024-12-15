'use client';
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/components/layouts/sidebar";
import Navbar from "@/components/layouts/mobilenav";

const DashboardLayout: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      {/* Navbar */}
      <Navbar />

      <Flex flex="1" overflow="hidden">
        {/* Sidebar */}
        <Box
          w={{ base: "full", md: "250px" }}
          h="full"
          bg="#ffffff"
          position="fixed"
          top="0"
          left="0"
          borderRight="1px solid #D9D9D9"
          zIndex={2}
        >
          <Sidebar />
        </Box>

        {/* Main content area */}
        <Box
          as="main"
          color={'black'}
          ml={{ base: 0, md: "250px" }}
          flex="1"
          p={6}
          bg="#ffffff"
          overflowY="auto"
          zIndex={1}
        >
          <Box>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
