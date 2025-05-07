import type { Pharmacy } from "@/services/services";
import { Box, Text, VStack, Input, HStack, Button } from "@chakra-ui/react";

//Create a prop for the modal to close it
interface ModalProps {
  OncloseModal: () => void;
  onSave: () => void;
  edditingPharmacy: Pharmacy | null;
  setEdditingPharmacy: React.Dispatch<React.SetStateAction<Pharmacy | null>>;
}

const Modal = ({
  OncloseModal,
  onSave,
  edditingPharmacy,
  setEdditingPharmacy,
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
            value={edditingPharmacy?.name || ""}
            onChange={(e) => {
              setEdditingPharmacy((prev: Pharmacy | null) =>
                prev ? { ...prev, name: e.target.value } : prev
              );
            }}
          />
          <Input
            placeholder="Phone"
            value={edditingPharmacy?.phone || ""}
            onChange={(e) => {
              setEdditingPharmacy((prev: Pharmacy | null) =>
                prev ? { ...prev, phone: e.target.value } : prev
              );
            }}
          />
          <Input
            placeholder="Location"
            value={edditingPharmacy?.location || ""}
            onChange={(e) => {
              setEdditingPharmacy((prev: Pharmacy | null) =>
                prev ? { ...prev, location: e.target.value } : prev
              );
            }}
          />
          <Input
            placeholder="Place ID"
            value={edditingPharmacy?.placeId || ""}
            onChange={(e) => {
              setEdditingPharmacy((prev: Pharmacy | null) =>
                prev ? { ...prev, placeId: e.target.value } : prev
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

export default Modal;
