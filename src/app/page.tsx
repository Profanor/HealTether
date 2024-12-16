'use client';
import { Box, Flex, Text, IconButton, Image } from "@chakra-ui/react";
import Sidebar from "@/components/layouts/sidebar";
import Navbar from "@/components/layouts/mobilenav";
import UserProfileSettings from "@/components/ui/profilecard";

const refresh = "/assets/icons/refresh.svg";

const DashboardLayout: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      {/* navbar */}
      <Navbar />

      <Flex flex="1" overflow="hidden">
        {/* sidebar */}
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

        {/* main content area */}
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
            {/* breadcrumbs */}
            <Text fontSize="16px" fontWeight="400" color="gray.600">
              &lt; &gt; Home &gt; User Profile
            </Text>

            {/* refresh button */}
            <Flex align="center">
              <IconButton 
                aria-label="Refresh"
                variant="ghost"
                color="gray.600"
                size="sm"
              >
                <Image src= {refresh} alt={"refresh icon"} />
              </IconButton>
              <Text fontSize="sm" fontWeight="600" color="#0F0B28">
                Refresh
              </Text>
            </Flex>
          </Flex>

          {/* main content */}
          <Box>
            <UserProfileSettings />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
