import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import MyFooter from "./components/home/MyFooter";

function App() {
  return (
    <>
      <ChakraProvider>
        <div className="flex min-h-screen flex-col">
          {/* Main content layout */}
          <MainLayout>
            <Outlet />
          </MainLayout>
          <MyFooter />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
