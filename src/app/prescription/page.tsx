'use client';
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/components/layouts/sidebar";
import Navbar from "@/components/layouts/mobilenav";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import RefreshButton from "@/components/ui/refreshbutton";

const PrescriptionSettings: React.FC = () => {
    const handleRefresh = () => {
    console.log("Refreshing...");
  };

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
            borderBottom="1px solid #F5F4FB"
            pb={4}
          >
            {/* breadcrumbs */}
            <Breadcrumbs path="&lt; &gt; Home &gt; User Profile" />

            {/* refresh button */}
            <Flex align="center">
                <RefreshButton onClick={handleRefresh} />
            </Flex>
          </Flex>

          {/* main content */}
          <Box>

          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PrescriptionSettings;
