import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Aside from "./components/Aside";

function App() {
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
      <GridItem area="main" bg="gold">
        Main Area
      </GridItem>
    </Grid>
  );
}

export default App;
