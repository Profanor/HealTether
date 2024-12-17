import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Avatar } from "@/components/ui/avatar";
import { ChevronDown } from 'lucide-react';
import SearchBar from "../ui/searchbar";

const user = '/assets/images/user2.svg';
const bell = '/assets/icons/notification.svg';

const Navbar: React.FC = () => {
  return (
    <Box
      as="nav"
      width="100%"
      bg="white"
      px={4}
      py={2}
      borderBottom="1px solid #F5F4FB"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={2}
        width="100%"
      >
        {/* search bar */}
        <Flex flex="1" justify="center">
          <Box width="100%" maxW="500px">
            <SearchBar />
          </Box>
        </Flex>
        
        {/* icons and profile */}
        <Flex alignItems="center" gap={4}>
          {/* notification icon */}
          <Image
            src={bell}
            cursor={'pointer'}
            alt="bell icon"
            h="auto"
            boxSize="25px"
            objectFit="contain"
          />

          {/* profile section */}
          <Flex alignItems="center" gap={2}>
            <Avatar
              size="sm"
              name="Kim Jones"
              src={user}
            />
            <Text fontWeight="medium" color={'black'}>Kim Jones</Text>
          </Flex>

          {/* language selector */}
          <MenuRoot>
            <MenuTrigger asChild>
              <Flex
                alignItems="center"
                fontWeight="medium"
                color={'black'}
                textDecoration="underline"
                cursor="pointer"
                gap={1}
              >
                EN
                <ChevronDown size={'12px'} />
              </Flex>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="EN">EN</MenuItem>
              <MenuItem value="FR">FR</MenuItem>
              <MenuItem value="ES">ES</MenuItem>
            </MenuContent>
          </MenuRoot>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
