"use client";
import React, { useState } from "react";
import { Button, ButtonProps, Box, Flex, Spinner } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "bordered" | "borderless" | "progress";
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variantType = "primary",
  isLoading = false,
  isDisabled = false,
  icon,
  size = "lg",
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);

  // define variant styles
  const variantStyles = {
    primary: {
      bg: "#198E79",
      color: "#EEFAF7",
      _hover: { bg: "#198E80" },
      _active: { bg: "#d3d3d3" },
    },
    secondary: {
      bg: "gray.200",
      color: "black",
      _hover: { bg: "gray.300" },
      _active: { bg: "gray.400" },
    },
    bordered: {
      bg: "transparent",
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
      _hover: { bg: "blue.50" },
      _active: { bg: "blue.100" },
    },
    borderless: {
      bg: "transparent",
      color: "green.500",
      _hover: { bg: "green.50" },
      _active: { bg: "green.100" },
    },
    progress: {
      bg: "yellow.300",
      color: "black",
      _hover: { bg: "yellow.400" },
      _active: { bg: "yellow.500" },
    },
  };

  // Render icon and text when not loading
  const renderIconAndText = () => {
    if (isLoading) {
      return <Spinner size="sm" />;
    }

    return (
      <Flex alignItems="center">
        {icon && <Box mr={2}>{icon}</Box>}
        {children}
      </Flex>
    );
  };

  // Handle click event for progress variant
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (variantType === "progress") {
      event.preventDefault();
      setIsClicked(true);

      setTimeout(() => {
        setIsClicked(false);
        props.onClick?.(event);
      }, 3000);
    } else {
      props.onClick?.(event);
    }
  };

  return (
    <Button
      display="flex"
      borderRadius={6}
      justifyContent="center"
      alignItems="center"
      isLoading={isLoading}
      isDisabled={isDisabled || isLoading}
      size={size}
      width="full"
      onClick={handleClick}
      {...variantStyles[variantType]} // apply styles based on variant type
      {...props}
    >
      {renderIconAndText()}
      {isClicked && variantType === "progress" && (
        <Box position="absolute" top="0" left="0" height="100%" bg="gray.200" />
      )}
    </Button>
  );
};

export default CustomButton;
