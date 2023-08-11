import GlobalState from "./Global/GlobalState";
import Router from "./Router/Router";
import { ChakraProvider } from "@chakra-ui/react";
import BasicUsage from "./Components/Modal/modal";

function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <BasicUsage />
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
