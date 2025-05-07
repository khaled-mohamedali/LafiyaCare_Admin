import { VStack, Text, Button } from "@chakra-ui/react";

const Aside = () => {
  return (
    <VStack
      align="stretch"
      bg="gray.800"
      color="white"
      height="100%"
      p={4}
      gap={6} // Add spacing between elements
    >
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        LafiyaCare
      </Text>
      <Button colorPalette="blue" variant="solid">
        Dashboard
      </Button>
      <Button colorPalette="white" variant="solid">
        Logout
      </Button>
    </VStack>
  );
};

export default Aside;
