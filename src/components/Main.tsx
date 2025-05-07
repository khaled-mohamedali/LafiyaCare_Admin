import {
  VStack,
  Text,
  Table,
  TableColumnHeader,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdDeleteSweep, MdEditNote } from "react-icons/md";

const Main = () => {
  const [pharmacies, setPharmacies] = useState([
    {
      name: "Pharmacy A",
      phone: "555-5555",
      location: "Anywhere",
      placeId: "CH001gVNJFE4234U9FCN42U3FH",
    },
    {
      name: "Pharmacy B",
      phone: "555-5555",
      location: "8 km",
      placeId: "CH001gVNJFE4234U9FCN42U3FH",
    },
  ]);

  const [editingPharmacy, setEditingPharmacy] = useState(null);

  // Delete a pharmacy
  const handleDelete = (placeId: string) => {
    setPharmacies(
      pharmacies.filter((pharmacy) => pharmacy.placeId !== placeId)
    );
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
              <Table.Cell>{pharmacy.location}</Table.Cell>
              <Table.Cell>{pharmacy.placeId}</Table.Cell>
              <Table.Cell alignContent={"end"} paddingEnd={10}>
                <HStack gap={3} justifyContent={"end"}>
                  {" "}
                  <IconButton
                    onClick={() => {
                      console.log("Edit pharmacy", pharmacy);
                    }}
                  >
                    <MdEditNote />{" "}
                  </IconButton>
                  <IconButton colorPalette={"red"} variant="solid">
                    {" "}
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

export default Main;
