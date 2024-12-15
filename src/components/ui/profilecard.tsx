import {
  Box,
  Flex,
  Text,
  Badge,
  Grid,
  Image,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button"
import { FiUploadCloud } from "react-icons/fi";

const doctor = "/assets/images/user.png";

const UserProfileSettings = () => {
  return (
    <Flex
      gap={8}
      mt={6}
      p={6}
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
      border="1px solid #E2E8F0"
    >
      {/* profile card */}
      <Box w={{ base: "100%", md: "300px" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          gap={4}
        >
          <Avatar boxSize="100px" name="Dr. Kim Jones" src={doctor} />
          <Flex
            direction="column"
            align={{ base: "center", md: "flex-start" }}
            gap={2}
          >
            <Badge background="yellow" color="black" borderRadius="full" px={2}>
              Super Admin
            </Badge>
            <Text fontWeight="bold" fontSize="lg">
              Dr. Kim Jones
            </Text>
            <Flex gap={2}>
              <Button flex={1} size="sm" colorPalette="green">
                Save
              </Button>
              <Button flex={1} size="sm" variant={'solid'}>
                Cancel
              </Button>
            </Flex>
          </Flex>
        </Flex>

        {/* Menu Links */}
        <Box mt={8}>
          {[
            "Manage clinics",
            "Clinic Details",
            "Payment Settings",
            "Prescription Settings",
          ].map((item, idx) => (
            <Box
              key={idx}
              p={4}
              borderRadius="md"
              _hover={{ bg: "gray.50", cursor: "pointer" }}
              bg={item === "Prescription Settings" ? "gray.200" : "transparent"}
              fontWeight="medium"
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Settings Section */}
      <Box flex="1">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          SETTINGS
        </Text>

        {/* Toggle Section */}
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Text fontWeight="bold">Ai Predictive Search</Text>
            <Text fontSize="sm" color="gray.600">
              The AI search allows you to give predictive analysis based on the
              patient’s vitals, examinations, lab and reports.
            </Text>
          </Box>
          <Switch colorScheme="purple" size="lg" checked />
        </Flex>

        {/* Prescription Layout */}
        <Box>
          <Text fontWeight="bold" mb={2}>
            Prescription layout
          </Text>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Choose from the templates available or add your own template.
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {/* Add Template */}
            <Flex
              direction="column"
              align="center"
              justify="center"
              p={4}
              border="1px dashed gray"
              borderRadius="md"
              cursor="pointer"
              _hover={{ bg: "gray.50" }}
            >
              <FiUploadCloud size={24} />
              <Text fontSize="sm" mt={2}>
                Add custom template
              </Text>
            </Flex>

            {/* Existing Templates */}
            <Box>
              <Image
                src="https://via.placeholder.com/100"
                alt="Template"
                boxSize={'130px'}
              />
            </Box>
          </Grid>

          {/* Footer Link */}
          <Box mt={4}>
            <Text
              fontSize="sm"
              color="blue.500"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Change contents in the prescriptions
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default UserProfileSettings;
