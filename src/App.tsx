import { Outlet } from "react-router-dom";
import MyFooter from "./components/home/MyFooter";
import { lazy } from "react";
import { ChakraWrapper } from "./contexts/Chakra";
const MainLayout = lazy(() => import("./layout/MainLayout"));

function App() {
  return (
    <>
      <ChakraWrapper>
        <div className="flex min-h-screen flex-col">
          {/* Main content layout */}
          <MainLayout>
            <Outlet />
          </MainLayout>
          <MyFooter />
        </div>
      </ChakraWrapper>
    </>
  );
}

export default App;
