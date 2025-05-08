import {
  addEmergencyPharmacy,
  fecthEmergencyPharmacies,
  type EmergencyPharmacy,
} from "@/services/google_services";
import {
  Button,
  HStack,
  IconButton,
  List,
  Table,
  TableColumnHeader,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdEditNote, MdDeleteSweep } from "react-icons/md";

const MainGarde = () => {
  const [emergencyPharmacies, setEmergencyPharmacies] = useState<
    EmergencyPharmacy[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fecthEmergencyPharmacies();
      setEmergencyPharmacies(result);
    };
    fetchData();
  }, []);

  const handleAddPharmacy = async () => {
    await addEmergencyPharmacy(); // Call the function to add data
  };

  return (
    <VStack align={"start"} padding={10} gap={6}>
      <HStack justifyContent={"space-between"} width={"100%"}>
        <Text textStyle={"3xl"} fontWeight={"bold"}>
          Pharmacies de Garde
        </Text>
        <Button>Ajouter une pharmacie</Button>
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
                    onClick={() => {
                      //   setEditingPharmacy(pharmacy);
                      //   openModal();
                    }}
                  >
                    <MdEditNote />
                  </IconButton>

                  <IconButton
                    colorPalette={"red"}
                    variant="solid"
                    // onClick={() => {
                    //   handleDelete(pharmacy.placeId);
                    // }}
                  >
                    <MdDeleteSweep />{" "}
                  </IconButton>
                </HStack>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </VStack>
  );
};

export default MainGarde;
