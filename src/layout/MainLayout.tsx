import {
  IconButton,
  Box,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  FlexProps,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import { SidebarContent } from "./SidebarContent";
import { SiApplemusic } from "react-icons/si";
import { MainLinkItems } from "./config/LinkItems";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export interface LinkItemProps {
  name: string;
  url: string;
  icon: IconType;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      className="sticky top-0 z-10 bg-white"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <div className="md:hidden">
        <Link to="/">
          <SiApplemusic size={32} className="text-main" />
        </Link>
      </div>
      HOLA
    </Flex>
  );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpen) onToggle();
  }, [pathname]);

  return (
    <>
      <Box className="flex min-h-screen flex-col">
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          LinkItems={MainLinkItems}
          pathname={pathname}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent
              onClose={onClose}
              LinkItems={MainLinkItems}
              pathname={pathname}
            />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} className="flex-grow">
          {children}
        </Box>
        <div className="py-8" />
      </Box>
    </>
  );
};

export default MainLayout;
