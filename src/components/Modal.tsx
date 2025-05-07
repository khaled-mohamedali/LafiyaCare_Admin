import { Box, Text, VStack, Input, HStack, Button } from "@chakra-ui/react";

//Create a prop for the modal to close it
interface ModalProps {
  OncloseModal: () => void;
  onSave: () => void;
}

const Modal = ({ OncloseModal, onSave }: ModalProps) => {
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
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Location" />
          <Input placeholder="Place ID" />
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
