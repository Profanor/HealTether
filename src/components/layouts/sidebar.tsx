'use client';
import { Box, Flex, Text, Link, VStack, Image } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { LinkItems, LinkItemProps } from "./routes";
import CustomButton from "../ui/custombutton";

// dynamically import the logo image
const logo = '/assets/icons/logo.svg';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      w={{ base: "full", md: "250px" }}
      h="100vh"
      bg="#ffffff"
      borderRight="1px solid #D9D9D9"
    >
      {/* sidebar logo */}
      <Flex direction="column" align="center" mb="8">
        <Image 
          src={logo} 
          alt="HealTether Logo" 
          h="auto"
          boxSize="auto" 
          maxW="250px"
          objectFit="contain"
        />

        {/* schedule button */}
        <CustomButton 
          variantType="primary"
          maxWidth={'170px'}
          mt={3}
          width={'full'}
          fontSize={'15px'}
        >
          Schedule Appointment
        </CustomButton>
      </Flex>

      {/* sidebar links */}
      <VStack align="start" gap={6} w="full">
        {LinkItems.map((link: LinkItemProps) => {
          const isActive = pathname === link.href || link.linkRefs?.includes(pathname);
          return (
            <Link
              key={link.name}
              href={link.href}
              _hover={{ textDecoration: "none" }}
              w="full"
            >
              <Flex
                align="center"
                position="relative"
                width="full"
                px="4"
                py="2"
                bg={isActive ? "gray.100" : "transparent"}
                _hover={{ bg: "gray.200" }}
              >
                {/* active indicator */}
                {isActive && (
                  <Box
                    position="absolute"
                    top="0"
                    bottom="0"
                    right="0"
                    width="2px"
                    bg="black"
                    zIndex={1}
                  />
                )}
                {/* icon */}
                <Image
                  src={isActive && link.activeIcon ? link.activeIcon : link.icon}
                  boxSize="20px"
                  mr="4"
                  alt={link.name}
                />
                {/* link name */}
                <Text 
                  fontWeight={isActive ? "bold" : "medium"}
                  fontSize="15px"
                  color="#0F0B28"
                >
                  {link.name}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Sidebar;