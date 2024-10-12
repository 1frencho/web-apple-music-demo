import { FiCompass, FiHome, FiMusic } from "react-icons/fi";
import { LinkItemProps } from "../MainLayout";
import { IoIosAlbums } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";

export const MainLinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, url: "/" },
  { name: "Explore", icon: FiCompass, url: "/explore" },
  { name: "Artists", icon: GiMicrophone, url: "/artists" },
];

export const LibraryLinkItems: Array<LinkItemProps> = [
  { name: "Albums", icon: IoIosAlbums, url: "/library/albums" },
  { name: "Songs", icon: FiMusic, url: "/library/songs" },
];
