import { FiCompass, FiHome, FiMusic } from "react-icons/fi";
import { LinkItemProps } from "../MainLayout";
import { WiTime10 } from "react-icons/wi";
import { IoIosAlbums } from "react-icons/io";

export const MainLinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, url: "/" },
  { name: "Explore", icon: FiCompass, url: "/explore" },
];

export const LibraryLinkItems: Array<LinkItemProps> = [
  { name: "Newly Added", icon: WiTime10, url: "/library/newly-added" },
  { name: "Albums", icon: IoIosAlbums, url: "/library/albums" },
  { name: "Songs", icon: FiMusic, url: "/library/songs" },
];
