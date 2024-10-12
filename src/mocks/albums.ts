export interface Album {
  title: string;
  image: string;
  artist: string;
  genre: string;
  country: string;
  username: string;
  slug: string;
}

export const albums: Album[] = [
  {
    title: "AWAKE - EP",
    slug: "awake-ep",
    image: "/assets/albums/awake.webp",
    username: "u_chae",
    artist: "U_Chae",
    genre: "K-Pop",
    country: "Korea",
  },
  {
    title: "Inner Dance - Single",
    slug: "inner-dance",
    image: "/assets/albums/inner_dance.webp",
    username: "triple_s",
    artist: "Triple S",
    genre: "K-Pop",
    country: "Korea",
  },
  {
    title: "Magic Hour - EP",
    slug: "magic-hour-ep",
    image: "/assets/albums/magic_hour.webp",
    username: "kep1er",
    artist: "Kep1er",
    genre: "K-Pop",
    country: "Korea",
  },
  {
    title: "LOVESTRUCK! - EP",
    slug: "lovestruck-ep",
    image: "/assets/albums/love_struck.webp",
    username: "kep1er",
    artist: "Kep1er",
    genre: "K-Pop",
    country: "Korea",
  },
];
