import { extendTheme } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: "var(--main-color)",
    primary: "var(--primary-color)",
    lightBg: "var(--light-bg)",
    bgColor: "var(--bg-color)",
  },
});

export const ChakraWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};
