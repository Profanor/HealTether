import { Box, Image, Text } from "@chakra-ui/react";

const template = "/assets/images/file.png";

const PrescriptionTemplate: React.FC = () => {
  return (
    <Box
      flex="1"
      bg="gray.100"
      display="flex"
      flexDirection="column"
      alignItems="flex-start" 
      justifyContent="flex-start"
      p={4}
    >
      <Text fontSize={'15px'} color={'#A1A1A1'}>Preview of the prescription</Text>
      <Image
        src={template}
        alt="Prescription Template"
        maxW="100%"
        maxH="100%"
        mt={2}
        objectFit="contain"
      />
    </Box>
  );
};

export default PrescriptionTemplate;
