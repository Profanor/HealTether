import {
  Box,
  Flex,
  Text,
  Badge,
  Grid,
  Image,
  Separator
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import CustomButton from "../ui/custombutton";

const doctor = "/assets/images/user.png";
const template = "/assets/images/template.svg";
const upload = "/assets/icons/upload.svg";

const UserProfileSettings = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/prescription');
    };
  return (
    <Flex
      gap={8}
      mt={6}
      p={6}
      bg="white"
      borderTop="1px solid #E2E8F0"
      borderLeft="1px solid #E2E8F0"
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
            <Badge background="#FADF49" color="black" borderRadius="8px" px={2} p={2}>
              Super Admin
            </Badge>
            <Text fontWeight="bold" fontSize="lg">
              Dr. Kim Jones
            </Text>
            <Flex gap={2} mb={2} mt={-2}>
              <CustomButton size="xs" variantType={'primary'} width={'50px'}>
                Save
              </CustomButton>
              <CustomButton size="xs" variantType={'secondary'} width={'60px'}>
                Cancel
              </CustomButton>
            </Flex>
          </Flex>
        </Flex>
        <Separator borderColor="gray.300" width={'300px'} mt={6}/>

        {/* menu links */}
        <Box mt={8}>
          {[
            "Manage clinics",
            "Clinic Details",
            "Payment Settings",
            "Prescription Settings",
          ].map((item, idx) => (
            <Box
              key={idx}
              p={3}
              mb={2}
              color={'#022D2B'}
              borderRadius="2px"
              _hover={{ bg: "gray.50", cursor: "pointer" }}
              bg={item === "Prescription Settings" ? "gray.200" : "#F5F5F5"}
              fontWeight="medium"
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      {/* settings section */}
      <Box flex="1">
        <Text 
            fontSize="16px" 
            fontWeight="600" 
            mb={4} 
            textDecoration="underline" 
            cursor={'pointer'}>
          SETTINGS
        </Text>

        {/* toggle section */}
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Flex justify={'space-between'} align={'center'}>
                <Text fontWeight="bold">Ai Predictive Search</Text>
                <Switch colorPalette="gray.300" size="sm" />
            </Flex>
            <Text fontSize="sm" color="gray.600" whiteSpace={'pre-line'} mt={2}>
              {`The Ai search allows you to give predictive analysis based on the
              patient’s vitals, examinations, lab and reports.`}
            </Text>
          </Box>
        </Flex>

        {/* prescription layout */}
        <Box>
          <Text fontWeight="bold">
            Prescription layout
          </Text>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Choose from the templates available or add your own template.
          </Text>

          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {/* add template */}
            <Flex
                bg={'#D9D9D9'}
                height="130px"         
                align="flex-start"
                justify="flex-start"
                direction="column"
                cursor="pointer"
                _hover={{ bg: "gray.50" }}
            >
                <Text 
                mt={4} 
                ml={3}
                color={'#777777'} 
                fontSize="sm"  
                whiteSpace="pre-line"
                >
                Add custom{`\n`}template
                </Text>
                <Box mt={2} ml={3}>
                <Image src= {upload} boxSize={3} alt="upload icon" />
                </Box>
            </Flex>

            {/* existing template */}
            <Box 
                bg={'#D9D9D9'} 
                height="130px"        
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
                <Image
                src={template}
                alt="Template"
                maxWidth="100%" 
                maxHeight="100%"
                objectFit="contain" 
                />
            </Box>
            </Grid>

          {/* footer link */}
          <Box mt={2}>
            <Text
              fontSize="sm"
              color="#1227E3"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={handleClick}
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
