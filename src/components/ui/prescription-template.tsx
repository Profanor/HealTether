import { Box, Image } from "@chakra-ui/react";

const template = "/assets/images/file.png";

const PrescriptionTemplate: React.FC = () => {
  return (
    <Box
      flex="1"
      bg="gray.100"
      display="flex"
      alignItems="flex-start" 
      justifyContent="center"
      p={4}
    >
      {/* <Text>Preview of the prescription</Text> */}
      <Image
        src={template}
        alt="Prescription Template"
        maxW="100%"
        maxH="100%"
        mt={6}
        objectFit="contain"
      />
    </Box>
  );
};

export default PrescriptionTemplate;
