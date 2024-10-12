import { Link } from "react-router-dom";

interface AlbumCardProps {
  image: string;
  href: string;
  title: string;
  artist: string;
  username: string;
}
export const AlbumCard = ({
  image,
  href,
  title,
  artist,
  username,
}: AlbumCardProps) => {
  return (
    <>
      <article className="inline-block">
        <Link to={href}>
          <div
            className="flex h-[200px] w-[200px] flex-col justify-end rounded-lg bg-cover bg-[center_70%] bg-no-repeat shadow-md"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <h4 className="myHover text-sm font-medium text-slate-600">
            {title}
          </h4>
        </Link>
        <Link to={`/artist/${username}`}>
          <p className="myHover text-sm text-slate-400">{artist}</p>
        </Link>
      </article>
    </>
  );
};
