import {
  VStack,
  Text,
  Table,
  TableColumnHeader,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdDeleteSweep, MdEditNote } from "react-icons/md";
import Modal from "./Modal";
import { useModal, type Pharmacy } from "../services/services";
import { fetchPharmacies, updatePharmacy } from "@/services/google_services";

const Main = () => {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);

  //Fecthing the documents
  useEffect(() => {
    const getPharmacies = async () => {
      const data = await fetchPharmacies();
      setPharmacies(data);
    };
    getPharmacies();
  }, []);

  const [editingPharmacy, setEditingPharmacy] = useState<Pharmacy | null>(null);

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    if (editingPharmacy) {
      setPharmacies((prev) =>
        prev.map((pharmacy) =>
          pharmacy.placeId === editingPharmacy?.placeId
            ? editingPharmacy
            : pharmacy
        )
      );
      updatePharmacy(editingPharmacy);
      setEditingPharmacy(null);
      closeModal();
    }
  };

  const handleDelete = (placeId: string) => {
    const updatedPharmacies = pharmacies.filter(
      (pharmacy) => pharmacy.placeId !== placeId
    );
    return setPharmacies(updatedPharmacies);
  };
  return (
    <VStack align={"start"} padding={10} gap={6}>
      <Text textStyle={"3xl"} fontWeight={"bold"}>
        Pharmacies in Database
      </Text>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <TableColumnHeader>Name</TableColumnHeader>
            <TableColumnHeader>Phone</TableColumnHeader>
            <TableColumnHeader>Location</TableColumnHeader>
            <TableColumnHeader>PlaceId</TableColumnHeader>
            <TableColumnHeader textAlign={"end"} paddingEnd={20}>
              Action
            </TableColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {pharmacies.map((pharmacy) => (
            <Table.Row key={pharmacy.placeId}>
              <Table.Cell>{pharmacy.name}</Table.Cell>
              <Table.Cell>{pharmacy.phone}</Table.Cell>
              <Table.Cell>
                {pharmacy.location.latitude}, {pharmacy.location.longitude}
              </Table.Cell>
              <Table.Cell>{pharmacy.placeId}</Table.Cell>
              <Table.Cell alignContent={"end"} paddingEnd={10}>
                <HStack gap={3} justifyContent={"end"}>
                  <IconButton
                    onClick={() => {
                      setEditingPharmacy(pharmacy);
                      openModal();
                    }}
                  >
                    <MdEditNote />
                  </IconButton>

                  <IconButton
                    colorPalette={"red"}
                    variant="solid"
                    onClick={() => {
                      handleDelete(pharmacy.placeId);
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
        <Modal
          edditingPharmacy={editingPharmacy}
          setEdditingPharmacy={setEditingPharmacy}
          onSave={() => {
            handleSave();
          }}
          OncloseModal={() => {
            closeModal();
          }}
        />
      )}
    </VStack>
  );
};

export default Main;
