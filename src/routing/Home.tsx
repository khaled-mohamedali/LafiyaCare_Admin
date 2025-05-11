import { Grid, GridItem } from "@chakra-ui/react";
import Aside from "@/components/Aside";
import Main from "@/components/Main";

function Home() {
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
        <Main />
      </GridItem>
    </Grid>
  );
}

export default Home;
