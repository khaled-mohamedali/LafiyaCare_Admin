import { Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Link to="/">Dashboard</Link>
      </Button>
      <Button colorPalette="blue" variant="solid">
        <Link to="/pharmaciesdegarde"> Gérer les Pharmacies de Garde</Link>
      </Button>
      <Button colorPalette="white" variant="solid">
        Se Déconnecter
      </Button>
    </VStack>
  );
};

export default Aside;
