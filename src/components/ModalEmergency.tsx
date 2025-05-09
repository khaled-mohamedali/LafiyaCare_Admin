import type { EmergencyPharmacy } from "@/services/google_services";
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";

//Create a prop for the modal to close it
interface ModalProps {
  emergencyPharmacy: EmergencyPharmacy | null;
  setEmergencyPharmacy: React.Dispatch<
    React.SetStateAction<EmergencyPharmacy | null>
  >;
  OncloseModal: () => void;
  onSave: () => void;
}

const ModalEmergency = ({
  OncloseModal,
  onSave,
  emergencyPharmacy,
  setEmergencyPharmacy,
}: ModalProps) => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="rgba(0, 0, 0, 0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="1000"
    >
      <Box
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        width="400px"
        maxWidth="90%"
      >
        <Text fontWeight="bold" mb={4}>
          Edit Pharmacy
        </Text>
        <VStack gap={4}>
          <Input
            placeholder="Name"
            value={emergencyPharmacy?.name || ""}
            onChange={(e) => {
              setEmergencyPharmacy((prev: EmergencyPharmacy | null) =>
                prev ? { ...prev, name: e.target.value } : prev
              );
            }}
          />
          <Input
            placeholder="Place Id"
            value={emergencyPharmacy?.id || ""}
            onChange={(e) => {
              setEmergencyPharmacy((prev: EmergencyPharmacy | null) =>
                prev ? { ...prev, id: e.target.value } : prev
              );
            }}
          />
        </VStack>
        <HStack gap={4} mt={6} justifyContent="flex-end">
          <Button colorScheme="blue" onClick={() => onSave()}>
            Save
          </Button>
          <Button onClick={() => OncloseModal()}>Cancel</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ModalEmergency;
