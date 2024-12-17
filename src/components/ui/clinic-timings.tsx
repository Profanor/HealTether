import { Box, Button, Flex, Grid, Text, Input } from "@chakra-ui/react";

const ClinicTimings: React.FC = () => {
  return (
    <Box mb={8}>
      <Text fontWeight="semibold" fontSize="lg" mb={4}>
        Clinic open hrs
      </Text>

      {/* time input */}
      <Box>
        <Text mb={2}>Start time</Text>
        <Flex gap={2}>
          <Input placeholder="00 hrs" w="70px" />
          <Input placeholder="00 min" w="70px" />
          <Button colorScheme="teal">am</Button>
          <Button colorScheme="gray">pm</Button>
        </Flex>
      </Box>

      <Box mt={4}>
        <Text mb={2}>End time</Text>
        <Flex gap={2}>
          <Input placeholder="00 hrs" w="70px" />
          <Input placeholder="00 min" w="70px" />
          <Button colorScheme="teal">am</Button>
          <Button colorScheme="gray">pm</Button>
        </Flex>
      </Box>

      {/* applicable days */}
      <Box mt={6}>
        <Text mb={2}>Applicable for days</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
            <Button key={day} size="sm" variant="outline">
              {day}
            </Button>
          ))}
        </Grid>
      </Box>

      {/* add other timings */}
      <Flex mt={4} justify="space-between" align="center">
        <Text color="#5351C7" fontWeight="semibold" cursor="pointer">
          Add other timings
        </Text>
        <Text color="gray.500" cursor="pointer">
          Clear
        </Text>
      </Flex>
    </Box>
  );
};

export default ClinicTimings;
