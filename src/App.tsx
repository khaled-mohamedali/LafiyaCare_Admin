import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Aside from "./components/Aside";
// import Main from "./components/Main";
import MainGarde from "./components/MainGarde";

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
      <GridItem area="main" bg={"gray.300"}>
        <MainGarde />
      </GridItem>
    </Grid>
  );
}

export default App;
