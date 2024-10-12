import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </ChakraProvider>
    </>
  );
}

export default App;
