import {
  addEmergencyPharmacy,
  displayPharmacies,
  type EmergencyPharmacy,
} from "@/services/google_services";
import { useModal } from "@/services/services";
import {
  Button,
  HStack,
  IconButton,
  Table,
  TableColumnHeader,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import ModalEmergency from "./ModalEmergency";

const MainGarde = () => {
  const [emergencyPharmacies, setEmergencyPharmacies] = useState<
    EmergencyPharmacy[]
  >([]);

  const [newEmergencyPharmacy, setNewEmergencyPharmacy] =
    useState<EmergencyPharmacy | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await displayPharmacies();

      setEmergencyPharmacies(result);
    };
    fetchData();
  }, []);

  const handleAddPharmacy = () => {
    if (newEmergencyPharmacy) {
      setEmergencyPharmacies((prev) => [...prev, newEmergencyPharmacy]);
      //clear the modal input
      setNewEmergencyPharmacy(null);

      addEmergencyPharmacy(newEmergencyPharmacy);

      //close the modal
      closeModal();
    }
  };

  const { openModal, closeModal, isModalOpen } = useModal();

  function handleDelete(placeId: any) {
    //get the new list of pharmacies after filtering
    const updatedEmergencyList = emergencyPharmacies.filter(
      (pharmacy) => pharmacy.id !== placeId
    );
    setEmergencyPharmacies(updatedEmergencyList);
  }

  return (
    <VStack align={"start"} padding={10} gap={6}>
      <HStack justifyContent={"space-between"} width={"100%"}>
        <Text textStyle={"3xl"} fontWeight={"bold"}>
          Pharmacies de Garde
        </Text>
        <Button
          onClick={() => {
            setNewEmergencyPharmacy({ name: "", id: "" });
            openModal();
          }}
        >
          Ajouter une pharmacie
        </Button>
      </HStack>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <TableColumnHeader>Name</TableColumnHeader>
            <TableColumnHeader>PlaceId</TableColumnHeader>
            <TableColumnHeader textAlign={"end"} paddingEnd={20}>
              Action
            </TableColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {emergencyPharmacies.map((pharmacy) => (
            <Table.Row key={pharmacy.id}>
              <Table.Cell>{pharmacy.name}</Table.Cell>
              <Table.Cell>{pharmacy.id}</Table.Cell>
              <Table.Cell alignContent={"end"} paddingEnd={10}>
                <HStack gap={3} justifyContent={"end"}>
                  <IconButton
                    colorPalette={"red"}
                    variant="solid"
                    onClick={() => {
                      handleDelete(pharmacy.id);
                    }}
                  >
                    <MdDeleteSweep />{" "}
                  </IconButton>
                </HStack>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      {isModalOpen && (
        <ModalEmergency
          emergencyPharmacy={newEmergencyPharmacy}
          setEmergencyPharmacy={setNewEmergencyPharmacy}
          onSave={() => handleAddPharmacy()}
          OncloseModal={() => closeModal()}
        />
      )}
    </VStack>
  );
};

export default MainGarde;
