import React from "react";
import {
  Box,
  Flex,
  Input,
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
import { InputGroup } from "@/components/ui/input-group"
import { ChevronDown } from 'lucide-react';
import { BiSearch } from "react-icons/bi";

const user = '/assets/images/user2.svg';
const bell = '/assets/icons/notification.svg';

const Navbar: React.FC = () => {
  return (
    <Box
      as="nav"
      width="100%"
      borderBottom="1px solid #F5F4FB"
      bg="white"
      px={4}
      py={2}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Box flex="1" ml={{ base: 0, md: "250px" }} maxW="calc(100% - 250px)">
            <InputGroup flex="1" startElement={<BiSearch color="black"/>}>
                <Input 
                    bg={'gray.100'}
                    color={'black'}
                    width={'full'}
                    maxWidth={'400px'}
                    placeholder="Quick search patient" />
            </InputGroup>
        </Box>

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
