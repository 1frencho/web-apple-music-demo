import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiApplemusic } from "react-icons/si";
import { NavItem } from "./NavItem";
import { LinkItemProps } from "./MainLayout";
import { Link } from "react-router-dom";
import { isActive } from "../utils/isActive";
import { LibraryLinkItems } from "./config/LinkItems";
import { CiSearch } from "react-icons/ci";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  LinkItems: Array<LinkItemProps>;
  pathname: string;
}

export const SidebarContent = ({
  onClose,
  LinkItems,
  pathname,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      className="bg-lightBg"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {/* header */}
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
        <Link to="/">
          <Box className="flex items-center gap-2">
            <SiApplemusic size={32} className="text-main" />
            <h1 className="text-xl font-semibold">Music</h1>
          </Box>
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {/* Search */}
      <div className="mb-4 px-4">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiSearch className="text-main" />
          </InputLeftElement>
          <Input type="search" placeholder="LVLY Kep1er" />
        </InputGroup>
      </div>
      {/* links */}
      {LinkItems.map((link) => (
        <Link to={link.url} key={link.url}>
          <NavItem
            icon={link.icon}
            active={isActive(link.url, pathname)}
            className="mb-1"
          >
            {link.name}
          </NavItem>
        </Link>
      ))}
      {/* divider */}
      <div className="z-10 my-4 h-px w-full border-t border-gray-200"></div>
      {/* library links */}
      {LibraryLinkItems.map((link) => (
        <Link to={link.url} key={link.url}>
          <NavItem
            icon={link.icon}
            active={isActive(link.url, pathname)}
            className="mb-1"
          >
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};
