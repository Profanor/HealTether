'use client';
import { 
  Box, 
  Flex, 
  Heading, 
  Image, 
  Text, 
  Separator, 
  Input 
} from "@chakra-ui/react";
import Sidebar from "@/components/layouts/sidebar";
import Navbar from "@/components/layouts/mobilenav";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import RefreshButton from "@/components/ui/refreshbutton";

const template = "/assets/images/file.png";
const camera = "/assets/images/camera.svg";

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

        {/* main content */}
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
          {/* breadcrumbs and refresh button */}
          <Flex
            justify="space-between"
            align="center"
            mb={6}
            borderBottom="1px solid #F5F4FB"
            pb={4}
          >
            <Breadcrumbs path="&lt; &gt; Home &gt; User Profile" />
            <RefreshButton onClick={handleRefresh} />
          </Flex>

          {/* main layout */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* full template */}
            <Box
              flex="1"
              bg="gray.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={4}
            >
              <Image
                src={template}
                alt="Prescription Template"
                maxW="100%"
                maxH="100%"
                objectFit="contain"
              />
            </Box>

            {/* form */}
            <Box
              flex="1"
              bg="white"
              p={6}
              minH="500px"
            >
              <Heading size="md" mb={4}>
                SETTINGS
              </Heading>
              <Separator borderColor="2px solid black"/>

              <Text fontWeight={600}>Prescription Contents</Text>
              <Text color={'#777777'}>Fill in the Clinic details on the prescription</Text>

              <Text color={'#777777'} fontWeight={600} mt={4}>Header Info</Text>

              <Flex justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'} mt={8}>
                <Text>Add Clinic logo</Text>
                <Box 
                  bg={'#F1E7F9'}
                  w="100px" 
                  h="100px" 
                  borderRadius="50%" 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor={'pointer'}
                  >
                    <Image src={camera} alt="camera icon" cursor={'pointer'} />
                </Box>
              </Flex>

              <Box mt={8}>
                <Box mb={4}>
                  <Text as="label" color="#868686" fontWeight={600}>Doctor&apos;s Name</Text>
                  <Input bg={'#FAFAFA'} w="full" p={2} border="1px solid #D9D9D9"/>
                </Box>
                <Box mb={4}>
                  <Text as="label" color="#868686" fontWeight={600}>Doctor&apos;s Specialty</Text>
                  <Input bg={'#FAFAFA'}  w="full" p={2} border="1px solid #D9D9D9"/>
                </Box>
                <Box mb={4}>
                  <Text as="label" color="#868686" fontWeight={600}>Other information</Text>
                  <Input bg={'#FAFAFA'}  w="full" p={2} border="1px solid #D9D9D9"/>
                </Box>
                <Box mb={4}>
                  <Text color={'#777777'} fontWeight={700}>Footer info</Text>
                  <Text as="label" color="#868686" fontWeight={600}>Clinic Address</Text>
                  <Input bg={'#FAFAFA'}  w="full" p={2} border="1px solid #D9D9D9"/>
                </Box>
                <Box mb={4}>
                  <Text as="label" color="#868686" fontWeight={600}>Clinic contact</Text>
                  <Input bg={'#FAFAFA'}  w="full" p={2} border="1px solid #D9D9D9"/>
                </Box>
                <Text 
                  color={'#5351C7'} 
                  cursor={'pointer'} 
                  onClick={() => console.log('Add another contact clicked')}>
                    + Add another contact
                </Text>
                <Box mb={4}>
                  <Text as="label" color="#868686" fontWeight={600}>Clinic email</Text>
                  <Input bg={'#FAFAFA'}  w="full" p={2} border="1px solid #D9D9D9"/>
                </Box>
                <Text 
                  color={'#5351C7'} 
                  cursor={'pointer'} 
                  onClick={() => console.log('Add another email clicked')}>
                    + Add another email
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PrescriptionSettings;