import { Flex, Text } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox"

const AutoFillSection: React.FC = () => {
  const checklistItems = [
    "Patient Id",
    "Patient Personal details - Name, contact",
    "Patient Vitals details",
    "Patient Past history details",
    "Symptoms and Diagnosis",
    "Lab Tests",
    "Drug Prescription",
  ];

  return (
    <Flex flexDirection="column" >
      <Text fontWeight="bold" fontSize="14px" mb={2}>
        Auto fill data in the Prescription
      </Text>
      {checklistItems.map((item, index) => (
        <Checkbox key={index} variant={'solid'} mb={2}>
          {item}
        </Checkbox>
      ))}
    </Flex>
  );
};

export default AutoFillSection;
