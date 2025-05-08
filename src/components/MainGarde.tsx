import { Button, HStack, Text, VStack } from "@chakra-ui/react";

const MainGarde = () => {
  return (
    <VStack align={"start"} padding={10} gap={6}>
      <HStack justifyContent={"space-between"} width={"100%"}>
        <Text textStyle={"3xl"} fontWeight={"bold"}>
          Pharmacies de Garde
        </Text>
        <Button>Ajouter une pharmacie</Button>
      </HStack>
    </VStack>
  );
};

export default MainGarde;
