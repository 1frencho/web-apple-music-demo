import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ArtistCardProps {
  image: string;
  href: string;
  name: string;
  shortMessage?: string;
}

export const ArtistHomeCard = ({
  image,
  href,
  name,
  shortMessage,
}: ArtistCardProps) => {
  return (
    <>
      <article className="inline-block">
        <h4 className="mb-2 text-sm text-slate-400">{shortMessage}</h4>
        <Link to={href}>
          <div className="relative flex h-[250px] w-[300px] flex-col items-center justify-center gap-4 rounded-lg bg-slate-700 shadow-md transition-transform">
            <div className="absolute right-7 top-2 z-10 flex h-8 w-8 items-center justify-center text-white">
              <p className="flex items-center text-[18px] font-medium">
                <FaApple size={24} />
                Music
              </p>
            </div>
            <img
              src={image}
              alt={name}
              width={190}
              height={190}
              className="h-[190px] w-[190px] rounded-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-10 flex h-16 w-full items-center justify-center rounded-b-lg bg-slate-800 text-white">
              <p className="text-sm font-medium">{name}</p>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
};
