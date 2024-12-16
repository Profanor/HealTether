import { Flex, Image, Text } from "@chakra-ui/react";

interface RefreshButtonProps {
  onClick: () => void;
}

const refresh = "/assets/icons/refresh.svg";

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => {
  return (
    <Flex align="center" cursor="pointer" onClick={onClick}>
      <Image src={refresh} alt="refresh icon" />
      <Text fontSize="sm" fontWeight="600" color="#0F0B28">
        Refresh
      </Text>
    </Flex>
  );
};

export default RefreshButton;
