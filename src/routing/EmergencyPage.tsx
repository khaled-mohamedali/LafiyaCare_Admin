import Aside from "@/components/Aside";
import MainGarde from "@/components/MainGarde";
import { Grid, GridItem } from "@chakra-ui/react";

function EmergencyPage() {
  return (
    <Grid
      templateAreas={`"aside main"`}
      templateColumns={"1fr 4fr"}
      height="100vh"
      width="100%"
    >
      <GridItem area="aside" height="100%">
        <Aside />
      </GridItem>
      <GridItem area="main" bg={"gray.300"}>
        <MainGarde />
      </GridItem>
    </Grid>
  );
}

export default EmergencyPage;
