import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { BiSearch } from "react-icons/bi";

const SearchBar: React.FC = () => {
  return (
    <Box
      flex="1"
      ml={{ base: 0, md: "150px" }}
    >
      <InputGroup
        startElement={
          <Box padding="0.5rem" display="flex" alignItems="center">
            <BiSearch color="black" />
          </Box>
        }
      >
        <Input
          bg="gray.100"
          border="none"
          color="black"
          width={{ base: "100%", md: "500px" }}
          placeholder="Quick search patient"
          _placeholder={{ color: "gray.500" }}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
