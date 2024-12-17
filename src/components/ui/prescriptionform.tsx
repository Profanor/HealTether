import { Box, Text, Input, Flex, Image, Heading, Separator } from "@chakra-ui/react";
import CustomButton from "./custombutton";
import ClinicTimings from "./clinic-timings";
import AutoFillSection from "./autofillcard";

const camera = "/assets/images/camera.svg";

const PrescriptionForm: React.FC = () => {
  return (
    <Box
        flex="1"
        bg="white"
        p={6}
        minH="500px"
        >
        <Heading size="md">
            SETTINGS
        </Heading>
        <Flex flexDirection={'column'}>
            <Separator borderColor="2px solid black"/>
            <Text fontWeight={600} mt={2}>Prescription Contents</Text>
            <Text color={'#777777'}>Fill in the Clinic details on the prescription</Text>
        </Flex>
        <Text color={'#777777'} fontWeight={600} mt={4}>Header Info</Text>

        <Flex justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'} mt={4}>
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

              <Box mt={4}>
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
                <ClinicTimings />
                <AutoFillSection />
                <Flex justifyContent={'center'} alignItems={'center'} mt={8}>
                <CustomButton variantType="primary" maxWidth={'100px'}>
                    Save
                </CustomButton>
                </Flex>
              </Box>
            </Box>
  );
};

export default PrescriptionForm;