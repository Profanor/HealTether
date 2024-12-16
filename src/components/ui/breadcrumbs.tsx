import { Text } from "@chakra-ui/react";

interface BreadcrumbsProps {
  path: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path }) => {
  return (
    <Text cursor={'pointer'} fontSize="16px" fontWeight="400" color="gray.600">
      {path}
    </Text>
  );
};

export default Breadcrumbs;
