'use client';
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { FiRefreshCw } from "react-icons/fi";
import Sidebar from "@/components/layouts/sidebar";
import Navbar from "@/components/layouts/mobilenav";
import UserProfileSettings from "@/components/ui/profilecard";

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
          color="black"
          ml={{ base: 0, md: "250px" }}
          flex="1"
          p={6}
          bg="#ffffff"
          overflowY="auto"
          zIndex={1}
        >
          <Flex
            justify="space-between"
            align="center"
            mb={6}
            borderBottom="1px solid #D9D9D9"
            pb={4}
          >
            {/* Breadcrumbs */}
            <Text fontSize="16px" fontWeight="400" color="gray.600">
              &lt; &gt; Home &gt; User Profile
            </Text>

            {/* Refresh button */}
            <Flex align="center">
              <IconButton 
                aria-label="Refresh"
                variant="ghost"
                color="gray.600"
                size="sm"
              >
                <FiRefreshCw />
              </IconButton>
              <Text fontSize="sm" fontWeight="medium" color="gray.600">
                Refresh
              </Text>
            </Flex>
          </Flex>

          {/* Main content */}
          <Box>
            <UserProfileSettings />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
